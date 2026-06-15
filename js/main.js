document.addEventListener("DOMContentLoaded", () => {

    const initializeMenu = () => {

        const menuButton = document.getElementById("menu-toggle");

        const dropdownMenu = document.getElementById("dropdown-menu");

        const header = document.querySelector(".header");


        if (!menuButton || !dropdownMenu || !header) {

            setTimeout(initializeMenu, 100);

            return;

        }


        const menuIcon = menuButton.querySelector(".menu-icon");


        menuButton.addEventListener("click", (event) => {

            event.stopPropagation();

            dropdownMenu.classList.toggle("active");

            header.classList.toggle("menu-open");

            menuIcon.classList.toggle("active");


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

                header.classList.remove("menu-open");

                menuIcon.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    };


    initializeMenu();

});