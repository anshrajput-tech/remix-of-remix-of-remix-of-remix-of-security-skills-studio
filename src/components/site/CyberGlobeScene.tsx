import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, Line } from '@react-three/drei';
import { Group, Vector3 } from 'three';

type Palette = { cyan: string; blue: string; violet: string; surface: string };

function Globe({ palette, onReady }: { palette: Palette; onReady: () => void }) {
  const group = useRef<Group>(null);
  const ready = useRef(false);
  const nodes = useMemo(() => Array.from({ length: 36 }, (_, i) => {
    const y = 1 - (i / 35) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = i * 2.399963;
    return new Vector3(Math.cos(theta) * radius, y, Math.sin(theta) * radius).multiplyScalar(1.83);
  }), []);
  useFrame((state, delta) => {
    if (!ready.current) { ready.current = true; onReady(); }
    if (!group.current) return;
    group.current.rotation.y += Math.min(delta, .05) * .13;
    group.current.rotation.x += (state.pointer.y * .14 - group.current.rotation.x) * .035;
    group.current.position.x += (state.pointer.x * .16 - group.current.position.x) * .04;
  });
  return <group ref={group} rotation={[0, .3, -.15]}>
    <mesh><sphereGeometry args={[1.77, 48, 32]} /><meshStandardMaterial color={palette.surface} metalness={.8} roughness={.32} /></mesh>
    <mesh><sphereGeometry args={[1.8, 24, 16]} /><meshBasicMaterial color={palette.cyan} wireframe transparent opacity={.23} /></mesh>
    {nodes.map((node, i) => <group key={i}>
      <mesh position={node}><sphereGeometry args={[i % 5 === 0 ? .045 : .025, 8, 8]} /><meshBasicMaterial color={i % 3 === 0 ? palette.violet : palette.cyan} /></mesh>
      {i < nodes.length - 1 && <Line points={[node, nodes[i + 1] ?? node]} color={palette.cyan} transparent opacity={.22} lineWidth={1} />}
    </group>)}
    {[0, 1].map(i => <mesh key={i} rotation={[Math.PI / 2 + i * .6, i * .7, .3]}><torusGeometry args={[2.05 + i * .16, .008, 6, 100]} /><meshBasicMaterial color={i ? palette.violet : palette.cyan} transparent opacity={.6} /></mesh>)}
  </group>;
}

export default function CyberGlobeScene({ palette, onReady, active }: { palette: Palette; onReady: () => void; active: boolean }) {
  return <Canvas camera={{ position: [0, 0, 6.5], fov: 44 }} dpr={[1, 1.25]} frameloop={active ? 'always' : 'never'} gl={{ alpha: true, antialias: true }} aria-label="Interactive cybersecurity network globe">
    <ambientLight intensity={.65} />
    <directionalLight position={[3, 4, 3]} intensity={3} color={palette.cyan} />
    <Environment resolution={64}><Lightformer position={[0, 4, 3]} scale={[8, 8, 1]} intensity={2} /><Lightformer position={[-4, 0, 2]} scale={[5, 5, 1]} intensity={2} color={palette.violet} /></Environment>
    <Globe palette={palette} onReady={onReady} />
  </Canvas>;
}