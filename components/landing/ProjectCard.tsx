"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function ProjectCard({
  src,
  alt,
  className = "",
  title,
  description,
  techStacks = [],
  links = [],
  children,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      const image = imageRef.current;
      const info = infoRef.current;
      const container = containerRef.current;

      gsap.set(info, { opacity: 0, x: 20 });
      const handleMouseEnter = () => {
        setIsHovered(true);

        gsap.to(image, {
          width: "60%",
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(info, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
        });
      };
      const handleMouseLeave = () => {
        setIsHovered(false);

        gsap.to(image, {
          width: "100%",
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(info, {
          opacity: 0,
          x: 20,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
        });
      };
      container.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
      };
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className={`relative aspect-video ${className} bg-(--bg-light) rounded-xl`}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        ref={infoRef}
        style={{ opacity: 0 }}
        className="absolute top-0 right-0 h-full w-[40%] flex flex-col p-8"
      >
        <h3 className="text-2xl font-medium">{title}</h3>
        <p>{description}</p>
        <div>
          {techStacks.map((tech, index) => (
            <div key={index}>{tech.icon}</div>
          ))}
        </div>
        <div>
          <p>alo</p>
          {links.map((link) => (
            <div key={link.href}>
              <p className="text-nowrap overflow-hidden text-ellipsis">
                {link.type}
              </p>
              <Link href={link.href}>{link.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
