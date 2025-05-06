import gsap from "gsap";

function spin($el) {
    const spinAnimation = gsap.to($el, {
        rotate: '360deg',
        duration: 2,
        ease: 'elastic.inOut'
    });

    return spinAnimation;
}

export default spin;