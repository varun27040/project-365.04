"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type MomentCard = {
  number: string;
  emoji: string;
  title: string;
  subtitle: string;
  href: string;
};

const moments: MomentCard[] = [
  {
    number: "01",
    emoji: "📸",
    title: "Little Things",
    subtitle: "The tiny things that meant everything...",
    href: "/moments/little-things",
  },
  {
    number: "02",
    emoji: "🕰️",
    title: "Nostalgia",
    subtitle: "The moments we still look back on...",
    href: "/moments/nostalgia",
  },
  {
    number: "03",
    emoji: "🤍",
    title: "Why Did I?",
    subtitle: "The moments that make us say... why? 😂",
    href: "/moments/why-did-i",
  },
];

export default function MomentsPage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090914]">

      {/* BACKGROUND GLOW */}

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.18), transparent 30%), radial-gradient(circle at 80% 25%, rgba(139,92,246,0.18), transparent 30%), radial-gradient(circle at 50% 90%, rgba(236,72,153,0.12), transparent 35%)",
        }}
      />

      {/* FLOATING PARTICLES */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute text-pink-200/30"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 4 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            ✦
          </motion.span>
        ))}

      </div>

      {/* MAIN CONTENT */}

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
            className="text-center mb-12 sm:mb-16"
          >

            <p className="uppercase tracking-[5px] sm:tracking-[8px] text-pink-300 text-xs sm:text-sm">
              Chapter Four
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-5">
              Our Moments 💕
            </h1>

            <p className="text-gray-300 text-sm sm:text-base mt-5">
              Three little worlds.
              <br />
              A thousand memories. ✨
            </p>

          </motion.div>

          {/* MOMENT CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {moments.map((moment, index) => (

              <Link
                key={moment.number}
                href={moment.href}
                className="group"
              >

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    relative
                    min-h-[330px]
                    rounded-[32px]
                    overflow-hidden
                    border
                    border-white/10
                    bg-white/[0.06]
                    backdrop-blur-xl
                    p-7
                    flex
                    flex-col
                    justify-between
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    transition-all
                    duration-500
                    hover:border-pink-300/40
                    hover:shadow-[0_0_35px_rgba(236,72,153,0.25),0_20px_60px_rgba(0,0,0,0.25)]
                    active:border-pink-300/50
                    active:shadow-[0_0_45px_rgba(236,72,153,0.35),0_20px_60px_rgba(0,0,0,0.25)]
                  "
                >

                  {/* TOUCH / HOVER GLOW */}

                  <motion.div
                    className="
                      absolute
                      inset-0
                      rounded-[32px]
                      pointer-events-none
                    "
                    animate={{
                      opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      background:
                        "radial-gradient(circle at 50% 45%, rgba(236,72,153,0.22), transparent 65%)",
                    }}
                  />

                  {/* CARD GLOW */}

                  <motion.div
                    className="
                      absolute
                      -top-20
                      -right-20
                      w-48
                      h-48
                      rounded-full
                      bg-pink-500/20
                      blur-3xl
                      pointer-events-none
                      group-hover:bg-pink-500/30
                      group-active:bg-pink-500/35
                      transition-all
                      duration-500
                    "
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* NUMBER */}

                  <div className="relative z-10 flex justify-between items-center">

                    <span className="text-pink-300/70 text-xs tracking-[4px]">
                      {moment.number}
                    </span>

                    <span className="text-white/30 text-sm">
                      ↗
                    </span>

                  </div>

                  {/* EMOJI */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 4, -4, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      z-10
                      text-7xl
                      sm:text-8xl
                      text-center
                    "
                  >
                    {moment.emoji}
                  </motion.div>

                  {/* TEXT */}

                  <div className="relative z-10 text-center">

                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {moment.title}
                    </h2>

                    <p className="text-pink-200/60 text-xs sm:text-sm mt-3 leading-6">
                      {moment.subtitle}
                    </p>

                    {/* OPEN BUTTON */}

                    <div
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-pink-300/20
                        bg-pink-500/10
                        px-5
                        py-2
                        text-pink-100
                        text-xs
                        group-hover:bg-pink-500/20
                        group-active:bg-pink-500/25
                        group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]
                        group-active:shadow-[0_0_25px_rgba(236,72,153,0.4)]
                        transition-all
                        duration-300
                      "
                    >
                      Open
                      <span>→</span>
                    </div>

                  </div>

                </motion.div>

              </Link>

            ))}

          </div>

          {/* BOTTOM */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
            className="text-center mt-14"
          >

            <p className="text-pink-200/40 text-xs">
              Every little moment became part of us. 💗
            </p>

          </motion.div>

          {/* BACK */}

          <div className="flex justify-center mt-8">

            <Link href="/home">

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
                  backdrop-blur-md
                "
              >
                ← Back to Our Universe
              </motion.div>

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}