Create a fully responsive React component using Tailwind CSS and 'lucide-react' icons that exactly matches the following design and animation specifications. Ensure all code is in a single file.
1. Global Theme & Layout Structure:

Background color: Dark olive/black (bg-[#111510]).
Default text color: White.
Selection color: Lime green background (bg-[#cbf22b]) with dark text (text-[#111510]).
Layout: Full viewport height (min-h-screen), flex column layout, centered vertically. Inside, use a container with max-w-[1400px] and horizontal padding.
Desktop Grid: Use a 12-column grid (grid-cols-12). The left 3 columns will hold a small label, and the right 9 columns will hold the main text and stats. On mobile, this should stack into a single column.
2. Typography & Color Palette:

Label: "• PARTNERSHIPS" -> Color: #cbf22b, text-xs to text-sm, uppercase, wide letter spacing (tracking-[0.2em]), semi-bold.
Headline: "Over a decade helping early-stage businesses grow." -> Color: #cbf22b, large text (text-4xl to text-6xl), medium weight, tight tracking, tight line height.
Paragraph: "From idea validation to advanced growth, we combine strategic insight and modern tools to help your startup make smarter decisions and scale faster in a rapidly changing market." -> Color: #8e9d7c, text-lg to text-xl, relaxed line height, max width to restrict length.
Stats Numbers: "95%", "20+", "$5M+" -> Color: #cbf22b, text-5xl to text-6xl, medium weight.
Stats Labels: "Complete customer satisfaction", "Innovation and valuable insight", "Highly efficient strategies" -> Color: #8e9d7c, text-sm to text-base, max width of 200px.
3. Step-by-Step Word Animations (Crucial):

Create a custom CSS keyframe named fadeUp (0% { opacity: 0, translateY: 24px } to 100% { opacity: 1, translateY: 0 }).
Build a reusable <WordAnim /> component: It must take a string of text, split it by spaces, wrap every single word in a <span>, and apply the fadeUp animation.
Dynamically calculate the animationDelay for each word inside the <WordAnim /> component so they appear fluidly one after the other (e.g., delayOffset + index * 0.04s).
Apply this component to the Headline (start delay 0.5s) and Paragraph (start delay 1.0s).
The Stats blocks should NOT be split by word, but the entire block should fade up sequentially after the text finishes (e.g., delays of 2.3s, 2.5s, 2.7s).
4. Smooth Infinite Logo Marquee:

Create a custom CSS keyframe named marquee that translates from translateX(0) to translateX(-50%).
The marquee container must have flex, w-max, and an animation of 35s linear infinite. Pause the animation on hover.
Add absolute positioned elements with linear gradients on the left and right edges (from #111510 to transparent) to mask the logos as they enter and exit the screen seamlessly.
Logo Cards Design: White background (bg-white), rounded corners (rounded-2xl), shadow, black text (text-black), extra bold font (font-extrabold), text-xl to text-2xl. Layout is flex row with the icon on the left, text on the right.
Logos to include (use lucide-react):
"Flash" - Icon: Zap, Color: #A3B121, Fill: true
"Cactus" - Icon: TreePine, Color: #892de3, Fill: false
"vision" - Icon: PieChart, Color: #f59e0b, Fill: false
"Greenish" - Icon: Leaf, Color: #16a34a, Fill: true
"umbrella" - Icon: Umbrella, Color: #ef4444, Fill: false
"Network" - Icon: Network, Color: #2563eb, Fill: false
Map through these logos in a <LogoStrip /> component, and render that strip 4 times inside the scrolling container so the track never runs out of content before looping.
