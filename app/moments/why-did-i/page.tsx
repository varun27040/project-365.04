"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Reason = {
  number: string;
  emoji: string;
  text: string;
};

const reasons: Reason[] = [
  {
    number: "01",
    emoji: "💗",
    text: "I love you because being around you just feels different.",
  },
  {
    number: "02",
    emoji: "😊",
    text: "I love your smile. Somehow it can change my whole mood.",
  },
  {
    number: "03",
    emoji: "😂",
    text: "I love your laugh, especially when you laugh at something completely random.",
  },
  {
    number: "04",
    emoji: "👀",
    text: "I love your eyes. I don't even know what is so special about them, but they are.",
  },
  {
    number: "05",
    emoji: "🌸",
    text: "I love how cute you can be without even trying.",
  },
  {
    number: "06",
    emoji: "🫶",
    text: "I love the way you make ordinary moments feel special.",
  },
  {
    number: "07",
    emoji: "💭",
    text: "I love that random thoughts about you just appear in my head during the day.",
  },
  {
    number: "08",
    emoji: "✨",
    text: "I love your little expressions that you probably don't even notice.",
  },
  {
    number: "09",
    emoji: "🌷",
    text: "I love the way you carry yourself. There is something about you that stands out.",
  },
  {
    number: "10",
    emoji: "🥹",
    text: "I love how one small thing from you can make me happy for the whole day.",
  },
  {
    number: "11",
    emoji: "💖",
    text: "I love how easily you became such an important part of my life.",
  },
  {
    number: "12",
    emoji: "🌙",
    text: "I love thinking about all the little memories we have collected together.",
  },
  {
    number: "13",
    emoji: "😂",
    text: "I love our stupid conversations that somehow become the best conversations.",
  },
  {
    number: "14",
    emoji: "🤍",
    text: "I love the comfort I feel when I am with you.",
  },
  {
    number: "15",
    emoji: "🫂",
    text: "I love your hugs because they make everything feel a little better.",
  },
  {
    number: "16",
    emoji: "🌸",
    text: "I love the way you can be both cute and completely unpredictable.",
  },
  {
    number: "17",
    emoji: "💫",
    text: "I love that I notice even the smallest things about you.",
  },
  {
    number: "18",
    emoji: "👃",
    text: "I love your nose. Yes, this is a completely random reason, but it is my favourite.",
  },
  {
    number: "19",
    emoji: "👗",
    text: "I love seeing what you wear because somehow I remember so many of your outfits.",
  },
  {
    number: "20",
    emoji: "🎀",
    text: "I love seeing the different hairstyles you try.",
  },
  {
    number: "21",
    emoji: "🏫",
    text: "I love that college became much more interesting because you were there.",
  },
  {
    number: "22",
    emoji: "👀",
    text: "I love looking for you when I enter college.",
  },
  {
    number: "23",
    emoji: "💗",
    text: "I love how my eyes automatically search for you in a crowd.",
  },
  {
    number: "24",
    emoji: "😊",
    text: "I love when you notice me without me having to say anything.",
  },
  {
    number: "25",
    emoji: "✨",
    text: "I love the way you make even a normal day worth remembering.",
  },
  {
    number: "26",
    emoji: "💭",
    text: "I love remembering the beginning of our story.",
  },
  {
    number: "27",
    emoji: "🌱",
    text: "I love that something so small at the beginning became something so meaningful.",
  },
  {
    number: "28",
    emoji: "🥹",
    text: "I love remembering how nervous I was around you in the beginning.",
  },
  {
    number: "29",
    emoji: "🤝",
    text: "I love that one small moment of courage started so many memories.",
  },
  {
    number: "30",
    emoji: "🌙",
    text: "I love that I can remember our early days and still smile.",
  },
  {
    number: "31",
    emoji: "💋",
    text: "I love the memory of the first time we were brave enough to take that step together.",
  },
  {
    number: "32",
    emoji: "❤️",
    text: "I love how nervous and happy we both were during our first special moments.",
  },
  {
    number: "33",
    emoji: "🥹",
    text: "I love that some memories still give me the same feeling when I think about them.",
  },
  {
    number: "34",
    emoji: "💗",
    text: "I love that our story has moments that belong only to us.",
  },
  {
    number: "35",
    emoji: "👑",
    text: "I love the day I started seeing you as someone much more than just a friend.",
  },
  {
    number: "36",
    emoji: "🌸",
    text: "I love that you slowly became my favourite person without me even realizing it.",
  },
  {
    number: "37",
    emoji: "💭",
    text: "I love that I was scared to say what I felt because losing you mattered so much to me.",
  },
  {
    number: "38",
    emoji: "👑",
    text: "I love calling you my queen because that is genuinely how special you became to me.",
  },
  {
    number: "39",
    emoji: "🎤",
    text: "I love the memories we made during farewell.",
  },
  {
    number: "40",
    emoji: "✨",
    text: "I love how much we experienced together on that unforgettable day.",
  },
  {
    number: "41",
    emoji: "🎤",
    text: "I love remembering the anchoring and everything that happened around it.",
  },
  {
    number: "42",
    emoji: "🌸",
    text: "I love Freshers Day because it became another chapter of our story.",
  },
  {
    number: "43",
    emoji: "🎉",
    text: "I love that we got to host something together and create memories doing it.",
  },
  {
    number: "44",
    emoji: "🫶",
    text: "I love taking care of you and making sure you are okay.",
  },
  {
    number: "45",
    emoji: "😊",
    text: "I love when you trust me with the little things.",
  },
  {
    number: "46",
    emoji: "🤍",
    text: "I love that your happiness matters to me.",
  },
  {
    number: "47",
    emoji: "💗",
    text: "I love that when you are happy, somehow I become happy too.",
  },
  {
    number: "48",
    emoji: "🥹",
    text: "I love the feeling of knowing that I mean something to you.",
  },
  {
    number: "49",
    emoji: "🌷",
    text: "I love your little habits, even the ones you probably don't know I notice.",
  },
  {
    number: "50",
    emoji: "✨",
    text: "I love the way you can make me forget what I was even worried about.",
  },
  {
    number: "51",
    emoji: "😂",
    text: "I love how we can turn absolutely nothing into a funny memory.",
  },
  {
    number: "52",
    emoji: "💬",
    text: "I love talking to you even when we have nothing important to talk about.",
  },
  {
    number: "53",
    emoji: "📱",
    text: "I love seeing your name appear on my phone.",
  },
  {
    number: "54",
    emoji: "💗",
    text: "I love getting a message from you when I wasn't expecting one.",
  },
  {
    number: "55",
    emoji: "🌙",
    text: "I love those late conversations that somehow make time disappear.",
  },
  {
    number: "56",
    emoji: "😊",
    text: "I love when you tease me and then act completely innocent.",
  },
  {
    number: "57",
    emoji: "😂",
    text: "I love our inside jokes that probably make no sense to anyone else.",
  },
  {
    number: "58",
    emoji: "🫶",
    text: "I love how comfortable we have become with each other.",
  },
  {
    number: "59",
    emoji: "🤍",
    text: "I love that I don't always have to explain myself around you.",
  },
  {
    number: "60",
    emoji: "💫",
    text: "I love that being with you doesn't have to be perfect to be special.",
  },
  {
    number: "61",
    emoji: "👀",
    text: "I love your expressions when you are surprised.",
  },
  {
    number: "62",
    emoji: "🌸",
    text: "I love your cute little reactions.",
  },
  {
    number: "63",
    emoji: "😂",
    text: "I love the way you laugh when something catches you off guard.",
  },
  {
    number: "64",
    emoji: "💗",
    text: "I love your voice and the way it instantly gets my attention.",
  },
  {
    number: "65",
    emoji: "✨",
    text: "I love your confidence when you know you are right.",
  },
  {
    number: "66",
    emoji: "😌",
    text: "I love that you don't always agree with me.",
  },
  {
    number: "67",
    emoji: "🙈",
    text: "I love the moments when you get shy.",
  },
  {
    number: "68",
    emoji: "🥹",
    text: "I love seeing the softer side of you.",
  },
  {
    number: "69",
    emoji: "🌷",
    text: "I love how you can make a simple day feel like a memory worth keeping.",
  },
  {
    number: "70",
    emoji: "💖",
    text: "I love that I have so many tiny details about you stored in my head.",
  },
  {
    number: "71",
    emoji: "👟",
    text: "I love that I still remember some of the shoes you used to wear in our early days.",
  },
  {
    number: "72",
    emoji: "🎨",
    text: "I love remembering the colours you used to wear.",
  },
  {
    number: "73",
    emoji: "🏫",
    text: "I love remembering those days when I came to college mostly because I wanted to see you.",
  },
  {
    number: "74",
    emoji: "👀",
    text: "I love seeing your face after I haven't seen you for a while.",
  },
  {
    number: "75",
    emoji: "💭",
    text: "I love that I can remember tiny details about you that I never planned to remember.",
  },
  {
    number: "76",
    emoji: "🌙",
    text: "I love looking back at our old memories and realizing how far we have come.",
  },
  {
    number: "77",
    emoji: "💗",
    text: "I love that our story wasn't planned. It just happened.",
  },
  {
    number: "78",
    emoji: "🌱",
    text: "I love how something that started so simply became such a big part of my life.",
  },
  {
    number: "79",
    emoji: "🫶",
    text: "I love that we have grown together through so many little moments.",
  },
  {
    number: "80",
    emoji: "✨",
    text: "I love that there are still so many things I want to experience with you.",
  },
  {
    number: "81",
    emoji: "💖",
    text: "I love the person I become when I am genuinely happy around you.",
  },
  {
    number: "82",
    emoji: "🤍",
    text: "I love that you have become someone I genuinely care about.",
  },
  {
    number: "83",
    emoji: "🌸",
    text: "I love that even your smallest actions can stay in my mind.",
  },
  {
    number: "84",
    emoji: "🥹",
    text: "I love the memories I never thought would become important but somehow did.",
  },
  {
    number: "85",
    emoji: "💭",
    text: "I love thinking about our future and all the memories we haven't made yet.",
  },
  {
    number: "86",
    emoji: "🌷",
    text: "I love that every chapter with you feels different from the one before.",
  },
  {
    number: "87",
    emoji: "💗",
    text: "I love that even after all these memories, I still get excited to see you.",
  },
  {
    number: "88",
    emoji: "😊",
    text: "I love how easily you can make me smile.",
  },
  {
    number: "89",
    emoji: "🫶",
    text: "I love the feeling of knowing that we have our own little world of memories.",
  },
  {
    number: "90",
    emoji: "✨",
    text: "I love that I can look at an ordinary place and remember something about you.",
  },
  {
    number: "91",
    emoji: "🌙",
    text: "I love that some songs, places, colours, and days remind me of you.",
  },
  {
    number: "92",
    emoji: "💖",
    text: "I love that you are part of so many of my favourite memories.",
  },
  {
    number: "93",
    emoji: "🥹",
    text: "I love that I can look back and say, 'Yeah, that was one of our moments.'",
  },
  {
    number: "94",
    emoji: "🌸",
    text: "I love every version of you I have gotten to know.",
  },
  {
    number: "95",
    emoji: "🤍",
    text: "I love that you are not just one memory to me. You are hundreds of them.",
  },
  {
    number: "96",
    emoji: "💫",
    text: "I love that even after 100 reasons, I can still think of more.",
  },
  {
    number: "97",
    emoji: "🫶",
    text: "I love you for all the little things that I could never properly explain.",
  },
  {
    number: "98",
    emoji: "💗",
    text: "I love you because somewhere along the way, you became home to my heart.",
  },
  {
    number: "99",
    emoji: "👑",
    text: "I love you because you became my favourite person without me even realizing when it happened.",
  },
  {
    number: "100",
    emoji: "❤️",
    text: "And after all these reasons, the simplest answer is still the same: I just love you, Piyuu.",
  },

  // Continue adding your own reasons here.
  // You can make this 50, 75, or 100 reasons.
];

