// Display
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const display = new Display(displayValorAnterior, displayValorActual); // Crea una instancia de Display

// Botones
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML); // Llama al método agregarNumero de la instancia 'display'.
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value); // Llama al método computar de la instancia 'display'.
    });
});