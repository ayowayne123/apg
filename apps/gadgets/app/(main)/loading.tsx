"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen fixed z-50 inset-0 flex flex-col items-center justify-center bg-white  text-black">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="mb-6"
      >
        <Image
          src="/icons/apg-gadgets.png"
          alt="Loading"
          width={90}
          height={90}
          className="rounded-full"
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

      <div className="mt-8 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-3 h-3 bg-black rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
