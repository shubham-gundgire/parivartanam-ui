"use client";

import { useState, useEffect } from "react";

const quotes = [
  "Discipline is the bridge between goals and accomplishment.",
  "Success isn't owned, it's rented. And rent is due every day.",
  "The pain of discipline is nothing compared to the pain of regret.",
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center max-w-4xl px-8 leading-tight transition-opacity duration-500">
        {quotes[currentQuote]}
      </h1>
    </main>
  );
}
