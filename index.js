import { calcular_desviacion, calcular_media } from "./modules/aritmetricas.js";


function main(){
    document.getElementById("enviar").addEventListener("click", pedir_numeros);
    document.getElementById("archivo_enviar").addEventListener("click", pedir_documento);
};

function mostrar_mensaje(media, desviacion){
    document.getElementById("media").textContent =  `Media: ${media}`;
    document.getElementById("desviacion_standar").textContent = `Desviacion estandar: ${desviacion}`

    console.log(media);
    console.log(desviacion);

};


export function pedir_numeros(){
    let valores = document.getElementById("valores").value;
    let numeros = valores.split (",").map(Number);

    return calcular_mensaje(numeros);
};

export function calcular_mensaje(valores){
    let media = calcular_media(valores);
    let desviacion = calcular_desviacion(valores, media);

    return mostrar_mensaje(media, desviacion)
};

function pedir_documento(){
    let archivo = document.getElementById("archivo").value;
    let extraer_archivo = input.files[0];
    let leer_archivo = new FileReader();
     
};

main();