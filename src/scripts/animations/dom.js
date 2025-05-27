import gsap from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

function swap() {
    const $firstContainer = document.getElementById('first-container');
    const $secondContainer = document.getElementById('second-container');

    const boxA = $firstContainer.querySelector('.box');
    const boxB = $secondContainer.querySelector('.box');

    const initialBoxState = Flip.getState([boxA, boxB]);

    $firstContainer.removeChild(boxA);
    $secondContainer.removeChild(boxB);

    $firstContainer.appendChild(boxB);
    $secondContainer.appendChild(boxA);

    Flip.from(initialBoxState, {
        duration: 1
    })
}

function initDomChanges() {
    document.getElementById('flip-boxes')?.addEventListener('click', () => {
        swap();
    })
}

export default initDomChanges;