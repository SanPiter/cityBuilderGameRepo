export class ElementoMapa{

    #id;
    #costo;
    #costoMantenimiento;

    constructor(id, costo, costoMantenimiento) {
        this.id = id;
        this.costo = costo;
        this.costoMantenimiento = costoMantenimiento;
    }

    get id(){
        return this.#id;
    }

    get costo(){
        return this.#costo;
    }

    get costoMantenimiento(){
        return this.#costoMantenimiento;
    }

    set id(id){
        this.#id = id;
    }

    set costo(costo){
        this.#costo = costo;
    }

    set costoMantenimiento(costoMantenimiento){
        this.#costoMantenimiento = costoMantenimiento;
    }
}