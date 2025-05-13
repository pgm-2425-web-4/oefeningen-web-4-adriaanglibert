import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function scrollAnimation($el) {
    const sectionHeight = () => `+=${document.querySelector('.section').offsetHeight}`;

    gsap.to($el, {
        x: 400,
        scrollTrigger: {
            trigger: $el,
            scrub: true,
            start: '0 50%',
            end: () => sectionHeight(),
            invalidateOnRefresh: true
        }
    });
}

function overflowScroll() {
    const overflowEl = document.querySelector("#overflow-element");
    const triggerEl = document.querySelector("#parent-overflow")

    if (overflowEl) {
        gsap.to(overflowEl, {
            x: -(overflowEl.scrollWidth - window.innerWidth),
            scrollTrigger: {
                trigger: triggerEl,
                start: '0 50%',
                end: () => `+=${overflowEl.scrollWidth}`,
                scrub: true,
                pin: true,
                markers: true
            }
        });
    }
}

function initScrollAnimations() {
    const $scrollElements = document.querySelectorAll("[data-animation='scroll-animation']");

    $scrollElements.forEach($scrollElement => {
        scrollAnimation($scrollElement);
    });

    if ($scrollElements) {
        overflowScroll();
    }
}



export default initScrollAnimations;