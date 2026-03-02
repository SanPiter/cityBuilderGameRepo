import { ElementoMapa } from "./ElementoMapa";

class Mapa{

    #ancho;
    #largo;
    #celdas;

    constructor(ancho, largo) {
        this.ancho = ancho;
        this.largo = largo;
        
        //crea un arreglo bidimensional alto * ancho relleno de null
        this.celdas = Array.from({ length: alto }, () =>
            Array.from({ length: ancho }, () => null)
        );
    }

    get ancho(){
        return this.#ancho;
    }

    get largo(){
        return this.#largo;
    }

    set ancho(valor){
        if(valor >= 13){
            throw new Error("El ancho debe de ser mayor que 12");
        }
        this.#ancho = valor;
    }

    set largo(valor){
        if(valor >= 13){
            throw new Error("El largo debe de ser mayor que 12");
        }
        this.#largo = valor;
    }

    obtenerElemento(x, y){
        this.#validarCoordenadas(x, y);
        return this.#celdas[x][y];
    }

    eliminarElemento(x, y) {
        this.#validarCoordenadas(x, y);
        this.#celdas[y][x] = null;
    }

    colocarElemento(x, y, elemento) {
        this.#validarCoordenadas(x, y);

        if (!(elemento instanceof ElementoMapa)) {
            throw new Error("Debe ser una instancia de ElementoMapa");
        }

        if (this.#celdas[y][x] !== null) {
            throw new Error("La celda ya está ocupada");
        }

        this.#celdas[y][x] = elemento;
    }

    #validarCoordenadas(x, y) {
        if (x < 0 || x >= this.#ancho || y < 0 || y >= this.#largo) {
            throw new Error("Coordenadas fuera del mapa");
        }
    }
}