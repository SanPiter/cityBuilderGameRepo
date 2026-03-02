import { Edificio } from "./Edificio";
import { TipoServicio } from "./Enums";

class EdificioServicio extends Edificio {
    #tipo;

    constructor(id, tipo) {
        if (!Object.values(TipoServicio).includes(tipo)) {
            throw new Error("Tipo servicio inválido")
        }

        super(id, tipo.costo, tipo.costoMantenimiento, tipo.consumoElectricidad, tipo.consumoAgua);
        this.#tipo = tipo;
    }

    get tipo() {
        return this.#tipo;
    }
}