import gsap from "gsap";
import { debounce } from "../helpers";

const $mouseContainer = document.querySelector("[data-animation='mouse']");
const $mouseBall = $mouseContainer.querySelector("[data-animation-child='ball']");

export const mouseEnterAnimation = gsap.from($mouseBall, {
    opacity: 0,
    scale: 0,
    duration: 1.25,
    ease: 'elastic.inOut'
});

function initMouse() {
    const mm = gsap.matchMedia();

    mm.add("(pointer: fine)", () => {
        const quickToX = gsap.quickTo($mouseContainer, "x");
        const quickToY = gsap.quickTo($mouseContainer, "y");

        document.addEventListener('mousemove', debounce((event) => {
            const { clientX, clientY } = event;
            quickToX(clientX);
            quickToY(clientY);
        }, 1));
    })

}

export default initMouse;