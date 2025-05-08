import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function slideTimelineAnimation($container) {
    const $slides = $container.querySelectorAll("[data-animation-child='slide']");

    const slideTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: $container,
            scrub: 1,
            pin: true,
            start: '0 0',
            end: () => `+=${$container.offsetHeight * $container.children.length}`
        }
    });

    $slides.forEach(($slide, i) => {
        const x = $slide.getAttribute('data-x-position') ?? '-100';
        const xAlt = i % 2 ? 100 : -100;

        slideTimeline.from($slide, {
            xPercent: xAlt
        }, '=+.5');
    });

    return slideTimeline;
}

function initSlide() {
    const $slideContainers = document.querySelectorAll("[data-animation='slide']");

    $slideContainers.forEach($slideContainer => {
        slideTimelineAnimation($slideContainer);
    });
}

export default initSlide;