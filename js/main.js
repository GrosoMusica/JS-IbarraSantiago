

const caja = document.getElementById("caja-calc");
const cajaContacto = document.getElementById("caja-ctc");

// btn-REINICIAR

function reinicio() {
        
    nombre.value = "";
    categoria.value = "";
    empleados.value = "";
    facturas.value = "";
    
    // verResumen.style.display = "none";
    
};


document.getElementById("reinicio").addEventListener("click", () => {
    
    reinicio();
    sessionStorage.clear();
    caja.style.display = "none";
    
    Swal.fire({
        title: "En hora buena",
        text: "Storage ha sido borrado exitosamente",
        imageUrl: "img/desert.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'vacío',
        icon: "success"
    });
})  ; 

// btn-COMENZAR

document.getElementById("empezar").addEventListener("click", () => {

    nombre.value = "";
    categoria.value = "";
    empleados.value = "";
    facturas.value = "";
    
    // verResumen.style.display = "none";
    caja.style.display = "block";

    cajaContacto.style.display = "none";
});


// btn-CONTACTO

document.getElementById("contacto").addEventListener("click", () => {

    cajaContacto.style.display = "block";
    caja.style.display = "none";
});



// DARK MODE

const colorModeButton = document.querySelector("#color-mode");
const body = document.body;

colorModeButton.addEventListener("click", () => {

    body.classList.toggle("dark-mode");
    colorModeButton.innerText = body.classList.contains("dark-mode") ? "LIGHT MODE" : "DARK MODE";
});

// localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));



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
let categoriaSeleccionada = sessionStorage.getItem('categoriaSeleccionada') || '';

categoria.value = categoriaSeleccionada;

categoria.addEventListener("change", () => {
    categoriaSeleccionada = categoria.value;
    sessionStorage.setItem('categoriaSeleccionada', categoriaSeleccionada);
    calcularSubtotal();
});

// EMPLEADOS
const empleados = document.querySelector("#empleados");
let cantidadEmpleados = sessionStorage.getItem('cantidadEmpleados') || '';

empleados.value = cantidadEmpleados;

empleados.addEventListener("input", () => {
    cantidadEmpleados = empleados.value;
    sessionStorage.setItem('cantidadEmpleados', cantidadEmpleados);
    calcularSubtotal();
});

// NOMBRE
const nombre = document.querySelector("#nombre");
let nombreDeclarado = localStorage.getItem('Nombre') || '';

nombre.value = nombreDeclarado;

nombre.addEventListener("input", () => {
    nombreDeclarado = nombre.value;
    sessionStorage.setItem('Nombre', nombreDeclarado);
    calcularSubtotal();
});

// FACTURAS
const facturas = document.querySelector("#facturas");
let cantidadFacturas = sessionStorage.getItem('cantidadFacturas') || '';

facturas.value = cantidadFacturas;

facturas.addEventListener("input", () => {
    cantidadFacturas = facturas.value;
    sessionStorage.setItem('cantidadFacturas', cantidadFacturas);
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

document.getElementById("presupuesto").addEventListener("click", () => {

    calcularBonif();
    total = subtotal * IVA * bonif;
    document.getElementById('total').textContent = total.toFixed(2) + " U$S";
    
    resumen = {
        nombre: nombreDeclarado,
        categoria: categoriaSeleccionada,
        facturas: cantidadFacturas,
        empleados: cantidadEmpleados,
    };

    const verResumen = document.getElementById("verResumen");

    verResumen.innerHTML = 

    '<strong>Nombre:</strong> ' + resumen.nombre + '<br>' +
    '<strong>Categoría:</strong> ' + resumen.categoria + '<br>' +
    '<strong>Facturas:</strong> ' + resumen.facturas + '<br>' +
    '<strong>Empleados:</strong> ' + resumen.empleados;
    
    verResumen.style.display = "block";        
});

