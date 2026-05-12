import Swal from 'sweetalert2';

export default function Footer() {
    const handleClick = () => {
        Swal.fire({
            title: "AY PININDOT TALAGA OH!! HAHAHAHA Happy Birthday!!! Lyka Mae! 🎉",
            text: `Happy Birthday!!! Sa nag iisang Lyka Mae,LPT!! fridayly, pang, pangpang, laykaamii, lykie, lyka, kung ano pa yan kahit aso? emeee HAHAHAHA 
                    May(mae) your day be full of blessing and happiness!! 24 kana ate. Malayo layo narin nalakbay mo, di man ganon kadali pero look at u pretty parin Hahahahah. 
                    Pero yehhh di madali kaya pat urself. Congrats sa mga challenges na nalagpasan mo before! hindi rin madali yun and u managed to overcome it dibaa naks and 
                    I hope mas tumibay ka don. And sabi ko nga sayo na desurb mo lahat ng rewards/awards na nakukuha mo e kasi simula't sapul e pinagpaguran mo naman yon. 
                    Kaya ayon lang!! More birthdayys to come lykaa mae. Sorryy if hindi ko man nasabi nang personal ito sayo pero wag ka from the bottom of my aorta naman to galing. 
                    This day sana maenjoy mo tong day mo! No overthinking muna na may kapalit yung happy moments mo. Gawin mo yung gusto mong gawin!! Deserve mo yang pahingaaa! and all na blessing u have right now. 
                    Dsurb mo yon. Anddd wag mong isipin na burden ka sa ibang tao. Kasi yung iba, tingin nila sayo blessing 😊. Stay soft but strong!
                    Proud ako sayo palagi and even before palang sabi ko nga sayo tinitingala na kita.. Kasi alam kong napakagaling mo. 
                    Mapagod ka man, pahinga ka lang!! Wag kang maguilty, tas laban ulit! and here lang me makikinig sa mga accomplishments, problem, o kahit random shits mo pa yan.
                    Enjoy ur day lyka mae! Stay Hydrated!! Lovelotssz!! Mwaahh 🎂💖 Message mo lang ako kung gusto mo pa dagdagan pics mo dito HAHAHAHAHAHA -- Doms`,
            width: 1000,
            padding: "1.2em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
        });
    };

    return (
        <footer className="h-[50vh] flex flex-col items-center justify-center text-center border-t border-zinc-800 bg-amber-100 text-black px-6">
            <h2 className="text-4xl font-bold">Once again... Nyapi mertddeyyyy!!</h2>
            <p className="text-zinc-600 mt-4">
                I hope I made u smile with this simple shit ko lang kahit di ko alam kung oks yung design Hahahaha!! and I hope you have an amazing birthday filled with love, laughter, and unforgettable moments.
                You deserve all the happiness in the world! Lyka Mae!! 🎉🎂💖
            </p>

            {/* SweetAlert Button */}
            <button
                onClick={handleClick}
                className="
        relative mt-6 px-8 py-4
        bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500
        text-white font-bold text-lg
        rounded-2xl shadow-[0_0_25px_rgba(236,72,153,0.6)]
        hover:scale-110 hover:rotate-1
        hover:shadow-[0_0_40px_rgba(217,70,239,0.9)]
        active:scale-95
        transition-all duration-300 ease-out
        overflow-hidden
        animate-pulse
        before:absolute before:inset-0
        before:bg-white/20
        before:translate-x-[-100%]
        hover:before:translate-x-[100%]
        before:transition-transform before:duration-700
    "
            >
                <span className="relative z-10 flex items-center gap-2">
                    ❗❗❗ CLICK AT UR OWN RISK ❗❗❗
                    <span className="animate-bounce">👉</span>
                </span>
            </button>
        </footer>
    );
}