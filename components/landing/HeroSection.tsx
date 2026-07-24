'use client'

import { simpleNails } from "@/fonts/fonts"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import FlyingLetters from "../animation/FlyingLetters"
import Typewriter from "../animation/TypeWriter"

export default function HeroSection() {

  return (
    <section className="min-h-screen max-w-screen flex flex-col justify-center items-center
      ">
      <div className="flex flex-col gap-4 items-center">
        <FlyingLetters
          text="Nguyễn Thành Duy"
          positions={[
            { x: -200, y: 20, rotation: -30 },
            { x: 400, y: 120, rotation: 30 },
            { x: 200, y: -200, rotation: -60 },
            { x: -200, y: -160, rotation: 60 },
            { x: -400, y: 0, rotation: 30 },
            { x: -200, y: 200, rotation: -30 },
            { x: 400, y: 200, rotation: -80 },
            { x: 320, y: -80, rotation: -60 },
            { x: 80, y: -40, rotation: -40 },
            { x: -200, y: -240, rotation: -20 },
            { x: 300, y: 60, rotation: -90 },
            { x: -700, y: 120, rotation: -70 },
            { x: 0, y: 0, rotation: -30 },
            { x: 300, y: -180, rotation: -60 },
            { x: -400, y: 240, rotation: -90 },
            { x: 300, y: 200, rotation: -10 },
          ]}
          delay={0.8}
          duration={1.5}
          stagger={0.1}
          className={`${simpleNails.className} text-8xl text-[#a6adc8]`}
        />
        <Typewriter
          texts={[
            "Who Am I?",
            "Can You Guess?",
            "I'm Full Stack Developer!!!",
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={1500}
          loop={false}
          delay={4000}
          className="text-2xl pt-4 "
        />
      </div>
      <div className="absolute bottom-0 w-full p-16 flex justify-between items-center">
        <div className="flex gap-8">
          <p>Say Hello</p>

          <div className="space-x-4">
            <Link href="/"><FontAwesomeIcon icon={faGithub} size="2xl"></FontAwesomeIcon></Link>
            <Link href="/"><FontAwesomeIcon icon={faLinkedin} size="2xl"></FontAwesomeIcon></Link>
          </div>
        </div>
        <div className="flex gap-16 items-center">
          <p className="max-w-84">Hey there, I make websites and apps that are user-friendly, high-performance, and secure.<br />What about you? What do you need?</p>
          <Button variant="default" className="bg-[#313244]">Contact Me</Button>
        </div>
      </div>
    </section >
  )
}
