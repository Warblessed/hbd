import { useRef, useState } from "react";

export default function Music() {
  const audioRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (!enabled) {
        audio.volume = 0.8;
        audio.loop = true;

        await audio.play();

        setEnabled(true);
      } else {
        audio.pause();

        setEnabled(false);
      }
    } catch (err) {
      console.log("Playback failed:", err);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="./music/daisies.mp3"
        playsInline
      />

      <div className="fixed bottom-5 right-5 z-50">
        <label className="label cursor-pointer gap-3 bg-base-100/80 backdrop-blur px-4 py-3 rounded-box shadow-lg">
          
          <span className="text-sm font-medium text-black">
            🎵
          </span>

          <input
            type="checkbox"
            checked={enabled}
            onChange={toggleMusic}
            className="toggle toggle-primary"
          />
        </label>
      </div>
    </>
  );
}