import { Project } from "../Types/Types";

export const projects: Project[] = [
  {
    id: 1,
    type: "web",
    title: "Triumph Motorcycles North Macedonia",
    client: "Triumph Motorcycles",
    link: "https://www.triumphmotorcycles.mk/",
    clientLogo: "/Logos/triumphLogo.webp",
    logowidth: 120,
    desc: "We developed the official website for Triumph Motorcycles Macedonia, following the global Triumph brand identity. The site is a localized version of the official Triumph website, ensuring consistency across countries while offering a tailored experience for the Macedonian market.",
    responsibilities: [
      "Frontend in Next.js: Built a fast, SEO-friendly, and responsive frontend that mirrors the official Triumph site layout and experience.",
      "Custom CMS with Laravel: Developed a Laravel-powered backend that gives the client full control over their product listings, content, and media.",
      "Dynamic Product Management: The CMS allows the Triumph Macedonia team to easily manage motorcycles, specifications, and promotions.",
      "Responsive & Scalable: Optimized across all devices, with a structure that's scalable for future content and localization.",
    ],
    resultDesc:
      "A seamless blend of global branding with local content control.",
    techStack: [
      {
        name: "NextJs",
        logo: "/Logos/nextjs-svgrepo-com.png",
      },
      {
        name: "Laravel",
        logo: "/Logos/laravel-svgrepo-com.png",
      },
      {
        name: "Vercel",
        logo: "/Logos/vercel-svgrepo-com.png",
      },
      {
        name: "Github",
        logo: "/Logos/github-142-svgrepo-com.png",
      },
    ],
    thumbnail: "/projects/triumph/triumphThumbnailSmall.webp",
    projectCardInfo: {
      type: "Web Development",
      title:
        "Triumph Motorcycles Macedonia – Authorized Dealer for Triumph Motorcycles in North Macedonia.",
      desc: "The Triumph Motorcycles website is designed to showcase the entire Triumph catalog with full details and specifications. ",
    },
    gallery: [""],
  },
  {
    id: 2,
    type: "web",
    title: "Click-Tint",
    client: "Click-Tint",
    link: "https://click-tint.com/en",
    clientLogo: "/Logos/clickTintLogo.png",
    logowidth: 150,

    desc: "We partnered with Click-Tint, a smart tinting solution, to design and develop their official website. Built with Next.js, the site offers high performance, fast loading, and seamless navigation across all devices.",
    responsibilities: [
      "UX/UI Design: Clean, modern, and intuitive interface aligned with the brand’s identity.",
      "Responsive Development: Optimized for desktop, tablet, and mobile viewing, ensuring a consistent experience across all screen sizes.",
      " Content Strategy & Visuals: Highlighting the product’s features—remote-controlled tinting, switch compatibility, and mobile integration.",
      " Multilingual Setup: English version ready, scalable for global audiences.",
    ],
    techStack: [
      {
        name: "NextJs",
        logo: "/Logos/nextjs-svgrepo-com.png",
      },
      {
        name: "Laravel",
        logo: "/Logos/laravel-svgrepo-com.png",
      },
      {
        name: "Vercel",
        logo: "/Logos/vercel-svgrepo-com.png",
      },
      {
        name: "Github",
        logo: "/Logos/github-142-svgrepo-com.png",
      },
    ],
    thumbnail: "/projects/clicktint/clicktintThumbnail.png",
    projectCardInfo: {
      type: "Web Development",
      title:
        "Click Tint is a self-adhesive smart foil, that allows us to transform a normal window into a tinted window with a click of a button.",
      desc: "The goal of the website is to raise awareness about this product, enabling clients to quickly and easily become familiar with its purpose and how it works.",
    },
  },
  {
    id: 3,
    type: "web",
    title: "Masazeri.mk",
    client: "Masazeri.mk",
    link: "https://www.masazeri.mk/",
    clientLogo: "/Logos/masazeriLogo.png",
    logowidth: 130,
    desc: "We partnered with Masazeri.mk, a premium automatic massage chair provider, to design and develop their official website. Built to promote their automatic massage chairs and showcase the full range of advanced features, the site delivers a smooth and engaging user experience across all devices.",
    responsibilities: [
      "UX/UI Design: Sleek, user-friendly design that reflects the brand’s premium image while showcasing the chairs' luxurious features.",
      "Responsive Development: Ensured seamless functionality across all devices, from desktop to mobile, for an optimal user experience.",
      "Content Strategy & Visuals: Strategically presented product features, including chair functions, adjustable settings, and relaxation benefits.",
      "Multilingual Setup: Designed with scalability in mind, ready for expansion to multiple languages to cater to global markets.",
      "Contact & Seller Integration: Easy-to-navigate contact form and seamless seller integration for quick inquiries and smooth customer interaction.",
    ],
    techStack: [
      {
        name: "NextJs",
        logo: "/Logos/nextjs-svgrepo-com.png",
      },
      {
        name: "Laravel",
        logo: "/Logos/laravel-svgrepo-com.png",
      },
      {
        name: "Vercel",
        logo: "/Logos/vercel-svgrepo-com.png",
      },
      {
        name: "Github",
        logo: "/Logos/github-142-svgrepo-com.png",
      },
    ],
    thumbnail: "/projects/massage/masazeriThumbnail.png",
    projectCardInfo: {
      type: "Web Development",
      title:
        "Masazeri.mk, a premium automatic massage chair provider.",
      desc: "The goal of the website is to promote their flagship chair and showcase the full range of advanced features, the site delivers a smooth and engaging user experience across all devices.",
    },
  },
  {
    id: 4,
    type: "video",
    title: "Rigo Winnery",
    client: "Rigo Impex Winnery",
    link: "https://click-tint.com/en",
    clientLogo: "/Logos/Rigo.png",
    logowidth: 50,

    desc: "We partnered with Rigo Impex, a distinguished winery known for its dedication to tradition and quality, to create a cinematic advertisement that captures the heart of their craft. Shot on-location at their vineyard, the video brings to life the beauty of the land and the passion behind every bottle.",
    responsibilities: [
      "Cinematography: Wide, sweeping shots of the vineyard landscape combined with tighter scenes that focus on hands-on work and authentic moments in the field.",
      "Stabilized Motion: Smooth movement using the Zhiyun Crane 2 to follow the natural rhythm of the workers and the land.",
      "Visual Storytelling: A grounded, human-centered narrative showing the seasonal efforts—from soil preparation to nurturing the vines—revealing the care and tradition behind every step.",
      "Color & Mood: Captured in natural light, with warm tones and subtle grading to emphasize the organic, grounded feel of Rigo Impex’s process.",
    ],
    techStack: [
      {
        name: "Sony A7III",
        logo: "/Logos/sony-2-logo-svgrepo-com.png",
      },
      {
        name: "DaVinci Resolve",
        logo: "/Logos/davinci-resolve-logo-hero.png",
      },
      {
        name: "Zhiyun Crane 2",
        logo: "/Logos/zhiyunLogo.png",
      },
    ],
    thumbnail: "/projects/rigo/thumb.png",
    projectCardInfo: {
      type: "Video",
      title:
        "Rigo Impex, a distinguished winery known for its dedication to tradition and quality, to create a cinematic advertisement that captures the heart of their craft. ",
      desc: "Shot on-location at their vineyard, the video brings to life the beauty of the land and the passion behind every bottle.",
    },
    videoGallery: ["/projects/rigo/rigo.mov"],
  },
  {
    id: 5,
    type: "video",
    title: "Sky Hotel",
    client: "Sky Hotel",
    link: "https://hotelsky.mk/",
    clientLogo: "/Logos/skyhotel-logo.png",
    logowidth: 150,

    desc: "Expanding on our previous partnership with Hotel Sky, out team created a captivating commercial video showcasing its serene spa, elegant interiors, and top-tier rooms. Designed to evoke relaxation and sophistication, this visual journey invites guests to experience comfort at its finest.",
    responsibilities: [
      "Cinematography: Warm, ambient lighting and smooth tracking shots to capture the elegance of the rooms and the calming atmosphere of the spa.",
      "Direction: Guided visual storytelling to emphasize the guest experience — from check-in to unwinding in the spa",
      "Editing: Seamless transitions and pacing designed to mirror the relaxing yet luxurious vibe of the hotel.",
      "Color Grading: A rich, inviting palette to enhance the warmth of interiors and the tranquility of spa scenes.",
      "Sound Design: Soft ambient tones and subtle music layers to elevate the soothing mood and convey serenity.",
    ],
    techStack: [
      {
        name: "Sony A7III",
        logo: "/Logos/sony-2-logo-svgrepo-com.png",
      },
      {
        name: "DaVinci Resolve",
        logo: "/Logos/davinci-resolve-logo-hero.png",
      },
      {
        name: "Zhiyun Crane 2",
        logo: "/Logos/zhiyunLogo.png",
      },
    ],
    thumbnail: "/projects/sky/thumb.png",
    projectCardInfo: {
      type: "Videography",
      title:
        "Sky Hotel offers luxurious rooms, a serene spa, and a refined experience designed for total relaxation and indulgence.",
      desc: "The goal of the video is to showcase the hotel’s luxurious experience, helping guests instantly connect with its comfort, elegance, and premium amenities.",
    },
    videoGallery: ["/projects/sky/promoVideo.mp4"],
  },
  {
    id: 6,
    type: "video",
    title: "Ilios Co",
    client: "Ilios Co",
    link: "https://iliosco.mk/",
    clientLogo: "/Logos/logo-ilios.png",
    logowidth: 70,

    desc: "We collaborated with Ilios Co, a local agricultural company based in Gevgelija, to produce a cinematic video showcasing their expansive vegetable fields and dedication to high-quality produce. The focus was on capturing the scale, care, and daily rhythm of their farming operations—particularly their cultivation of baby spinach and other leafy greens.",
    responsibilities: [
      "Cinematography: Wide-angle visuals to highlight the vast, orderly fields, paired with detailed close-ups of fresh produce and the workers' hands-on care.",
      "Stabilized Motion: Smooth transitions and tracking shots achieved with the Zhiyun Crane 2, bringing fluidity to scenes of planting, harvesting, and daily fieldwork.",
      "Visual Storytelling: A grounded and authentic portrayal of the farming process—emphasizing the hard work, expertise, and natural environment that define Iliosco’s approach.",
      "Color & Mood: Shot in natural daylight, with soft grading to preserve the vibrancy of the greens and the earthy tones of the landscape.",
    ],
    techStack: [
      {
        name: "Sony A7III",
        logo: "/Logos/sony-2-logo-svgrepo-com.png",
      },
      {
        name: "DaVinci Resolve",
        logo: "/Logos/davinci-resolve-logo-hero.png",
      },
      {
        name: "Zhiyun Crane 2",
        logo: "/Logos/zhiyunLogo.png",
      },
    ],
    thumbnail: "/projects/ilios/thumb.png",
    projectCardInfo: {
      type: "Video",
      title:
        "Ilios Co an agricultural company - premium vegetables from their lush fields and unwavering commitment to quality.",
      desc: "Wide-angle, natural daytime shots capture the expansive fields, while intimate close-ups reveal the care in every harvest—brought to life.",
    },
    videoGallery: ["/projects/ilios/iliosVideo.mp4"],
  },
  {
    id: 7,
    type: "web",
    title: "Smart Locks",
    client: "Smart Locks",
    link: "https://www.smartlocks.mk/en",
    clientLogo: "/Logos/smatlLocksLogo.webp",
    logowidth: 150,
    desc: "Smart Locks a leading smart lock provider to design and develop their official website. Built to showcase their innovative smart locks and highlight their advanced security features, the site ensures a seamless and engaging user experience across all devices.",
    responsibilities: [
      "UX/UI Design: Modern and intuitive design that emphasizes security and convenience, aligning with the brand’s cutting-edge smart lock solutions.",
      "Responsive Development: Optimized for seamless navigation across all devices, ensuring a consistent experience whether on desktop, tablet, or mobile",
      "Content Strategy & Visuals: Clear presentation of smart lock features, including remote access, keyless entry, and advanced security options.",
      "Multilingual Setup: Scalable for global audiences with initial English version, ready for expansion into multiple languages.",
      "Contact & Seller Integration: Simple and efficient contact form, along with seller integration for quick inquiries and direct communication with potential customers."
    ],
    techStack: [
      {
        name: "NextJs",
        logo: "/Logos/nextjs-svgrepo-com.png",
      },
      {
        name: "Laravel",
        logo: "/Logos/laravel-svgrepo-com.png",
      },
      {
        name: "Vercel",
        logo: "/Logos/vercel-svgrepo-com.png",
      },
      {
        name: "Github",
        logo: "/Logos/github-142-svgrepo-com.png",
      },
    ],
    thumbnail: "/projects/locks/lockThumbnail.png",
    projectCardInfo: {
      type: "Web Development",
      title:
        "Smart Locks - A leading smart lock provider.",
      desc: "Built to showcase Smart Locks's pallete of innovative smart locks and highlight their advanced security features, the site ensures a seamless and engaging user experience across all devices..",
    },
  },
  {
    id: 8,
    type: "video",
    title: "April 22",
    client: "April 22",
    link: "https://www.apriltwentytwo.com/",
    clientLogo: "/Logos/aprilLogo.png",
    logowidth: 150,

    desc: "We collaborated with Ilios Co, a local agricultural company based in Gevgelija, to produce a cinematic video showcasing their expansive vegetable fields and dedication to high-quality produce. The focus was on capturing the scale, care, and daily rhythm of their farming operations—particularly their cultivation of baby spinach and other leafy greens.",
    responsibilities: [
      "Cinematography: Wide-angle visuals to highlight the vast, orderly fields, paired with detailed close-ups of fresh produce and the workers' hands-on care.",
      "Stabilized Motion: Smooth transitions and tracking shots achieved with the Zhiyun Crane 2, bringing fluidity to scenes of planting, harvesting, and daily fieldwork.",
      "Visual Storytelling: A grounded and authentic portrayal of the farming process—emphasizing the hard work, expertise, and natural environment that define Iliosco’s approach.",
      "Color & Mood: Shot in natural daylight, with soft grading to preserve the vibrancy of the greens and the earthy tones of the landscape.",
    ],
    techStack: [
      {
        name: "Sony A7III",
        logo: "/Logos/sony-2-logo-svgrepo-com.png",
      },
      {
        name: "DaVinci Resolve",
        logo: "/Logos/davinci-resolve-logo-hero.png",
      },
      {
        name: "Zhiyun Crane 2",
        logo: "/Logos/zhiyunLogo.png",
      },
    ],
    thumbnail: "/projects/april/thumb.png",
    projectCardInfo: {
      type: "Video",
      title:
        "Biodegradable tights with Aloe Vera and colored with organic colors.",
      desc: "Skin & Style. Made with AMNI-SOUL technology that decomposes fast & clearing your conscience in consumption.",
    },
    videoGallery: ["/projects/april/re-editapril.mp4"],
  },
];
