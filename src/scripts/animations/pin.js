import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GAP_LG_PX } from "../main";

gsap.registerPlugin(ScrollTrigger);

function pinAnimation($container) {
    const $pinChildren = $container.querySelectorAll('[data-animation-child="pin"]');
    const BAR_HEIGHT = (GAP_LG_PX * 3);

    let completeHeight = (($pinChildren.length - 1) * BAR_HEIGHT) + $pinChildren[$pinChildren.length - 1].offsetHeight;

    $pinChildren.forEach(($pinChild, index) => {
        const start = index * BAR_HEIGHT;

        const $wysiwygChildren = $pinChild.querySelectorAll("div > p");
        const fadeOutChildren = gsap.to($wysiwygChildren, {
            opacity: 0,
            y: 10,
            stagger: .5,
            paused: true
        })

        ScrollTrigger.create({
            trigger: $pinChild,
            start: `top ${start}`,
            end: `100% ${completeHeight}`,
            endTrigger: $container,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
            scrub: true,
            animation: index !== $pinChildren.length - 1 ? fadeOutChildren : null
        });
    });

}

function initPin() {
    const $pinContainers = document.querySelectorAll('[data-animation="pin-container"]');

    $pinContainers.forEach($pinContainer => {
        pinAnimation($pinContainer);
    });
}

export default initPin;