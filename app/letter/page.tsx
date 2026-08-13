"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import Background from "@/components/Background";

const letterLines = [
  "For My Beloved One, Piyuu ❤️",
  "",
  "Sometimes I still think about the first time we met.",
  "",
  
  "",
  "I didn’t know that you would become the person I’d want to tell",
  "everything to, annoy for absolutely no reason, laugh with over",
  "the dumbest things, and somehow still miss even after talking",
  "to you for hours.",
  "",
  "And look at us now...",
  "somehow we made it this far. ❤️",
  "",
  "I know we’re not perfect.",
  "We have our silly fights, our misunderstandings,",
  "our random mood swings, and probably enough",
  "“okay fine 😒” moments to fill an entire book. 😂",
  "",
  "But honestly, I wouldn’t trade what we have for something perfect.",
  "",
  "Because it’s ours. ❤️",
  "",
  "I want you to know one thing more than anything else:",
  "",
  "I’ll always support you.",
  "",
  "Whatever dream you decide to chase, whatever you want to become,",
  "whatever difficult day comes your way — I want to be the person",
  "who tells you, “You can do it. I’m here.”",
  "",
  "I may not always know the perfect thing to say.",
  "Sometimes I’ll probably say something stupid instead. 😂",
  "But I’ll always try to be there.",
  "",
  "I want to see you grow, achieve the things you dream about,",
  "laugh at your successes, and be there when things don’t go",
  "the way you planned.",
  "",
  "And if someday you look at yourself and think you aren’t doing enough,",
  "I hope you remember that there is someone who believes in you",
  "more than you realize.",
  "",
  "That person is me. ❤️",
  "",
  "From that first meeting until now, so many things have changed.",
  "",
  "But one thing hasn’t.",
  "",
  "I’m still really happy that I met you.",
  "",
  "And if I could go back to that first day knowing everything I know now...",
  "",
  "I’d still choose to meet you.",
  "",
  "Every single time. ❤️",
  "",
  "So yeah, Piyuu...",
  "",
  "Thank you for becoming such a beautiful part of my life.",
  "",
  "Keep being you.",
  "Keep annoying me.",
  "Keep laughing at my stupid jokes.",
  "Keep chasing your dreams.",
  "",
  "And whenever life gets difficult, remember that you don’t have",
  "to face everything alone.",
  "",
  "I’ll be there. 🫶",
];

function FloatingHearts() {
  const hearts = ["💗", "💕", "💖", "💘", "💝", "✨", "🌸"];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute text-xl sm:text-2xl"
          initial={{
            x: `${10 + index * 13}%`,
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-15vh",
            opacity: [0, 0.8, 0.8, 0],
            x: [
              `${10 + index * 13}%`,
              `${15 + index * 11}%`,
              `${7 + index * 14}%`,
            ],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 9 + index * 1.3,
            repeat: Infinity,
            delay: index * 1.2,
            ease: "easeInOut",
          }}
        >
          {heart}
        </motion.div>
      ))}
    </div>
  );
}

/* -------------------------------- */
/* SCROLL REVEAL LINE               */
/* -------------------------------- */

function ScrollRevealLine({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 35,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.65,
      }}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.015, 0.15),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-[1.8rem]"
    >
      {text}
    </motion.p>
  );
}

/* -------------------------------- */
/* PAGE                             */
/* -------------------------------- */

export default function LetterPage() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpened(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Background />

      <FloatingHearts />

      {/* MAIN CONTENT */}

      <div className="relative z-20 w-full px-4 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-3xl">

          {/* TOP TITLE */}

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-10 text-center sm:mb-14"
          >
            <p className="text-[10px] uppercase tracking-[4px] text-pink-300 sm:text-xs sm:tracking-[7px]">
              Project 365
            </p>

            <h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
              A Letter For You 💌
            </h1>

            <p className="mt-2 text-xs text-pink-200/70 sm:text-sm">
              Words that deserve to be remembered.
            </p>

            {/* SCROLL INDICATOR */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 flex flex-col items-center text-white/40"
            >
              <span className="text-[10px] uppercase tracking-[3px]">
                Scroll slowly
              </span>

              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="mt-2 text-lg"
              >
                ↓
              </motion.span>
            </motion.div>
          </motion.div>

          {/* LETTER */}

          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.94,
                  rotateX: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-2xl
                  p-5
                  sm:p-8
                  md:p-12
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,248,240,0.97), rgba(255,239,244,0.95))",
                  boxShadow:
                    "0 0 60px rgba(236,72,153,0.18), 0 25px 80px rgba(0,0,0,0.25)",
                }}
              >

                {/* PAPER GLOW */}

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.8), transparent 30%), radial-gradient(circle at 80% 90%, rgba(236,72,153,0.08), transparent 35%)",
                  }}
                />

                {/* PAPER CORNER */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="
                    absolute
                    right-0
                    top-0
                    h-20
                    w-20
                    sm:h-28
                    sm:w-28
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(220,190,195,0.25) 50%)",
                  }}
                />

                {/* LETTER CONTENT */}

                <div className="relative z-10">

                  {/* DATE */}

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="
                      mb-12
                      text-right
                      text-xs
                      text-gray-500
                      sm:text-sm
                    "
                    style={{
                      fontFamily:
                        "'Segoe Print', 'Comic Sans MS', cursive",
                    }}
                  >
                    One beautiful year... ✨
                  </motion.p>

                  {/* SCROLL REVEAL LETTER */}

                  <div
                    className="
                      text-base
                      leading-8
                      text-gray-800
                      sm:text-lg
                      sm:leading-9
                      md:text-xl
                    "
                    style={{
                      fontFamily:
                        "'Segoe Print', 'Comic Sans MS', cursive",
                    }}
                  >
                    {letterLines.map((line, index) => {

                      /* Empty lines create natural breathing space */

                      if (line === "") {
                        return (
                          <div
                            key={index}
                            className="h-7 sm:h-9"
                          />
                        );
                      }

                      return (
                        <ScrollRevealLine
                          key={index}
                          text={line}
                          index={index}
                        />
                      );
                    })}
                  </div>

                  {/* SIGNATURE */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className="
                      mt-14
                      text-right
                      text-2xl
                      text-pink-500
                      sm:text-3xl
                    "
                    style={{
                      fontFamily:
                        "'Segoe Print', 'Comic Sans MS', cursive",
                    }}
                  >
                    Always yours ❤️
                  </motion.div>
                </div>

                {/* LITTLE HEART */}

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    bottom-5
                    left-5
                    text-xl
                    sm:text-2xl
                  "
                >
                  💗
                </motion.div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* END OF LETTER */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-20 pb-10 text-center"
          >
            <div className="mb-5 text-3xl">
              💗
            </div>

            <p className="text-sm text-pink-100/60">
              You made it to the end...
            </p>

            <p className="mt-2 text-xs text-white/40">
              But our story isn't ending here. ✨
            </p>

            <Link
              href="/home"
              className="
                mt-7
                inline-block
                rounded-full
                border
                border-pink-300/30
                bg-white/10
                px-6
                py-3
                text-sm
                text-pink-100
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-105
                hover:bg-pink-400/20
              "
            >
              ← Back to Our Universe
            </Link>
          </motion.div>

        </div>
      </div>
    </main>
  );
}