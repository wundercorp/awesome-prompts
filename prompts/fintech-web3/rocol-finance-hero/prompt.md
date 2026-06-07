Please create a highly polished, responsive landing page hero section replicating a provided design. Use plain HTML, Tailwind CSS (via CDN script), and a custom CSS <style> block for animations and specific overrides. Do not use external CSS or JS files.

Here are the strict requirements:

1. General Setup & Theming

Font: Use Google Fonts 'Inter' (weights 400, 500, 600, 700). Set this globally on the <body>.

Color Palette (Tailwind Config):

Dark: #0b0f19 (use as body fallback background)

Gray: #a1a1aa

Light: #f4f4f5

Typography Antialiasing: Ensure antialiasing is active globally.

2. Background & Atmosphere

Background Video: Implement a fullscreen, muted, looping, autoplaying <video> element behind all content. Use this source URL: https://cdn.sceneai.art/Hero Section Video/b42aa08b-868a-4c92-8e5b-973c6be6c534.mp4. Ensure it uses object-fit: cover.

Gradient Overlay: Place a <div> directly over the video with a linear gradient (left to right) to mimic a dark, moody atmosphere. Use rgba(11, 15, 25, 0.9) fading to 0.4 in the center and back to 0.8 on the right.

Grid Lines: Create an absolute positioned overlay with 3 faint, vertical border lines (border-white/[0.04]). These lines must precisely define a 4-column layout on desktop and match the boundaries of the main content wrapper. Hide the inner lines on mobile.

3. Animations

Create a @keyframes fadeUp animation that smoothly transitions elements from opacity: 0 and transform: translateY(20px) to opacity: 1 and transform: translateY(0).

Create CSS classes for staggered delays: delay-1 (0.5s), delay-2 (1.0s), delay-3 (1.5s), delay-4 (2.0s), and delay-5 (2.5s). Apply these classes to elements so the page content loads sequentially from top to bottom over ~4 seconds.

4. Layout Structure (Strict Alignment)

Use a central container for the Nav, Main Content, and Footer.

The container must have a maximum width of max-w-6xl (1152px) and use mx-auto for centering.

Apply consistent horizontal padding (px-6 lg:px-8 xl:px-0) so content perfectly aligns with the background grid lines.

5. Navigation Bar (Animate: delay-1)

Left Side (Logo & Links):

Logo: Text "rocol" in white, 22px, font-weight 600. Add a small gray circle symbol (○) superscripted at the end (text-[10px], relative positioning).

Links: Next to the logo, include "Solutions", "About us", "Pricing". Hide these on mobile (hidden md:flex). Color them gray (text-gray-400), 14px, medium weight. Add a hover effect turning them white.

Right Side (Auth):

Login Link: Text "Login" in gray (text-gray-300), 14px, medium weight. Hide on very small screens (hidden sm:block). Hover effect to white.

CTA Button: Text "Create account", white background, black text, 14px, semibold, slightly rounded corners, padding px-5 py-2.5.

6. Main Content Area

Vertically center this section in the remaining viewport space. Constrain the text block to a max-w-[600px].

Headline (Animate: delay-2):

Text: "Supercharge your [break] finances with [break] rocol".

Size: Exactly 52px on desktop (md:text-[52px]), scaling down to 40px on mobile.

Styling: White text, font-medium, tight leading (leading-[1.1]), tight tracking.

The "3" must be a superscript (text-[30px] relative -top-5, gray color) attached to the end of "rocol" if maintaining the original styling, otherwise omit. Let's assume for this prompt we keep the superscript 3.

Subheadline (Animate: delay-3):

Text: "AI-driven app that streamlines your accounting process. Manage invoices, track expenses, and handle taxes all in one place."

Size: 16px. Color: Gray (text-gray-400). Max width: 420px. Relaxed line height (leading-[1.6]).

Primary Button (Animate: delay-4):

Text: "Get started" with a right-pointing arrow SVG icon.

Styling: White background, black text, 15px, font-semibold.

Layout: Flexbox to space text and icon. Width roughly 240px on desktop, full width on mobile.

Interaction: On hover, the background lightens slightly, and the arrow SVG translates slightly to the right (group-hover:translate-x-1).

7. Bottom Footer / Trust Section (Animate: delay-5)

Pin this to the bottom of the viewport using mt-auto and some bottom padding.

Use a grid layout (grid-cols-1 md:grid-cols-4).

Left Side (Text - spanning 2 columns):

Title: "Trusted by businesses of all sizes worldwide." (White, 15px, medium weight).

Subtitle: "Regardless of size, from small startups to large corporations." (Gray, 14px).

Right Side (Logos - spanning 2 columns):

Use an inner grid (grid-cols-2) for the logos to align perfectly with the background grid lines. Reduce overall opacity to 60%.

Include SVG logos and text for: Asana, Coinbase, Framer, and Slack. Make them white, roughly 19px text size, semibold.

Ensure the final result perfectly matches the visual hierarchy, exact typography sizes, and precise layout boundaries described above.
