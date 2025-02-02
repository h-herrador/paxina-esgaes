// Obtener el botón del menú y la barra de navegación
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

// Añadir un evento de clic al botón del menú
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active'); // Cambiar la clase 'active'
});
