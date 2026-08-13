"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 160 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  duration: Math.random() * 5 + 3,
  delay: Math.random() * 5,
}));

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 5 + 2,
  duration: Math.random() * 12 + 12,
  delay: Math.random() * 8,
}));

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Deep Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02030A] via-[#090B1D] to-[#140B28]" />

      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [-30, 30, -30],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-72 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[220px]"
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-320px] left-[-220px] h-[700px] w-[700px] rounded-full bg-pink-500/20 blur-[200px]"
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-[-250px] h-[700px] w-[700px] rounded-full bg-blue-500/15 blur-[220px]"
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
          }}
          animate={{
            opacity: [0.2, 1, 0.3, 1, 0.2],
            scale: [0.8, 1.4, 1, 1.5, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-pink-200/40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [-20, -220],
            x: [0, 20, -20, 0],
            opacity: [0, 0.8, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}