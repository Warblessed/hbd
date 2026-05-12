import { useEffect, useRef } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";

export default function Hero() {
    const titleRef = useRef();
    const subtitleRef = useRef();
    const imageRef = useRef();

    const burst = () => {
        confetti({ particleCount: 180, spread: 160, origin: { y: 0.6 } });
        setTimeout(() => confetti({ particleCount: 80, spread: 100, origin: { y: 0.6 } }), 300);
        setTimeout(() => confetti({ particleCount: 80, spread: 140, origin: { y: 0.6 } }), 600);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const img = imageRef.current;

            const startAnimation = () => {
                const tl = gsap.timeline();
                tl.from(img, { scale: 1.15, opacity: 0, duration: 1.5, ease: "power3.out" })
                    .from(titleRef.current, { y: 120, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=1")
                    .from(subtitleRef.current, { y: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
                    .to(img, { scale: 1.05, duration: 10, ease: "none" });

                // Optional confetti
                burst();
            };

            if (img.complete) startAnimation();
            else img.onload = startAnimation;
        }, imageRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            <img ref={imageRef} src="./images/hero.jpg" alt="Hero" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <div className="absolute inset-0 z-10 bg-black/50" />
            <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
                <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold tracking-tight">HAPPY BIRTHDAY!!! <br/> LYKA MAE!</h1>
                <p ref={subtitleRef} className="mt-6 text-lg md:text-xl text-zinc-300">How u doin?? Syempre enjoyyy ur madafakingg day!!! 
                    <br/> 
                    Manifesting na this year more wins, blessings, successful plans, at peace of mind. 
                    Sana lahat ng iniyakan mo noon mapalitan ng dahilan para ngumiti ka ngayon! Sige baba ka na!</p>
            </div>
            <div className="absolute inset-0 z-30 pointer-events-none opacity-20 mix-blend-overlay bg-[url('/images/noise.png')]" />
        </section>
    );
}