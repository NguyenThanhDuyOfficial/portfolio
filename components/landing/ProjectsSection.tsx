"use client";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiLucide,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiJsonwebtokens,
  SiPassport,
  SiZod,
  SiSwagger,
  SiVercel,
  SiSupabase,
  SiRender,
  SiDocker,
} from "@icons-pack/react-simple-icons";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    src: "/projects/car.png",
    alt: "car-screenshot",
    className: "col-span-8 col-start-2",
    title: "Car Rental",
    description:
      "Car rental websites allow users to filter, select, and rent vehicles.\nA learning project i will continue in the future.",
    techStacks: [
      // Frontend
      {
        title: "Next.js",
        icon: <SiNextdotjs color="#000000" />,
        url: "https://nextjs.org/",
      },
      {
        title: "TypeScript",
        icon: <SiTypescript color="#3178C6" />,
        url: "https://www.typescriptlang.org/",
      },
      {
        title: "Redux Toolkit",
        icon: <SiRedux color="#764ABC" />,
        url: "https://redux-toolkit.js.org/",
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss color="#06B6D4" />,
        url: "https://tailwindcss.com/",
      },
      {
        title: "ShadCN UI",
        icon: <SiShadcnui color="#000000" />,
        url: "https://ui.shadcn.com/",
      },
      {
        title: "Lucide React",
        icon: <SiLucide color="#F56565" />,
        url: "https://lucide.dev/",
      },

      // Backend
      {
        title: "Nest.js",
        icon: <SiNestjs color="#E0234E" />,
        url: "https://nestjs.com/",
      },
      {
        title: "Prisma",
        icon: <SiPrisma color="#2D3748" />,
        url: "https://www.prisma.io/",
      },
      {
        title: "PostgreSQL",
        icon: <SiPostgresql color="#4169E1" />,
        url: "https://www.postgresql.org/",
      },
      {
        title: "JWT",
        icon: <SiJsonwebtokens color="#000000" />,
        url: "https://jwt.io/",
      },
      {
        title: "Passport",
        icon: <SiPassport color="#34E27A" />,
        url: "https://www.passportjs.org/",
      },
      {
        title: "Zod",
        icon: <SiZod color="#3E67B1" />,
        url: "https://zod.dev/",
      },
      {
        title: "Swagger",
        icon: <SiSwagger color="#85EA2D" />,
        url: "https://swagger.io/",
      },
      {
        title: "Throttler",
        icon: <SiNestjs color="#E0234E" />,
        url: "https://github.com/nestjs/throttler",
      },

      // DevOps & Deployment
      {
        title: "Vercel",
        icon: <SiVercel color="#000000" />,
        url: "https://vercel.com/",
      },
      {
        title: "Supabase",
        icon: <SiSupabase color="#3ECF8E" />,
        url: "https://supabase.com/",
      },
      {
        title: "Render",
        icon: <SiRender color="#46E3B7" />,
        url: "https://render.com/",
      },
      {
        title: "Docker",
        icon: <SiDocker color="#2496ED" />,
        url: "https://www.docker.com/",
      },
    ],
    links: [
      {
        type: "Github",
        title: "NguyenThanhDuyOfficial/car",
        href: "https://github.com/NguyenThanhDuyOfficial/car",
      },
      {
        type: "Live",
        title: "carrentalcomps.vercel.app/",
        href: "https://carrentalcomps.vercel.app/",
      },
    ],
    children: null,
  },
  {
    src: "/projects/odyssey.png",
    alt: "odyssey-screenshot",
    className: "col-span-8 col-start-3",
    title: "Odyssey",
    description: "Website i make for my Study Discord Community!!!",
    techStacks: [
      // Frontend
      {
        title: "Next.js",
        icon: <SiNextdotjs color="#000000" />,
        url: "https://nextjs.org/",
      },
      {
        title: "TypeScript",
        icon: <SiTypescript color="#3178C6" />,
        url: "https://www.typescriptlang.org/",
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss color="#06B6D4" />,
        url: "https://tailwindcss.com/",
      },
      {
        title: "ShadCN UI",
        icon: <SiShadcnui color="#000000" />,
        url: "https://ui.shadcn.com/",
      },
      {
        title: "Lucide React",
        icon: <SiLucide color="#F56565" />,
        url: "https://lucide.dev/",
      },

      // DevOps & Deployment
      {
        title: "Vercel",
        icon: <SiVercel color="#000000" />,
        url: "https://vercel.com/",
      },
    ],
    links: [
      {
        type: "Github",
        title: "NguyenThanhDuyOfficial/odyssey",
        href: "https://github.com/NguyenThanhDuyOfficial/odyssey",
      },
      {
        type: "Live",
        title: "odyssey-group.vercel.app/",
        href: "https://odyssey-group.vercel.app/",
      },
    ],
    children: null,
  },
  {
    src: "/projects/dotfile.png",
    alt: "dotfile-screenshot",
    className: "col-span-8 col-start-1",
    title: "Dotfile Arch/Hypr",
    description: "A custom DE i use every day.",
    techStacks: [],
    links: [
      {
        type: "Github",
        title: "github.com/NguyenThanhDuyOfficial/.dotfiles",
        href: "https://github.com/NguyenThanhDuyOfficial/.dotfiles",
      },
    ],
    children: (
      <Image
        src="/projects/catppuccin.png"
        alt="catppuccin"
        width={80}
        height={80}
        className="rounded-full col-end-11 hidden md:block"
      />
    ),
  },
];

export default function ProjectsSection() {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.set(".project-card", { y: 80, opacity: 0 });
      ScrollTrigger.batch(".project-card", {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          });
        },
        start: "top 80%",
        once: true,
      });
    },

    { scope: containerRef },
  );
  return (
    <section
      id="projects"
      ref={containerRef}
      className="flex flex-col md:grid grid-cols-12 gap-y-16 items-center justify-center"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.src}
          src={project.src}
          alt={project.alt}
          title={project.title}
          description={project.description}
          techStacks={project.techStacks}
          links={project.links}
          className={`project-card ${project.className}
`}
        >
          {project.children && project.children}
        </ProjectCard>
      ))}
    </section>
  );
}
