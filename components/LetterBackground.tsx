"use client";

import { motion } from "framer-motion";

export default function LetterBackground() {
  const letters = ["✉️", "💌", "📜", "✨"];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200">

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-40"
          initial={{
            y: "100vh",
            x: Math.random() * 100 + "%",
          }}
          animate={{
            y: "-20vh",
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          {letters[i % letters.length]}
        </motion.div>
      ))}

    </div>
  );
}