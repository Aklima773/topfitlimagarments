"use client";
import { useEffect, useState } from "react";

export default function TypingHeading({
  children,
  textAlign ="text-left",
  speed = 100,
  deleteSpeed = 50,
  pause = 1200,
}) {
  const text = typeof children === "string" ? children : "";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && index > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, deleteSpeed);
    } else if (isDeleting && index === 0) {
      // Restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, deleteSpeed, pause]);

  return (
    <h1 className={`text-4xl text-accent font-semibold ${textAlign}`}>
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </h1>
  );
}
