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
  ariaLabel,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const github = links.find((item) => item.type === "Github");
  const href = github?.href;

  useGSAP(
    () => {
      const image = imageRef.current;
      const info = infoRef.current;
      const container = containerRef.current;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
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
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );
  return (
    <>
      <div
        ref={containerRef}
        className={`relative aspect-video ${className} bg-(--bg-light) rounded-xl w-full`}
      >
        <Link
          href={href}
          className="absolute inset-0 z-50 w-full h-full block md:hidden"
          aria-label={ariaLabel}
        ></Link>
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        <div
          ref={infoRef}
          style={{ opacity: 0 }}
          className="hidden md:flex absolute top-0 right-0 h-full w-[40%] flex-col p-8 justify-between"
        >
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-medium">{title}</h3>
              <p className="text-(--text-muted)">{description}</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {techStacks.map((tech, index) => (
                <Link key={index} href={tech.url} aria-label="go to Tech Page">
                  {tech.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            {links.map((link) => (
              <div key={link.href} className="flex gap-4">
                <Link
                  aria-label={ariaLabel}
                  href={link.href}
                  className="text-nowrap text-ellipsis overflow-hidden"
                >
                  {link.type}:{" "}
                  <span className="underline text-blue-400 hover:text-blue-500 active:text-blue-600">
                    {link.title}
                  </span>{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
