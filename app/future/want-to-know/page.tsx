"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Question = {
  emoji: string;
  question: string;
  options: string[];
};

const questions: Question[] = [
  {
    emoji: "💍",
    question: "Do you want to marry me someday?",
    options: [
      "💖 Obviously, why are you asking?",
      "😏 Yes, but I want a big wedding",
    ],
  },
  {
    emoji: "❤️",
    question: 'Who is going to say "I love you" first after a fight?',
    options: [
      "🥺 Me, because I can't stay mad",
      "😤 You, because you started it",
    ],
  },
  {
    emoji: "✈️",
    question: "Where should we go for our first big trip?",
    options: [
      "🌎 Somewhere we've never been",
      "🌊 Somewhere with beaches and zero responsibilities",
    ],
  },
  {
    emoji: "😂",
    question: "Who will be more annoying in the future?",
    options: [
      "😌 Obviously you",
      "🤣 Obviously me",
    ],
  },
  {
    emoji: "🥶",
    question: "Who will steal the blanket at night?",
    options: [
      "😴 You",
      "😭 Me, but I'll deny it",
    ],
  },
  {
    emoji: "🛋️",
    question: "If we had a whole day together with no plans, what would we do?",
    options: [
      "🛋️ Stay home and do absolutely nothing",
      "🚗 Randomly go somewhere and make memories",
    ],
  },
  {
    emoji: "😤",
    question: "Who will apologize first after an argument?",
    options: [
      "❤️ Whoever loves the other more",
      "😂 Whoever gets hungry first",
    ],
  },
  {
    emoji: "🌎",
    question: "What's more important for our future?",
    options: [
      "🏡 Building a peaceful life together",
      "✈️ Exploring the world together",
    ],
  },
  {
    emoji: "🚗",
    question: 'If I randomly say "let\'s go somewhere," what will you say?',
    options: [
      "🚗 Where are we going?",
      "😂 Give me 5 minutes.",
    ],
  },
  {
    emoji: "🎁",
    question: "Who will spoil the other more?",
    options: [
      "🎁 Me",
      "💝 You",
    ],
  },
  {
    emoji: "🥹",
    question: "If we could relive one day together, which would you choose?",
    options: [
      "🥹 Our favorite day",
      "✨ A completely new day together",
    ],
  },
  {
    emoji: "💖",
    question: "Final question... will you choose me again?",
    options: [
      "💖 Every single time",
      "🥹 I already did",
    ],
  },
];

