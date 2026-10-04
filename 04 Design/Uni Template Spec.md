# ThemeREX "Uni" – Design Spec (inspiration only)
Observed at 1440x900 on uni.themerex.net. NOTE: Uni is an "Education & Online Courses" theme (Elementor + trx_addons), not a classic campus theme. Storefront URL serves the demo directly (no iframe). Only ONE homepage demo exists (the "Home" menu has no variants).

## 1. Pages
- Home: https://uni.themerex.net/
- Pages: /about-us/ /services/ /instructors/ /testimonials/ /pricing/ /faq/ /page-404/ /service-plus/ /ai-features/
- Courses: /courses/ (archive, grid w/ sort dropdown) ; single: /courses/intro-to-project-management/
- Blog: /blog-standard/ /blog-grid/ ; posts: /tips-for-thriving-in-virtual-classroom-environments/ (sidebar), /assessing-the-quality-of-online-courses-for-reliable-education/ (no sidebar)
- /contact/. No Events or Admissions or Shop in this demo (add our own).

## 2. Home, section by section (total height ~8550px)
1. Header: transparent, absolute over hero; logo left (yellow/orange blob mark + "Uni"), centred menu with chevrons (Home, Pages, Courses, Blog, Contact Us), orange "Get in Touch" button right. Header padding 25px 70px.
2. Hero (880px): full-bleed photo (smiling woman, warm orange sweater, blurred office bg) with dark-ish overlay. H1 white 84px/80px, weight 500, letter-spacing -1.7px, "Learn anytime, anywhere with experts", left. Orange "Get Started" button under. Right-top small grey-white paragraph (right-aligned col). Bottom-left: 3 overlapping circular avatars + big "23M+" counter + "Our customers". Bottom-right: white floating card (photo thumb + "Learn online and grow anytime" + round arrow icon button). Hand-drawn yellow scribble SVG overlapping hero bottom edge.
3. Intro (805px): small uppercase eyebrow, H1-size heading "Enhance skills through learning" (left) + two paragraphs (right col). Row of 4 icon features (orange line icons, h5 23px title + one-line text): Online courses / Empowering learners / Innovative courses / Tailored training.
4. About (898px): asymmetric two-image collage (small 402x317 + large 853x513 landscape), eyebrow "Empowering learners", "About us" heading, two text columns with top rule lines.
5. Partner logos (230px): 6 greyscale logos (190x80) in a row, auto-scrolling marquee (trx_addons_marquee). Hand-drawn yellow scribble on left edge.
6. Courses (beige #F1EEE3 band, ~1060px): eyebrow "START LEARNING NOW" left, H2 "Explore our popular online courses" (47px) right-aligned column. 3 white cards: 407x229 illustrated colourful thumbnails, 5-star outline row, h3-ish title, meta (clock hours, "By Mark Thompson"), "Start Learning" link. Orange "Get Started" CTA below.
7. Team (1319px): left sticky-ish column: eyebrow "Meet our team", "Our team" heading, text, orange flower sticker; right 2x2+ grid of tall portrait photos (~460x540, no radius) with name (bold) + role (small grey) below.
8. Giant marquee (275px): oversize orange uppercase text "JOIN THOUSANDS LEARNING ONLINE TODAY" scrolling horizontally, cut off at edges.
9. Testimonials (beige band 753px): left portrait photo (~full height card), right white card with large quote (h5 ~23px dark), author name + role at bottom, tiny dot pagination bottom-right; swiper, 5 slides.
10. Blog (~900px): eyebrow "Insights & updates", 4 post cards in a row (staggered vertical offset: cards 1&3 higher than 2&4), category eyebrow ("STUDENT SUPPORT"), 2-line title, date · comments in small grey.
11. Newsletter band: solid yellow #FFDB21, H2 "Subscribe for the latest updates!" left with orange blob sticker, right: single input (icon, off-white bg) with orange "Get Started" button inside the field + consent checkbox; decorative stickers.
12. Footer: dark navy #050517; logo + paragraph + 4 round social icon buttons (left); 3 link columns (Links, Product, Contact); thin divider; copyright + "Site by" row.
Floating: green chat bubble bottom-right with tooltip; scroll-to-top square dark button; orange vertical side tab (cart/account icons) on inner pages.

## 3. Visual system (getComputedStyle)
- Fonts: headings "Lexend Deca" 500; body/nav/inputs "DM Sans" 400. Body 16px/26px.
- H1 84px/0.95 lh, ls -2% ; H2 47px/1.13 ; H3 35px/1.11 ; H5 23px ; all weight 500, no uppercase. Eyebrows: small ~11-12px uppercase tracking.
- Colours: bg cream #FBF9F5; alt band beige #F1EEE3; text grey #8E8D87; headings dark navy #1F242E; primary/accent orange #FF5C2A (buttons, links, marquee); yellow #FFDB21 (newsletter, scribbles); footer #050517; hero text #FFFEFE.
- Buttons: bg #FF5C2A, text cream, Lexend Deca 15px/500, padding 15px 30px, radius 0 (square; inputs/submit inside forms 6px), no uppercase, 0.2-0.3s colour transition.
- Container: boxed ~1300px with 70px page side padding (full-width header/hero use 70px gutters). Section vertical rhythm: 150px bottom padding commonly (compact on mobile).
- Cards: radius 0, no shadow (flat). Course cards white on beige. Images: no rounding; course thumb ~16:9 (407x229), team portrait ~17:20 (460x540), blog thumb ~4:3 (285x202), avatars circular.
- Decoration: hand-drawn scribble/blob/flower stickers in yellow/orange as brand device.

## 4. Header / footer behaviour
Transparent absolute header on hero; becomes fixed/sticky with cream background + subtle bottom shadow after scroll (sc_layouts_row_fixed; placeholder keeps layout). Menu has dropdowns (Pages, Courses, Blog sub-menus; plain dropdown, not mega). No top bar. Mobile: hamburger (separate mobile header block). Footer as above (dark, 3 columns + brand column).

## 5. Animations (observed class hooks + visual)
- Scroll reveal: sections/images start at opacity ~0 and fade in (+ translate up) as they enter (ta_fadein / ta_fadeinup; animated, ~0.6-1s). Line-by-line text reveal on headings (animation_type_line).
- Counter: odometer rolling-digit counter "23M+" (digits slot-roll on load).
- Marquee: partner logos and giant orange text scroll continuously leftwards (CSS/JS marquee, linear, slow).
- Parallax: trx_addons parallax layers/blocks on decorative scribbles & some images (subtle vertical offset on scroll).
- Hover: images zoom (trx_hover_zoom: scale ~1.05-1.1, 0.3-0.5s); icon boxes float up (elementor "float"); links/buttons colour fade 0.3s.
- Sliders: testimonials swiper w/ dots; blog/team maybe swiper on mobile.
- Hero floating card: static with arrow button (hover likely rotates/colours).
- No video popup seen on home.

## 6. Inner templates
- Page title: centred big H1 (~47-60px Lexend) on cream background, NO banner image; breadcrumb minimal/omitted. Very airy.
- Courses archive: title "Courses", right-aligned sort dropdown ("Release Date (newest first)"), 3-col grid of cards (radius 0, white, thin border): thumb, bookmark icon top-right, stars, title, meta (students, duration), author avatar + "By Name in Category".
- Course single: breadcrumb-less; stars + H1 + category + Wishlist/Share; tabs "Course Info | Reviews"; left (~2/3): big hero image, About Course, "What will you learn?" checklist, Course Content accordion (sections with lessons), Student Ratings & Reviews. Right sticky sidebar card: orange "Start Learning" button, level, enrolled, duration, last updated, "A course by" instructor avatar+name, Material Includes, Requirements, Tags, Audience.
- Instructors/Teacher: grid of portrait cards (same as home team); blog posts have optional sidebar.
- Side floating orange vertical tab with icons (cart/account/etc.) on inner pages.

## 7. Takeaways to replicate (premium feel)
1. Warm cream (#FBF9F5) + beige bands instead of white; one confident orange accent plus yellow pop.
2. Oversized, tight-tracked Lexend-style headings (84px hero, -2% ls), medium weight, lots of whitespace (150px section gaps).
3. Full-bleed human hero photo with floating white info card + overlapping avatar social-proof + big counter.
4. Square-cornered, flat, shadowless cards/buttons – editorial look; no heavy radius/gradients.
5. Hand-drawn scribble/blob stickers overlapping section edges as brand signature.
6. Giant orange uppercase marquee band as a section divider.
7. Asymmetric image collages and staggered card offsets (blog row) rather than rigid grids.
8. Tiny uppercase eyebrow labels above every heading + left/right split heading layouts.
9. Restrained motion: fade-up reveals, odometer counter, marquees, subtle parallax, image zoom on hover.
10. Strong CTA band (yellow newsletter) before a dark navy footer; consistent single CTA label ("Get Started").
Adapt for IT academy: replace photos with devs/learners, add tech-stack logo marquee, course tracks, mentor cards, events/admissions pages (absent in Uni).
