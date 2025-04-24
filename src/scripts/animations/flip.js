function initFlipAnimation() {
    const $flipItems = document.querySelectorAll("[data-animation='flip']");

    $flipItems.forEach($flipItem => {
        const html = $flipItem.innerHTML.split('</svg>');
        const svg = html[0];
        const text = html[1];

        $flipItem.innerHTML = `${svg} <div>
            <span>${text}</span>
            <span>${text}</span>
        </div>`;

        const $flipParent = $flipItem.querySelector('div');
        const $flipChildren = $flipParent.querySelectorAll('span');
        const $flipChild = $flipParent.querySelector('span:nth-child(2)');

        $flipParent.style.position = 'relative';
        $flipParent.style.overflow = 'hidden';

        Object.assign($flipChild.style, {
            position: 'absolute',
            inset: 0,
        });

        const animations = [];

        $flipChildren.forEach(($flipChild, i) => {
            $flipChild.style.display = 'block';

            const animation = $flipChild.animate([
                { translate: `0 ${i === 0 ? '0' : '-100%'}` },
                { translate: `0 ${i === 0 ? '100%' : '0'}` }
            ], {
                duration: 200,
                iterations: 1,
                fill: "forwards",
            });

            animation.pause();

            animations.push(animation);
        });

        function playAnimation() {
            animations.forEach(animation => {
                animation.play();
            });
        }

        function reverseAnimation() {
            animations.forEach(animation => animation.reverse());
        }

        $flipItem.addEventListener('mouseenter', () => {
            playAnimation();
        });

        $flipItem.addEventListener('mouseleave', () => {
            reverseAnimation();
        });
    });
}

export default initFlipAnimation;