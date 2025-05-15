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
                pin: true
            }
        });
    }
}

function panelsScroll($container) {
    const $panels = $container.querySelectorAll("article");

    const panelContainerMovement = gsap.to($container, {
        x: () => `-${$container.scrollWidth - window.innerWidth}`,
        scrollTrigger: {
            trigger: $container,
            scrub: true,
            pin: true
        }
    });

    $panels.forEach($panel => {
        gsap.to($panel, {
            backgroundColor: 'pink',
            scrollTrigger: {
                trigger: $panel,
                start: '0 50%',
                containerAnimation: panelContainerMovement
            }
        });
    });
}

function initScrollAnimations() {
    const $scrollElements = document.querySelectorAll("[data-animation='scroll-animation']");

    const $panelsContainers = document.querySelectorAll("[data-animation='panels']");

    $panelsContainers.forEach($panelsContainer => {
        panelsScroll($panelsContainer);
    });

    $scrollElements.forEach($scrollElement => {
        scrollAnimation($scrollElement);
    });

    if ($scrollElements) {
        overflowScroll();
    }
}



export default initScrollAnimations;