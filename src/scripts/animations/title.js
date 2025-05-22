import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function initTextAnimation() {
    const split = SplitText.create("[data-animation=split]", {
        type: "lines",
        mask: 'lines',
        autoSplit: true,
        smartWrap: true
    });

    console.log(split);


    gsap.from(split.lines, {
        y: () => gsap.utils.random(-100, 100),
        opacity: 0,
        stagger: {
            amount: .5,
            from: 'random'
        },
    })
}

export default initTextAnimation;