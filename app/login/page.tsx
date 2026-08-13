"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        router.push("/home");
        return;
      }

      setError("❌ Incorrect password ❤️ Try again.");
    } catch (error) {
      console.error(error);
      setError("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-900 via-purple-900 to-black p-5">

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-pink-400/30 p-8 shadow-2xl"
      >

        <h1 className="text-center text-4xl font-bold text-white mb-4">
          💖 Project 365
        </h1>

        <p className="text-center text-pink-200 mb-8">
          This page was made for one special person.
        </p>

        <input
          type="password"
          placeholder="Enter our secret password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
          className="w-full p-4 rounded-xl bg-white/10 border border-pink-400/30 text-white placeholder:text-gray-300 outline-none mb-5"
        />

        <button
          onClick={handleLogin}
          className="
            w-full
            bg-pink-500
            hover:bg-pink-600
            hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]
            hover:scale-[1.02]
            transition-all
            duration-300
            rounded-xl
            py-4
            text-white
            font-bold
          "
        >
          Unlock Our Story ❤️
        </button>

        {error && (
          <p className="text-center text-red-300 mt-5">
            {error}
          </p>
        )}

      </motion.div>

    </main>
  );
}