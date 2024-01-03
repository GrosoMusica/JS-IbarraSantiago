
// *** Declaración de Objetos y variables

// OBJETO resumen
let resumen = {
        nombre: '',
        categoria: '',
        facturas: 0,
        empleados: 0
};

// IMPUESTOS y CARGOS
const IVA = 1.21;
const TIPO_A = 1.33;
const Desc = 0.95;
const precioFactura = 1.75;

let bonif;
let subtotal;

// ARRAY Categorías y Tipos




const catDesc = ["Estatales", "Autónomo", "Fundación"];
const catTipoA = ["Multinacional", "Empresas"];


// *** Entradas del Usuario

// NOMBRE
let nombre = GET("nombre");
let nombreDeclarado = nombre.value;

nombre.addEventListener("input", () => {
    nombreDeclarado = nombre.value;
    SAVE("nombreDeclarado", nombreDeclarado);
    calcularSubtotal();
});


// CATEGORIA 

const selectCategoria = GET('categoria');

let categoriaSeleccionada = "";

function manejarOpciones(opciones) {
    selectCategoria.addEventListener("change", () => {
        categoriaSeleccionada = selectCategoria.value;
        calcularBonif();
    });

    opciones.forEach(opcion => {
        const optionElement = document.createElement('option');
        optionElement.value = opcion;
        optionElement.textContent = opcion;
        selectCategoria.appendChild(optionElement);
    });
}

fetch('js/categorias.json')
    .then(response => {
        return response.json();
    })
    .then(opciones => {
        manejarOpciones(opciones);
    })
    .catch(error => {
        console.error('Error en la solicitud Fetch:', error);
    });










// EMPLEADOS
let empleados = GET("empleados");
let cantidadEmpleados = empleados.value;

empleados.addEventListener("input", () => {
    cantidadEmpleados = empleados.value;
    calcularSubtotal();
});

// FACTURAS
let facturas = GET("facturas");
let cantidadFacturas = facturas.value;

facturas.addEventListener("input", () => {
    cantidadFacturas = facturas.value;
    calcularSubtotal();
});

// *** FUNCIONES

function calcularBonif() {
    bonif = catDesc.includes(categoriaSeleccionada) ? 1 * Desc :
    catTipoA.includes(categoriaSeleccionada) ? 1 * TIPO_A :
    1;
}

function calcularSubtotal() {
    subtotal = precioFactura * cantidadEmpleados * cantidadFacturas;
    GET('subtotal').textContent = subtotal + " U$S";
}

function reinicioValues() {   
    nombreDeclarado = nombre.value;
    nombre.value = "";
    categoria.value = "";
    empleados.value = "";
    facturas.value = "";
};

// *** Eventos y DOM

const caja = GET("caja-calc");
const cajaContacto = GET("caja-ctc");
const contador = GET("contador");

// DARK MODE

const isDarkMode = localStorage.getItem('dark-mode') === 'true';
const colorModeButton = SEL("#color-mode");
const body = document.body;

body.classList.toggle('dark-mode', isDarkMode);

colorModeButton.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

colorModeButton.addEventListener("click", () => {

    body.classList.toggle("dark-mode");
    colorModeButton.innerHTML = body.classList.contains("dark-mode") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});

// --- --- --- // btn-REINICIAR
GET("reinicio").addEventListener("click", () => {
    location.reload();
    reinicioValues();
    caja.style.display = "none";
    cajaContacto.style.display ="none";
    contador.style.display = "none";
    verResumen.style.display = "none"; 
    sessionStorage.clear();


}); 

// --- --- --- // btn-COTIZAR   
GET("cotizar").addEventListener("click", () => {
    location.reload();
    reinicioValues();
    caja.style.display = "block";
    contador.style.display = "none";
    cajaContacto.style.display = "none";
    verResumen.style.display = "none";        
});

// --- --- --- // btn-CONTACTO
GET("contacto").addEventListener("click", () => {
    caja.style.display = "none";
    contador.style.display = "none";
    cajaContacto.style.display = "block";
    verResumen.style.display = "none";    
});

// --- --- --- // btn-CONTADOR
document.addEventListener('DOMContentLoaded', () => {
    GET("Contador").addEventListener("click", () => {
        caja.style.display = "none";
        contador.style.display = "flex";
        cajaContacto.style.display = "none";
        verResumen.style.display = "none";     
        iniciarContador();
    });
});

// --- --- --- // btn PRESUPUESTO
GET("presupuesto").addEventListener("click", () => {
    
    let verResumen = GET("verResumen");
    verResumen.style.display = "block"; 
    caja.style.display = "none";
    
    calcularBonif();
    total = subtotal * IVA * bonif;
    GET('total').textContent = total.toFixed(2) + " U$S";
    SAVE('total', total.toFixed(2));
    
    resumen = {
        nombre: nombreDeclarado,
        categoria: categoriaSeleccionada,
        facturas: cantidadFacturas,
        empleados: cantidadEmpleados,
    };
    
    verResumen.innerHTML = 
    '<div class="container mt-4">' +
    '<article class="card mb-4">' +
    '<img src="img/factura.jpg" class="card-img-top" alt="Cabecera de la factura">' +
            '<div class="card-body">' +
            '<strong>DETALLES DE FACTURACIÓN:</strong><br>' +
            '<strong>Nombre:</strong> ' + resumen.nombre + '<br>' +
            '<strong>Categoría:</strong> ' + resumen.categoria + '<br>' +
            '<strong>Facturas:</strong> ' + resumen.facturas + '<br>' +
            '<strong>Empleados:</strong> ' + resumen.empleados +
            '</div>' +
            '<h4 class="py-5">Total: <span id="totalResumen">' + total.toFixed(2) + ' U$S</span></h4>' +
            '</article>' +
    '</div>';
    
    Swal.fire({
        title: "El costo es de " + total.toFixed(2) + "U$S",
        text: "Gracias " + nombreDeclarado + " dale OK para ver detalles",
        icon: "success",
    });
});

// --- --- --- // btn Enviar Consulta
GET("enviarConsulta").addEventListener("click", (e) => {
    e.preventDefault();

    Swal.fire({
        title: "Gracias por comunicarte",
        text: "Tu mensaje fue enviado correctamente",
        imageUrl: 'img/desert.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Mensaje de despedida',
        icon: "info",
    });

});






