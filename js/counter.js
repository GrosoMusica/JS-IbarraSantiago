
let interval;

const iniciarContador = () => {
    let counter = 7;

    const mostrarCuenta = () => {
        GET('welcome').style.display = 'none';
        GET('countdown').textContent = counter;
    };

    const mostrarBienvenido = () => {
        GET('welcome').style.display = 'block';
        GET('countdown').style.display = 'none';
    };

    clearInterval(interval);

    interval = setInterval(() => {
        counter--;

        if (counter >= 0) {
            mostrarCuenta();
        } else {
            clearInterval(interval);
            mostrarBienvenido();
        }

    }, 1000);
};

// --- --- MARQUESINA

function mostrarMarqueeBTC() {
    let elementoBTC = GET("BTC");


    let marqueeElement = SEL(".py-5");
    marqueeElement.style.display = "block";
    }
setTimeout(mostrarMarqueeBTC, 9000);