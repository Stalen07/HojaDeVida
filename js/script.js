const menuButton = document.querySelector('.menu');
const menu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li');

// Evento para abrir/cerrar el menú al hacer clic en el icono
menuButton.addEventListener('click', () => {
    menu.classList.toggle('show'); // Alterna la clase para mostrar/ocultar el menú
    menuButton.classList.toggle('active'); // Alterna el estado del botón (hamburguesa a "X")
});

// Cerrar el menú cuando se haga clic en una opción
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('show'); // Elimina la clase para ocultar el menú
        menuButton.classList.remove('active'); // Cambia el botón a su estado original
    });
});