function initPopulationCounter() {

    const counter = document.getElementById("population-counter");

    if (!counter) return;

    const finalValue = 119.04;
    const duration = 2500;

    function startCounter() {

        let startTimestamp = null;

        function step(timestamp) {

            if (!startTimestamp) {
                startTimestamp = timestamp;
            }

            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
            );

            const current = progress * finalValue;

            counter.textContent = current
                .toFixed(2)
                .replace(".", ",");

            if (progress < 1) {
                requestAnimationFrame(step);
            }

        }

        requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.unobserve(entry.target);

            }

        });

    });

    observer.observe(counter);

}

window.addEventListener("load", () => {

    setTimeout(() => {
        initPopulationCounter();
    }, 100);

});