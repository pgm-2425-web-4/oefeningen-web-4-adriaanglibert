import gsap, { random } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function hideButtons($tabButtonContainer) {
    const $stepTitles = $tabButtonContainer.querySelectorAll('button:not(:first-child) [data-animation-child=step]');

    gsap.set($stepTitles, {
        width: 0
    });
}

function updateTitle($titleContainer, buttonAndTabIndex) {
    const $titles = $titleContainer.children;
    const $inactiveTitles = Array.from($titles).filter((_, index) => index !== buttonAndTabIndex);
    const $newActiveTitle = $titles[buttonAndTabIndex];

    const titleTimeline = gsap.timeline({
        defaults: {
            duration: .25,
            ease: "ease.out"
        }
    });

    titleTimeline
        .to($inactiveTitles, {
            y: -5,
            opacity: 0,
        })
        .set($inactiveTitles, { autoAlpha: 0 })
        .fromTo($newActiveTitle, {
            y: 5,
            opacity: 0,
            autoAlpha: 0
        }, {
            y: 0,
            opacity: 1,
            autoAlpha: 1
        });

    return titleTimeline;
}

function updateButton($tabButtonContainer, buttonAndTabIndex) {
    const buttonsTimeline = gsap.timeline({
        defaults: {
            ease: 'expo.out'
        }
    });
    const $stepTitles = $tabButtonContainer.querySelectorAll("[data-animation-child=step]");

    buttonsTimeline
        .to($stepTitles, {
            width: 0
        })
        .to($stepTitles[buttonAndTabIndex], {
            width: 'auto'
        }, '<');

    return buttonsTimeline;
}

function updateProgress($progressBarContainer, progress) {
    const $progressElement = $progressBarContainer.querySelector("progress");
    const $progressIcon = $progressBarContainer.querySelector("img");

    const $progressPercentage = $progressBarContainer.querySelector("[data-animation-child=progress-percentage]");

    const calculatedWidthInPixels = (progress / 100) * $progressElement.offsetWidth;

    const progressTimeline = gsap.timeline();

    progressTimeline
        .to($progressPercentage, {
            textContent: progress,
            snap: { textContent: 1 },
        }, 0)
        .to($progressElement, {
            attr: {
                value: progress
            },
        }, 0)
        .to($progressIcon, {
            x: calculatedWidthInPixels + 4,
            rotate: gsap.utils.random(0, 720),
            ease: 'ease'
        }, 0);

    return progressTimeline;
}

function updatePanel($panels, buttonAndTabIndex) {
    const activePanel = $panels[buttonAndTabIndex];
    const panelTimeline = gsap.timeline({
        defaults: {
            ease: 'back.inOut',
            duration: .35
        }
    });

    panelTimeline
        .to($panels, { x: 15, opacity: 0 })
        .set($panels, { autoAlpha: 0 })
        .fromTo(activePanel,
            { x: -10, opacity: 0, autoAlpha: 0 },
            { x: 0, autoAlpha: 1 }
            , '<');

    return panelTimeline;
};

function updateImage($images, buttonAndTabIndex) {
    const $activeImage = $images[buttonAndTabIndex];
    const $inactiveImages = Array.from($images).filter((img, index) => index !== buttonAndTabIndex);

    const imageTimeline = gsap.timeline({
        defaults: {
            ease: 'expo.inOut',
            duration: .5
        }
    });

    imageTimeline
        .to($inactiveImages, { xPercent: 100, opacity: 0.5 })
        .to($activeImage, { xPercent: 0, opacity: 1 }, '<+.25');

    return imageTimeline;
};

function handleTab($container) {
    const $titleContainer = $container.querySelector("[data-animation-child=titles]");
    const $progressBarContainer = $container.querySelector("[data-animation-child=progress-bar]");

    const $tabButtonContainer = $container.querySelector("[data-animation-child=button-container]");
    const $tabButtons = $tabButtonContainer.querySelectorAll("[data-animation-child=button-container] button");
    const $tabPanels = $container.querySelectorAll("[data-animation-child=panels] > article[role=tabpanel]");
    const $tabImages = $container.querySelectorAll("[data-animation-child=images] > img");

    hideButtons($tabButtonContainer);

    function updateStep(index, animateProgressBar) {
        const progress = (index / ($tabButtons.length - 1)) * 100;

        updateTitle($titleContainer, index);
        updateButton($tabButtonContainer, index);
        updatePanel($tabPanels, index);
        updateImage($tabImages, index);

        if (animateProgressBar) {
            updateProgress($progressBarContainer, progress);
        }
    }

    // const masterTimeline = gsap.timeline();
    const progressTl = updateProgress($progressBarContainer, 100);

    $tabButtons.forEach(($tabButton, buttonAndTabIndex) => {
        // masterTimeline.add(updateStep(buttonAndTabIndex));

        $tabButton.addEventListener('click', () => {
            updateStep(buttonAndTabIndex, true);
        })
    });

    ScrollTrigger.create({
        trigger: $container,
        start: '0 0',
        end: '+=3000',
        animation: progressTl,
        scrub: true,
        pin: true,
        onUpdate: self => {
            self.lastStep = self.lastStep ?? -1;
            const totalSteps = $tabButtons.length - 1;
            const newStep = Math.round(self.progress * totalSteps);
            if (newStep !== self.lastStep) {
                self.lastStep = newStep;
                updateStep(newStep, false);
            }
        }
    });


}

function initTabs() {
    const $tabContainers = document.querySelectorAll("[data-animation='tab-container']");

    $tabContainers.forEach($tabContainer => {
        handleTab($tabContainer);
    });
}

export default initTabs;