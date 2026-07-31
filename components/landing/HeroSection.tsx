"use client";

import { simpleNails } from "@/fonts/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FlyingLetters from "../animation/FlyingLetters";
import Typewriter from "../animation/TypeWriter";
import SocialLinks from "../ui/socialLinks";
import { useState } from "react";
import ContactCard from "../contact/ContactCard";

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <section
        className="min-h-[calc(100vh-4rem)] md:min-h-screen py-12 md:py-4 gap-8 md:gap-16 flex flex-col justify-end items-center
      "
      >
        <div className="flex-1 flex flex-col gap-8 w-full justify-end items-start">
          <div>
            <FlyingLetters
              text="Nguyễn Thành Duy"
              positions={[
                { x: 4, y: -360, rotation: -60 }, //N
                { x: 280, y: -120, rotation: 80 }, //g
                { x: 80, y: -50, rotation: -30 }, //u
                { x: -40, y: -160, rotation: 60 }, //y
                { x: 160, y: -320, rotation: 30 }, //e
                { x: 20, y: -210, rotation: -30 }, //n
                { x: 0, y: 0, rotation: 0 }, //
                { x: -80, y: -100, rotation: 80 }, //T
                { x: 80, y: -200, rotation: -30 }, //h
                { x: -90, y: -260, rotation: 60 }, //a
                { x: 80, y: -50, rotation: 30 }, //n
                { x: -30, y: -120, rotation: -30 }, //h
                { x: 0, y: 0, rotation: 30 },
                { x: 40, y: -240, rotation: 60 }, //D
                { x: -140, y: -340, rotation: 30 }, //u
                { x: -280, y: -70, rotation: -30 }, //y
              ]}
              delay={2}
              duration={0.3}
              stagger={0.2}
              className={`md:hidden text-5xl md:text-7xl font-bold ${simpleNails.className}`}
            />

            <FlyingLetters
              text="Nguyễn Thành Duy"
              positions={[
                { x: 1010, y: -210, rotation: -30 }, //N
                { x: 40, y: -240, rotation: 30 }, //g
                { x: 1100, y: -60, rotation: -60 }, //u
                { x: -400, y: -80, rotation: 60 }, //y
                { x: 720, y: -60, rotation: 30 }, //e
                { x: 840, y: 80, rotation: -30 }, //n
                { x: 0, y: 0, rotation: -80 }, //
                { x: 160, y: -240, rotation: -60 }, //T
                { x: 320, y: -160, rotation: -40 }, //h
                { x: -40, y: -100, rotation: -20 }, //a
                { x: 250, y: -20, rotation: -90 }, //n
                { x: 840, y: 80, rotation: -70 }, //h
                { x: 0, y: 0, rotation: -30 }, //
                { x: 340, y: -220, rotation: -60 }, //D
                { x: 320, y: 80, rotation: -90 }, //u
                { x: 1100, y: 100, rotation: -10 }, //y
              ]}
              delay={2}
              duration={0.3}
              stagger={0.2}
              className={`hidden text-5xl md:text-7xl font-bold ${simpleNails.className}  md:block`}
            />
          </div>
          {/* <Typewriter */}
          {/*   texts={["Who Am I?", "Can You Guess?", "I'm Full Stack Developer!!!"]} */}
          {/*   typingSpeed={100} */}
          {/*   deletingSpeed={50} */}
          {/*   pauseDuration={1500} */}
          {/*   loop={false} */}
          {/*   delay={4000} */}
          {/*   className="text-2xl pt-4 " */}
          {/* /> */}
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
            <Button
              variant="default"
              size="lg"
              className="px-4 h-12"
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </section>

      {isContactOpen && (
        <ContactCard
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      )}
    </>
  );
}
