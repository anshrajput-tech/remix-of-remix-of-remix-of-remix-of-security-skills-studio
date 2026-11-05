import { useState } from 'react';
import { Expand, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { galleryItems, instituteMedia, instituteClips } from '@/data/media';
export function MediaGallery({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState<number | null>(null);
  const list = galleryItems.filter(item => (!preview || [instituteMedia.hero, instituteMedia.story, instituteMedia.lounge].includes(item.src)) && (category === 'All' || item.category === category));
  const current = selected === null ? undefined : list[selected];
  return <>
    {!preview && <div className="mb-8 flex flex-wrap gap-2">{['All', ...new Set(galleryItems.map(item => item.category))].map(c => <Button key={c} variant={category === c ? 'default' : 'outline'} onClick={() => { setCategory(c); setSelected(null); }}>{c}</Button>)}</div>}
    <div className={preview ? 'gallery-grid gallery-preview' : 'gallery-grid'}>{list.map((item, i) => <figure key={item.src} className="gallery-figure"><Button variant="ghost" className="gallery-image-button" onClick={() => setSelected(i)} aria-label={`Preview ${item.title}`}><img src={item.src} alt={item.title} loading="lazy"/><span><Expand size={20}/></span></Button><figcaption><b>{item.title}</b><span>{item.category}</span></figcaption></figure>)}</div>
    {!preview && <div className="mt-16 grid items-center gap-10 md:grid-cols-2"><div><p className="eyebrow">Explore the institute</p><h2 className="mt-3 text-3xl font-bold">Take a look inside.</h2><p className="mt-4 text-muted-foreground">Visit our classrooms and learning spaces at the Janakpuri centre.</p></div><video controls preload="metadata" className="mx-auto max-h-[560px] max-w-full rounded-lg" src={instituteMedia.tour} aria-label="eSecurityIN institute tour" /></div>}
    {!preview && <div className="mt-16"><h2 className="text-2xl font-bold">Moments from our institute</h2><div className="mt-7 grid gap-7 sm:grid-cols-2">{instituteClips.map(clip => <figure key={clip.src}><video controls playsInline preload="none" poster={clip.poster} src={clip.src} className="aspect-video w-full rounded-md" aria-label={clip.title} /><figcaption className="mt-3 text-sm font-semibold">{clip.title}</figcaption></figure>)}</div></div>}
    <Dialog open={Boolean(current)} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-w-5xl"><DialogTitle>{current?.title}</DialogTitle>{current && <img src={current.src} alt={current.title} className="max-h-[70vh] w-full object-contain"/>}<div className="flex justify-between"><Button size="icon" variant="outline" aria-label="Previous image" onClick={() => setSelected(i => i === null ? 0 : (i - 1 + list.length) % list.length)}><ArrowLeft/></Button><Button size="icon" variant="outline" aria-label="Next image" onClick={() => setSelected(i => i === null ? 0 : (i + 1) % list.length)}><ArrowRight/></Button></div></DialogContent></Dialog>
  </>;
}
