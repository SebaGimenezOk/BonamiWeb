
'use client';

import { useState } from 'react';
import NavBar from '../components/NavBar';
import VinylPlayer from '../components/VinylPlayer';
import Contacto from '../components/Contacto';
import Eventos from '../components/Eventos';
import Tickets from '../components/Tickets';
import Nosotros from '../components/Nosotros';
import VerticalBackground from '../components/VerticalBackground'
import Footer from '../components/Footer';







export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  return (
    <>
      <NavBar />
      <main className="pb-[100px]">

        <VinylPlayer   isPlaying={isPlaying} />

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
      />
    </>
  );
}
