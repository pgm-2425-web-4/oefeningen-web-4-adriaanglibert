import gsap from "gsap";
import initBlurAnimation from "./animations/blur";
import initBoxAnimation, { boxTimelines } from "./animations/box";
import { initFadeAnimation } from "./animations/fade";
import initFlipAnimation from "./animations/flip";
import initLoader from "./animations/loading";
import initPin from "./animations/pin";
import initScrollAnimations from "./animations/scroll";
import initSlide from "./animations/slide";
import initMouse from "./animations/mouse";
import initTabs from "./animations/tabs";
import loadLottieFiles from "./lottie";
import loadRiveFiles from "./rive";
import initDomChanges from "./animations/dom";
import initTextAnimation from "./animations/title";

export const GAP_LG_PX = parseInt(getComputedStyle(document.body).getPropertyValue('--spacing-lg').replace('rem', '') * 16);

import { ScrollSmoother } from "gsap/ScrollSmoother";
import loadSplineFiles from "./spline";

gsap.registerPlugin(ScrollSmoother)

ScrollSmoother.create({
    smooth: 2,
    effects: true,
});

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
    initMouse();
    initTabs();

    loadLottieFiles();
    loadRiveFiles();
    loadSplineFiles();

    initDomChanges();
    initTextAnimation();
});