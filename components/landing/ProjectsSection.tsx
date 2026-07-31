"use client";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiTypescript } from "@icons-pack/react-simple-icons";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    src: "/projects/car.png",
    alt: "car-screenshot",
    className: "col-span-8 col-start-2",
    title: "Car Rental",
    description: "This is some description",
    techStacks: [{ icon: <SiTypescript /> }],
    links: [
      {
        type: "Github:",
        title: "NguyenThanhDuyOfficial/car",
        href: "https://github.com/NguyenThanhDuyOfficial/car",
      },
    ],
    children: null,
  },
  {
    src: "/projects/odyssey.png",
    alt: "odyssey-screenshot",
    className: "col-span-8 col-start-3",
    title: "Odyssey",
    description: "This is some description",
    techStacks: [],
    links: [],
    children: null,
  },
  {
    src: "/projects/dotfile.png",
    alt: "dotfile-screenshot",
    className: "col-span-8",
    title: "Dotfile",
    description: "This is some description",
    techStacks: [],
    links: [],
    chillren: (
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
      ref={containerRef}
      className="flex flex-col md:grid grid-cols-12 gap-y-16"
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
