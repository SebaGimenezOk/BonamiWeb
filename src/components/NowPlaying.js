"use client"; // si está dentro de app/ en Next.js 13+

import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState("Cargando...");
  const [error, setError] = useState(null);

  const fetchNowPlaying = async () => {
    try {
      const res = await fetch("/api/now-playing");
      const data = await res.json();

      if (res.ok) {
        setNowPlaying(data.nowPlaying || "Información no disponible");
        setError(null);
      } else {
        setNowPlaying("Información no disponible");
        setError(data.error || "Error desconocido");
      }
    } catch (err) {
      setNowPlaying("Información no disponible");
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchNowPlaying();

    const interval = setInterval(() => {
      fetchNowPlaying();
    }, 15000); // actualiza cada 15 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#fff" }}>
      <p>
        <strong>Ahora suena:</strong> {nowPlaying}
      </p>
      {error && <small style={{ color: "red" }}>Error: {error}</small>}
    </div>
  );
}
