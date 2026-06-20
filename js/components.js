async function loadComponent(elementId, filePath) {

    try {

        const response = await fetch(filePath);

        if (!response.ok) {

            throw new Error(`Error cargando ${filePath}`);

        }

        const html = await response.text();

        const container = document.getElementById(elementId);

        container.innerHTML = html;

        const isProjectPage = window.location.pathname.includes("/proyectos/");

        if (isProjectPage) {

            // Corrige imágenes
            container.querySelectorAll("[src]").forEach(element => {

                const src = element.getAttribute("src");

                if (
                    src &&
                    !src.startsWith("http") &&
                    !src.startsWith("../")
                ) {

                    element.setAttribute("src", "../" + src);

                }

            });

            // Corrige enlaces internos
            container.querySelectorAll("a").forEach(link => {

                const href = link.getAttribute("href");

                if (
                    href &&
                    href.endsWith(".html") &&
                    !href.startsWith("http") &&
                    !href.startsWith("../")
                ) {

                    link.setAttribute("href", "../" + href);

                }

            });

        }

        // Inicializar menú
        if (typeof initializeMenu === "function") {

            initializeMenu();

        }

    } catch (error) {

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    const isProjectPage = window.location.pathname.includes("/proyectos/");

    const basePath = isProjectPage ? "../" : "";

    loadComponent("navbar", basePath + "navbar.html");

    loadComponent("footer", basePath + "footer.html");

});