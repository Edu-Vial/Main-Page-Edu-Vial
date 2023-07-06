// Obtén una referencia al icono de menú
const menuIcon = document.querySelector('.menu-icon');

// Obtén una referencia al menú desplegable
const menuDropdown = document.querySelector('.menu');

// Agrega un controlador de eventos para el clic en el icono de menú
menuIcon.addEventListener('click', function() {
  // Alternar la clase "active" para mostrar u ocultar el menú desplegable
  menuDropdown.classList.toggle('active');
});
