document.addEventListener("DOMContentLoaded", function () {
    // Muestra la primera página al cargar la página
    showPage("page1");

    // Agrega eventos de clic para cambiar de página
    document.querySelectorAll(".pagination a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href").substring(1);
            showPage(targetPage);
        });
    });
});

function showPage(pageId) {
    // Oculta todas las páginas
    document.querySelectorAll(".page").forEach(function (page) {
        page.classList.remove("active");
    });

    // Muestra la página seleccionada
    document.getElementById(pageId).classList.add("active");
}

