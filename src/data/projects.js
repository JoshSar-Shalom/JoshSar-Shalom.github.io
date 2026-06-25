export const projectsData = [
  {
    id: "plc-simulation",
    title: "PLC Block-Zone Control Simulation",
    summary: "Designed a six-section bus bar track layout inside Beckhoff’s TwinCAT 3 environment, programming a 6-rung ladder logic system to prevent collision during operation.",
    overview: "Engineered an automated transportation layout loop modeling transit asset controls. This setup models multi-vehicle synchronization sequences using localized interlocking techniques to ensure deterministic vehicle execution without tracking bottlenecks or collision risks.",
    skills: ["TwinCAT 3", "Ladder Logic", "HMI Design"],
    images: [
      "images/Recording 2026-06-25 140552.gif",
      "images/image1.png",
      "images/image3.png"
    ],
    bullets: [
      "Modeled a six-section bus bar track layout inside Beckhoff’s TwinCAT 3 environment, programming a 6-rung ladder logic system to enforce dual-vehicle block-zone collision avoidance.",
      "Mapped track sections and vehicle locations to a dynamic HMI utilizing layered, multi-state elements to show real-time power states.",
      "Simulated vehicle movement using synchronized TON blocks to track 6 unique block-zone locations per vehicle."
    ]
  },
  {
    id: "rom-pixel-display",
    title: "NAND-Based Digital Logic ROM Pixel Display",
    summary: "Built a 16x16 pixel display assembly inside a digital logic simulator driven by a custom C compiler that translates graphical drawings into binary machine code.",
    overview: "Inspired by a built-in 256x16-bit ROM chip update in Sebastian Lague's Digital Logic Sim, I wanted to build a complete hardware assembly that could render custom graphics using machine instructions. The simulator allows for nested custom logic circuits all the way down to base NAND gates and I created a program in C using SDL2 to handle code generation through the computer's clipboard.",
    skills: ["C", "SDL2", "Digital Logic Design", "Computer Architecture"],
    images: [
      "images/Display_Assembly.png",
      "images/ROM.png",
      "images/Compiler.png",
      "images/8BitRegister.png"
    ],
    bullets: [
      "Structured a custom 16-bit binary machine instruction format layout as AAAAAAAAMMMMXXXX, assigning 8 bits for the pixel addresses, 4 bits for opcode instructions, and leaving 4 bits unused.",
      "Assembled a full digital processing loop from scratch, building up from basic NAND gates into 1-bit, 4-bit, and 8-bit registers, an 8-bit ROM iterator counter, and an 8 Bit 2-to-1 Multiplexer for easy troubleshooting and pointer resets.",
      "Hit a massive roadblock where the display would completely skip instructions or skip four lines at a time depending on application restarts, garbling the falling test pattern output.",
      "Diagnosed the glitch by pausing the clock to iterate tick-by-tick, discovering a race condition where both the ROM iterator register and the display module were executing simultaneously on the same rising edge signal.",
      "Resolved the timing bug by re-engineering a standard D Flip-Flop with an inverted input to the second D-Latch, forcing the ROM iterator to update on a falling edge so it stays completely out-of-phase with the display.",
      "Programmed a custom graphical tool using C and the SDL2 library featuring a interactive 16x16 grid canvas that automatically indexes clicked coordinate arrays to output paste-ready binary data blocks."
    ]
  }
];