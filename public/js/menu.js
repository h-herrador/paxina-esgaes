document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar');
  
  // Toggle para el menú en móvil
  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  
  // Cerrar el menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nav-left li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
  
  // Cerrar el menú al hacer click fuera de él
  document.addEventListener('click', function(event) {
    if (!navbar.contains(event.target) && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});
