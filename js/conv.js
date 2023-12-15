
// API Consulta el valor de BTC en CoinRanking


document.addEventListener('DOMContentLoaded', function () {
    
    let precioBTC;

    const url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=yhjMzLPhuIDl';


    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c03868d1e5msh9d4c2b7e2d38274p198bbdjsn88ad61a6143a',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {

            precioBTC = data.data.price;
            GET("BTC").textContent = precioBTC;

            
            

        })

        .catch((err) => {
            Swal.fire({
                title: "Error de solicitud API",
                text: "En este momento no se sabe el precio de BTC",
                icon: "error"
        });
    });

    // SAVE("BTC", FixedPrecioBTC.toFixed(2));
    let FixedPrecioBTC = precioBTC.toFixed(2);
    V(FixedPrecioBTC);
});



