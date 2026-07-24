import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);
interface Position {
  x: number;
  y: number;
  rotation: number;
}

interface FlyingLettersProps {
  text: string;
  positions?: Position[];
  duration?: number;
  stagger?: number;
  className?: string;
  onComplete?: () => void;
  delay: number
}

export default function FlyingLetters({
  text,
  positions = [
    { x: -300, y: -200, rotation: -45 },
    { x: 400, y: -150, rotation: 30 },
    { x: -350, y: 100, rotation: -15 },
    { x: 300, y: 250, rotation: 60 },
    { x: -200, y: -300, rotation: -60 },
  ],
  duration = 0.8,
  stagger = 0.08,
  className = '',
  onComplete,
  delay = 0
}): FlyingLettersProps {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const setLetterRef = (index: number) => (el: HTMLSpanElement | null) => {
    if (el) {
      lettersRef.current[index] = el;
    }
  };

  useGSAP(() => {
    if (lettersRef.current.length !== text.length) return;

    const letters = lettersRef.current;

    letters.forEach((letter, i) => {
      const pos = positions[i % positions.length]
      gsap.set(letter, {
        x: pos.x,
        y: pos.y,
        rotation: pos.rotation,
        opacity: 0,
        scale: 0.5
      });
    });
    const state = Flip.getState(letters);

    letters.forEach((letter) => {
      gsap.set(letter, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        clearProps: "all"
      });
    });

    Flip.from(state, {
      duration: duration,
      ease: "power3.inOut",
      stagger: stagger,
      delay: delay,
      onComplete: () => {
        if (onComplete) {
          onComplete
        }
      }
    });
  }, { scope: containerRef, dependencies: [text, positions, duration, stagger, delay] })

  return (
    <div ref={containerRef}
      className={`flex justify-center items-center ${className}`}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          ref={setLetterRef(index)}
          className="inline-block"
          style={{
            opacity: 0
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}
