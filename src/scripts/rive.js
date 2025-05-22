import { Rive } from "@rive-app/canvas";

function loadRiveFiles() {
    const $canvases = document.querySelectorAll("canvas[data-rive-source]");

    $canvases.forEach($canvas => {
        const r = new Rive({
            src: `/assets/lotties/${$canvas.getAttribute('data-rive-source')}`,
            canvas: $canvas,
            autoplay: true,
            stateMachines: "Interaction",
            onLoad: () => {
                r.resizeDrawingSurfaceToCanvas();
            },
        });

        console.log(r);

    });
}

export default loadRiveFiles;