export default function WhyDidIPage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090510] text-white">

      {/* BACKGROUND */}

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
      background:
        "linear-gradient(180deg, #090510 0%, #120817 45%, #090510 100%), radial-gradient(circle at 15% 15%, rgba(236,72,153,0.18), transparent 30%), radial-gradient(circle at 85% 20%, rgba(168,85,247,0.18), transparent 30%), radial-gradient(circle at 50% 90%, rgba(244,114,182,0.12), transparent 35%)",    
        }}
      />

      {/* FLOATING HEARTS */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {["💗", "✨", "💕", "🌸", "💖", "💫", "🤍", "🌷"].map(
          (emoji: string, index: number) => (
            <motion.span
              key={index}
              className="absolute text-lg sm:text-2xl"
              style={{
                left: `${5 + index * 12}%`,
                top: `${10 + ((index * 19) % 80)}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.1, 0.45, 0.1],
                rotate: [-5, 5, -5],
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
            className="text-center mb-14"
          >

            <p className="uppercase tracking-[5px] sm:tracking-[8px] text-pink-300 text-xs sm:text-sm">
              Moments • 03
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-5">
              Why Did I Love You? 🤍
            </h1>

            <p className="text-pink-100/60 text-sm sm:text-base mt-5 leading-7">
              Maybe one reason isn't enough...
              <br />
              So here are a hundred. ✨
            </p>

          </motion.div>

          {/* REASONS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {reasons.map(
              (reason: Reason, index: number) => (

                <motion.div
                  key={reason.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 4) * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-pink-200/10
                    bg-white/[0.06]
                    backdrop-blur-xl
                    p-6
                    shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                    transition-all
                    duration-500
                  "
                >

                  {/* GLOW */}

                  <div
                    className="
                      absolute
                      -top-16
                      -right-16
                      w-40
                      h-40
                      rounded-full
                      bg-pink-500/10
                      blur-3xl
                      pointer-events-none
                      group-hover:bg-pink-500/20
                      transition
                    "
                  />

                  {/* TOP */}

                  <div className="relative flex items-center justify-between">

                    <span className="text-pink-300/60 text-xs tracking-[4px]">
                      {reason.number}
                    </span>

                    <motion.span
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-xl"
                    >
                      {reason.emoji}
                    </motion.span>

                  </div>

                  {/* REASON */}

                  <p className="relative text-white text-base sm:text-lg leading-7 mt-5">
                    {reason.text}
                  </p>

                  {/* BOTTOM */}

                  <div className="relative mt-5 text-pink-300/20 text-xs tracking-[5px]">
                    • • •
                  </div>

                </motion.div>

              ),
            )}

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
            className="
              mt-14
              rounded-3xl
              border
              border-pink-300/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              text-center
            "
          >

            <div className="text-4xl">
              💗✨🤍
            </div>

            <h2 className="text-white text-xl sm:text-2xl font-semibold mt-5">
              And somehow, 100 reasons still aren't enough.
            </h2>

            <p className="text-pink-100/50 text-sm sm:text-base mt-4 leading-7">
              Because every day gives me another reason.
            </p>

          </motion.div>

          {/* NAVIGATION */}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 pb-8">

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
                  border
                  border-pink-300/20
                  bg-white/5
                  px-6
                  py-3
                  text-pink-100
                  text-sm
                "
              >
                ← Nostalgia
              </motion.div>

            </Link>

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
                Back to Universe 💖
              </motion.div>

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}