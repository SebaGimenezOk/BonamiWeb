"use client";
import { useEffect, useState } from "react";

export default function CurrentSong() {
  const [song, setSong] = useState({ artist: "", title: "" });

  useEffect(() => {
    async function fetchSong() {
      try {
        const res = await fetch("/api/currentsong");
        const data = await res.json();
        setSong(data);
      } catch (err) {
        console.error("Error fetching current song:", err);
      }
    }

    fetchSong();
    const interval = setInterval(fetchSong, 970000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-2 text-xs text-cyan-400">
      {song.artist && song.title ? (
        <p>🎵 {song.artist} - {song.title}</p>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}
