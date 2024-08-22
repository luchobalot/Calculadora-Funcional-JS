class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined; // Sirve para eliminar el tipo de operación al momento de presionar "C".
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '%',
            multiplicar: 'x'
        };
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined; // Cuando se borra todo, se borra el tipo de operación.
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return; // Revisar
        this.valorActual = this.valorActual.toString() + numero;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;

        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior); // Revisar parseFloat
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

    computar(tipoOperacion) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipoOperacion;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = ''; // Valor vacío para siguientes operaciones.
        this.imprimirValores();

    }
}