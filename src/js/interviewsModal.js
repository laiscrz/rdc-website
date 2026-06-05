export function initInterviewModal() {

    const modal = document.getElementById("interviewModal");

    const modalImage = document.getElementById("modalImage");

    const cards = document.querySelectorAll(".poster-card");

    const closeButton = document.querySelector(".modal-close");

    const zoomIn = document.getElementById("zoomIn");

    const zoomOut = document.getElementById("zoomOut");

    if (
        !modal ||
        !modalImage ||
        !cards.length
    ) {
        return;
    }

    let zoom = 1;

    function applyZoom() {

        modalImage.style.transform =
            `scale(${zoom})`;
    }

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const image =
                card.querySelector("img");

            modalImage.src =
                image.src;

            zoom = 1;

            applyZoom();

            modal.classList.add("active");
        });
    });

    zoomIn?.addEventListener("click", () => {

        zoom += 0.2;

        applyZoom();
    });

    zoomOut?.addEventListener("click", () => {

        zoom = Math.max(
            0.5,
            zoom - 0.2
        );

        applyZoom();
    });

    closeButton?.addEventListener("click", () => {

        modal.classList.remove("active");

        zoom = 1;
    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

            zoom = 1;
        }
    });

    modalImage.addEventListener("wheel", (e) => {

        e.preventDefault();

        if (e.deltaY < 0) {

            zoom += 0.1;

        } else {

            zoom = Math.max(
                0.5,
                zoom - 0.1
            );
        }

        applyZoom();

    }, { passive: false });

    document.addEventListener("keydown", (e) => {

        if (!modal.classList.contains("active")) {

            return;
        }

        if (e.key === "Escape") {

            modal.classList.remove("active");

            zoom = 1;
        }

        if (e.key === "+") {

            zoom += 0.2;

            applyZoom();
        }

        if (e.key === "-") {

            zoom = Math.max(
                0.5,
                zoom - 0.2
            );

            applyZoom();
        }
    });
}