function fade($element) {
    $element.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        iterations: 1,
        duration: 3000,
        delay: 100,
        fill: 'forwards'
    });
}

export function initFadeAnimation() {
    const observer = new IntersectionObserver((observations) => {
        observations.forEach(observation => {
            if (observation.isIntersecting) {
                fade(observation.target);
                observer.unobserve(observation.target);
            }
        });
    }, {});

    const $fadeElements = document.querySelectorAll("[data-animation='fade']");

    $fadeElements.forEach($fadeElement => {
        $fadeElement.style.opacity = 0;
        observer.observe($fadeElement);
    });
}