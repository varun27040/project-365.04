"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Memory = {
  emoji: string;
  title: string;
  text: string;
};

const memories: Memory[] = [
  {
    emoji: "😂",
    title: "Your Laugh",
    text: "your laugh",
  },
  {
    emoji: "💋",
    title: "Your Kiss",
    text: "your kiss",
  },
  {
    emoji: "🫶",
    title: "Your Hug",
    text: "your every hug i feel warm",
  },
  {
    emoji: "🧥",
    title: "Your Sweater",
    text: "your sweater",
  },
  {
    emoji: "🚶",
    title: "Your Walking Style",
    text: "your walking style",
  },
  {
    emoji: "✨",
    title: "Your Attitude",
    text: "your attitude",
  },
  {
    emoji: "🌸",
    title: "Your Cuteness",
    text: "your cuteness",
  },
  {
    emoji: "🤍",
    title: "Your Innocence",
    text: "your innocence",
  },
  {
    emoji: "👀",
    title: "Your Charming Eyes",
    text: "your charming eyes",
  },
  {
    emoji: "👃",
    title: "My Favourite",
    text: "your nose which is my fav",
  },
  {
    emoji: "💗",
    title: "A Little Thing I Love",
    text: "your belly",
  },
  {
    emoji: "😊",
    title: "Your Great Den",
    text: "your great den",
  },
  {
    emoji: "✨",
    title: "Your Little Expression",
    text: "you blinking your eyes",
  },
];

export default function LittleThingsPage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120914]">

      {/* BACKGROUND */}

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(236,72,153,0.20), transparent 30%), radial-gradient(circle at 85% 25%, rgba(168,85,247,0.18), transparent 30%), radial-gradient(circle at 50% 90%, rgba(244,114,182,0.12), transparent 35%)",
        }}
      />

      {/* FLOATING HEARTS */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {["♡", "💗", "✦", "♡", "✨", "💖", "✧", "🌸"].map(
          (emoji: string, index: number) => (
            <motion.span
              key={index}
              className="absolute text-pink-200/30 text-xl sm:text-2xl"
              style={{
                left: `${5 + index * 12}%`,
                top: `${15 + ((index * 19) % 70)}%`,
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [-8, 8, -8],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              {emoji}
            </motion.span>
          ),
        )}

      </div>

      {/* CONTENT */}

      <div className="relative z-20 min-h-screen px-5 py-12 sm:px-8">

        <div className="max-w-5xl mx-auto">

          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-center"
          >

            <p className="uppercase tracking-[5px] sm:tracking-[8px] text-pink-300 text-xs sm:text-sm">
              Moments • 01
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-5">
              Little Things 📸
            </h1>

            <p className="text-pink-100/60 text-sm sm:text-base mt-5 leading-7">
              The little things that seemed ordinary...
              <br />
              but somehow became special. 💗
            </p>

          </motion.div>

          {/* MEMORY CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-14">

            {memories.map((memory: Memory, index: number) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  rotate: 0,
                  scale: 1.02,
                }}
                className="
                  relative
                  rounded-2xl
                  bg-[#fff9f3]
                  p-5
                  sm:p-6
                  shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                  overflow-hidden
                "
              >

                {/* PAPER GLOW */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                  "
                  style={{
                    background:
                      "radial-gradient(circle at 90% 10%, rgba(236,72,153,0.10), transparent 30%)",
                  }}
                />

                {/* TOP */}

                <div className="relative flex items-center justify-between">

                  <span className="text-gray-400 text-xs tracking-[3px]">
                    0{index + 1}
                  </span>

                  <motion.span
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-2xl"
                  >
                    {memory.emoji}
                  </motion.span>

                </div>

                {/* TITLE */}

                <h2
                  className="
                    relative
                    text-gray-800
                    text-xl
                    sm:text-2xl
                    mt-8
                  "
                  style={{
                    fontFamily:
                      "'Segoe Print', 'Comic Sans MS', cursive",
                  }}
                >
                  {memory.title}
                </h2>

                {/* TEXT */}

                <p className="relative text-gray-600 text-sm sm:text-base leading-7 mt-4">
                  {memory.text}
                </p>

                {/* BOTTOM */}

                <div className="relative flex justify-end mt-7">

                  <span className="text-pink-400/60 text-xl">
                    ♡
                  </span>

                </div>

              </motion.div>

            ))}

          </div>

          {/* YOUR OWN MEMORIES */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mt-12
              rounded-3xl
              border
              border-pink-300/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-7
              sm:p-9
              text-center
            "
          >

            <div className="text-4xl">
              💌
            </div>

            <h2 className="text-white text-xl sm:text-2xl font-semibold mt-4">
              More little things...
            </h2>

            <p className="text-pink-100/50 text-sm mt-3 leading-7">
              This space is yours.
              <br />
              Add as many memories as you want.
            </p>

          </motion.div>

          {/* NAVIGATION */}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 pb-8">

            <Link href="/moments">

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  rounded-full
                  border
                  border-pink-300/20
                  bg-white/5
                  px-6
                  py-3
                  text-pink-100
                  text-sm
                "
              >
                ← Moments
              </motion.div>

            </Link>

            <Link href="/moments/nostalgia">

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-purple-600
                  px-7
                  py-3
                  text-white
                  text-sm
                  font-semibold
                "
              >
                Nostalgia →
              </motion.div>

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}