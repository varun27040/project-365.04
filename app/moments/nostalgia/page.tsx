"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type NostalgiaEntry = {
  year: string;
  emoji: string;
  title: string;
  text: string;
};

const nostalgiaEntries: NostalgiaEntry[] = [
  {
    year: "01",
    emoji: "🌱",
    title: "The First Time We Started Talking 16-8-2025",
    text: "I still remember when we first greeted each other. I was a little nervous and honestly scared to even put my hand on your shoulder. But somehow I found the courage, and that small moment became the beginning of something so beautiful.",
  },

  {
    year: "02",
    emoji: "💋",
    title: "Our First Kiss 19-8-2025",
    text: "We were both nervous and scared, but somehow we found the courage together. That moment felt magical and unforgettable. It became one of those memories that will always stay special in my heart.",
  },

  {
    year: "03",
    emoji: "👑",
    title: "The Day I Realized You Were My Queen (Freshers)",
    text: "Before I ever told you my feelings, I had already started seeing you differently. I felt something special about you, but I was scared because I didn't want to lose you as a friend. That day, when you looked at me, I felt like I truly mattered to you.",
  },

  {
    year: "04",
    emoji: "🎤",
    title: "Farewell Day",
    text: "One of the best days of my life. The memories, the responsibility, the happiness, and being there with you made that day unforgettable. I still remember taking care of everything and enjoying every little moment.",
  },

  {
    year: "05",
    emoji: "🌸",
    title: "Freshers Day 2026",
    text: "Another unforgettable chapter of our story. Hosting that day together created memories that I will always carry with me. It was a day filled with happiness, teamwork, and beautiful moments.",
  },

  {
    year: "06",
    emoji: "🏫",
    title: "The Beginning Days Of College",
    text: "Those days were different. I didn't come to college only to study... I came because I wanted to see you. Every day I waited to see your dress, your favourite colours, your hairstyle, your smile, your eyes, and your little expressions. I still remember even the small details like the shoes you used to wear. Those ordinary college days became some of the most precious memories of my life.",
  },

  {
    year: "07",
    emoji: "❤️",
    title: "Today And Forever",
    text: "Those starting days were beautiful, but these days with you are even more special. Thank you for becoming such an important part of my life. I love you so much Piyuu ❤️",
  },
];

export default function NostalgiaPage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0a14]">

      {/* BACKGROUND */}

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(129,140,248,0.18), transparent 30%), radial-gradient(circle at 80% 30%, rgba(236,72,153,0.16), transparent 30%), radial-gradient(circle at 50% 90%, rgba(168,85,247,0.14), transparent 35%)",
        }}
      />

      {/* SOFT STARS */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {["✦", "✧", "⋆", "✦", "♡", "✧", "⋆", "✦"].map(
          (star: string, index: number) => (
            <motion.span
              key={index}
              className="absolute text-purple-200/30 text-xl"
              style={{
                left: `${5 + index * 13}%`,
                top: `${10 + ((index * 23) % 80)}%`,
              }}
              animate={{
                opacity: [0.1, 0.7, 0.1],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              {star}
            </motion.span>
          ),
        )}

      </div>

      {/* CONTENT */}

      <div className="relative z-20 min-h-screen px-5 py-12 sm:px-8">

        <div className="max-w-4xl mx-auto">

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

            <p className="uppercase tracking-[5px] sm:tracking-[8px] text-purple-300 text-xs sm:text-sm">
              Moments • 02
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-5">
              Nostalgia 🕰️
            </h1>

            <p className="text-purple-100/60 text-sm sm:text-base mt-5 leading-7">
              Some moments belong to the past...
              <br />
              but somehow they never be forgeten.
            </p>

          </motion.div>

          {/* TIMELINE */}

          <div className="relative mt-16">

            {/* CENTER LINE */}

            <div
              className="
                absolute
                left-5
                sm:left-1/2
                top-0
                bottom-0
                w-px
                bg-gradient-to-b
                from-transparent
                via-purple-300/30
                to-transparent
                sm:-translate-x-1/2
              "
            />

            {/* ENTRIES */}

            <div className="space-y-12">

              {nostalgiaEntries.map(
                (entry: NostalgiaEntry, index: number) => {

                  const isRight = index % 2 === 0;

                  return (
                    <motion.div
                      key={entry.year}
                      initial={{
                        opacity: 0,
                        x: isRight ? 60 : -60,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="
                        relative
                        sm:grid
                        sm:grid-cols-2
                        sm:gap-12
                      "
                    >

                      {/* TIMELINE DOT */}

                      <div
                        className="
                          absolute
                          left-[9px]
                          sm:left-1/2
                          top-7
                          w-3
                          h-3
                          rounded-full
                          bg-purple-300
                          shadow-[0_0_20px_rgba(196,181,253,0.8)]
                          sm:-translate-x-1/2
                          z-10
                        "
                      />

                      {/* EMPTY SIDE */}

                      {isRight && (
                        <div className="hidden sm:block" />
                      )}

                      {/* CARD */}

                      <div
                        className={`
                          ml-12
                          sm:ml-0
                          ${
                            !isRight
                              ? "sm:col-start-1"
                              : "sm:col-start-2"
                          }
                        `}
                      >

                        <motion.div
                          whileHover={{
                            y: -6,
                            scale: 1.01,
                          }}
                          className="
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/[0.06]
                            backdrop-blur-xl
                            p-6
                            sm:p-7
                            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                          "
                        >

                          {/* TOP */}

                          <div className="flex items-center justify-between">

                            <span className="text-purple-300/60 text-xs tracking-[4px]">
                              {entry.year}
                            </span>

                            <motion.span
                              animate={{
                                y: [0, -5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                              }}
                              className="text-3xl"
                            >
                              {entry.emoji}
                            </motion.span>

                          </div>

                          {/* TITLE */}

                          <h2 className="text-white text-xl sm:text-2xl font-semibold mt-6">
                            {entry.title}
                          </h2>

                          {/* TEXT */}

                          <p className="text-purple-100/60 text-sm sm:text-base leading-7 mt-4">
                            {entry.text}
                          </p>

                          {/* DECORATION */}

                          <div className="mt-6 text-purple-300/30 text-sm">
                            ───────── ✦
                          </div>

                        </motion.div>

                      </div>

                    </motion.div>
                  );
                },
              )}

            </div>

          </div>

          {/* END MESSAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mt-16"
          >

            <div className="text-3xl">
              🌙 ✨ 💗
            </div>

            <p className="text-purple-100/50 text-sm sm:text-base mt-5 leading-7">
              We can't go back to those moments...
              <br />
              but we can always remember them.
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
                  border-purple-300/20
                  bg-white/5
                  px-6
                  py-3
                  text-purple-100
                  text-sm
                "
              >
                ← Moments
              </motion.div>

            </Link>

            <Link href="/moments/why-did-i">

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
                  from-purple-500
                  to-pink-600
                  px-7
                  py-3
                  text-white
                  text-sm
                  font-semibold
                "
              >
                Why Did I? →
              </motion.div>

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}