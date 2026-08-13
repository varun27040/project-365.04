"use client";

import GlassCard from "@/components/GlassCard";
import Background from "@/components/Background";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      <Background />

      <GlassCard>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[8px] text-pink-300 text-sm mb-4"
          >
            Project 365
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-7xl font-extrabold text-white leading-tight"
          >
            365 Days...
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-8 text-2xl text-pink-200"
          >
            One Journey.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-3 text-xl text-gray-300 leading-8"
          >
            One Beautiful Story.
            <br />
            A story written with memories,
            <br />
            laughter, and countless moments together.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2 }}
            className="mt-14"
          >
            <Link
              href="/story"
              className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-4 text-white text-xl font-semibold shadow-2xl transition duration-300 hover:scale-105 hover:shadow-pink-500/40"
            >
              ❤️ Begin Our Journey
            </Link>
          </motion.div>
        </motion.div>
      </GlassCard>
    </main>
  );
}