import gsap from "gsap";

function unBlur($el) {
    // Animeer $el
    gsap.from($el, {
        filter: 'blur(2px)',
        duration: 4,
    });
}

function initBlurAnimation() {
    const $blurElements = document.querySelectorAll("[data-animation='blur']");

    $blurElements.forEach($blurElement => {
        unBlur($blurElement);
    });
}

export default initBlurAnimation;
