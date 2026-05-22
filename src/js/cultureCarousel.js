function initCultureCarousel() {

    const track =
        document.querySelector(".carousel-track");

    const slides =
        document.querySelectorAll(".carousel-image");

    const nextBtn =
        document.querySelector(".next");

    const prevBtn =
        document.querySelector(".prev");

    const indicators =
        document.querySelectorAll(".indicator");


    if (
        !track ||
        !slides.length ||
        !nextBtn ||
        !prevBtn
    ) {
        return;
    }

    let currentSlide = 0;

    let autoSlide;


    function updateCarousel() {

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;

        indicators.forEach(indicator => {
            indicator.classList.remove("active");
        });

        indicators[currentSlide]
            .classList.add("active");

    }


    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        updateCarousel();

    }


    function prevSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        updateCarousel();

    }


    function startAutoSlide() {

        autoSlide = setInterval(() => {

            nextSlide();

        }, 5000);

    }


    function resetAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    nextBtn.addEventListener("click", () => {

        nextSlide();

        resetAutoSlide();

    });

    prevBtn.addEventListener("click", () => {

        prevSlide();

        resetAutoSlide();

    });


    startAutoSlide();

}

window.addEventListener("load", () => {

    setTimeout(() => {

        initCultureCarousel();

    }, 100);

});