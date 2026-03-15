import { CiudadRepository } from "../accesoDatos/ciudadRepository.js";

const ciudadRepository = new CiudadRepository();

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    const nombre = document.getElementById("nombreCiudad").value;
    const alcalde = document.getElementById("nombreAlcalde").value;
    //el valor de la region es un entero (modificable)
    const region = document.getElementById("selectRegion").value;
    const tamanoMapa = document.getElementById("selectTamano").value;

    try {
        // Persistencia centralizada: toda ciudad nueva se crea via repository.
        ciudadRepository.guardarConfiguracionInicial({
            nombre: nombre,
            alcalde: alcalde,
            region,
            tamanoMapa
        });
    } catch (error) {
        const feedback = document.getElementById("formFeedback");
        if (feedback) {
            feedback.textContent = error.message;
        } else {
            alert(error.message);
        }
        return;
    }
    
    window.location.href = "../vistas/juego.html";

    }); 