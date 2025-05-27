import { Application } from '@splinetool/runtime';

const loadSplineFiles = () => {
    const splineCanvases = document.querySelectorAll("[data-spline]");
    splineCanvases.forEach(($canvas) => {
        const filename = $canvas.getAttribute("data-spline");

        if (filename) {
            const app = new Application($canvas);
            app.load(`/assets/lotties/${filename}.splinecode`);
        }
    });
}

export default loadSplineFiles;