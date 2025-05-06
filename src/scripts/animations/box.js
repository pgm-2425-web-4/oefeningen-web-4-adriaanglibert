import gsap from "gsap";

const $firstBox = document.getElementById('first');
const $secondBox = document.getElementById('second');
const $thirdBox = document.getElementById('third');

function firstAnimation() {
    const firstTimeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
        defaults: {
            ease: 'back'
        }
    });

    firstTimeline
        .to($firstBox, { x: 100 })
        .to($secondBox, { x: 100 }, '<+.5')
        .to($firstBox, { y: 50 })
        .to($firstBox, { opacity: 0 });

    return firstTimeline;
}

function secondAnimation() {
    const secondTimeline = gsap.timeline();

    secondTimeline
        .to('body', {
            backgroundColor: 'pink'
        })
        .to('h1', {
            scale: .5
        });

    return secondTimeline;
}

export function boxTimelines() {
    const masterTimeline = gsap.timeline({
        delay: 1
    });

    masterTimeline
        .add(firstAnimation());
}

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
