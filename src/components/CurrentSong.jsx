'use client';
import { useEffect, useState } from "react";

const API_KEY = "2b07454bdc850ad60d97a2fdc122a3f8";

export default function CurrentSong() {
  const [song, setSong] = useState({ artist: "", title: "" });
  const [albumImage, setAlbumImage] = useState("");

  useEffect(() => {
    async function fetchSong() {
      try {
        const res = await fetch("/api/currentsong");
        const data = await res.json();
        setSong(data);

        if (data.artist && data.title) {
          const lastfmRes = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${encodeURIComponent(data.artist)}&track=${encodeURIComponent(data.title)}&format=json`
          );
          const lastfmData = await lastfmRes.json();

          const img =
            lastfmData.track?.album?.image?.find(img => img.size === "medium")?.["#text"] ||
            lastfmData.track?.album?.image?.find(img => img.size === "large")?.["#text"] ||
            "";
          setAlbumImage(img);
        } else {
          setAlbumImage("");
        }
      } catch (err) {
        console.error("Error fetching current song or album:", err);
        setAlbumImage("");
      }
    }

    fetchSong();
    const interval = setInterval(fetchSong, 170000); // 2m50s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center ">
      {albumImage && (
        <div className="rounded-xl overflow-hidden">
          <img
            src={albumImage}
            alt={song.title ? `${song.artist} - ${song.title}` : "Album cover"}
            className=" max-h-full max-w-full  object-cover"
          />
        </div>
      )}

      {/* Texto de artista y tema siempre visible */}
      <div className="text-base ">
        <span className="text-white font-semibold">GIRANDO: </span>
        <span className="text-cyan-400">
          {song.artist || "Desconocido"} - {song.title || "Desconocida"}
        </span>
      </div>
    </div>
  );
}
