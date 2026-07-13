import {
  CodeXml,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Rocket,
  UserSearch,
} from "lucide-react";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const listOfDesc = [
  {
    icon: <CodeXml className="text-green" />,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: <Rocket className="text-green" />,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: <UserSearch className="text-green" />,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: <Lightbulb className="text-green" />,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const information = [
  {
    icon: <Mail className="text-green" size={20} />,
    key: "Email",
    value: "abbas0bayat@gmail.com",
  },
  {
    icon: <Phone className="text-green" size={20} />,
    key: "Phone",
    value: "+98 939 905 3410",
  },
  {
    icon: <MapPin className="text-green" size={20} />,
    key: "Location",
    value: "Iran, Hamedan, Nahavand",
  },
];

export const comments = [
  {
    name: "Ali Rezaei",
    position: "Senior Frontend Developer",
    comment:
      "Abbas has a great eye for detail. His components are always reusable and well-documented. He follows best practices and writes clean, maintainable code. His problem-solving skills are impressive and he's a great team player.",
    photo: "person/ali.jpg",
  },
  {
    name: "Nima Mohammadi",
    position: "Product Owner",
    comment:
      "Abbas delivers features on time and communicates technical challenges clearly with the team. He's proactive in suggesting improvements and always thinks about the user experience. His reliability and professionalism make him a valuable asset to any project.",
    photo: "person/nima.jpg",
  },
  {
    name: "Sara Karimi",
    position: "UI/UX Designer",
    comment:
      "Abbas translates my designs into code exactly as intended. He truly respects the design system and pays attention to every pixel. He also provides valuable feedback on animations and micro-interactions that enhance the overall user experience.",
    photo: "person/sara.jpg",
  },
  {
    name: "Mahdi Ahmadi",
    position: "Backend Developer",
    comment:
      "Working with Abbas is smooth. He writes clean code and makes REST API integration easy. He understands the backend constraints and optimizes the frontend accordingly. His communication is clear and he's always ready to debug issues together.",
    photo: "person/mahdi.jpg",
  },
  {
    name: "Hossein Ghasemi",
    position: "Team Lead",
    comment:
      "Abbas is a reliable developer. He helps junior devs and always brings good solutions to the table. He takes ownership of his work and consistently delivers high-quality results. His positive attitude and mentorship make the team stronger.",
    photo: "person/hossein.jpg",
  },
];

export const experiences = [
  {
    timeLine: "2024 - Present",
    title: "Front-End Developer",
    company: "Self Employed",
    description:
      "Transitioned from theory to practice by converting documented knowledge into tangible, visual results. I spent this phase building numerous hands-on exercises and advancing multiple personal projects.",
    technologies: ["Tailwind CSS", "ReduxToolkit", "Framer Motion"],
    current: true,
  },
  {
    timeLine: "2023 - 2024",
    title: "Front-End Student",
    company: "Self Employed",
    description:
      "Focused heavily on mastering the fundamentals through official documentation and high-quality reference platforms. My primary resources included W3Schools.com for core web technologies and Nextjs.org for modern React frameworks.",
    technologies: ["HTML", "CSS", "JavaScript", "React.JS", "Next.JS"],
    current: false,
  },
];

export const projects = [
  {
    title: "USEO Website",
    description:
      "A sleek, responsive single-page application built with React and Tailwind CSS. It leverages Framer Motion for seamless UI transitions and React Router for intuitive multi-page navigation. Deployed via GitHub Pages.",
    image: "projects/USEO.jpg",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Gh-Pages",
    ],
    liveLink: "https://useo-live.vercel.app/",
    repoLink: "https://github.com/abbasbayat0/useoLive",
  },
  {
    title: "E-Commerce Store",
    description:
      "A fully-featured, enterprise-level online store built with Next.js 15 and TypeScript. This platform integrates a secure multi-provider authentication system (Clerk & Supabase), a robust PostgreSQL database management layer with Prisma ORM, and global state management using Redux Toolkit.",
    image: "projects/Store.jpg",
    tags: [
      "Next.JS",
      "TypeScript",
      "Redux Toolkit",
      "Prisma",
      "Clerk Auth",
      "Supabase",
      "Tailwind CSS",
      "Zod",
    ],
    liveLink: "https://store-zeta-five.vercel.app/",
    repoLink: "https://github.com/abbasbayat0/store",
  },
];

export const listOfTech = [
  "HTML 5",
  "CSS 3",
  "TailwindCSS",
  "Framer Motion",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.JS",
  "Next.JS",
  "Redux Toolkit",
  "Zustand",
  "TanStack Query",
  "React Hook Form",
  "Zod",
  "clerk",
  "Shadcn/UI",
  "Axios",
  "REST APIs",
  "Git, GitHub",
  "Vite",
  "Prettier",
  "ESLint",
  "Vercel",
  "NPM",
];
