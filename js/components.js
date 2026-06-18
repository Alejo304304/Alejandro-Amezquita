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

    loadComponent("navbar", "navbar.html");

    loadComponent("footer", "footer.html");

});