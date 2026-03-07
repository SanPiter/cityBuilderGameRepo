import { Juego } from "../modelos/Juego.js";
import { Ciudad } from "../modelos/Ciudad.js";
import { Mapa } from "../modelos/Mapa.js";
import { Economia } from "../modelos/Economia.js";

let juego;

window.addEventListener("DOMContentLoaded", iniciarJuego);
const mapaDiv = document.getElementById("mapa");

function iniciarJuego() {

    const data = JSON.parse(localStorage.getItem("ciudad"));

    const mapa = new Mapa(data.tamanoMapa, data.tamanoMapa);
    const economia = new Economia({});
    const ciudad = new Ciudad({
        nombre: data.nombre,
        region: data.region,
        mapa,
        economia
    });

    juego = new Juego({ ciudad });
    
    nombreCiudad.textContent = juego.ciudad.nombre;

    renderizarCiudad();
    // iniciarTurnos();
}

function renderizarCiudad(){
    mapaDiv.innerHTML = "";

    const { ciudad: { mapa: { celdas } } } = juego;

    const ancho = celdas[0].length;
    mapaDiv.style.gridTemplateColumns = `repeat(${ancho}, 1fr)`;

    celdas.forEach((fila, y) => {

        fila.forEach((celda, x) => {

            const div = document.createElement("div");
            div.classList.add("celda");

            //obtener las coordenadas de cada celda para luego poder colocar elementos en el mapa
            div.dataset.x = x;
            div.dataset.y = y;

            div.textContent = celda;

            mapaDiv.appendChild(div);

        });

    });
}