// Clase Display
// Esta clase gestiona la visualización de la calculadora y la interacción con los valores
class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
            sumar: '+',
        }
    }

    // Método para borrar el último carácter del valor actual
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    // Método para borrar todos los valores
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    // Método para establecer el tipo de operación y preparar los valores
    contar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    // Método para agregar un número al valor actual
    agregarNumero(numero) {
        if (numero == '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    // Método para mostrar los valores en la calculadora
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    // Método para realizar el cálculo según el tipo de operación
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}
