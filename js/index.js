// Obtiene los elementos del DOM para mostrar los valores anterior y actual
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

// Selecciona todos los botones de números y operadores
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

// Crea una nueva instancia de la clase Display
const display = new Display(displayValorAnterior, displayValorActual);

// Añade un evento a cada botón de número para agregar el número al display
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));    
});

// Añade un evento a cada botón de operador para realizar la operación correspondiente
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.contar(boton.value));
});
   