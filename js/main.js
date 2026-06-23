/* ========================================
   MENU HAMBURGUESA
======================================== */

function initializeMenu() {

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

        if (menuIcon) {
            menuIcon.classList.toggle("active");
        }

    });

    document.addEventListener("click", (event) => {

        const clickedOutside =

            !menuButton.contains(event.target) &&
            !dropdownMenu.contains(event.target);

        if (clickedOutside) {

            dropdownMenu.classList.remove("active");

            header.classList.remove("menu-open");

            if (menuIcon) {
                menuIcon.classList.remove("active");
            }

        }

    });

}

initializeMenu();


/* ========================================
   NAV SCROLL
======================================== */

function initScrollNavbar() {

    const header = document.querySelector(".header");

    if (!header) {

        setTimeout(initScrollNavbar, 100);

        return;

    }

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

initScrollNavbar();








const images = document.querySelectorAll(".zoom-scroll img");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.transform = "scale(1)";

        } else {

            entry.target.style.transform = "scale(1.25)";

        }

    });

}, {
    threshold: 0.2
});

images.forEach(img => observer.observe(img));

const media = document.querySelectorAll(".zoom-scroll img, .zoom-scroll video");