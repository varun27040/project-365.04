"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stars = [
  { left: "7%", top: "12%", size: "8px", delay: 0 },
  { left: "18%", top: "25%", size: "5px", delay: 1.2 },
  { left: "31%", top: "9%", size: "6px", delay: 0.5 },
  { left: "43%", top: "18%", size: "4px", delay: 1.8 },
  { left: "56%", top: "8%", size: "7px", delay: 0.8 },
  { left: "69%", top: "22%", size: "5px", delay: 1.5 },
  { left: "82%", top: "11%", size: "8px", delay: 0.3 },
  { left: "92%", top: "32%", size: "4px", delay: 2 },
  { left: "12%", top: "48%", size: "5px", delay: 1 },
  { left: "27%", top: "63%", size: "7px", delay: 2.2 },
  { left: "73%", top: "58%", size: "5px", delay: 0.7 },
  { left: "88%", top: "71%", size: "7px", delay: 1.7 },
  { left: "5%", top: "84%", size: "4px", delay: 0.4 },
  { left: "38%", top: "88%", size: "6px", delay: 1.4 },
  { left: "61%", top: "82%", size: "4px", delay: 2.3 },
  { left: "95%", top: "91%", size: "6px", delay: 0.9 },
];

const floatingThings = [
  { emoji: "♡", left: "8%", top: "35%", delay: 0 },
  { emoji: "✦", left: "17%", top: "72%", delay: 1 },
  { emoji: "💗", left: "85%", top: "38%", delay: 1.8 },
  { emoji: "✧", left: "76%", top: "76%", delay: 0.7 },
  { emoji: "♡", left: "91%", top: "58%", delay: 2 },
  { emoji: "✨", left: "25%", top: "84%", delay: 1.4 },
];

export default function SurprisePage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03020a] text-white">
      {/* BACKGROUND */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(168,85,247,0.15), transparent 28%), radial-gradient(circle at 20% 20%, rgba(236,72,153,0.14), transparent 30%), radial-gradient(circle at 82% 18%, rgba(99,102,241,0.16), transparent 30%), linear-gradient(180deg, #05030d 0%, #080512 45%, #020107 100%)",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] rounded-full bg-pink-500/[0.07] blur-[120px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/[0.10] blur-[130px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-pink-500/[0.08] blur-[120px]"
          animate={{
            scaleX: [1, 1.25, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {stars.map((star, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 12px rgba(255,255,255,0.8)",
            }}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2.5 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}

        {floatingThings.map((item, index) => (
          <motion.span
            key={index}
            className="absolute text-pink-200/20 text-xl sm:text-3xl"
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 8, -5, 0],
              rotate: [-8, 8, -5, -8],
              opacity: [0.1, 0.45, 0.1],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.emoji}
          </motion.span>
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      {/* CONTENT */}

      <div className="relative z-20 min-h-screen flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-10"
          >
            <p className="uppercase tracking-[6px] text-pink-300/70 text-[10px] sm:text-xs">
              One Last Little Secret
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.045] backdrop-blur-2xl px-6 py-12 sm:px-12 sm:py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative inline-block"
            >
              <div className="relative text-7xl sm:text-8xl">🎁</div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-10 bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent">
              Your surprise is coming...
            </h1>

            <div className="text-pink-100/65 text-sm sm:text-base leading-8 mt-8">
              <p>Not today. Not here. 👀</p>
              <p className="mt-2">You'll have to wait a few more days.</p>

              <p className="mt-6">
                Because your{" "}
                <span className="text-pink-200 font-semibold">
                  real birthday surprise
                </span>{" "}
                is waiting for you. ❤️
              </p>

              <p className="mt-7 text-white/80">And trust me...</p>

              <p className="mt-2 text-xl sm:text-2xl font-semibold text-pink-200">
                It's worth the wait. 😉✨
              </p>
            </div>

            {/* BUTTONS */}

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link href="/home">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex rounded-full border border-pink-300/20 bg-white/[0.06] px-8 py-3.5 text-pink-100 text-sm"
                >
                  I'll wait... 🥹
                </motion.div>
              </Link>

              <Link href="/ending">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 35px rgba(236,72,153,0.35)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3.5 text-white text-sm font-semibold"
                >
                  Our Story Continues ♾️ →
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <p className="text-center text-white/20 text-xs tracking-[3px] mt-8">
            SOME SURPRISES ARE BETTER WHEN THEY ARE NOT SPOILED
          </p>
        </div>
      </div>
    </main>
  );
}