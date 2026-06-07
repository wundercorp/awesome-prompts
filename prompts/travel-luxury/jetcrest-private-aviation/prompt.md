Build a high-fidelity, ultra-luxury hero section for a private jet brand called "JetCrest". The design must follow a "nested card" aesthetic with cinematic typography and smooth word-by-word animations.

1. Layout Architecture:

External Frame: The entire page has a white background with a constant padding of 20px (1.25rem).

Internal Container: Inside the frame, create a viewport with a large border-radius (3rem or 48px). This container should hold the background video and all hero content.

Header: Position the header AT THE TOP of the white frame (outside the video container).

Left: "Jetfly" (Font: Inter, Medium, 20px).

Center: Nav links: "Fleet", "Services", "Saftey", "About us" (Font: Inter, 14px, Grey).

Right: Black pill button "Request a quote" with a soft shadow.

2. Background & Visuals:

Video URL: https://cdn.sceneai.art/Hero Section Video/ab1347aa-b8fc-4f38-ac9d-9a6238bf8647.mov

Video Styling: Set to object-cover to fill the rounded container perfectly.

Vignette: Add a dark gradient overlay inside the video container that transitions from transparent at the top to 50% black at the bottom to ensure white text is legible.

3. Typography & Positioning:

Anchor: All text content must be centered horizontally and anchored to the BOTTOM of the rounded container using Flexbox (justify-end).

Main Headline: "Gulfstream Charters [Line Break] On Your Schedule"

Font: Inter, Light weight (300).

Size: 76px (Desktop), 40px (Mobile).

Accent: The word "Your" must use a premium serif italic font (Playfair Display).

Shadow: Apply a subtle text-shadow (0 2px 10px rgba(0,0,0,0.3)) for depth.

Description: A narrow paragraph (max-width 440px) below the title. Font size 15px, color white/90.

CTA: A large white pill button "Instant Charter Request" centered at the very bottom.

4. Animation Sequence (The "Smooth Step-by-Step" Effect):

Trigger: On page load.

Logic: Use JavaScript to split the headline and description into individual words.

Effect: Each word should animate in one-by-one with a delay.

Animation Style: Each word should:

Fade in (Opacity 0 -> 1)

Slide up (TranslateY 15px -> 0)

Focus (Blur 4px -> 0)

Timing: Headline words stagger by 120ms. Description words stagger by 40ms. The CTA button fades in last.

5. Technical Stack:

Frameworks: HTML5, Tailwind CSS, and Vanilla JavaScript.

Responsiveness: Ensure the layout is fluid. On mobile, decrease the frame padding and scale down typography while keeping the aircraft centered in the video.
