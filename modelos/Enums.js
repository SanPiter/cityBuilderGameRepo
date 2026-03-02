
export const TipoResidencial = Object.freeze({
    CASA: Object.freeze({
        capacidad: 4,
        costo: 1000,
        costoMantenimiento: 100,
        consumoElectricidad: 5,
        consumoAgua: 3
    }),

    APARTAMENTO: Object.freeze({
        capacidad: 12,
        costo: 3000,
        costoMantenimiento: 300,
        consumoElectricidad: 15,
        consumoAgua: 10
    })
});

export const TipoServicio = Object.freeze({
    ESTACION_POLICIA: Object.freeze({
        costo: 4000,
        radio: 5, // celdas
        beneficioFelicidad: 10,
        costoMantenimiento: 300,
        consumoElectricidad: 15,
        consumoAgua: 0
    }),

    ESTACION_BOMBEROS: Object.freeze({
        costo: 4000,
        radio: 5, // celdas
        beneficioFelicidad: 10,
        costoMantenimiento: 300,
        consumoElectricidad: 15,
        consumoAgua: 0
    }),

    HOSPITAL: Object.freeze({
        costo: 6000,
        radio: 7, // celdas
        beneficioFelicidad: 10,
        costoMantenimiento: 400,
        consumoElectricidad: 20,
        consumoAgua: 10
    })
});

export const TipoUtilidad = Object.freeze({
    PLANTA_ELECTRICA: Object.freeze({
        costo: 10000,
        produccionPorTurno: 200,
        tipoProduccion: "ELECTRICIDAD",
        costoMantenimiento: 700,
        consumoElectricidad: 0,
        consumoAgua: 0
    }),

    PLANTA_AGUA: Object.freeze({
        costo: 8000,
        produccionPorTurno: 150,
        tipoProduccion: "AGUA",
        costoMantenimiento: 500,
        consumoElectricidad: 20,
        consumoAgua: 0
    })
});

export const TipoComercial = Object.freeze({
    TIENDA: Object.freeze({
        empleos: 6,
        costo: 2000,
        costoMantenimiento: 200,
        ingresoPorTurno: 500,
        consumoElectricidad: 8,
        consumoAgua: 2
    }),

    CENTRO_COMERCIAL: Object.freeze({
        empleos: 20,
        costo: 8000,
        costoMantenimiento: 800,
        ingresoPorTurno: 2000,
        consumoElectricidad: 25,
        consumoAgua: 6
    })
});

export const TipoIndustrial = Object.freeze({
    FABRICA: Object.freeze({
        empleos: 15,
        costo: 5000,
        produccionPorTurno: 800,
        tipoProduccion: "DINERO",
        costoMantenimiento: 500,
        consumoElectricidad: 20,
        consumoAgua: 15
    }),

    GRANJA: Object.freeze({
        empleos: 8,
        costo: 3000,
        produccionPorTurno: 50,
        tipoProduccion: "ALIMENTOS",
        costoMantenimiento: 300,
        consumoElectricidad: 0,
        consumoAgua: 10
    })
});

export const TipoEstado = Object.freeze({
    INICIADO: "INICIADO",
    JUGANDO: "JUGANDO",
    PAUSADO: "PAUSADO",
    FINALIZADO: "FINALIZADO"
});