'use client';

import { useState, useRef, useEffect } from 'react';
import NavBar from '../components/NavBar';
import VinylPlayer from '../components/VinylPlayer';
import Contacto from '../components/Contacto';
import Eventos from '../components/Eventos';
import Tickets from '../components/Tickets';
import Nosotros from '../components/Nosotros';
import VerticalBackground from '../components/VerticalBackground';
import Footer from '../components/Footer';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [elapsed, setElapsed] = useState(0);
  const [currentSong, setCurrentSong] = useState('BONAMI RADIO');

  return (
    <>
      {/* Navbar con z-index alto */}
      <NavBar className="fixed top-0 w-full z-50" />

      <main className="pb-[100px] relative z-10">
        <VinylPlayer isPlaying={isPlaying} />

        <Nosotros />
        <Tickets />
        <Eventos />
        <Contacto />
        <VerticalBackground />
      </main>

      <Footer
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        volume={volume}
        setVolume={setVolume}
        elapsed={elapsed}
        setElapsed={setElapsed}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </>
  );
}
