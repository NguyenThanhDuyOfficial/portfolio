"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import ContactCard from "../contact/ContactCard";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex flex-col">
      <div className="fixed bottom-10 right-10 z-99">
        <Button onClick={() => setIsOpen(!isOpen)}>Contact</Button>
      </div>
      <ContactCard isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
