"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const text = textRef.current;
      const container = containerRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
      tl.to(".main-text", {
        opacity: 0.2,
        duration: 0.5,
        delay: 1,
        ease: "power2.out",
      })
        .fromTo(
          ".rotating-text",
          {
            opacity: 0,
            x: -1200,
            y: -1200,
            rotation: 720,
            scale: 0.5,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
        )
        .from(
          ".image-1",
          {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "+=0.6",
        )
        .from(
          ".image-2",
          {
            y: -300,
            opacity: 0,
            duration: 0.8,
            ease: "bounce.out",
          },
          "+=0.4",
        )
        .from(
          ".image-3",
          {
            rotation: 720,
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "power3:out",
          },
          "+=0.4",
        );
    },
    { scope: containerRef },
  );
  return (
    <footer
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center gap-16 "
    >
      <p className="rotating-text text-2xl md:order-2 font-medium text-center">
        "Wish you always have strength, wisdom and happiness."
      </p>
      <div className="relative md:order-1">
        <div className="main-text md:grid grid-cols-12 items-center text-6xl md:text-8xl py-3">
          <p className="col-start-5 col-span-7">Thank you</p>
          <p className="col-start-4 col-span-10">for</p>
          <p className="col-start-6 col-span-6">your time</p>
        </div>

        <div className="image-1 absolute inset-0 flex items-center justify-center">
          <Image
            src="/gifs/Golden-Goose-Cat-GIF.gif"
            alt="dance-cat-gif"
            width={200}
            height={200}
            className="object-cover rounded-xl"
          ></Image>
        </div>
      </div>
      <div className=" flex items-center justify-center gap-8 md:order-3">
        <div className="image-3 md:absolute top-120 left-0 ">
          <Image
            src="/gifs/Dance-Cat-GIF.gif"
            alt="dance-cat-gif"
            width={140}
            height={140}
            className="object-cover rounded-xl"
          ></Image>
        </div>
        <div className="image-2 md:absolute top-100 right-0">
          <Image
            src="/gifs/Dance-Dancing-GIF.gif"
            alt="dance-cat-gif"
            width={160}
            height={300}
            className="object-cover rounded-xl"
          ></Image>
        </div>
      </div>

      {/* <div className="md:hidden"> */}
      {/*   <p className="text-8xl">Thank you for your time</p> */}
      {/* </div> */}
    </footer>
  );
}
