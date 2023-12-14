

const caja = document.getElementById("caja-calc");
const cajaContacto = document.getElementById("caja-ctc");

const colorModeButton = document.querySelector("#color-mode");
const body = document.body;


// DARK MODE

const isDarkMode = localStorage.getItem('dark-mode') === 'true';

body.classList.toggle('dark-mode', isDarkMode);
colorModeButton.innerText = isDarkMode ? 'LIGHT MODE' : 'DARK MODE';




colorModeButton.addEventListener("click", () => {

    body.classList.toggle("dark-mode");
    colorModeButton.innerText = body.classList.contains("dark-mode") ? "LIGHT MODE" : "DARK MODE";
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});

// btn-REINICIAR

function reinicioValues() {
        
    nombre.value = "";
    categoria.value = "";
    empleados.value = "";
    facturas.value = "";
};

document.getElementById("reinicio").addEventListener("click", () => {
    
    reinicioValues();
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

    reinicioValues();
    caja.style.display = "block";
    cajaContacto.style.display = "none";
});


// btn-CONTACTO

document.getElementById("contacto").addEventListener("click", () => {

    cajaContacto.style.display = "block";
    caja.style.display = "none";
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

// ARRAY

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
    bonif = catDesc.includes(categoriaSeleccionada) ? 1 * Desc :
            catTipoA.includes(categoriaSeleccionada) ? 1 * TIPO_A :
            1;
}

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

