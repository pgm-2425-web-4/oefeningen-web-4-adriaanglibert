import { DotLottie } from '@lottiefiles/dotlottie-web';

function loadLottieFiles() {
    const $canvases = document.querySelectorAll("canvas[data-lottie-source]");

    $canvases.forEach($canvas => {
        const dotLottie = new DotLottie({
            autoplay: false,
            loop: true,
            canvas: $canvas,
            speed: 2,
            layout: {
                fit: "cover",
                align: [.5, 0]
            },
            src: `/assets/lotties/${$canvas.getAttribute('data-lottie-source')}`
        });

        window.addEventListener("resize", () => {
            dotLottie.resize();
        });

        $canvas.addEventListener('mouseenter', () => {
            dotLottie.play();
        });

        $canvas.addEventListener('mouseleave', () => {
            dotLottie.pause();
        });
    });
}

export default loadLottieFiles;