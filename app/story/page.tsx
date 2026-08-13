"use client";

import Background from "@/components/Background";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StoryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      <Background />

      <GlassCard>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[8px] text-pink-300 text-sm"
          >
            Chapter One
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mt-6"
          >
            Every Story Has A Beginning...
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-10 text-xl text-gray-300 leading-9"
          >
            Some people enter our lives unexpectedly.
            <br />
            Some stay for a while.
            <br />
            But once in a lifetime,
            <br />
            someone arrives and changes everything.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="mt-16"
          >
            <Link
              href="/timeline"
              className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-4 text-white text-xl font-semibold hover:scale-105 transition"
            >
              Continue →
            </Link>
          </motion.div>
        </motion.div>
      </GlassCard>
    </main>
  );
}