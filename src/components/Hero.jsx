"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const audio = document.getElementById("bonami-audio");

    if (!audio) {
      console.warn("Audio element not found");
      return;
    }

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 100;

    function draw() {
      animationRef.current = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2;

        const r = 250;
        const g = 250 - barHeight;
        const b = 50;

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      analyser.disconnect();
      source.disconnect();
      audioContext.close();
    };
  }, []);

  return (
    <div className="w-full bg-black">
      <canvas ref={canvasRef} className="w-full h-[100px]" />
    </div>
  );
}
