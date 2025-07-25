"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export default function VinylPlayer({ isPlaying }) {
  const controls = useAnimation();

  useEffect(() => {
    if (isPlaying) {
      controls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 5,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPlaying, controls]);

  return (
    <div
      name="Inicio"
      className="flex flex-col items-center justify-center py-12 text-white"
    >
      {/* LOGO */}
      <Image
        src="/logoblancodisco.png"
        alt="Bonami"
        width={200}
        height={70}
        className="mb-10"
        priority
      />

      {/* PLAYER */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
        {/* VINILO */}
        <motion.div
          animate={controls}
          initial={{ rotate: 0 }}
          className="absolute inset-0"
        >
          <Image
            src="/vinilo.png"
            alt="Vinilo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* PÚA */}
        <motion.div
          animate={{ rotate: isPlaying ? 0 : -45 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="absolute w-40 top-20 left-40 md:top-20 md:left-56"
          style={{ transformOrigin: "top left" }}
        >
          <Image
            src="/pua.png"
            alt="Púa"
            width={140}
            height={30}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
