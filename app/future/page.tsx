"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type FutureCard = {
  number: string;
  emoji: string;
  title: string;
  subtitle: string;
  href: string;
};

const futureCards: FutureCard[] = [
  {
    number: "01",
    emoji: "🌱",
    title: "Ikigai & Our Rules",
    subtitle: "What gives us meaning and the little rules we keep. ✨",
    href: "/future/ikigai-rules",
  },
  {
    number: "02",
    emoji: "💭",
    title: "Want to Know?",
    subtitle: "A few funny questions about our future... 👀",
    href: "/future/want-to-know",
  },
];

export default function FuturePage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* ===================================================== */}
      {/* FUTURE BACKGROUND — MIDNIGHT COSMIC HORIZON */}
      {/* ===================================================== */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {/* Deep space base */}
        <div className="absolute inset-0 bg-[#050816]" />

        {/* Top blue atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 8%, rgba(59,130,246,0.24), transparent 30%), radial-gradient(circle at 12% 55%, rgba(30,64,175,0.18), transparent 32%), radial-gradient(circle at 88% 65%, rgba(124,58,237,0.16), transparent 32%)",
          }}
        />

        {/* Soft horizon glow */}
        <motion.div
          className="
            absolute
            left-1/2
            bottom-[-220px]
            -translate-x-1/2
            w-[850px]
            h-[450px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Stars */}
        <div className="absolute inset-0">

          {[
            ["4%", "14%"],
            ["9%", "72%"],
            ["15%", "31%"],
            ["21%", "84%"],
            ["28%", "18%"],
            ["34%", "62%"],
            ["42%", "27%"],
            ["49%", "78%"],
            ["56%", "11%"],
            ["63%", "44%"],
            ["70%", "82%"],
            ["77%", "24%"],
            ["84%", "57%"],
            ["91%", "17%"],
            ["96%", "70%"],
          ].map(([left, top], index) => (
            <motion.span
              key={index}
              className="absolute text-blue-200 text-sm sm:text-base"
              style={{
                left,
                top,
              }}
              animate={{
                opacity: [0.15, 0.9, 0.15],
                scale: [0.7, 1.25, 0.7],
              }}
              transition={{
                duration: 2.5 + index * 0.2,
                repeat: Infinity,
                delay: index * 0.18,
                ease: "easeInOut",
              }}
            >
              {index % 3 === 0 ? "✦" : "·"}
            </motion.span>
          ))}

        </div>

        {/* Shooting star */}
        <motion.div
          className="
            absolute
            top-[18%]
            left-[-15%]
            w-36
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-blue-200
            to-transparent
            rotate-[25deg]
            opacity-0
          "
          animate={{
            x: ["0vw", "125vw"],
            y: [0, 55],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        />

        {/* Second tiny shooting star */}
        <motion.div
          className="
            absolute
            top-[38%]
            left-[-10%]
            w-20
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-indigo-200
            to-transparent
            rotate-[20deg]
            opacity-0
          "
          animate={{
            x: ["0vw", "120vw"],
            y: [0, 35],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 13,
            delay: 4,
            ease: "easeOut",
          }}
        />

        {/* Center atmospheric light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[350px]
            h-[350px]
            rounded-full
            bg-blue-400/5
            blur-[100px]
          "
        />

      </div>


      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

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

            <p className="uppercase tracking-[6px] text-blue-300 text-xs sm:text-sm">
              Chapter Five
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5">
              Our Future 🌠
            </h1>

            <p className="text-blue-100/60 text-sm sm:text-base mt-5 leading-7">
              The things we dream about,
              <br />
              the things we wonder about,
              <br />
              and the little things that make our future ours. ✨
            </p>

          </motion.div>


          {/* FUTURE CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {futureCards.map(
              (card: FutureCard, index: number) => (

                <Link
                  key={card.number}
                  href={card.href}
                  className="group"
                >

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 60,
                      scale: 0.92,
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
                      scale: 1.025,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      relative
                      min-h-[380px]
                      rounded-[36px]
                      overflow-hidden
                      border
                      border-white/10
                      bg-white/[0.055]
                      backdrop-blur-2xl
                      p-8
                      sm:p-10
                      flex
                      flex-col
                      justify-between
                      shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                      transition-all
                      duration-500
                      group-hover:border-blue-300/40
                      group-hover:shadow-[0_0_45px_rgba(59,130,246,0.22),0_25px_80px_rgba(0,0,0,0.35)]
                    "
                  >

                    {/* CARD GLOW */}

                    <motion.div
                      className="
                        absolute
                        -top-24
                        -right-24
                        w-64
                        h-64
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                        pointer-events-none
                      "
                      animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* NUMBER */}

                    <div className="relative flex justify-between items-center">

                      <span className="text-blue-300/60 text-xs tracking-[5px]">
                        {card.number}
                      </span>

                      <span className="text-white/30">
                        ↗
                      </span>

                    </div>


                    {/* EMOJI */}

                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 4, -4, 0],
                      }}
                      transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        relative
                        text-7xl
                        sm:text-8xl
                        text-center
                      "
                    >
                      {card.emoji}
                    </motion.div>


                    {/* TEXT */}

                    <div className="relative text-center">

                      <h2 className="text-2xl sm:text-3xl font-bold">
                        {card.title}
                      </h2>

                      <p className="text-blue-100/60 text-sm mt-4 leading-6">
                        {card.subtitle}
                      </p>


                      {/* OPEN BUTTON */}

                      <div
                        className="
                          mt-7
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-blue-300/20
                          bg-blue-500/10
                          px-6
                          py-2.5
                          text-blue-100
                          text-sm
                          transition-all
                          duration-300
                          group-hover:border-blue-300/50
                          group-hover:bg-blue-500/20
                          group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
                        "
                      >
                        Explore
                        <span>→</span>
                      </div>

                    </div>

                  </motion.div>

                </Link>

              ),
            )}

          </div>


          {/* SMALL MESSAGE */}

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

            <p className="text-blue-200/40 text-xs sm:text-sm">
              The future is still unwritten... let's write it together. 💫
            </p>

          </motion.div>


          {/* BACK */}

          <div className="flex justify-center mt-8 pb-8">

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
                  border-blue-300/20
                  bg-white/5
                  px-6
                  py-3
                  text-blue-100
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