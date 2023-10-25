
// BIENVENIDA

let nombre = prompt("Cómo te llamás??");

console.log( "Hola " +  nombre  + " Bienvenido a los Servicios de Liquidación de Personajes " );


// LISTA DE PRECIOS - FOR

console.log("-------------------------LISTA DE PERSONAJES--------------------");

for (let i = 1 ; i <= 8 ; i+=1 ) {
   let total =  i * 8 ;

   console.log("el precio por " + i + " empleados es de u$s " + total + "dólares estadounidenses");
}


// PRESUPUESTO - PROMPT

alert("Bienvenido a los Servicios de Liquidación de Personajes")

let empleados = Number(prompt("¿A cuántos empleados tienes que facturar hoy?"));


while (empleados > 8) {

    alert("no trabajo con mas de 8 personajes!!!")

    empleados = Number(prompt("Puedo facturar hasta 8"))
}

let dias = Number(prompt("¿Cuántos días faltan...?"));


while (dias > 7) {
    
    alert("intenta poner un valor inferior a 7 porque sino la inflación es devastadora")
    
    dias = Number(prompt("¿Cuántos días faltan...?"));
}


// VARIABLES y CONSTANTES

const IVA = 1.21
const INFLASI = 0.14

// Calculando IVA e inflación en Argentina

let precio = (empleados * 8)

let total = (precio * IVA * (INFLASI * dias + 1 )) 

let impuestos = (total.toFixed(2) - precio)


// CONDICIONAL

if (impuestos > 50) {
    alert("tus impuestos estan pasados de 50 lucas!!!")
}


//MOSTRAR RESULTADOS - FUNCIONES

alert("ir al resúmen")


function resumen() {
    
    console.log("---------------------RESUMEN DE PRESUPUESTO DE PERSONAJES-----------------");
    console.log("tu emprendimiento tiene " + empleados + " empleados ");
    console.log("                                                          ");
    console.log("el precio de tu servicio és de u$s " + precio + " dolares estadounidenses");
    console.log("                                                          ");
    console.log("el precio de tu servicio + IVA és de u$s " + total.toFixed(2) + " dolares estadounidenses");
    console.log("                                                          ");
    console.log("únicamente el IVA Y LA INFLACIÓOOON " + impuestos + " dolares estadounidenses");
} 

resumen()
