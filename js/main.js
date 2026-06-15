
document.addEventListener("DOMContentLoaded", () => {

    const initializeMenu = () => {

        const menuButton = document.getElementById("menu-toggle");

        const dropdownMenu = document.getElementById("dropdown-menu");

        if (!menuButton || !dropdownMenu) {

            setTimeout(initializeMenu, 100);

            return;

        }


        menuButton.addEventListener("click", () => {

            dropdownMenu.classList.toggle("active");


            const expanded =
                menuButton.getAttribute("aria-expanded") === "true";


            menuButton.setAttribute(
                "aria-expanded",
                !expanded
            );

        });


        document.addEventListener("click", (event) => {

            const clickedOutside =

                !menuButton.contains(event.target) &&
                !dropdownMenu.contains(event.target);


            if (clickedOutside) {

                dropdownMenu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    };


    initializeMenu();

});
