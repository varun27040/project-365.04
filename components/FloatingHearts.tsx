"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">

      {/* BIG HEART — LEFT / DNA HELIX */}
      <motion.div
        className="
          absolute
          left-[5%]
          top-1/2
          text-5xl
          sm:text-6xl
          md:text-7xl
          select-none
        "
        animate={{
          x: [
            0,
            70,
            140,
            70,
            0,
            -70,
            -140,
            -70,
            0,
          ],
          y: [
            -170,
            -115,
            -20,
            80,
            170,
            80,
            -20,
            -115,
            -170,
          ],
          scale: [
            0.75,
            1,
            0.8,
            1,
            0.75,
            1,
            0.8,
            1,
            0.75,
          ],
          rotate: [
            -15,
            0,
            15,
            0,
            -15,
            0,
            15,
            0,
            -15,
          ],
          opacity: [
            0.45,
            0.8,
            0.55,
            0.85,
            0.45,
            0.8,
            0.55,
            0.8,
            0.45,
          ],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ❤️
      </motion.div>

      {/* BIG HEART — RIGHT / OPPOSITE DNA STRAND */}
      <motion.div
        className="
          absolute
          right-[5%]
          top-1/2
          text-5xl
          sm:text-6xl
          md:text-7xl
          select-none
        "
        animate={{
          x: [
            0,
            -70,
            -140,
            -70,
            0,
            70,
            140,
            70,
            0,
          ],
          y: [
            170,
            80,
            -20,
            -115,
            -170,
            -115,
            -20,
            80,
            170,
          ],
          scale: [
            0.75,
            1,
            0.8,
            1,
            0.75,
            1,
            0.8,
            1,
            0.75,
          ],
          rotate: [
            15,
            0,
            -15,
            0,
            15,
            0,
            -15,
            0,
            15,
          ],
          opacity: [
            0.45,
            0.8,
            0.55,
            0.85,
            0.45,
            0.8,
            0.55,
            0.8,
            0.45,
          ],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💖
      </motion.div>

    </div>
  );
}