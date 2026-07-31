"use client";

import { simpleNails } from "@/fonts/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FlyingLetters from "../animation/FlyingLetters";
import Typewriter from "../animation/TypeWriter";
import SocialLinks from "../ui/socialLinks";

export default function HeroSection() {
  return (
    <section
      className="min-h-[calc(100vh-4rem)] md:min-h-screen py-12 md:py-4 gap-8 md:gap-16 flex flex-col justify-end items-center
      "
    >
      <div className="flex-1 flex flex-col gap-8 w-full justify-end ">
        {/* <FlyingLetters */}
        {/*   text="Nguyễn Thành Duy" */}
        {/*   positions={[ */}
        {/*     { x: -200, y: 20, rotation: -30 }, */}
        {/*     { x: 400, y: 120, rotation: 30 }, */}
        {/*     { x: 200, y: -200, rotation: -60 }, */}
        {/*     { x: -200, y: -160, rotation: 60 }, */}
        {/*     { x: -400, y: 0, rotation: 30 }, */}
        {/*     { x: -200, y: 200, rotation: -30 }, */}
        {/*     { x: 400, y: 200, rotation: -80 }, */}
        {/*     { x: 320, y: -80, rotation: -60 }, */}
        {/*     { x: 80, y: -40, rotation: -40 }, */}
        {/*     { x: -200, y: -240, rotation: -20 }, */}
        {/*     { x: 300, y: 60, rotation: -90 }, */}
        {/*     { x: -700, y: 120, rotation: -70 }, */}
        {/*     { x: 0, y: 0, rotation: -30 }, */}
        {/*     { x: 300, y: -180, rotation: -60 }, */}
        {/*     { x: -400, y: 240, rotation: -90 }, */}
        {/*     { x: 300, y: 200, rotation: -10 }, */}
        {/*   ]} */}
        {/*   delay={0.8} */}
        {/*   duration={1.5} */}
        {/*   stagger={0.1} */}
        {/*   className={`${simpleNails.className} text-8xl text-[#a6adc8]`} */}
        {/* /> */}
        {/* <Typewriter */}
        {/*   texts={["Who Am I?", "Can You Guess?", "I'm Full Stack Developer!!!"]} */}
        {/*   typingSpeed={100} */}
        {/*   deletingSpeed={50} */}
        {/*   pauseDuration={1500} */}
        {/*   loop={false} */}
        {/*   delay={4000} */}
        {/*   className="text-2xl pt-4 " */}
        {/* /> */}
        <p
          className={`text-5xl md:text-7xl font-bold ${simpleNails.className}`}
        >
          Nguyễn Thành Duy
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-xl md:text-2xl">Fullstack Developer</p>
          <p className="text-xl md:text-2xl">
            Who bring Start to Earth using Software.
          </p>
        </div>
      </div>
      <div className="w-full md:pb-12 flex justify-between items-center">
        <div className="flex flex-col md:flex-row gap-4">
          <p>Say Hello</p>
          <SocialLinks></SocialLinks>
        </div>
        <div className="flex gap-16 items-center">
          <p className="max-w-84 hidden md:block">
            Hey there, I make websites and apps that are user-friendly,
            high-performance, and secure.
            <br />
            What about you? What do you need?
          </p>
          <Button variant="default" size="lg" className="px-4 h-12">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
}
