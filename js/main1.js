
// Agregar clase a un elemento -- Switch Color Mode


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

// IMPUESTOS

const IVA = 1.21
const Desc = 0.95



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



