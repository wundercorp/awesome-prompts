Create a fully responsive React hero section matching this exact design specification 1:1. Use Tailwind CSS for all styling.

1. **Background & Layout Overlay**:
   - Make the container full-screen (`h-screen w-full relative overflow-hidden bg-[#050505]`).
   - Add a full-screen background video using this exact URL: `https://cdn.sceneai.art/Hero Section Video/e0756960-0a98-42df-a9ff-bc871a4ddf34.mov`.
   - Add a dark gradient overlay over the video (`bg-gradient-to-b from-black/10 via-black/20 to-black/60`). This keeps the top of the video bright but darkens the bottom so the text is perfectly readable.
   - The entire hero section must be static (no scroll or mouse parallax animations).

2. **Compact Floating Navbar (Top Center)**:
   - Position the navbar 24px (`top-6`) from the top, perfectly centered horizontally.
   - **Container Styling**: Make it a compact pill shape (`rounded-full`). Use a white background with 95% opacity and a blur effect (`bg-white/95 backdrop-blur-md`). Constrain the max-width to exactly `800px`. Use very tight padding: `pl-5 pr-2 py-1.5` to keep the navbar small and slim.
   - **Left**: Abstract SVG icon alongside the text "Metary" (Black, `text-[15px]`, `font-bold`).
   - **Center (Desktop Only)**: Links for "Features", "Pricing", "Docs", "Community" (`text-[13px]`, `text-gray-700`, medium weight, with a gap of `gap-7`).
   - **Right**: "Log in" link (`text-[13px]`) and a small "Sign up" button (`bg-[#111111]` text-white, `px-5 py-2`, `rounded-full`, `text-[13px]`).
   - **Mobile**: Hide center links and login text on mobile. Add a hamburger menu toggle that opens a dropdown menu.

3. **Main Content (Bottom, Perfectly Centered Horizontally)**:
   - Create a wrapper for the text and bottom logos positioned at the absolute bottom (`bottom-8`) of the screen, extending full width, with its contents perfectly centered horizontally (`flex flex-col items-center`).
   - **Text & Button Container**: This block must have a bottom margin of exactly `100px` (`mb-[100px]`) to separate it from the bottom logos. Everything inside must be `text-center` and `items-center`.
   - **No Logo**: Do NOT add any icon or golden logo above the main heading.
   - **Heading**: "Scale with Metary" (White, `text-[56px]`, `font-semibold`, tight tracking, centered).
   - **Paragraph**: "Empower your community with decentralized tools that scale, seamless Web3 infrastructure for forward-thinking teams." (Light gray `#D1D1D1`, `text-[15px]`, perfectly centered. Constrain the max-width to exactly `420px` so the text wraps perfectly into 3 lines).
   - **Button**: "Get Started" (White background, black text. Give it small rounded corners `rounded-xl` instead of a full pill shape. Padding `px-6 py-2.5`, `text-[13px]`, `font-medium`).

4. **Bottom Partner Logos Ribbon**:
   - Positioned directly below the main content (separated by that 100px margin).
   - Horizontally centered (`justify-center`), flex-wrapped, with `gap-10` and `70% opacity`.
   - Include custom SVGs alongside text for 4 logos: "runway" (bold, 15px), "OpenAI" (semibold, 15px), "descript" (medium, 16px), and "Watershed" (medium, 15px).
