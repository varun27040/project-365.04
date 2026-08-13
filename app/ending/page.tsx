"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const floatingHearts = [
  { emoji: "♡", left: "8%", top: "18%", delay: 0 },
  { emoji: "✦", left: "18%", top: "72%", delay: 1.2 },
  { emoji: "🤍", left: "86%", top: "22%", delay: 0.7 },
  { emoji: "♡", left: "78%", top: "70%", delay: 1.8 },
  { emoji: "✨", left: "30%", top: "12%", delay: 0.4 },
  { emoji: "🌸", left: "92%", top: "52%", delay: 1.5 },
  { emoji: "💗", left: "10%", top: "52%", delay: 2 },
  { emoji: "✧", left: "65%", top: "10%", delay: 1 },
];

export default function EndingPage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffafc] text-[#5b4650]">

      {/* ========================================================= */}
      {/* SOFT BACKGROUND                                            */}
      {/* ========================================================= */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {/* Warm pink glow */}
        <motion.div
          className="
            absolute
            -top-40
            -left-32
            w-[500px]
            h-[500px]
            rounded-full
            bg-pink-200/40
            blur-[100px]
          "
          animate={{
            x: [0, 30, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Lavender glow */}
        <motion.div
          className="
            absolute
            -right-40
            top-20
            w-[500px]
            h-[500px]
            rounded-full
            bg-purple-200/30
            blur-[110px]
          "
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom peach glow */}
        <motion.div
          className="
            absolute
            bottom-[-250px]
            left-1/2
            -translate-x-1/2
            w-[800px]
            h-[400px]
            rounded-full
            bg-rose-200/30
            blur-[100px]
          "
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating symbols */}
        {floatingHearts.map((item, index) => (
          <motion.span
            key={index}
            className="
              absolute
              text-pink-300/30
              text-xl
              sm:text-3xl
            "
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, 6, -4, 0],
              rotate: [-5, 5, -3, -5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.emoji}
          </motion.span>
        ))}

        {/* Soft light */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_65%)]
          "
        />
      </div>

      {/* ========================================================= */}
      {/* CONTENT                                                    */}
      {/* ========================================================= */}

      <div className="relative z-20 min-h-screen flex items-center justify-center px-5 py-12">

        <div className="w-full max-w-3xl">

          {/* TOP LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-center mb-8"
          >
            <p className="uppercase tracking-[5px] sm:tracking-[7px] text-pink-400/70 text-[10px] sm:text-xs">
              Our Little Story
            </p>
          </motion.div>

          {/* MAIN CARD */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
            }}
            className="
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-pink-200/50
              bg-white/65
              backdrop-blur-2xl
              px-6
              py-12
              sm:px-12
              sm:py-16
              text-center
              shadow-[0_25px_80px_rgba(244,114,182,0.15)]
            "
          >

            {/* Card glow */}

            <div
              className="
                absolute
                -top-32
                left-1/2
                -translate-x-1/2
                w-[350px]
                h-[350px]
                rounded-full
                bg-pink-200/35
                blur-[90px]
                pointer-events-none
              "
            />

            {/* Decorative corners */}

            <div className="absolute top-7 left-8 text-pink-300/40 text-lg">
              ✦
            </div>

            <div className="absolute top-10 right-9 text-purple-300/40 text-lg">
              ✧
            </div>

            <div className="absolute bottom-9 left-10 text-pink-300/30 text-lg">
              ♡
            </div>

            <div className="absolute bottom-8 right-10 text-purple-300/30 text-lg">
              ✦
            </div>

            {/* HEART */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative inline-block"
            >

              <motion.div
                className="
                  absolute
                  inset-[-35px]
                  rounded-full
                  bg-pink-200/40
                  blur-[35px]
                "
                animate={{
                  scale: [0.85, 1.15, 0.85],
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative text-7xl sm:text-8xl">
                💗
              </div>

            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="
                relative
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-bold
                mt-9
                text-[#604752]
              "
            >
              Okay Piyuu... ❤️
            </motion.h1>

            {/* MESSAGE */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              className="
                relative
                mt-8
                text-[#806a73]
                text-sm
                sm:text-base
                leading-8
              "
            >

              <p>
                I don't really know what to write here...
              </p>

              <p className="mt-3">
                because honestly, I don't want this page to feel like an ending.
              </p>

              <p className="mt-6">
                We've already made so many memories together.
                <br />
                Some planned, some random, and some only we understand 😂❤️
              </p>

              <p className="mt-6">
                We've had our fights, misunderstandings,
                <br />
                stupid arguments and all that...
              </p>

              <p className="mt-6 font-medium text-[#6d535e]">
                But somehow, we're still here.
              </p>

              <p className="mt-6">
                And that's what matters to me.
              </p>

              <p className="mt-7">
                I don't know exactly what the future looks like,
                <br />
                but I know that I want to experience it with you.
              </p>

            </motion.div>

            {/* LITTLE LIST */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
              className="
                mt-8
                text-[#765d67]
                text-sm
                sm:text-base
                leading-8
              "
            >

              <p>More memories. 🌸</p>
              <p>More laughs. 😂</p>
              <p>More stupid fights. 🤦‍♂️</p>
              <p>More random moments. ✨</p>
              <p>And many more days together. ❤️</p>

            </motion.div>

            {/* DIVIDER */}

            <div className="flex items-center justify-center gap-4 mt-9">

              <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-300/40" />

              <span className="text-pink-400/60">
                ✦
              </span>

              <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300/40" />

            </div>

            {/* FINAL MESSAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.6,
                duration: 0.9,
              }}
              className="mt-9"
            >

              <p className="text-[#604752] text-lg sm:text-xl font-semibold">
                So Piyuu...
              </p>

              <p className="mt-4 text-[#765d67] text-sm sm:text-base leading-8">
                This isn't the end of our story.
                <br />
                It's actually just the beginning.
              </p>

              <motion.p
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  mt-6
                  text-xl
                  sm:text-2xl
                  font-semibold
                  text-pink-500
                "
              >
                I'm not going anywhere. 🫶❤️
              </motion.p>

            </motion.div>

            {/* BOTTOM HEARTS */}

            <div className="mt-9 text-2xl">
              🌸 ✨ 🤍 ✨ 🌸
            </div>

          </motion.div>

          {/* BOTTOM TEXT */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="
              text-center
              text-[#9c858d]
              text-xs
              tracking-[2px]
              mt-7
            "
          >
            OUR STORY IS ONLY GETTING STARTED ✨
          </motion.p>

          {/* BUTTON */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.2,
              duration: 0.8,
            }}
            className="flex justify-center mt-7 pb-4"
          >

            <Link href="/home">

              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 12px 35px rgba(236,72,153,0.18)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  rounded-full
                  border
                  border-pink-300/40
                  bg-white/70
                  px-7
                  py-3
                  text-pink-500
                  text-sm
                  font-medium
                  backdrop-blur-xl
                  transition
                "
              >
                Back to our memories 💗
              </motion.div>

            </Link>

          </motion.div>

        </div>

      </div>

    </main>
  );
}