export default function WantToKnowPage(): React.JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState<boolean>(false);

  const question = questions[current];

  const chooseAnswer = (index: number): void => {
    if (selected !== null) return;

    setSelected(index);

    setTimeout(() => {
      if (current === questions.length - 1) {
        setFinished(true);
      } else {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      }
    }, 900);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080711] text-white">

      {/* BACKGROUND */}

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.20), transparent 30%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.18), transparent 30%), radial-gradient(circle at 50% 90%, rgba(244,114,182,0.14), transparent 35%)",
        }}
      />

      {/* FLOATING HEARTS */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {["💗", "✨", "💕", "✦", "💖", "🌸", "♡", "✨"].map(
          (emoji: string, index: number) => (
            <motion.span
              key={index}
              className="absolute text-xl sm:text-2xl text-pink-200/30"
              style={{
                left: `${5 + index * 12}%`,
                top: `${15 + ((index * 17) % 70)}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.15, 0.55, 0.15],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 4 + index * 0.4,
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

      <div className="relative z-20 min-h-screen px-5 py-10 sm:px-8">

        <div className="max-w-3xl mx-auto">

          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-8"
          >

            <p className="uppercase tracking-[5px] text-pink-300 text-xs sm:text-sm">
              Our Future
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
              Want to Know? 💭
            </h1>

            <p className="text-pink-100/60 text-sm sm:text-base mt-4">
              A few questions about the future...
              <br />
              Choose wisely. 😏
            </p>

          </motion.div>

          {!finished ? (
            <>

              {/* PROGRESS */}

              <div className="mb-7">

                <div className="flex justify-between text-xs text-pink-200/50 mb-2">
                  <span>
                    Question {current + 1} of {questions.length}
                  </span>

                  <span>
                    {Math.round(
                      ((current + 1) / questions.length) * 100,
                    )}
                    %
                  </span>
                </div>

                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">

                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                    animate={{
                      width: `${((current + 1) / questions.length) * 100}%`,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />

                </div>

              </div>

              {/* QUESTION CARD */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={current}
                  initial={{
                    opacity: 0,
                    x: 50,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -50,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.06]
                    backdrop-blur-2xl
                    p-6
                    sm:p-10
                    shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                  "
                >

                  {/* CARD GLOW */}

                  <div
                    className="
                      absolute
                      -top-32
                      left-1/2
                      -translate-x-1/2
                      w-72
                      h-72
                      rounded-full
                      bg-pink-500/10
                      blur-3xl
                      pointer-events-none
                    "
                  />

                  {/* QUESTION NUMBER */}

                  <div className="relative text-center">

                    <p className="text-pink-300/50 text-xs tracking-[5px]">
                      {String(current + 1).padStart(2, "0")}
                    </p>

                    {/* EMOJI */}

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 4, -4, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-6xl sm:text-7xl mt-5"
                    >
                      {question.emoji}
                    </motion.div>

                    {/* QUESTION */}

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 leading-tight">
                      {question.question}
                    </h2>

                    <p className="text-pink-100/40 text-xs mt-4">
                      Choose your answer 👀
                    </p>

                  </div>

                  {/* ANSWERS */}

                  <div className="relative grid grid-cols-1 gap-4 mt-8">

                    {question.options.map(
                      (option: string, index: number) => {

                        const isSelected = selected === index;

                        return (
                          <motion.button
                            key={index}
                            type="button"
                            onClick={() => chooseAnswer(index)}
                            whileHover={
                              selected === null
                                ? {
                                    scale: 1.02,
                                    y: -3,
                                  }
                                : {}
                            }
                            whileTap={
                              selected === null
                                ? {
                                    scale: 0.97,
                                  }
                                : {}
                            }
                            animate={{
                              boxShadow: isSelected
                                ? "0 0 35px rgba(236,72,153,0.45)"
                                : "0 0 0 rgba(0,0,0,0)",
                            }}
                            className={`
                              relative
                              overflow-hidden
                              w-full
                              rounded-2xl
                              border
                              px-5
                              py-5
                              text-left
                              text-sm
                              sm:text-base
                              transition-all
                              duration-300
                              ${
                                isSelected
                                  ? "border-pink-300/60 bg-pink-500/20 text-white"
                                  : "border-white/10 bg-white/[0.05] text-pink-50 hover:border-pink-300/40 hover:bg-pink-500/10"
                              }
                            `}
                          >

                            {/* ANSWER GLOW */}

                            {isSelected && (
                              <motion.div
                                initial={{
                                  x: "-100%",
                                }}
                                animate={{
                                  x: "100%",
                                }}
                                transition={{
                                  duration: 0.7,
                                }}
                                className="
                                  absolute
                                  inset-0
                                  bg-gradient-to-r
                                  from-transparent
                                  via-pink-300/20
                                  to-transparent
                                "
                              />
                            )}

                            <span className="relative z-10">
                              {option}
                            </span>

                            {isSelected && (
                              <motion.span
                                initial={{
                                  opacity: 0,
                                  scale: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                className="relative z-10 float-right"
                              >
                                💖
                              </motion.span>
                            )}

                          </motion.button>
                        );
                      },
                    )}

                  </div>

                </motion.div>

              </AnimatePresence>

            </>
          ) : (

            /* FINAL SCREEN */

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-pink-300/20
                bg-white/[0.06]
                backdrop-blur-2xl
                p-8
                sm:p-12
                text-center
                shadow-[0_25px_90px_rgba(236,72,153,0.18)]
              "
            >

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-7xl"
              >
                💖
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-bold mt-7">
                That's all for now... 🥹
              </h2>

              <p className="text-pink-100/60 text-sm sm:text-base leading-7 mt-5">
                Maybe the future doesn't need to be perfect.
                <br />
                Maybe it just needs to be ours. ✨
              </p>

              <p className="text-pink-200/80 text-lg mt-7 font-semibold">
                Whatever happens...
                <br />
                let's make it beautiful. ❤️
              </p>

            </motion.div>

          )}

          {/* NAVIGATION */}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-9 pb-8">

            {!finished && current > 0 && (
              <button
                type="button"
                onClick={() => {
                  setCurrent((prev) => prev - 1);
                  setSelected(null);
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
                  hover:bg-pink-500/10
                  transition
                "
              >
                ← Previous
              </button>
            )}

            <Link href="/future">

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
                ← Back to Future
              </motion.div>

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}