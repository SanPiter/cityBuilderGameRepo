import { Productivo } from "./Productivo";
import { TipoIndustrial } from "./Enums";

class EdificioIndustrial extends Productivo {
    #tipo;

    constructor(id, tipo) {
        if (!Object.values(TipoIndustrial).includes(tipo)) {
            throw new Error("Tipo industrial inválido")
        }

        super(id, tipo.costo, tipo.costoMantenimiento, tipo.consumoElectricidad, tipo.consumoAgua);
        this.#tipo = tipo;
    }

    get tipo() {
        return this.#tipo;
    }

    obtenerCantidadEmpleos() {
        return this.#tipo.empleos;
    }
}