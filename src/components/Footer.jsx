"use client";

import CurrentSong from './CurrentSong';
import { useState, useRef, useEffect } from "react";
import Howler from "react-howler";
import { FaPlay, FaPause, FaStop, FaForward, FaBackward, FaInstagram, FaXTwitter, FaFacebook, FaYoutube, FaTwitch, FaKickstarterK } from "react-icons/fa6";

export default function Footer({ isPlaying, setIsPlaying, volume, setVolume }) {
  const [elapsed, setElapsed] = useState(0);
  const howlerRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => setElapsed(prev => prev + 1), 1000);
    } else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(prev => !prev);
  const stopPlay = () => {
    setIsPlaying(false);
    setElapsed(0);
    if (howlerRef.current) howlerRef.current.stop();
  };

  const formatTime = s => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <footer className="fixed bottom-0 h-[70px] w-full bg-slate-900/90 text-white flex justify-between items-center px-6 z-40">
      <div className="flex ml-12 items-center gap-4">
        <button className="hover:text-cyan-400 transition text-2xl"><FaBackward /></button>
        <button onClick={togglePlay} className="hover:text-cyan-400 transition text-2xl">{isPlaying ? <FaPause /> : <FaPlay />}</button>
        <button onClick={stopPlay} className="hover:text-red-400 transition text-2xl"><FaStop /></button>
        <button className="hover:text-cyan-400 transition text-2xl"><FaForward /></button>

       <div>
       <span className="text-base  mr-2 text-emerald-500 select-none">ON AIR:</span>
       <span className="text-base  text-white">{formatTime(elapsed)}</span>
       </div>

        {/* Mostrar canción actual */}
        <CurrentSong />

        <span className="flex items-center gap-2">
          <span className="text-2xl">🔊</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={e => setVolume(parseFloat(e.target.value))}
            className="w-24 accent-cyan-500"
          />
        </span>
        <span className='text-base'>{(volume * 100).toFixed(0)}%</span>


        <Howler
          id="bonami-audio"
          ref={howlerRef}
          src="https://radiostreamingserver.com.ar/proxy/bonami/stream?type=.mp3"
          playing={isPlaying}
          volume={volume}
          html5={true}
        />
      </div>

      <div className="flex gap-3 text-xl">
        <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-400 transition"><FaXTwitter /></a>
        <a href="#" className="hover:text-blue-600 transition"><FaFacebook /></a>
        <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
        <a href="#" className="hover:text-purple-400 transition"><FaTwitch /></a>
        <a href="#" className="hover:text-green-400 transition"><FaKickstarterK /></a>
      </div>
    </footer>
  );
}
