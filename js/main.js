
// BIENVENIDA

let nombre = prompt("Cómo te llamás??");

console.log( "Hola " +  nombre  + " Bienvenido a los Servicios de Liquidación de Personajes " );
console.log("-------------------------LISTA DE PERSONAJES--------------------");

// LISTA DE PRECIOS - FOR

for (let i = 1 ; i <= 8 ; i++ ) {
   let total =  i * 8 ;
   console.log("el precio por " + i + " empleados es de u$s " + total + "dólares estadounidenses");
}

// PRESUPUESTO - PROMPT

alert("Bienvenido a los Servicios de Liquidación de Personajes")

let empleados = Number(prompt("¿A cuántos empleados tienes que facturar hoy?"));
let dias = Number(prompt("¿Cuántos días faltan...?"));

// VARIABLES y CONSTANTES

const IVA = 1.21
const INFLASI = 0.14

// Calculando IVA e inflación en Argentina

let precio = (empleados * 8)
let total = (precio * IVA * (INFLASI * dias + 1 )) 

// FUNCIONES - MOSTRAR RESULTADOS

alert("ir al resúmen")

console.log("---------------------RESUMEN DE PRESUPUESTO DE PERSONAJES-----------------");
console.log("tu emprendimiento tiene " + empleados + " empleados ");
console.log("                                                          ");
console.log("el precio de tu servicio és de u$s " + precio + " dolares estadounidenses");
console.log("                                                          ");
console.log("el precio de tu servicio + IVA és de u$s " + total.toFixed(2) + " dolares estadounidenses");
console.log("                                                          ");
console.log("únicamente el IVA Y LA INFLACIÓOOON " + (total.toFixed(2) - precio) + " dolares estadounidenses");


