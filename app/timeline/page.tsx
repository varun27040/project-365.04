"use client";

import Background from "@/components/Background";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TimelinePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <Background />

      <GlassCard>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="uppercase tracking-[8px] text-pink-300 text-sm"
          >
            Chapter Two
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mt-6"
          >
            Our Timeline
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-10 text-xl text-gray-300 leading-9"
          >
            Every relationship has unforgettable moments.
            <br />
            This is where our memories will live...
            <br />
            One day at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="mt-14"
          >
            <Link
              href="/gallery"
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