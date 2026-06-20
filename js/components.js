async function loadComponent(elementId, filePath) {

    try {

        const response = await fetch(filePath);

        if (!response.ok) {

            throw new Error(`No se pudo cargar ${filePath}`);

        }

        const html = await response.text();

        const container = document.getElementById(elementId);

        container.innerHTML = html;

        // Detecta si estamos dentro de /proyectos/
        const isProjectPage = window.location.pathname.includes("/proyectos/");

        if (isProjectPage) {

            // Corrige imágenes
            container.querySelectorAll("img").forEach(img => {

                const src = img.getAttribute("src");

                if (!src) return;

                if (
                    src.startsWith("./assets") ||
                    src.startsWith("assets/")
                ) {

                    img.setAttribute(
                        "src",
                        "../" + src.replace("./", "")
                    );

                }

            });

            // Corrige SVG externos (si usas <object>)
            container.querySelectorAll("object").forEach(obj => {

                const data = obj.getAttribute("data");

                if (!data) return;

                if (
                    data.startsWith("./assets") ||
                    data.startsWith("assets/")
                ) {

                    obj.setAttribute(
                        "data",
                        "../" + data.replace("./", "")
                    );

                }

            });

            // Corrige enlaces internos

            container.querySelectorAll("a").forEach(link => {

                const href = link.getAttribute("href");

                if (!href) return;

                if (
                    href.endsWith(".html") &&
                    !href.startsWith("http") &&
                    !href.startsWith("../") &&
                    href !== "#"
                ) {

                    link.setAttribute(
                        "href",
                        "../" + href
                    );

                }

            });

        }

        // Inicializa el menú si existe

        if (typeof initializeMenu === "function") {

            initializeMenu();

        }

    }

    catch (error) {

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    const isProjectPage = window.location.pathname.includes("/proyectos/");

    const basePath = isProjectPage ? "../" : "./";

    loadComponent("navbar", basePath + "navbar.html");

    loadComponent("footer", basePath + "footer.html");

});