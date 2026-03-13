import { Juego } from "../modelos/Juego.js";
import { TipoResidencial } from "../modelos/Enums.js";

export class SistemaTurnos {
	#juego;
	#onActualizacion;
	#intervalId;

	constructor(juego, onActualizacion) {
		if (!(juego instanceof Juego)) {
			throw new Error("SistemaTurnos requiere una instancia valida de Juego");
		}

		if (typeof onActualizacion !== "function") {
			throw new Error("onActualizacion debe ser una funcion");
		}

		if (!Number.isFinite(juego.tiempoPorTurno) || juego.tiempoPorTurno <= 0) {
			throw new Error("tiempoPorTurno debe ser un numero positivo");
		}

		this.#juego = juego;
		this.#onActualizacion = onActualizacion;
		this.#intervalId = null;
	}

	// Inicia el sistema de turnos, procesando un turno cada tiempoPorTurno segundos
	iniciar() {
		if (this.#intervalId !== null) {
			return;
		}
		//esta parte es una prueba (BORRAR DESPUES)
		this.#juego.ciudad.economia.electricidad = 100;
		this.#juego.ciudad.economia.agua = 100;

		console.log(this.#juego.ciudad.economia.electricidad,
		this.#juego.ciudad.economia.agua);

		this.#intervalId = setInterval(() => {
			this.procesarTurno();
		}, this.#juego.tiempoPorTurno * 1000);
	}

	pausar() {
		if (this.#intervalId === null) {
			return;
		}

		clearInterval(this.#intervalId);
		this.#intervalId = null;
	}

	detener(){
		this.pausar();
	}

	procesarTurno() {
		const {celdas} = this.#juego.ciudad.mapa;
		const { economia } = this.#juego.ciudad;

		let casas = 0;
		let apartamentos = 0;

		celdas.forEach((fila) => {
			fila.forEach((celda) => {
				if (celda === TipoResidencial.CASA.subtipo) {
					casas += 1;
				} else if (celda === TipoResidencial.APARTAMENTO.subtipo) {
					apartamentos += 1;
				}
			});
		});

		const consumoTeoricoElectricidad =
			casas * TipoResidencial.CASA.consumoElectricidad +
			apartamentos * TipoResidencial.APARTAMENTO.consumoElectricidad;

		const consumoTeoricoAgua =
			casas * TipoResidencial.CASA.consumoAgua +
			apartamentos * TipoResidencial.APARTAMENTO.consumoAgua;

		const consumoAplicadoElectricidad = Math.min(
			economia.electricidad,
			consumoTeoricoElectricidad
		);

		const consumoAplicadoAgua = Math.min(
			economia.agua,
			consumoTeoricoAgua
		);

		economia.electricidad -= consumoAplicadoElectricidad;
		economia.agua -= consumoAplicadoAgua;

		this.#onActualizacion({
			casas,
			apartamentos,
			consumoTeoricoElectricidad,
			consumoTeoricoAgua,
			consumoAplicadoElectricidad,
			consumoAplicadoAgua
		});
	}
}
