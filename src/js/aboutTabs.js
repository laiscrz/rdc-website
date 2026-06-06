export function initAboutTabs() {

    const buttons =
        document.querySelectorAll(".tab-button");

    const contents =
        document.querySelectorAll(".tab-content");

    if (
        !buttons.length ||
        !contents.length
    ) {
        return;
    }

    function activateTab(tabId, buttonElement) {

        buttons.forEach(button => {

            button.classList.remove("active");

        });

        contents.forEach(content => {

            content.classList.remove("active");

        });

        buttonElement.classList.add("active");

        const target =
            document.getElementById(tabId);

        if (target) {

            target.classList.add("active");

        }
    }

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const tabId =
                button.dataset.tab;

            activateTab(
                tabId,
                button
            );

        });

    });

    const firstButton =
        document.querySelector(
            ".tab-button.active"
        ) || buttons[0];

    if (firstButton) {

        activateTab(
            firstButton.dataset.tab,
            firstButton
        );

    }

}