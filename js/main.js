
// REINICIAR

const reinicio = document.getElementById("reinicio");

reinicio.addEventListener("click", reiniciarPrograma);

function reiniciarPrograma() {
    
    localStorage.clear();

    const caja = document.getElementById("caja-calc");
    caja.style.display = "none";

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
    
    const caja = document.getElementById("caja-calc");

    caja.style.display = "block";
    
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

const IVA = 1.21;
const TIPO_A = 1.33;
const Desc = 0.95;

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
presupuesto.addEventListener("click", calcularTotal);

function calcularTotal() {
    calcularBonif();
    total = subtotal * IVA * bonif;

    document.getElementById('total').textContent = total.toFixed(2) + " U$S";
};
