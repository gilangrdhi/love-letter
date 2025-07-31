import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playOnUserInteraction = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", playOnUserInteraction);
    };

    window.addEventListener("click", playOnUserInteraction);

    return () => {
      window.removeEventListener("click", playOnUserInteraction);
    };
  }, []); 

  return (
    <audio
      ref={audioRef}
      src="/music/glue-song.mp3"
      autoPlay
      loop
      hidden
    />
  );
}
