"use client";
import "./loading.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-primary fixed z-50 inset-0 w-full">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="mb-6"
      >
        <Image
          src="/icons/apg-homes.png"
          alt="Loading"
          width={90}
          height={90}
          className="object-contain"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-lg font-semibold tracking-tight"
      >
        Preparing your experience...
      </motion.p>

      {/* 🔥 Insert your CSS loader here */}
      <div className="mt-8">
        <div className="loader"></div>
      </div>
    </div>
  );
}
