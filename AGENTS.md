<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep 3D rendering isolated in the lazy-loaded CyberGlobeScene module, with capability/reduced-motion checks in CyberGlobe; this preserves SSR content and avoids WebGL costs on unsupported devices.
- Use semantic CSS tokens for scene colours, converting them to sRGB at the client boundary; this keeps Three.js and the website palette aligned.
- Uploaded footage and extracted photographic stills use Lovable Assets pointers centralized in data/media; this avoids binary duplication and preserves authentic media.
- Shared reveal motion belongs in SiteMotion and must respect reduced motion; this keeps presentation consistent without changing page functionality.
- Animate institute counts from live course and director data rather than hardcoded statistics; this prevents unsupported claims when programs change.
- Compose the homepage from focused learning-topic and journey modules, and assign each authentic institute photo to one homepage section; this preserves varied storytelling without duplicated imagery.
- Course discovery uses the existing verified course fields and filter utility, with certification pathways linked separately; this avoids inventing eligibility, fees or accreditation.
