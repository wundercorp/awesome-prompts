Create a highly polished, responsive Hero Section using a single HTML file. Use Tailwind CSS via CDN for styling, Google Fonts for typography, and vanilla JavaScript for interactivity. 

Follow these strict structural and styling requirements exactly:

1. Global Setup & Animations (CSS in <style>):
- Body: `bg-[#e5e7eb]`, `min-h-screen`, `flex items-center justify-center`, `p-4`.
- Fonts: Import 'Inter' (sans-serif) and 'Playfair Display' (serif, italic).
- Custom Animations: Create an `@keyframes fadeInUp` (opacity 0 to 1, transform translateY 30px to 0).
- Create a `.stagger-item` class applying the animation, and delay classes: `.delay-bg` (0.2s), `.delay-nav` (1.0s), `.delay-h1` (1.8s), `.delay-p` (2.6s), `.delay-btn` (3.4s) to make elements load step-by-step smoothly over ~4 seconds.

2. Main Container & Background Video:
- Create a main wrapper div with exactly these classes: `relative w-full max-w-[1400px] aspect-[4/3] md:aspect-[16/9] min-h-[600px] md:min-h-[800px] rounded-[2rem] overflow-hidden shadow-2xl bg-black`. Apply the `.delay-bg` class here.
- Inside, add an `absolute inset-0 w-full h-full` div containing a `<video>` tag (autoplay, loop, muted, playsinline, `w-full h-full object-cover opacity-90`).
- Video URL: https://cdn.sceneai.art/Hero%20Section%20Video/e988037c-bf57-4b3b-8ba9-b69167028de8.mp4
- Add a black overlay over the video: `absolute inset-0 bg-black/20`.

3. Navigation (Top positioned):
- Container: `absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start md:items-center z-30`. Apply the `.delay-nav` class.
- Logo (Left): Text reading "Ratw" with classes `text-white text-2xl font-bold tracking-[0.2em] uppercase`.
- Desktop Nav (Center/Right): `hidden md:flex items-center space-x-8`. Links (Home, Pricing, About, Insights, Contact) in white text, plus a white "Get template" button.
- Mobile Nav Toggle (Right): `relative md:hidden`. A 48x48px white button containing a hamburger SVG and close SVG.
- Mobile Dropdown Menu: Absolutely positioned below the toggle button (`top-16 right-0 w-64`). White background, rounded corners. Initially styled with `opacity-0 invisible scale-95 translate-y-[-10px]`.
- JavaScript: Add a click listener to the mobile toggle to swap out the hamburger/close icons and transition the dropdown menu to `opacity-100 visible scale-100 translate-y-0` for a smooth entry.

4. Hero Content (Bottom positioned):
- Container: `absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-24 text-center px-4 z-20`.
- Headline (H1): EXACTLY `text-[58px]` font size AND must be semi-bold (`font-semibold`). Text is "Plan better, <br class='hidden md:block'> start your day right". The word "right" must be wrapped in a span using the 'Playfair Display' italic font. Apply `.delay-h1`.
- Subheadline (P): text-white/90, 18px-20px. "A smarter planner for tasks<br>priorities and daily structure". Apply `.delay-p`.
- CTA Button: "Create your plan". Solid white background, rounded-full padding, hover scale effect. Apply `.delay-btn`.
