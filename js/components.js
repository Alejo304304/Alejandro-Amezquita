async function loadComponent(elementId, filePath) {

    try {

        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Error cargando ${filePath}`);
        }

        const html = await response.text();

        document.getElementById(elementId).innerHTML = html;

    } catch (error) {

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    // Detecta si estamos dentro de la carpeta "proyectos"
    const basePath = window.location.pathname.includes("/proyectos/")
        ? "../"
        : "";

    loadComponent("navbar", basePath + "navbar.html");
    loadComponent("footer", basePath + "footer.html");

});