import { useCallback, useEffect, useRef, useState } from "react";

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: UseTypewriterOptions) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const wordIndex = useRef(0);
  const charIndex = useRef(0);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex.current % words.length]!;

    if (!isDeleting) {
      charIndex.current++;
      setText(currentWord.slice(0, charIndex.current));

      if (charIndex.current === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      charIndex.current--;
      setText(currentWord.slice(0, charIndex.current));

      if (charIndex.current === 0) {
        setIsDeleting(false);
        wordIndex.current = (wordIndex.current + 1) % words.length;
      }
    }
  }, [words, isDeleting, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, tick, typingSpeed, deletingSpeed]);

  return text;
}
