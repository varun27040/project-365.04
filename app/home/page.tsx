"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Background from "@/components/Background";
import GlassCard from "@/components/GlassCard";
import FloatingHearts from "@/components/FloatingHearts";

type ChapterKey = "letter" | "gallery" | "moments" | "future";

type Chapter = {
  key: ChapterKey;
  emoji: string;
  title: string;
  description: string;
  href: string;
  position: string;
};

const chapters: Chapter[] = [
  {
    key: "letter",
    emoji: "💌",
    title: "My Letter",
    description: "Words from my heart",
    href: "/letter",
    position:
      "top-[9%] left-[5%] sm:top-[10%] sm:left-[13%]",
  },
  {
    key: "gallery",
    emoji: "📸",
    title: "Our Gallery",
    description: "Little memories",
    href: "/gallery",
    position:
      "top-[9%] right-[5%] sm:top-[10%] sm:right-[13%]",
  },
  {
    key: "moments",
    emoji: "✨",
    title: "Beautiful Moments",
    description: "Moments we treasure",
    href: "/moments",
    position:
      "bottom-[24%] left-[5%] sm:bottom-[23%] sm:left-[14%]",
  },
  {
    key: "future",
    emoji: "🌠",
    title: "Our Future",
    description: "Dreams waiting ahead",
    href: "/future",
    position:
      "bottom-[24%] right-[5%] sm:bottom-[23%] sm:right-[14%]",
  },
];

