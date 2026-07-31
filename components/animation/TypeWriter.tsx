"use client";
import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  loop?: boolean;
  onComplete?: () => void;
  delay: number;
}

export default function Typewriter({
  texts = ["Who Am I?", "Nguyễn Thành Duy", "Developer"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className = "",
  loop = true,
  onComplete,
  delay = 0,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReady, setIsReady] = useState(delay === 0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const stateRef = useRef({ isDeleting, currentIndex, displayText });

  useEffect(() => {
    stateRef.current = { isDeleting, currentIndex, displayText };
  }, [isDeleting, currentIndex, displayText]);

  useEffect(() => {
    if (delay === 0) {
      setIsReady(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const animate = () => {
    const {
      isDeleting: isDel,
      currentIndex: idx,
      displayText: text,
    } = stateRef.current;
    const fullText = texts[idx];

    if (isDel) {
      if (text.length > 0) {
        setDisplayText(text.slice(0, -1));
        timeoutRef.current = setTimeout(animate, deletingSpeed);
      } else {
        const nextIndex = (idx + 1) % texts.length;

        if (idx === texts.length - 1 && !loop) {
          onComplete?.();
          return;
        }

        setCurrentIndex(nextIndex);
        setIsDeleting(false);
        timeoutRef.current = setTimeout(animate, typingSpeed);
      }
      return;
    }

    if (text.length < fullText.length) {
      setDisplayText(fullText.slice(0, text.length + 1));
      timeoutRef.current = setTimeout(animate, typingSpeed);
    } else {
      if (idx === texts.length - 1 && !loop) {
        onComplete?.();
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        timeoutRef.current = setTimeout(animate, deletingSpeed);
      }, pauseDuration);
    }
  };

  useEffect(() => {
    if (!isReady) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(animate, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [texts, typingSpeed, deletingSpeed, pauseDuration, loop, isReady]);
  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <span className="inline-block w-[3px] h-[1.2em] bg-current ml-1 animate-blink" />
    </div>
  );
}
