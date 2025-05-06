import gsap from "gsap";
import SplitTextJS from 'split-text-js';
import spin from "./spin";

const $wrapper = document.querySelector("[data-animation='loader']");
const $logo = $wrapper?.querySelector("[data-animation-child='logo']");
const $bars = $wrapper?.querySelectorAll("[data-animation-child='bar']");

function logoTimeline($el) {
    const splitText = new SplitTextJS($el);
    const $letters = splitText.chars;

    const tl = gsap.timeline({
        delay: 1
    });

    tl
        .fromTo($el, { opacity: 0 }, { opacity: 1 })
        .from($letters, {
            y: 20,
            stagger: {
                amount: .25,
                each: .25
            },
            duration: .25,
            ease: 'cubicBezier(.71,-0.77,.43,1.67)'
        }, '<+.1')
        .to($letters, {
            scale: 0,
            stagger: {
                from: 'center',
                amount: .5
            }
        }, '>+.5')

    return tl;
}

function barTimeline($bars) {
    const tl = gsap.timeline();

    tl
        .to($bars, { backgroundColor: '#BAA9A9', duration: .8 })
        .to($logo, { color: "#262625", duration: .4 }, '<')
        .to($bars, {
            yPercent: 100,
            ease: 'circ.inOut',
            stagger: {
                amount: .35,
                each: .1
            }
        })
        .to($wrapper, {
            display: 'none',
            duration: 0
        });

    return tl;
}

function initLoader() {
    if ($wrapper) {
        gsap.set($logo, { opacity: 0 });

        const masterTimeline = gsap.timeline();

        masterTimeline
            .add(logoTimeline($logo))
            .add(barTimeline($bars), '>-1')
            .add(spin('[data-animation="spin"]'), '>-1');
    }
}

export default initLoader;