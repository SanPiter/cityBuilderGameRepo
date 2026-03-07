import { Ciudad } from "../modelos/Ciudad.js";
import { Mapa } from "../modelos/Mapa.js";
import { Economia } from "../modelos/Economia.js";

document.querySelector("#toLoadFile").addEventListener("click", function(){
    //verificar que el archivo es de tipo .txt
    //obtener y abrir documento 
    // manipular el documento para obtener los datos necesarios para crear la ciudad
    //debo crear mapa
    // debo crear ciudad
    //debo guardar en local storage
    
});

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    const nombre = document.getElementById("nombreCiudad").value;
    const alcalde = document.getElementById("nombreAlcalde").value;
    //el valor de la region es un entero (modificable)
    const region = document.getElementById("selectRegion").value;
    const tamanoMapa = document.getElementById("selectTamano").value;

    const mapa = new Mapa( tamanoMapa, tamanoMapa);

    //se inicializan valores por defecto
    const economia = new Economia({});

    const ciudad = new Ciudad({ nombre, region, mapa, economia});

    console.log(ciudad.mapa.celdas)
    console.log(ciudad.economia.dinero, ciudad.economia.electricidad, ciudad.economia.agua, ciudad.economia.alimento)
    console.log(ciudad.ciudadanos)

    //guardar en local storage
    localStorage.setItem("ciudad", JSON.stringify({
        nombre,
        region,
        tamanoMapa
    }));

    window.location.href = "../vistas/juego.html";

    }); 