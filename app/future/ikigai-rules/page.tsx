"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const rules = [
  {
    number: "01",
    emoji: "🎓",
    title: "College Comes First",
    text: "We’ll be more careful in college and always look out for each other.",
  },
  {
    number: "02",
    emoji: "❤️",
    title: "I’ll Say Sorry First",
    text: "If we ever fight, I’ll be the one to say sorry first — because us matters more than winning.",
  },
  {
    number: "03",
    emoji: "🫶",
    title: "Never Let Ego Win",
    text: "No matter what happens, we’ll never let our ego become bigger than what we have.",
  },
  {
    number: "04",
    emoji: "🗣️",
    title: "Talk, Don’t Assume",
    text: "If something feels wrong, we’ll talk about it instead of silently assuming the worst.",
  },
  {
    number: "05",
    emoji: "🤝",
    title: "Always Have Each Other’s Back",
    text: "Even when things get difficult, we’ll support each other and never intentionally make things harder.",
  },
  {
    number: "06",
    emoji: "📚",
    title: "Time to Get Serious!",
    text: "We should never be serious about random things 😂… but studies? Now we have to be serious. Our future matters, so let’s work hard together. 🎓✨",
  },
  {
    number: "07",
    emoji: "💗",
    title: "Choose Us Again",
    text: "On the easy days and the difficult ones, we’ll remember why we started and choose to work things out.",
  },
];

