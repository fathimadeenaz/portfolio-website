import { BiLogoGithub, BiLogoLinkedinSquare, BiEnvelope } from "react-icons/bi";

export const config = {
    title: "Deenaz Fathima | Portfolio",
    description: "UI Designer & Developer | React.js | Next.js | Graphic Design",
    author: "Deenaz Fathima",
    keywords: [
        "UI Designer",
        "UI Developer",
        "UI/UX",
        "React.js",
        "Next.js",
        "Graphic Design",
        "Portfolio",
        "Web Development",
        "Web Design",
        "Frontend Development",
        "Frontend Developer",
    ],
}

export const navLinks = [
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


export const skills = [
    "TypeScript",
    "ReactJS",
    "Redux",
    "NextJS",
    "Sass",
    "TailwindCSS",
    "Figma",
    "NodeJS",
    "Firebase",
    "MongoDB",
    "Git",
    "Godot",
    "Unity",
    "Blender",
    "Flutter",
];

export const formFields = [
    { id: "name", type: "text", placeholder: "Your Name" },
    { id: "email", type: "email", placeholder: "Your Email" },
];

export const socials = [
    { icon: BiEnvelope, url: "mailto:fathimadeenaz@gmail.com" },
    { icon: BiLogoLinkedinSquare, url: "https://www.linkedin.com/in/deenaz-fathima" },
    { icon: BiLogoGithub, url: "https://github.com/fathimadeenaz" },
];

export const projects = [
    {
        name: "ImaginAI",
        description:
            "A full-stack AI SaaS application that leverages Cloudinary AI for some amazing image transformations.",
        tags: [
            { name: "NextJS", color: "6" },
            { name: "MongodbAtlas", color: "7" },
            { name: "CloudinaryAI", color: "6" },
            { name: "Stripe", color: "7" },
        ],
        image: "/assets/imaginai.png",
        link: "https://imagin-ai-sigma.vercel.app/",
    },
    {
        name: "iPhone 15 Pro Clone",
        description:
            "Apple's iPhone 15 Pro clone with custom slick animations and animated 3D modeling.",
        tags: [
            { name: "ReactJS", color: "6" },
            { name: "Gsap", color: "7" },
            { name: "Threejs", color: "6" },
        ],
        image: "/assets/apple.png",
        link: "https://also-iphone15proclone.netlify.app/",
    },
    {
        name: "Quill",
        description:
            "An improved full-stack collaborative text editing application with live notifications and permission sharing.",
        tags: [
            { name: "NextJS", color: "7" },
            { name: "Typescript", color: "6" },
            { name: "Clerk", color: "7" },
            { name: "Liveblocks", color: "6" },
        ],
        image: "/assets/quill.png",
        link: "https://quill-docs.vercel.app/sign-in",
    },
    {
        name: "Zentry Clone",
        description:
            "A clone of the award-winning animated gaming website that became an Awwwards Site Of The Month.",
        tags: [
            { name: "ReactJS", color: "7" },
            { name: "TailwindCSS", color: "6" },
            { name: "Gsap", color: "7" },
        ],
        image: "/assets/zentry.png",
        link: "https://clonezentry.netlify.app/",
    },
    {
        name: "VaultPro",
        description:
            "A full-stack storage management solution built using Appwrite's secure email-OTP authentication and database.",
        tags: [
            { name: "NextJS", color: "6" },
            { name: "Typescript", color: "7" },
            { name: "AppWrite", color: "6" },
            { name: "Shadcn", color: "7" },
        ],
        image: "/assets/vautpro.png",
        link: "https://vault-pro.vercel.app/sign-in",
    },
    {
        name: "Xora",
        description:
            "A modern UI/UX landing page for a fictional company, showcasing a clean and professional design.",
        tags: [
            { name: "ReactJS", color: "6" },
            { name: "Tailwind", color: "7" },
        ],
        image: "/assets/xora.png",
        link: "https://saas-xora.netlify.app/",
    },
    {
        name: "The Crown v2",
        description:
            "A modern revamp of The Crown, a fictional fine-dining luxury restaurant",
        tags: [
            { name: "ReactJS", color: "6" },
            { name: "Vite", color: "7" },
        ],
        image: "/assets/crown.png",
        link: "https://the-crown-v2.netlify.app/",
    },
    {
        name: "Loop",
        description:
            "A full-stack video conferencing application.",
        tags: [
            { name: "NextJS", color: "6" },
            { name: "Typescript", color: "7" },
            { name: "Stream", color: "6" },
        ],
        image: "/assets/loop.png",
        link: "https://loop-theta.vercel.app/",
    },
    {
        name: "PickFlix",
        description:
            "An entertainment app for discovering the latest and most popular movies and TV series",
        tags: [
            { name: "ReactJS", color: "7" },
            { name: "Sass", color: "6" },
            { name: "Axios", color: "7" },
        ],
        image: "/assets/pickflix.png",
        link: "https://the-pickflix.netlify.app/",
    },
    {
        name: "CryptoMania",
        description:
            "Your one-stop shop for the world of Crypto.",
        tags: [
            { name: "ReactJS", color: "6" },
            { name: "ReduxToolkit", color: "7" },
            { name: "AntDesign", color: "6" },
        ],
        image: "/assets/cryptomania.png",
        link: "https://the-crypto-mania.netlify.app/",
    },
];
