'use client'

import { simpleNails } from "@/fonts/fonts"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center
      ">
      <div className="flex flex-col gap-4 items-center">
        <p className={`${simpleNails.className} text-8xl text-[#a6adc8]`}>Nguyễn Thành Duy</p>
        <p className="text-2xl">Fullstack Developer</p>
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
