
function preciofinal(resultadoblusa, resultadocampera, resultadozapa) {
    total = resultadoblusa + resultadocampera + resultadozapa;
    return total;
}
function preciocompra(precio, unidad) {
    return precio * unidad;
};
let compra = prompt("¿estás registrado? responder si o no")
/*registracion - inicio de sesion*/
if (compra.toLowerCase() === "si") {
    alert("BIENVENIDO!, Inicia sesión");
    let nombre = prompt("ingresa nombre de usuario");
    let contraseña = prompt("ingresa contraseña");
    while ((nombre === "") && (contraseña === "")) {
        alert("ERROR, usuario o contraseña vacía");
        nombre = prompt("Debes ingresar nombre de usuario");
        contraseña = prompt("Debes ingresar contraseña");
    }
}
else {
    alert("Ups!...Debes registrarte para acceder, para nuevos usuarios tenemos 20% off!!")
    let nombre = prompt("ingresa nombre de usuario");
    let mail = prompt("ingresa tu mail");
    let contraseña = prompt("ingresa contraseña");
    while ((nombre === "") && (contraseña === "") && (mail === "")) {
        alert("ERROR, usuario, contraseña o mail vacío");
        nombre = prompt("Debes ingresar nombre de usuario");
        contraseña = prompt("Debes ingresar contraseña");
        mail = prompt("Debes ingresar tu mail");

    }
    alert(`bienvenido ${nombre} te has registrado con éxito!`)

}
// lista de productos y precios
const mercaderia = [
    { id: 1, product: "camperas", precio: 20000 },
    { id: 2, product: "blusas", precio: 1500 },
    { id: 3, product: "zapatilla", precio: 17000 },
];
let total=0;
let resultado = 0;
/**Blusas */
let accion = prompt("¿deseas comprar?");
while (accion.toLowerCase() === "si") {
    let product = prompt("ahora dime ¿qué deseas comprar? camperas, blusas o zapatillas");
    const busqueda = mercaderia.find(item => item.product.includes(product));
    if (busqueda) {
        let mensaje = `
        Producto: ${busqueda.product}
        Precio: $ ${busqueda.precio} cada una`;

        let cantidad = parseInt(prompt(`${mensaje} ¿cuantas unidades deseas?`));
          resultado = parseInt(preciocompra(busqueda.precio, cantidad));

        while (cantidad < 3) {
            alert("el mínimo de compra es de 3 prendas");
            cantidad = parseInt(prompt(`${mensaje} ¿cuantas unidades deseas? recuerda el mínimo de compra son 3 prendas`));
        }

        alert(`genial se ha añadido al carrito el total es $ ${resultado}`);
       accion = prompt("¿deseas seguir comprando?");  
    }
     total = total + resultado
     

}
alert("enviaremos el comprobante a tu mail,toda la compra es de $"+ (total));