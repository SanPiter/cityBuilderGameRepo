import { ClimaRepositorio } from "../accesoDatos/ClimaRepositorio.js";

const climaRepo = new ClimaRepositorio();

export async function cargarActualizarClima(coords) {
    const clima = await climaRepo.obtenerClimaDesdeAPI(coords.lat, coords.lon);
    if (clima) {
        actualizarWidgetClima(clima);
    }
}

function actualizarWidgetClima(clima) {
    const tempEl = document.getElementById("clima-temp");
    const condEl = document.getElementById("clima-condicion");
    const iconoEl = document.getElementById("clima-icono");
    const humEl = document.getElementById("clima-humedad");
    const vientoEl = document.getElementById("clima-viento");

    if (tempEl) tempEl.textContent = `${clima.temperatura}°C`;
    if (condEl) condEl.textContent = clima.condicion;
    if (iconoEl) iconoEl.src = clima.icono;
    if (humEl) humEl.textContent = `Humedad: ${clima.humedad}%`;
    if (vientoEl) vientoEl.textContent = `Viento: ${clima.viento} m/s`;
}
export const COORDENADAS_REGIONES = {
    "1": { lat: 4.6097, lon: -74.0817 }, // Andina (Bogotá)
    "2": { lat: 10.9685, lon: -74.7813 }, // Caribe (Barranquilla)
    "3": { lat: 5.6947, lon: -76.6611 },  // Pacífica (Quibdó)
    "4": { lat: 4.1420, lon: -73.6266 },  // Orinoquía (Villavicencio)
    "5": { lat: -4.2153, lon: -69.9406 }  // Amazonía (Leticia)
};
export class ClimaRepositorio {
    constructor() {
        this.apiKey = 'e23751d05ee5b72f2d4de20d6ae1928d';
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async obtenerClimaDesdeAPI(lat, lon) {
        const url = `${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=es`;

        try {
            const respuesta = await fetch(url);
            if (!respuesta.ok) throw new Error('Error al consultar el clima');

            const datos = await respuesta.json();
            
            return {
                temperatura: Math.round(datos.main.temp),
                condicion: datos.weather[0].description,
                humedad: datos.main.humidity,
                viento: datos.wind.speed,
                icono: `https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`
            };
        } catch (error) {
            console.error("Error en ClimaRepositorio:", error);
            return null;
        }
    }
}