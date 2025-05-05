import gsap from "gsap";

function initBoxAnimation() {
    const $altBoxes = gsap.utils.toArray("[data-animation='box']")

    gsap.to($altBoxes, {
        x: 200,
        backgroundColor: 'red',
        repeat: -1,
        yoyo: true,
        stagger: {
            amount: 1
        }
    });
}

export default initBoxAnimation;
