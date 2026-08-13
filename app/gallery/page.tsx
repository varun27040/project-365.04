"use client";

import Background from "@/components/Background";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const photos = [
  {
    src: "/p1.png",
    title: "A Little Moment 💗",
    text: "One picture, one memory, one feeling.",
  },
  {
    src: "/p2.png",
    title: "That Smile ✨",
    text: "A moment I could look at again and again.",
  },
  {
    src: "/p3.png",
    title: "Just Us 🫶",
    text: "Some moments don't need many words.",
  },
  {
    src: "/p4.png",
    title: "A Memory To Keep 🌸",
    text: "Another little piece of our story.",
  },
  {
    src: "/p5.png",
    title: "One Of My Favorites 💕",
    text: "A picture that instantly brings back the feeling.",
  },
  {
    src: "/p6.png",
    title: "Forever In My Memories 🌙",
    text: "And somehow, this moment became special.",
  },
];

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090612]">
      <Background />

      {/* DREAMY MEMORY BACKGROUND */}

<div className="fixed inset-0 pointer-events-none overflow-hidden">

  {/* Deep background */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at 15% 10%, rgba(236,72,153,0.20), transparent 28%), radial-gradient(circle at 85% 15%, rgba(139,92,246,0.22), transparent 30%), radial-gradient(circle at 50% 55%, rgba(168,85,247,0.10), transparent 35%), radial-gradient(circle at 20% 90%, rgba(244,114,182,0.14), transparent 30%), #080611",
    }}
  />

  {/* Large dreamy glow - top left */}
  <motion.div
    className="
      absolute
      -top-40
      -left-40
      w-[500px]
      h-[500px]
      rounded-full
      bg-pink-500/10
      blur-[120px]
    "
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Purple dreamy glow - top right */}
  <motion.div
    className="
      absolute
      -top-32
      -right-40
      w-[500px]
      h-[500px]
      rounded-full
      bg-purple-500/10
      blur-[130px]
    "
    animate={{
      scale: [1.1, 0.9, 1.1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Bottom pink glow */}
  <motion.div
    className="
      absolute
      -bottom-48
      left-1/2
      -translate-x-1/2
      w-[600px]
      h-[400px]
      rounded-full
      bg-pink-400/10
      blur-[140px]
    "
    animate={{
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Tiny stars */}
  {[
    "✦",
    "✧",
    "⋆",
    "✦",
    "·",
    "✧",
    "⋆",
    "♡",
    "✦",
    "·",
    "✧",
    "⋆",
  ].map((star, index) => (
    <motion.span
      key={index}
      className="absolute text-pink-100/30"
      style={{
        left: `${3 + ((index * 17) % 94)}%`,
        top: `${5 + ((index * 29) % 90)}%`,
        fontSize: `${10 + (index % 3) * 5}px`,
      }}
      animate={{
        opacity: [0.1, 0.7, 0.1],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 3 + (index % 4),
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.4,
      }}
    >
      {star}
    </motion.span>
  ))}

  {/* Floating memory hearts */}
  {["♡", "💗", "✧", "🌸", "♡", "✨"].map(
    (emoji, index) => (
      <motion.span
        key={`heart-${index}`}
        className="
          absolute
          text-pink-200/20
          text-lg
          sm:text-2xl
        "
        style={{
          left: `${8 + index * 17}%`,
          bottom: `${5 + index * 13}%`,
        }}
        animate={{
          y: [0, -35, 0],
          x: [0, 10, -5, 0],
          rotate: [-8, 8, -5, -8],
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 6 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.8,
        }}
      >
        {emoji}
      </motion.span>
    )
  )}

  {/* Subtle top-to-bottom darkness */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-transparent
      via-transparent
      to-black/30
    "
  />

</div>
      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {["♡", "✨", "💗", "✦", "♡", "🌸", "💖", "✧"].map(
          (emoji, index) => (
            <motion.span
              key={index}
              className="absolute text-pink-200/25 text-xl sm:text-2xl"
              style={{
                left: `${5 + index * 12}%`,
                top: `${10 + ((index * 17) % 80)}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.1, 0.45, 0.1],
                rotate: [-8, 8, -8],
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
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="uppercase tracking-[5px] sm:tracking-[8px] text-pink-300 text-xs sm:text-sm">
              Chapter Three
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-5">
              Our Memories 📸
            </h1>

            <p className="text-pink-100/60 text-sm sm:text-base mt-5 leading-7">
              Every picture holds a little piece of us.
              <br />
              And every little piece means something to me. 💗
            </p>
          </motion.div>

          {/* PHOTO GALLERY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  rotate: 0,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  backdrop-blur-xl
                  p-3
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-black/20">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* IMAGE OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-transparent
                      opacity-70
                    "
                  />

                  {/* HEART */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="
                      absolute
                      top-4
                      right-4
                      w-10
                      h-10
                      rounded-full
                      bg-black/30
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    💗
                  </motion.div>
                </div>

                {/* TEXT */}
                <div className="px-2 pt-5 pb-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-white text-lg sm:text-xl font-semibold">
                      {photo.title}
                    </h2>

                    <span className="text-pink-300/50 text-xs tracking-[2px]">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-pink-100/50 text-sm leading-6 mt-2">
                    {photo.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM MESSAGE */}
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
              mt-16
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
              📸 💗 ✨
            </div>

            <h2 className="text-white text-xl sm:text-2xl font-semibold mt-5">
              These are more than just pictures.
            </h2>

            <p className="text-pink-100/50 text-sm sm:text-base mt-3 leading-7">
              They are little pieces of time that I never want to forget.
              <br />
              And this collection is only the beginning. 🌸
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 pb-8">

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
                "
              >
                ← Home
              </motion.div>
            </Link>

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
                  bg-gradient-to-r
                  from-pink-500
                  to-purple-600
                  px-7
                  py-3
                  text-white
                  text-sm
                  font-semibold
                  shadow-lg
                  shadow-pink-500/20
                "
              >
                Continue → 💗
              </motion.div>
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}