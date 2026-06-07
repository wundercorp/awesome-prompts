Create a highly accurate, fully responsive React component for a Hero Section based on the following step-by-step requirements:

**1. General Layout & Theme:**
- The overall theme is dark mode with a primary background color of `#0a0f14`.
- Ensure the layout is fully responsive across mobile, tablet, and desktop views.
- Use Tailwind CSS for all styling and ensure content is constrained within a `max-w-7xl` container.

**2. Background Video & Blend Effects:**
- Implement a full-screen, auto-playing, looping, and muted background video that covers the entire hero section completely without leaving any empty gaps.
- Use this specific video URL: https://cdn.sceneai.art/Hero Section Video/736fd4a0-70ac-4f44-9633-55769ead6aca.mp4
- Apply a `mix-blend-screen` utility to the video so its native black background disappears and the bright waves blend seamlessly with the app's dark background.
- In the bottom right corner, add multiple layers of absolute-positioned black shapes with heavy blurs (e.g., `blur-[120px]`, `blur-[80px]`, `blur-[60px]`). This will create a smooth, deep vignette that perfectly fades the bottom right of the video into the dark background.
- Add some subtle ambient background glows and a few small, glowing white stars scattered around the top half.

**3. Navigation Bar:**
- **Logo:** Display the brand name "Lexo" in a bold, white font on the left.
- **Links:** Center-align the navigation links: "Features", "Contact", "Blog", and "Pricing".
- **Desktop CTA:** Place a bordered "Get Started" button on the far right.
- **Mobile Menu:** Hide the links/CTA on mobile and implement a functional hamburger menu that toggles a full-screen blurred dark overlay containing the menu items.

**4. Main Hero Content & Typography:**
- **Heading:** The main `<h1>` must be exactly `48px` in size and span exactly 2 lines. 
  - Line 1: "Stay Ahead With *Cutting-Edge*" (Make the words "Cutting-Edge" use an elegant, light, italic serif font).
  - Line 2: "Realtime Price Alerts".
- **Subheading:** Add the text "Automatically monitor your prices and adjust your offers to stay competitive 24/7" in a light gray color beneath the heading.
- **Main CTA:** Add a solid white button with black text saying "Start Tracking" with a subtle hover scale effect.

**5. Social Proof / Store Logos:**
- Positioned near the bottom, add a small text prompt: "Tracking data from 1000+ most popular stores worldwide" (highlighting "1000+" in white).
- Below this, create a horizontal, responsive flex row of logos for: Shopify, Etsy, Amazon, and Walmart. Build these logos using precise typography and inline SVGs to ensure they are crisp on all devices.

**6. Sequential Animations (4-Second Load):**
- Implement custom CSS `@keyframes` for fade-up and fade-in effects.
- When the page loads, ALL content must animate into view smoothly and sequentially over roughly 4 seconds.
- The Main Heading must animate **word by word** (e.g., "Stay", "Ahead", "With", "Cutting-Edge" sliding up one after the other).
- Use inline `style={{ animationDelay: '...' }}` to stagger the entrance of the background video, navigation bar, heading words, subheading, main CTA, and finally the bottom store logos so they cascade beautifully onto the screen.
