import gsap from "gsap";
import initBlurAnimation from "./animations/blur";
import initBoxAnimation, { boxTimelines } from "./animations/box";
import { initFadeAnimation } from "./animations/fade";
import initFlipAnimation from "./animations/flip";
import initLoader from "./animations/loading";
import initPin from "./animations/pin";
import initScrollAnimations from "./animations/scroll";
import initSlide from "./animations/slide";

export const GAP_LG_PX = parseInt(getComputedStyle(document.body).getPropertyValue('--spacing-lg').replace('rem', '') * 16);

const DEV_MODE = true;

document.addEventListener('DOMContentLoaded', () => {
    /* Temp check, remove this when deploying. */
    if (DEV_MODE) {
        gsap.set('.loader', { display: 'none' });
    } else {
        initLoader();
    }

    initFlipAnimation();
    initFadeAnimation();
    initBlurAnimation();
    initBoxAnimation();
    initPin();
    boxTimelines();
    initSlide(); // Volgorde van belang! Hier wordt iets bijgerekend!
    initScrollAnimations();
});