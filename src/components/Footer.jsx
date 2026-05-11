import Swal from 'sweetalert2';

export default function Footer() {
    const handleClick = () => {
        // Swal.fire({
        //     title: 'Happy Birthday! 🎉',
        //     text: 'Wishing you a day full of joy and surprises!',
        //     icon: 'success',
        //     confirmButtonText: 'Thanks!'
        // });
        Swal.fire({
            title: "Happy Birthday, Lyka Mae! 🎉",
            text: `Happy Birthday!!! Sa nag iisang Lyka Mae,LPT!! fridayly, pang, pangpang, laykaamii, lykie, lyka, kung ano pa yan kahit aso? emeee HAHAHAHA 
May(mae) your day be full of blessing and happiness!! 24 kana ate. Malayo layo narin nalakbay mo, di man ganon kadali pero look at u pretty parin Hahahahah. Pero yehhh di madali kaya pat urself. Congrats sa mga challenges na nalagpasan mo nung 23 ka hindi rin madali yun and u managed to overcome it naks and I hope mas tumibay ka don. And sabi ko nga sayo na desurb mo lahat ng rewards/awards nakukuha mo kasi simulat sapuul e pinagpaguran mo naman yon. Kaya ayon lang!! More birthdayys to come lykaa mae. Sorryy if hindi ko masabi/nasabi ng personal pero from aorta to. 
This day sana maenjoy mo tong day mo! No overthinking muna na may kapalit. Gawin mo yung gusto mong gawin!! Deserve mo yang pahingaaa! and all na blessing u have right now. Dsurb mo yon. Anddd wag mong isipin na burden ka sa ibang tao. Kasi yung iba, tingin nila sayo blessing 😊. Stay soft but strong!
Proud ako sayo palagi and even before palang sabi ko nga tinitingala na kita.. Kasi alam kong napakagaling mo. Mapagod ka man, pahinga ka lang!! Wag kang maguilty, tas laban ulit! and here lang me makikinig sa mga accomplishments, problem, o kahit random shits mo pa yan.
Enjoy ur day lyka mae! Lovelotssz!! Mwaahh 🎂💖 Message mo lang ako kung gusto mo pa dagdagan pics mo dito HAHAHAHAHAHA -- Doms`,
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
                I hope I made u smile with this simple thingy ko lang kahit bara bara yung design Hahahaha!! and I hope you have an amazing birthday filled with love, laughter, and unforgettable moments.
                You deserve all the happiness in the world! Lyka Mae!! 🎉🎂💖
            </p>

            {/* SweetAlert Button */}
            <button
                onClick={handleClick}
                className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
            >
                Wag mong pindutin to, nakakatakot! 🎉
            </button>
        </footer>
    );
}