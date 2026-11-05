# eSecurityIN visual redesign

## Current design improvements
- Replace the pale, blob-based homepage opening, irregular photo crop and spinning logo with a sharper, branded composition.
- Reduce repeated lab and classroom photographs, repetitive card grids and excessive corner rounding.
- Extend the visual language consistently to navigation, courses, About, gallery, leadership and resource pages without removing content or changing enquiry delivery.

## Redesign section by section
1. **Shared design and navigation:** Apply the supplied eight-colour palette, professional typography, clearer spacing, accessible menu states and alternating dark, white, light-blue and lavender sections. Keep all existing destinations and controls.
2. **Homepage opening:** Give eSecurityIN clear prominence, retain both existing calls to action and course information, and introduce an interactive cybersecurity globe. Use authentic lab footage as an expansive photographic layer rather than another decorative image card. Keep text legible and the following section visible.
3. **Photography and footage:** Use distinct stills extracted from your four original videos for the lab, institute story, reception and team. Retain their proportions and add native video playback in appropriate institute/gallery views. Reserve classroom photographs for classroom content; do not create fake company photos or replace people with generated images.
4. **Homepage sections:** Preserve every existing section while varying layouts: editorial introduction, differentiated course cards, an immersive practical-learning band, a numbered learning pathway, gallery, workshops, journal and leadership. Add restrained perspective to selected items rather than repeating the globe.
5. **Other pages:** Carry the same hierarchy, surfaces and interaction states through course listings/details, About, institute, gallery and resources. Preserve search, filters, image previews, video controls, links and forms.
6. **Motion and 3D:** Add lightweight entrance/reveal transitions, subtle button and photo interactions, and pointer-driven globe depth. Pause rendering offscreen; respect reduced motion and offer a static fallback when WebGL or device capability is insufficient. Animate only counts supported by existing course data, never invented outcomes or placement statistics.

## Technical details
- Keep TanStack Start, the existing design-system controls and semantic CSS tokens.
- Isolate the React Three Fiber scene behind a client-only, lazy-loaded boundary; leave page content server-rendered.
- Store uploaded videos and extracted stills through Lovable Assets; keep no copied video binaries in the source tree.
- Do not change database structure, auth or enquiry processing for this presentation-only redesign.
- Keep page-specific titles, descriptions and social metadata accurate.

## Verification
- Run existing routing tests and check desktop, tablet and phone layouts for overflow and obscured controls.
- Exercise navigation, course search/reset, a course detail page, gallery previews and video playback.
- Confirm the 3D scene is visible, moves and responds to pointer input; check its static/reduced-motion fallback.
- Check existing enquiry form validation without submitting invented personal information.
- Real-device graphics smoothness cannot be measured in the sandbox; verify it in the preview on a phone and desktop before publishing.