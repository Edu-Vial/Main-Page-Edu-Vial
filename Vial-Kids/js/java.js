'use strict'

const btnFlotante = document.querySelector('.btnFlotante');
const menu = document.querySelector('#menu');
btnFlotante.addEventListener('click', mostrarOcultarMenu);

function mostrarOcultarMenu(){
    if (menu.classList.contains('activo')) {
        menu.classList.remove('activo');
        menu.classList.remove('activo');
        menu.textContent = <i class="fas fa-bars"></i>;
    }else{
        menu.classList.add('activo');
        menu.classList.add('activo');
        menu.textContent = 'X cerrar';
    }
};