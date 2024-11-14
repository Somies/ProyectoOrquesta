function toggleMenu() {
    const menu = document.getElementById("menu");
    const subcabeza1 = document.getElementById("subcabeza1");

    // Cambiar el estado del menú
    menu.classList.toggle("active");

    // Cambiar la altura de la subcabeza1
    if (menu.classList.contains("active")) {
        subcabeza1.classList.add("expanded");
    } else {
        subcabeza1.classList.remove("expanded");
    }
}
