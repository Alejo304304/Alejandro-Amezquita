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

console.log("Archivo cargado");

async function loadComponent(elementId, filePath) {

    console.log(`Intentando cargar ${filePath}`);

    try {

        const response = await fetch(filePath);

        console.log(response.status);

        const html = await response.text();

        document.getElementById(elementId).innerHTML = html;

    } catch (error) {

        console.error(error);

    }
}

document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM listo");

    loadComponent("navbar", "navbar.html");

    loadComponent("footer", "footer.html");

});