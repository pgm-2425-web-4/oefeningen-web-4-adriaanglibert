import initBlurAnimation from "./animations/blur";
import initBoxAnimation, { boxTimelines } from "./animations/box";
import { initFadeAnimation } from "./animations/fade";
import initFlipAnimation from "./animations/flip";
import initLoader from "./animations/loading";

document.addEventListener('DOMContentLoaded', () => {

    initLoader();
    initFlipAnimation();
    initFadeAnimation();
    initBlurAnimation();
    initBoxAnimation();
    boxTimelines();
});


// const $box = document.getElementById('box');
// const $playButton = document.getElementById('play');

// const boxAnimation = $box.animate([
//     { opacity: 0, scale: 0, backgroundColor: '#000' },
//     { opacity: 1, scale: 1, backgroundColor: "red" }
// ], {
//     duration: 200,
//     iterations: 5
// });

// boxAnimation.pause();

// $playButton.addEventListener('click', () => {
//     boxAnimation.play();
// })

// function staggerItems($elements) {
//     const keyframes = [
//         { translate: '0 0' },
//         { translate: '300px 0' },
//     ];

//     [...$elements].forEach(($element, i) => {
//         $element.animate(keyframes, {
//             iterations: 1,
//             duration: 400,
//             delay: i * 100,
//             easing: "cubic-bezier(0.42, 0, 0.58, 1)",
//             fill: "forwards"
//         })
//     });
// }

// function initTriggers() {
//     const $triggers = document.querySelectorAll("[animation-target]");

//     $triggers.forEach($trigger => {
//         $trigger.addEventListener('click', () => {
//             const target = $trigger.getAttribute("animation-target");

//             const $staggerParent = document.querySelector(`[animation-name='${target}']`);

//             if (!$staggerParent || $staggerParent.getAttribute("data-animation='stagger-items'")) {
//                 alert('Er is geen element gevonden dat geanimeerd moet worden');
//                 return;
//             }

//             staggerItems($staggerParent.children);
//         })
//     });
// }

// initTriggers();