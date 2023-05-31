let cantidadBlusa = 0;
let cantidadZapatilla = 0;
let cantidadCamperas = 0;
let total = 0;
let totalCamperaRecuperadoJson = 0;
let totalBlusaRecuperadoJson = 0;
let totalZapaRecuperadJson = 0;
const mercaderia = [
    { id: 1, product: "camperas", precio: 20000 },
    { id: 2, product: "blusas", precio: 1500 },
    { id: 3, product: "zapatillas", precio: 17000 },
];
/*blusa*/
let boton1 = document.getElementById("boton1");
const respuesta1 = () => {
    console.log("Añadir a carrito");
}
boton1.addEventListener("click", function () {
    cantidadBlusa++
    if (cantidadBlusa > 0) {
        let product = ("blusas")
        const busqueda = mercaderia.find(item => item.product.includes(product));

        if (busqueda) {
            let totalB = cantidadBlusa * busqueda.precio
            console.log(total)
            let totalJason = JSON.stringify(totalB)
            console.log(totalJason)
            sessionStorage.setItem("totalB", totalJason)


        }
    }
});
/*zapatillas*/
let boton2 = document.getElementById("boton2");
const respuesta2 = () => {
    console.log("Añadir a carrito");
}
boton2.addEventListener("click", function () {
    cantidadZapatilla++
    if (cantidadZapatilla > 0) {
        let product = ("zapatillas")
        const busqueda = mercaderia.find(item => item.product.includes(product));

        if (busqueda) {
            let totalZ = cantidadZapatilla * busqueda.precio
            console.log(totalZ)
            let totalJason = JSON.stringify(totalZ)
            console.log(totalJason)
            sessionStorage.setItem("totalZ", totalJason)


        }
    }
});
/*camperas*/
let boton3 = document.getElementById("boton3");
const respuesta3 = () => {
    console.log("Añadir a carrito");
}
boton3.addEventListener("click", function () {
    cantidadCamperas++
    if (cantidadCamperas > 0) {
        let product = ("camperas")
        const busqueda = mercaderia.find(item => item.product.includes(product));

        if (busqueda) {
            let totalC = cantidadCamperas * busqueda.precio
            console.log(totalC)
            let totalJason = JSON.stringify(totalC)
            console.log(totalJason)
            sessionStorage.setItem("totalC", totalJason)


        }
    }
});
totalCamperaRecuperadoJson = sessionStorage.getItem("totalC");
let totalCamperaRecuperado = JSON.parse(totalCamperaRecuperadoJson);
/* */
totalZapaRecuperadJson = sessionStorage.getItem("totalZ");
let totalZapaRecuperado = JSON.parse(totalZapaRecuperadJson)

/* */
totalBlusaRecuperadoJson = sessionStorage.getItem("totalB");
let totalBlusaRecuperado = JSON.parse(totalBlusaRecuperadoJson);
/* */
function calcularTotal() {
    let finaal = parseInt(totalBlusaRecuperado + totalCamperaRecuperado + totalZapaRecuperado);
    let totalElement = document.getElementById("total1");
    totalElement.textContent = finaal;
}
let calcularTotalButton = document.getElementById('calcularTotal');
calcularTotalButton.addEventListener('click', calcularTotal);


// Buscador
let buscador = document.getElementById("buscador");
let prendas = document.getElementById("Prendas");

buscador.addEventListener("input", function () {
    let clothes = buscador.value.toLowerCase();

    Array.from(prendas.children).forEach(function (div) {
        let divContent = div.textContent.toLowerCase();
        if (divContent.includes(clothes)) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
});


