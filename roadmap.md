# Roadmap

## Remix setup

- [x] Cleared copied Drizzle migrations and rescaffolded an empty migration set for this project's database
  - `drizzle/migrations/` holds only `meta/_journal.json` with zero entries; no `.sql` files or snapshots anywhere in the repo.
  - Database side verified clean: the Drizzle journal table exists with 0 applied rows.
  - Note: `public.enquiries` exists in the database (carried over with the copied database) but no migration creates it, so a rebuild from migrations alone would not recreate it. Decide later whether to add a baseline migration.

## Remix setup

- [x] Cleared copied Drizzle migrations and rescaffolded an empty migration set for this project's database
  - `drizzle/migrations/` holds only `meta/_journal.json` with zero entries; no `.sql` files or snapshots anywhere in the repo.
  - Database side verified clean: the Drizzle journal table exists with 0 applied rows.
  - Note: `public.enquiries` exists in the database (carried over with the copied database) but no migration creates it, so a rebuild from migrations alone would not recreate it. Decide later whether to add a baseline migration.

## Website redesign

- [ ] Apply the DESIGN REFINEMENT V2 brief (uploaded doc): refined hero, richer colour system, varied category cards, "What will you actually do?" section, stronger practical-learning collage, connected learning-journey timeline, student life section, interactive elements, typography/spacing, course discovery, final quality check — preserving all existing pages, routes, course info and functionality.


- [ ] Refine the existing homepage to the V2 brief: overlapping hero photos, varied categories, practical activities, student life and course discovery.
- [ ] Make the learning journey a connected vertical timeline on mobile; verify homepage and preserved pages.

- [x] Make the eSecurityIN name readable on the white header, retaining the original logo symbol; verified on desktop and mobile.
- [x] Apply the new light-only student academy brief, removing the globe and distributing authentic photographs without homepage repeats.
- [x] Add learning topics, an interactive journey and a varied institute collage while preserving all existing pages and content.
- [x] Verify photo previews, course navigation and desktop/mobile presentation; all 17 existing tests passed and no browser errors were observed.

- [x] Apply the uploaded premium visual redesign and restrained 3D brief, retaining existing functionality.
- [x] Review the four uploaded videos and place usable original footage appropriately.

- [x] Map the original website and flag unavailable or inconsistent content (existing content audit and duration notices retained).
- [x] Redesign the homepage and shared navigation with authentic uploaded media.
- [x] Build searchable courses, complete details and separate certification, blog, workshop and resource pages (existing pages preserved).
- [x] Add a dedicated gallery with image previews and institute video.
- [x] Verify navigation, filters, mobile layout and enquiry validation; delivery logic was unchanged and no real enquiry was submitted in this presentation-only task.

## Checks before publishing
- Real-device graphics performance and actual enquiry receipt need a phone/desktop preview check and a genuine enquiry; neither was claimed as verified in the sandbox.
