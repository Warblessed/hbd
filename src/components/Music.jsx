import { useRef, useEffect } from "react";

export default function Music() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Start muted autoplay
    audio.muted = true;
    audio.volume = 0.8;

    audio.play().catch((err) => {
      console.log("Autoplay blocked:", err);
    });

    // Enable sound after first interaction
    const enableSound = async () => {
      try {
        audio.muted = false;

        // some browsers require play() again
        await audio.play();
      } catch (err) {
        console.log("Playback failed:", err);
      }

      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("scroll", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);
    window.addEventListener("scroll", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("scroll", enableSound);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="./music/music.mp3"
      loop
      playsInline
    />
  );
}