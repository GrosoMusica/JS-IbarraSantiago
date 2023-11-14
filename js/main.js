
// --- --- --- --- --- --- --- BIENVENIDA

let nombre = prompt("Cómo te llamás??");

// VARIABLES y CONSTANTES

const IVA = 1.21
const INFLASI = 0.14
const TIPO_A = 1.666

let empleados = 1


// ARRAY

const servicios = ["Facturación de personajes tipo A", "PYMES", "Profesionales", "los tengo en negro"];


console.log( "Hola " +  nombre  + " Bienvenido a los Servicios de Liquidación de Personajes " );


console.log(listadoServicios())



// MÉTODOS DE BÚSQUEDA ARRAY --- --- --- --- // LISTA DE PRECIOS - FOR


console.log(" -- --- -- --- -- LISTA DE PRECIOS -- --- -- --- -- ");

for (let i = 1 ; i <= 8 ; i+=1 ) {
        let precio =  i * 4 ;
        console.log("el precio por " + i + " empleados es de u$s " + precio + "dólares estadounidenses");
}


// FUNCIONES

function listadoServicios() {
    console.log("-- --- -- --- -- LISTA DE SERVICIOS -- --- -- --- -- ");

    servicios.forEach((servicio, index) => {
    
        console.log(`${index + 1}. ${servicio}`)
    })
};


// // --- --- --- --- --- --- --- CAPTURAR ENTRADAS - PROMPT ---- --- --- --- --- --- //


alert("Bienvenido a los Servicios de Liquidación de Personajes")

empleados = Number(prompt("¿A cuántos empleados tienes que facturar hoy?"));

while (empleados > 8) {
    
        alert("no trabajo con mas de 8 personajes!!!")
    
    empleados = Number(prompt("Puedo facturar hasta 8"))
}


alert("ALTO QUEREMOS SABER MAS DE VOS")

let seleccion = prompt("Seleccione el número del servicio que desea:");

while (seleccion < 1 || seleccion > 4) {
    alert("No es una opción válida. Por favor, ingrese un número del 1 al 4.");
    seleccion = prompt("Seleccione el número del servicio que desea:");
}

// --- --- --- --- --- --- --- --- PRESUPUESTO --- --- --- --- --- //


let precio = empleados * 4;


if (seleccion == 1) {
    
    // Personajes Tipo A
    subtotal = precio * TIPO_A;
} else if (seleccion == 2) {
    
    // PYMES
    subtotal = precio * IVA * (1 + INFLASI);
} else if (seleccion == 3) {
    
    // Profesionales
    subtotal = precio * IVA;
} else if (seleccion == 4) {
    
    // Negro
    subtotal = precio * (1 + INFLASI);
}

// --- --- --- --- --- --- --- --- IMPUESTOS --- --- --- --- --- //

let impuestos = (subtotal - precio);

function iva() {
    
    console.log("El IVA es de u$d " + impuestos.toFixed(2));
}
    if (impuestos > 7) {
        iva();
        alert("tus impuestos estan pasados de rosca!!!");
}

// OBJETOS

let cliente = {
    nombre: nombre,
    servicioElegido: servicios[seleccion - 1],
    cantidadEmpleados: empleados,
    precioTotal: subtotal.toFixed(2),
    impuestos: impuestos.toFixed(2)
};

// --- --- --- --- --- --- --- --- -- MOSTRAR RESULTADOS --- --- --- --- -- --- --- //

console.log("-- --- -- --- -- INFORMACIÓN DEL CLIENTE -- --- -- --- -- ");

console.log("Nombre:", cliente.nombre);
console.log("Tipo de Servicio:", cliente.servicioElegido);
console.log("Cantidad de Empleados:", cliente.cantidadEmpleados);
console.log("IVA e impuestos =", cliente.impuestos);
console.log("Total: u$s", cliente.precioTotal);

// -----------------------------------------------------------------------