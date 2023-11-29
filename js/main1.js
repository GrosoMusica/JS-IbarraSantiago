
// REINICIAR STORAGE

const reinicio = document.getElementById("reinicio");

reinicio.addEventListener("click", reiniciarPrograma);

function reiniciarPrograma() {
    
    localStorage.clear();
    Swal.fire({
        title: "En hora buena",
        text: "Storage ha sido borrado exitosamente",
        icon: "success"
    });
}

// COMENZAR

const empezar = document.getElementById("empezar");

empezar.addEventListener("click", empezarPresupuesto);

function empezarPresupuesto() {
    
    alert("Pienvenido a WPress Calc");
    
}

// DARK MODE

const colorModeButton = document.querySelector("#color-mode");
const body = document.body;

colorModeButton.addEventListener("click", cambiarModoColor);

function cambiarModoColor() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "LIGHT MODE";
    } else {
        colorModeButton.innerText = "DARK MODE";
    }
}

// --- --- --- --- VARIABLES --- --- --- --- //



// IMPUESTOS

const IVA = 1.21
const TIPO_A = 1.666
const Desc = 0.95

// ENTRADAS

let precioFactura = 1.75;
let subtotal;


const catDesc = ["Estatales", "Autónomo", "Fundación"];
const catTipoA = ["Multinacional", "Empresas"];



// SELECCIONAR CATEGORIA
const categoria = document.querySelector("#categoria");
let categoriaSeleccionada = localStorage.getItem('categoriaSeleccionada') || '';

categoria.value = categoriaSeleccionada;

categoria.addEventListener("change", () => {
    categoriaSeleccionada = categoria.value;
    localStorage.setItem('categoriaSeleccionada', categoriaSeleccionada);
    calcularSubtotal();
});

// EMPLEADOS
const empleados = document.querySelector("#empleados");
let cantidadEmpleados = localStorage.getItem('cantidadEmpleados') || '';

empleados.value = cantidadEmpleados;

empleados.addEventListener("input", () => {
    cantidadEmpleados = empleados.value;
    localStorage.setItem('cantidadEmpleados', cantidadEmpleados);
    calcularSubtotal();
});

// FACTURAS
const facturas = document.querySelector("#facturas");
let cantidadFacturas = localStorage.getItem('cantidadFacturas') || '';

facturas.value = cantidadFacturas;

facturas.addEventListener("input", () => {
    cantidadFacturas = facturas.value;
    localStorage.setItem('cantidadFacturas', cantidadFacturas);
    calcularSubtotal();
    });

function calcularBonif() {
    if (catDesc.includes(categoriaSeleccionada)) {
    bonif = 1 * Desc
    } else if (catTipoA.includes(categoriaSeleccionada)) {
    bonif = 1 * TIPO_A;
        } else {
    bonif = 1
    }};


function calcularSubtotal() {
    subtotal = precioFactura * cantidadEmpleados * cantidadFacturas;
    document.getElementById('subtotal').textContent = subtotal + " U$S";
}



const presupuesto = document.getElementById("presupuesto");

presupuesto.addEventListener("click", calcularTotal());


function calcularTotal() {
    calcularBonif();
    total = subtotal * IVA * bonif 
    document.getElementById('total').textContent = total + " U$S";
};

















/*

let precioFactura = 0.75
let subtotal



// SELECCIONAR CATEGORIA
const categoria = document.querySelector("#categoria");
categoria.addEventListener("change", () => {
    categoriaSeleccionada = categoria.value;
});

// EMPLEADOS
const empleados = document.querySelector("#empleados");
empleados.addEventListener("input", () => {
    cantidadEmpleados = empleados.value;
});


// FACTURAS
const facturas = document.querySelector("#facturas");
facturas.addEventListener("input", () => {
    cantidadFacturas = facturas.value;
});



function calcularSubtotal() {
    Number.subtotal = cantidadEmpleados * cantidadFacturas * precioFactura;
}

document.getElementById('subtotal').textContent = subtotal;










// Aquí puedes agregar tus scripts para manipular los valores y realizar acciones
// Por ejemplo, puedes utilizar JavaScript para calcular el subtotal y total.
document.getElementById('btnPresupuesto').addEventListener('click', function() {
    // Ejemplo: Calcular subtotal y total
    let empleadosInput = document.getElementById('alerta-input');
    let subtotalSpan = document.getElementById('subtotal');
    let totalSpan = document.getElementById('total');

    // Obtener la cantidad de empleados (puedes hacer validaciones adicionales)
    let cantidadEmpleados = parseInt(empleadosInput.value) || 0;

    // Calcular el subtotal (puedes agregar lógica específica según tus necesidades)
    let subtotal = cantidadEmpleados * 10; // Por ejemplo, $10 por empleado

    // Actualizar el valor del subtotal
    subtotalSpan.textContent = subtotal;

    // Puedes agregar lógica adicional para calcular el total según tus requisitos
    let total = subtotal + 5; // Por ejemplo, agregar una tarifa fija de $5

    // Actualizar el valor del total
    totalSpan.textContent = total;
});

*/

