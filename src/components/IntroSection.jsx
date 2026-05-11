import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    const line1 = useRef();
    const line2 = useRef();
    const sectionRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            [line1.current, line2.current],
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.25,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* 🖼️ Background image */}
            <img
                src="./images/intro.jpg"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-[1px]"
            />

            {/* 🌌 Soft pastel starry overlay */}
            <div className="absolute inset-0 bg-indigo-900/50 backdrop-blur-sm" />

            {/* ✨ Floating stars */}
            <div className="absolute text-white text-xs animate-twinkle top-5 left-10 opacity-70">★</div>
            <div className="absolute text-yellow-200 text-sm animate-twinkle top-20 right-16 opacity-60">⭐</div>
            <div className="absolute text-pink-100 text-xl animate-bounce bottom-20 left-24 opacity-50">🌟</div>
            <div className="absolute text-indigo-100 text-xs animate-ping top-32 right-8 opacity-40">✨</div>
            <div className="absolute text-yellow-300 text-sm animate-pulse top-48 left-40 opacity-60">★</div>
            <div className="absolute text-white text-lg animate-bounce bottom-10 right-32 opacity-50">⭐</div>
            <div className="absolute text-yellow-100 text-xs animate-twinkle top-64 left-20 opacity-30">🌟</div>
            <div className="absolute text-white text-sm animate-ping top-12 right-48 opacity-50">✨</div>
            <div className="absolute text-yellow-200 text-xs animate-pulse bottom-36 left-10 opacity-40">★</div>
            <div className="absolute text-pink-50 text-sm animate-twinkle bottom-20 right-60 opacity-30">⭐</div>

            {/* 💎 Glass card */}
            <div className="relative z-10 text-center px-8 py-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 max-w-3xl">
                <h2
                    ref={line1}
                    className="text-4xl md:text-6xl font-bold text-white"
                >
                    Nyapiii Mertdeyy! Ano lang to eme eme lang. Dont worry.
                </h2>

                <h3
                    ref={line2}
                    className="text-xl md:text-2xl mt-6 text-white/80"
                >
                    Sasabihin na naman niya "Masyado niyo na naman akong mahal, guys!" <br /> Oo na, sige na. Hahahahah Sorry if mejo di ganun ka ganda yung design pero hopia lyk it!
                </h3>
            </div>
        </section>
    );
}