function FloatingChapter({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const [opening, setOpening] = useState(false);
  const [stored, setStored] = useState(false);

  useEffect(() => {
    const alreadyOpened = localStorage.getItem(
      `project365-${chapter.key}`
    );

    if (alreadyOpened === "stored") {
      setStored(true);
    }
  }, [chapter.key]);

  const openChapter = () => {
    if (opening) return;

    if (stored) {
      router.push(chapter.href);
      return;
    }

    setOpening(true);

    localStorage.setItem(
      `project365-${chapter.key}`,
      "stored"
    );

    setTimeout(() => {
      setOpening(false);
      setStored(true);
    }, 1500);

    setTimeout(() => {
      router.push(chapter.href);
    }, 2300);
  };

  return (
    <div
      className={`absolute ${chapter.position} z-30`}
    >
      <motion.button
        type="button"
        onClick={openChapter}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onTouchStart={() => setActive(true)}
        onTouchEnd={() => setActive(false)}
        aria-label={chapter.title}
        className="
          relative
          flex
          flex-col
          items-center
          justify-center
          outline-none
          touch-manipulation
        "
        whileHover={!opening ? { scale: 1.12 } : {}}
        whileTap={!opening ? { scale: 0.92 } : {}}
      >
        {/* GLOW */}

        <motion.div
          className="
            absolute
            w-20
            h-20
            sm:w-24
            sm:h-24
            rounded-full
            pointer-events-none
          "
          animate={{
            opacity: active || opening ? 1 : 0,
            scale: active || opening ? 1.3 : 0.7,
          }}
          transition={{ duration: 0.35 }}
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.45), transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        {/* EMOJI */}

        <AnimatePresence mode="wait">
          {!opening && (
            <motion.div
              key="normal"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0, 5, 0],
                rotate: [0, 2, -2, 1, 0],
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                opacity: {
                  duration: 0.4,
                },
                scale: {
                  duration: 0.5,
                },
                y: {
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 5 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                text-5xl
                sm:text-7xl
                md:text-8xl
                select-none
              "
            >
              {chapter.emoji}
            </motion.div>
          )}

          {/* OPENING ANIMATION */}

          {opening && (
            <motion.div
              key="opening"
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: [
                  0,
                  -8,
                  8,
                  -7,
                  7,
                  0,
                  30,
                  65,
                  105,
                ],
                y: [
                  0,
                  -3,
                  3,
                  -3,
                  3,
                  0,
                  -35,
                  -20,
                  5,
                ],
                rotate: [
                  0,
                  -7,
                  7,
                  -6,
                  6,
                  0,
                  12,
                  25,
                  40,
                ],
                scale: [
                  1,
                  1.05,
                  1.08,
                  1.05,
                  1.08,
                  1,
                  1.08,
                  0.8,
                  0.25,
                ],
                opacity: [
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  0.7,
                  0,
                ],
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="
                text-5xl
                sm:text-7xl
                md:text-8xl
                select-none
              "
            >
              {chapter.emoji}
            </motion.div>
          )}
        </AnimatePresence>

        {/* TEXT */}

        <div
          className="
            relative
            mt-2
            min-h-[38px]
            flex
            items-center
            justify-center
          "
        >
          <AnimatePresence mode="wait">
            {!stored && !opening && (
              <motion.div
                key="chapter-info"
                initial={{
                  opacity: 0,
                  y: 8,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  absolute
                  whitespace-nowrap
                  pointer-events-none
                  text-center
                "
              >
                <p className="text-white font-semibold text-xs sm:text-base">
                  {chapter.title}
                </p>

                <p className="text-pink-200/80 text-[9px] sm:text-xs mt-1">
                  {chapter.description}
                </p>
              </motion.div>
            )}

            {stored && !opening && (
              <motion.div
                key="stored"
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  absolute
                  whitespace-nowrap
                  pointer-events-none
                  text-center
                "
              >
                <p className="text-pink-200 text-[9px] sm:text-xs">
                  Stored in Piyuu&apos;s Memory 💖
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}

function SurpriseEmoji() {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const [opening, setOpening] = useState(false);
  const [stored, setStored] = useState(false);

  useEffect(() => {
    const alreadyOpened = localStorage.getItem(
      "project365-surprise"
    );

    if (alreadyOpened === "stored") {
      setStored(true);
    }
  }, []);

  const openSurprise = () => {
    if (opening) return;

    if (stored) {
      router.push("/surprise");
      return;
    }

    setOpening(true);

    localStorage.setItem(
      "project365-surprise",
      "stored"
    );

    setTimeout(() => {
      setOpening(false);
      setStored(true);
    }, 1600);

    setTimeout(() => {
      router.push("/surprise");
    }, 2400);
  };

  return (
    <motion.div
      className="
        absolute
        left-1/2
        bottom-[3%]
        -translate-x-1/2
        z-40
      "
    >
      <motion.button
        type="button"
        onClick={openSurprise}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onTouchStart={() => setActive(true)}
        onTouchEnd={() => setActive(false)}
        aria-label="Final Surprise"
        className="
          relative
          flex
          flex-col
          items-center
          outline-none
          touch-manipulation
        "
        whileHover={!opening ? { scale: 1.13 } : {}}
        whileTap={!opening ? { scale: 0.92 } : {}}
      >
        {/* SURPRISE GLOW */}

        <motion.div
          className="
            absolute
            w-24
            h-24
            sm:w-32
            sm:h-32
            rounded-full
            pointer-events-none
          "
          animate={{
            opacity: active || opening ? 1 : 0.35,
            scale: active || opening ? 1.35 : 1,
          }}
          transition={{ duration: 0.5 }}
          style={{
            background:
              "radial-gradient(circle, rgba(250,204,21,0.4), rgba(236,72,153,0.15), transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* GIFT */}

        <motion.div
          animate={
            opening
              ? {
                  x: [
                    0,
                    -8,
                    8,
                    -6,
                    6,
                    0,
                    40,
                    80,
                    125,
                  ],
                  y: [
                    0,
                    -3,
                    3,
                    -3,
                    3,
                    0,
                    -45,
                    -25,
                    5,
                  ],
                  rotate: [
                    0,
                    -8,
                    8,
                    -7,
                    7,
                    0,
                    15,
                    30,
                    45,
                  ],
                  scale: [
                    1,
                    1.05,
                    1.08,
                    1.05,
                    1.08,
                    1,
                    1.1,
                    0.8,
                    0.2,
                  ],
                  opacity: [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    0.6,
                    0,
                  ],
                }
              : {
                  y: [0, -9, 0],
                  rotate: [0, 3, -3, 0],
                }
          }
          transition={
            opening
              ? {
                  duration: 1.6,
                  ease: "easeInOut",
                }
              : {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="
            relative
            text-6xl
            sm:text-8xl
            md:text-9xl
            select-none
          "
        >
          🎁
        </motion.div>

        {/* SURPRISE TEXT */}

        <div
          className="
            relative
            mt-2
            min-h-[38px]
            flex
            items-center
            justify-center
          "
        >
          <AnimatePresence mode="wait">
            {!stored && !opening && (
              <motion.div
                key="surprise-info"
                initial={{
                  opacity: 0,
                  y: 8,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  absolute
                  whitespace-nowrap
                  pointer-events-none
                  text-center
                "
              >
                <p className="text-white font-bold text-xs sm:text-base">
                  Final Surprise
                </p>

                <p className="text-yellow-200/80 text-[9px] sm:text-xs mt-1">
                  Something special awaits...
                </p>
              </motion.div>
            )}

            {stored && !opening && (
              <motion.div
                key="surprise-stored"
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  absolute
                  whitespace-nowrap
                  pointer-events-none
                  text-center
                "
              >
                <p className="text-pink-200 text-[9px] sm:text-xs">
                  Stored in Piyuu&apos;s Memory 💖
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Background />

      {/* FLOATING HEARTS */}

      <FloatingHearts />

      {/* MAIN CARD */}

      <div className="relative z-10 w-full flex justify-center px-3 sm:px-6">
        <GlassCard>
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
              duration: 1,
            }}
            className="
              relative
              w-full
              min-h-[650px]
              sm:min-h-[700px]
              flex
              flex-col
              items-center
              overflow-hidden
            "
          >
            {/* HEADER */}

            <div className="relative z-50 text-center px-2">

              <p className="text-pink-300 uppercase tracking-[4px] sm:tracking-[5px] md:tracking-[8px] text-[10px] sm:text-xs md:text-sm">
                Project 365
              </p>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mt-4 sm:mt-5">
                Welcome Piyuu 💖
              </h1>

              <p className="text-gray-300 text-xs sm:text-base md:text-xl mt-3 sm:mt-4 leading-6 sm:leading-7">
                Welcome to our little universe.
                <br />
                Every emoji holds a memory. ✨
              </p>

            </div>

            {/* 365 UNIVERSE */}

            <div
              className="
                relative
                w-full
                max-w-3xl
                h-[510px]
                sm:h-[590px]
                mt-3
                sm:mt-6
                z-20
              "
            >

              {/* ORBIT 1 */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-[47%]
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[210px]
                  h-[210px]
                  sm:w-[340px]
                  sm:h-[340px]
                  rounded-full
                  border
                  border-pink-300/10
                  pointer-events-none
                "
              />

              {/* ORBIT 2 */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-[47%]
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[280px]
                  h-[280px]
                  sm:w-[440px]
                  sm:h-[440px]
                  rounded-full
                  border
                  border-purple-300/10
                  pointer-events-none
                "
              />

              {/* CENTER */}

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-[47%]
                  -translate-x-1/2
                  -translate-y-1/2
                  z-20
                  w-28
                  h-28
                  sm:w-40
                  sm:h-40
                  rounded-full
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-pink-300/30
                "
                style={{
                  boxShadow:
                    "0 0 45px rgba(236,72,153,0.25)",
                }}
              >

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="text-2xl sm:text-4xl"
                >
                  💖
                </motion.div>

                <p className="text-white font-bold text-xs sm:text-sm mt-1 sm:mt-2">
                  365
                </p>

                <p className="text-pink-200 text-[8px] sm:text-xs">
                  Our Universe
                </p>

              </motion.div>

              {/* FLOATING STARS */}

              <motion.span
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-[5%] left-1/2 text-pink-300 text-xl"
              >
                ✦
              </motion.span>

              <motion.span
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute top-[35%] left-[2%] text-purple-300 text-lg"
              >
                ✦
              </motion.span>

              <motion.span
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                }}
                className="absolute top-[38%] right-[2%] text-cyan-300 text-lg"
              >
                ✦
              </motion.span>

              <motion.span
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                }}
                className="absolute bottom-[25%] left-[20%] text-pink-200 text-sm"
              >
                ✦
              </motion.span>

              <motion.span
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.7,
                  repeat: Infinity,
                }}
                className="absolute bottom-[25%] right-[20%] text-purple-200 text-sm"
              >
                ✦
              </motion.span>

              {/* CHAPTERS */}

              {chapters.map((chapter, index) => (
                <FloatingChapter
                  key={chapter.key}
                  chapter={chapter}
                  index={index}
                />
              ))}

              {/* FINAL SURPRISE */}

              <SurpriseEmoji />

            </div>
          </motion.div>
        </GlassCard>
      </div>
    </main>
  );
}