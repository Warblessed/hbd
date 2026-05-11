import { useRef, useEffect } from "react";

export default function Music() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // autoplay muted (allowed)
    audio.muted = true;
    audio.play().catch(() => {});

    // unmute on first user interaction
    const enableSound = () => {
      audio.muted = false;
      audio.volume = 0.8;

      window.removeEventListener("click", enableSound);
      window.removeEventListener("scroll", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("scroll", enableSound);
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/music.mp3"
      loop
    />
  );
}