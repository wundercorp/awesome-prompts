Act as an Expert Frontend Developer. Your task is to build a highly responsive, cinematic Hero Section in a single HTML file. You must use Tailwind CSS (via CDN) for styling and Vanilla JavaScript for custom animations.

Here are the strict requirements for the build:

1. GLOBAL SETUP & TECH STACK
- Use a single `index.html` file. Do not separate CSS or JS into other files.
- Load Tailwind CSS via CDN.
- Use the 'Inter' font from Google Fonts (weights: 300, 400, 500, 600, 700).
- The body should be `min-h-screen`, `text-white`, and have a black background.

2. BACKGROUND VIDEO & OVERLAY
- Create a fixed, fullscreen background layer (`z-index: -1`, `object-fit: cover`).
- Use this EXACT video URL for the background: 
  `https://cdn.sceneai.art/Hero%20Section%20Video/0519be39-d8d1-48a5-84ee-f8a1ec038cd6.mp4`
- Add an absolute overlay with `bg-black/30` over the video to ensure text readability.

3. HEADER & NAVIGATION (Absolute positioned at top, z-index: 10)
- Padding: `px-6 py-6 md:px-16 md:py-10`.
- Left Side (Logo): A small white abstract globe SVG icon inside a `w-8 h-8 bg-white/20 backdrop-blur-md rounded-full` container. Next to it, the text "Trav" (font-medium, size 16px, tracking-wide).
- Right Side (Desktop Nav): Hidden on mobile. Links: "Home, Our Story, FAQ, Policies". Font weight must be `medium`, size `14px`, text color `white/95`. Space between links should be `space-x-10`.
- Mobile Nav: A hamburger icon that triggers a full-screen, backdrop-blurred black overlay menu with the navigation links. 

4. MAIN HERO CONTENT (Centered flex container, max-w-4xl, h-[100dvh])
- Icon: A white SVG Map Pin icon with a drop shadow, placed above the main heading.
- Main Heading: "Begin Your Next<br class='hidden md:block'/>Big Adventure". 
  - Styling: Exactly `60px` on desktop (`md:text-[60px]`), smaller on mobile. `font-semibold`, negative tracking (`tracking-[-0.02em]`), `leading-[1.1]`.
- Subheading: "Discover hidden gems, plan unforgettable trips, and<br class='hidden md:block'/>explore the world — all in one seamless app."
  - Styling: `16px` or `17px`, `font-medium`, `text-white/95`, `leading-[1.6]`. Max width of `480px`.
- CTA Button: "Download Now". White background, black text, `rounded-full`, `font-medium`, `15px`. Add a custom CSS hover effect that creates a subtle white glow/box-shadow.

5. CUSTOM STEP-BY-STEP ANIMATIONS (Crucial Requirement)
- CSS Animations: Write custom `@keyframes` for a slight fade-and-slide-up effect (`transform: translateY(15px)` to `0`).
- JavaScript Word-by-Word Logic: Write a script that runs on `DOMContentLoaded`. It must target the Main Heading and Subheading.
- The script must split the text nodes by spaces into individual words, wrap EVERY single word in a `<span class="word-wrap">`, and apply an incrementally increasing CSS `animation-delay` to each span. 
- Ensure the JS preserves `<br>` tags so the specific line breaks are not destroyed.
- Animation Timeline: The Pin icon drops in first. The Heading animates word-by-word. Right as the heading finishes, the Subheading animates word-by-word. Finally, the Button fades in from the bottom.