export default function IkigaiPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070414] text-white">

      {/* COSMIC BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden">

        {/* Main glow */}
        <div className="absolute left-1/2 top-[-15%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute left-[-10%] top-[35%] h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[110px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Stars */}
        {Array.from({ length: 45 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/70"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2 + (i % 4),
              repeat: Infinity,
              delay: i * 0.08,
            }}
          />
        ))}

        {/* Shooting star */}
        <motion.div
          className="absolute h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent"
          initial={{ x: "-20vw", y: "5vh", opacity: 0 }}
          animate={{
            x: "120vw",
            y: "45vh",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeInOut",
          }}
        />

        {/* Floating hearts */}
        {["♡", "♡", "✦", "♡", "✧"].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/20"
            style={{
              left: `${10 + i * 18}%`,
              bottom: "-10%",
              fontSize: `${18 + i * 5}px`,
            }}
            animate={{
              y: [0, -700],
              x: [0, i % 2 === 0 ? 40 : -40],
              opacity: [0, 0.8, 0],
              rotate: [0, 20, -20],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 py-14 sm:px-8">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex min-h-[70vh] flex-col items-center justify-center text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mb-7 text-6xl"
          >
            🌱
          </motion.div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-pink-200/60">
            A little piece of my heart
          </p>

          <h1 className="bg-gradient-to-r from-pink-200 via-white to-purple-200 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl">
            My Ikigai
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            The dreams I want to chase, the people I want to make proud,
            and the future I want to build.
          </p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12 text-white/40"
          >
            ↓
          </motion.div>
        </motion.section>

        {/* OUR RULES */}
        <section className="mb-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-pink-200/50">
              Our promise
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              💗 Our Little Rules
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">

            {rules.map((rule, index) => (
              <motion.div
                key={rule.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-200/20"
              >
                <div className="absolute right-5 top-4 text-4xl font-bold text-white/[0.035]">
                  {rule.number}
                </div>

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl">
                    {rule.emoji}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {rule.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {rule.text}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* IKIGAI JOURNEY */}
        <section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-purple-200/50">
              What drives me
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
              The Life I Want
            </h2>
          </motion.div>

          {/* DREAM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 rounded-[2rem] border border-pink-200/10 bg-gradient-to-br from-pink-500/[0.08] to-transparent p-7 backdrop-blur-xl sm:p-10"
          >
            <div className="mb-5 text-4xl">❤️</div>

            <p className="mb-2 text-sm uppercase tracking-widest text-pink-200/50">
              The dream
            </p>

            <h3 className="text-2xl font-bold sm:text-3xl">
              A Life With Piyuu
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              <strong className="text-white">
                My biggest dream is to build a life with Piyuu. ❤️
              </strong>
              <br />
              I want to grow alongside her, support her dreams, and someday
              turn all the little dreams we&apos;ve talked about into a life
              we can be proud of.
            </p>
          </motion.div>

          {/* PARENTS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 rounded-[2rem] border border-purple-200/10 bg-gradient-to-bl from-purple-500/[0.08] to-transparent p-7 backdrop-blur-xl sm:p-10"
          >
            <div className="mb-5 text-4xl">🎓</div>

            <p className="mb-2 text-sm uppercase tracking-widest text-purple-200/50">
              The person I want to become
            </p>

            <h3 className="text-2xl font-bold sm:text-3xl">
              Someone My Parents Can Be Proud Of
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              <strong className="text-white">
                I want to become someone my parents can be proud of. 🎓
              </strong>
              <br />
              Everything I achieve isn&apos;t only for me. I want my hard work
              to make my parents feel that all their sacrifices, support, and
              trust in me were worth it.
            </p>
          </motion.div>

          {/* FAMILY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-[2rem] border border-blue-200/10 bg-gradient-to-br from-blue-500/[0.08] to-transparent p-7 backdrop-blur-xl sm:p-10"
          >
            <div className="mb-5 text-4xl">🤍</div>

            <p className="mb-2 text-sm uppercase tracking-widest text-blue-200/50">
              The family
            </p>

            <h3 className="text-2xl font-bold sm:text-3xl">
              A Name My Parents Can Be Proud Of
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              <strong className="text-white">
                I want to earn respect for my family. 🤍
              </strong>
              <br />
              I want to become successful enough that when people hear my name,
              they also remember the people who raised me. I want my parents to
              be respected because of the person I&apos;ve become.
            </p>
          </motion.div>

        </section>

        {/* MOST IMPORTANT */}
        <motion.section
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-20 overflow-hidden rounded-[2.5rem] border border-pink-200/20 bg-gradient-to-br from-pink-500/[0.12] via-purple-500/[0.08] to-transparent p-8 text-center backdrop-blur-2xl sm:p-14"
        >

          {/* glow */}
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[100px]" />

          <div className="relative">

            <div className="mb-5 text-4xl">✨</div>

            <p className="text-sm uppercase tracking-[0.3em] text-pink-200/50">
              And most importantly...
            </p>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-white/70 sm:text-xl sm:leading-10">
              I don&apos;t just want a successful life. I want a{" "}
              <strong className="text-white">
                meaningful one
              </strong>{" "}
              — a life where I can love the person I choose, make my parents
              proud, chase my dreams, and look back one day knowing that I gave
              everything I had to the people who mattered most. ✨
            </p>

            <div className="mx-auto my-9 h-px w-24 bg-white/20" />

            <h2 className="text-3xl font-bold sm:text-4xl">
              That&apos;s my Ikigai.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm italic leading-7 text-white/50 sm:text-base">
              To build, to achieve, to make my parents proud, and to create a
              future worth remembering. 💗
            </p>

          </div>
        </motion.section>

        {/* PIYUU FINAL MESSAGE */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-20 text-center"
        >

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mb-7 text-5xl"
          >
            ❤️
          </motion.div>

          <p className="text-sm uppercase tracking-[0.35em] text-pink-200/50">
            One last thing
          </p>

          <h2 className="mt-5 bg-gradient-to-r from-pink-200 via-white to-pink-200 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl">
            Piyuu...
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-xl font-medium leading-9 text-white/80 sm:text-2xl sm:leading-10">
            You are the one,
            <br />
            and you are the last.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            No matter what happens, I&apos;ll always remember the place you
            have in my heart and the future I dream of building.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mx-auto mt-8 max-w-xl rounded-3xl border border-pink-200/10 bg-white/[0.04] px-6 py-7 backdrop-blur-xl"
          >
            <p className="text-lg font-semibold text-pink-100 sm:text-xl">
              &quot;No matter what happens,
              <br />
              I&apos;ll marry you.&quot; ❤️
            </p>
          </motion.div>

        </motion.section>

        {/* NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-4 pb-10">

          <Link
            href="/home"
            className="rounded-full border border-white/10 bg-white/[0.06] px-7 py-3 text-sm backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            ← Home
          </Link>

          <Link
            href="/surprise"
            className="rounded-full border border-pink-200/20 bg-pink-500/10 px-7 py-3 text-sm backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-pink-500/20"
          >
            Continue → 🎁
          </Link>

        </div>

      </div>
    </main>
  );
}