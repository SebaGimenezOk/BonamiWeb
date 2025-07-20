"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Howler from "react-howler";
import { FaPlay, FaPause, FaStop, FaForward, FaBackward } from "react-icons/fa";

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isPlaying) {
      controls.start({ rotate: 360, transition: { repeat: Infinity, ease: "linear", duration: 5 } });
      timerRef.current = setInterval(() => setElapsed(prev => prev + 1), 1000);
    } else {
      controls.stop();
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, controls]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const stopPlay = () => { setIsPlaying(false); setElapsed(0); };

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <div className="flex flex-col items-center justify-center py-12 text-white">
      {/* LOGO */}
      <Image
        src="/logoblancodisco.png"
        alt="Bonami"
        width={300}
        height={90}
        className="mb-6"
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
          <Image src="/vinilo.png" alt="Vinilo" fill className="object-contain" priority />
        </motion.div>

        {/* PÚA */}
        <motion.div
          animate={{ rotate: isPlaying ? 0 : -45 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="absolute w-40 top-0 right-0"
          style={{ transformOrigin: "top left" }}
        >
          <Image
            src="/pua.png"
            alt="Púa"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* CONTROLES CON ÍCONOS */}
      <div className="flex items-center gap-6 mb-4 text-3xl">
        {/* Retroceder visual */}
        <button className="hover:scale-125 transition" aria-label="Retroceder">
          <FaBackward />
        </button>

        {/* Play / Pause funcional */}
        <button onClick={togglePlay} className="hover:scale-125 transition" aria-label="Play/Pause">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Stop funcional */}
        <button onClick={stopPlay} className="hover:scale-125 transition" aria-label="Stop">
          <FaStop />
        </button>

        {/* Adelantar visual */}
        <button className="hover:scale-125 transition" aria-label="Adelantar">
          <FaForward />
        </button>
      </div>

      {/* SLIDER VOLUMEN */}
      <div className="w-2/3 md:w-1/3 flex flex-col items-center">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full accent-pink-600"
        />
        <p className="mt-1 text-sm">Volumen: {(volume * 100).toFixed(0)}%</p>
      </div>

      {/* TIEMPO */}
      <p className="mt-4 text-sm text-neutral-300">ON AIR: {formatTime(elapsed)}</p>

      {/* AUDIO */}
      <Howler
        src="https://radiostreamingserver.com.ar/proxy/bonami/stream?type=.mp3"
        playing={isPlaying}
        volume={volume}
        html5={true}
      />
    </div>
  );
}
