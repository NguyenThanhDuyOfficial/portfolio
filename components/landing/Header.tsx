"use client";

import Link from "next/link";
import { simpleNails } from "@/fonts/fonts";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ContactCard from "../contact/ContactCard";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-8 h-20 md:px-20 flex justify-between items-center bg-(--bg)">
        <p className={`${simpleNails.className} text-4xl md:text-4xl`}>Duy</p>
        <div className="hidden md:flex items-center gap-16 md:text-xl">
          <Link href="#projects" scroll={true}>
            Projects
          </Link>
          {/* <Link href="/about">About</Link> */}
          <Button onClick={() => setIsContactOpen(!isContactOpen)}>
            Contact
          </Button>
        </div>
        <Button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {!isOpen ? <Menu size={32} /> : <X size={32} />}
        </Button>
        {isOpen ? (
          <div className="w-full min-h-screen fixed top-20 left-0 z-100 bg-(--bg) flex flex-col items-center gap-8">
            <Link href="#projects" scroll={true}>
              Projects
            </Link>
            {/* <Link href="/about">About</Link> */}
            <Link href="/contact">Contact</Link>
            <Button onClick={() => setIsContactOpen(!isContactOpen)}>
              Contact
            </Button>
          </div>
        ) : (
          ""
        )}
      </header>

      <ContactCard
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
