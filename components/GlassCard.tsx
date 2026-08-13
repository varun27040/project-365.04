import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({ children }: GlassCardProps) {
  return (
    <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8 md:p-12">
      {children}
    </div>
  );
}