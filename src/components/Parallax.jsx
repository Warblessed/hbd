import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Parallax() {
    const sectionRef = useRef();
    const bgRef = useRef(); // background layer
    const fgRef = useRef(); // foreground layer (optional decorations)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background moves slower
            gsap.to(bgRef.current, {
                yPercent: 20,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Foreground moves faster for depth
            gsap.to(fgRef.current, {
                yPercent: 40,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-[200vh] relative overflow-hidden">
            {/* Background image */}
            <img
                ref={bgRef}
                src="./images/hero1.jpg"
                alt="Parallax Background"
                className="absolute inset-0 h-[120%] w-full object-cover"
            />

            {/* Foreground decorations */}
            <img
                ref={fgRef}
                src="./images/confettipoppers.png" // e.g., hearts, sparkles, confetti PNG
                alt="Foreground Decorations"
                className="absolute inset-0 h-[100%] w-full object-cover pointer-events-none opacity-30"
            />

            {/* Dark overlay to keep text readable */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Centered text */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-5xl md:text-7xl font-bold text-white text-center px-6">
                    A Special Moment On Your Special Day! 🎉
                </h2>
            </div>
        </section>
    );
}