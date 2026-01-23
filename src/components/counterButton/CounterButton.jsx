"use client"; // if Next.js 13+ with app directory
import { useEffect, useState } from "react";

const CounterButton = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50); // updates every 50ms
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <div className="text-center flex flex-col items-center justify-center">
      <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{count.toLocaleString()}+</p>
      <p className="text-sm md:text-[16px] text-accent font-bold">{label}</p>
    </div>
  );
};

export default CounterButton;
