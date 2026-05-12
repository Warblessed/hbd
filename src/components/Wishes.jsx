import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Wishes() {
    const cardsRef = useRef([]);

    const wishes = [
        "Continue being the wonderful person you are 🌟",
        "Always choose urself!! you deserve the best 💖",
        "Stay matampuhin, ang nagpapalyka sa isang lyka mae",
        "Always keep that beautiful smile on your face 😊",
        "Never stop dreaming, dreamer gurly yarn 🌸",
        "Uhmm, more concert to come sayo? Hehe 🎶",
        "More kape to drink but limit 2 per day hehehe☕",
        "You deserve the happiest days, yes always naman 🌷",
        "Enjoy your day!!!🎈🎈 coz u dzurb it tho!!",
        "Thank you for being kind always! Napaka maintindihin mooo!!💛",
        "Stay awesome, pretty, gorgeous and keep shining! Naks! Shining shimering splendid! ✨",
        "Marami pang adventures ang naghihintay sayo!! 🌈",
        "More inis galing sakin/samin ng H2O 😭😭",
        "Marami pang wishes e pero sa panaginip ko nalang tutuloy pag nagkita tayo!! Hehe!💤🧸",
        "Last but not the least! STAY HYDRATED!! MOREE TUBIGGG!!!!💦💦" + <br/> + "Okay 1 LAGOK = 1 liter dapat ah",
    ];

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 80, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.18,
                duration: 1.2,
                scrollTrigger: {
                    trigger: cardsRef.current[0], // first card triggers the animation
                    start: "top 70%",
                },
            }
        );
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden px-6 py-24 wishes">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-rose-100 to-yellow-100 bg-white/40" />
            <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-center text-zinc-800 mb-6">
                    Since Day One 💌 Ayeee mala Flow-G lang yerrnn??
                </h2>
                <p className="text-center text-zinc-600 mb-14 text-lg">
                    Some little wishes for you. Hihihi...
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {wishes.map((msg, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="card rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.15)] text-center"
                        >
                            <p className="text-xl font-semibold text-zinc-900">{msg}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}