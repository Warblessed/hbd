import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]; // Image numbers corresponding to /images/1.jpg, /images/2.jpg, etc.,
    const imgRefs = useRef([]);

    useEffect(() => {
        // gsap.context ensures cleanup in React 18+
        const ctx = gsap.context(() => {
            // Animate all images once they exist
            gsap.from(imgRefs.current, {
                opacity: 0,
                y: 80,
                scale: 0.95,
                stagger: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: ".gallery",
                    start: "top 80%",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="min-h-screen px-6 py-24 bg-black text-white gallery">
            <h2 className="text-4xl text-center mb-12 font-bold">Memories to look back? Ay meh paganun? Pics of u and uz 📸</h2>

            <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((n, i) => (
                    <img
                        key={n}
                        ref={(el) => (imgRefs.current[i] = el)}
                        src={`./images/${n}.jpg`}
                        alt={`Gallery Image ${n}`}
                        className="w-full mb-4 rounded-xl object-cover break-inside-avoid shadow-lg"
                    />
                ))}
            </div>
        </section>
    );
}