
function preciofinal(resultadoblusa, resultadocampera, resultadozapa) {
    total = resultadoblusa + resultadocampera + resultadozapa;
    return total;
}
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
     

} else {
    alert("Ups!...Debes registrarte para acceder")
    let nombre = prompt("ingresa nombre de usuario");
    let mail = prompt("ingresa tu mail");
    let contraseña = prompt("ingresa contraseña");
    while ((nombre === "") && (contraseña === "") && (mail==="")) {
        alert("ERROR, usuario, contraseña o mail vacío");
nombre = prompt("Debes ingresar nombre de usuario");
    contraseña = prompt("Debes ingresar contraseña");
    mail = prompt("Debes ingresar tu mail");

    } 
    alert(`bienvenido ${nombre} te has registrado con éxito!`)

}
/*seleccion de productos y cantidad + cotizacion */
alert("ahora dime ¿qué deseas comprar? camperas, blusas o zapatillas");
/**Blusas */
let resultadoblusa;
let blusas = prompt("¿deseas comprar blusas? responder si o no");
let precioblusa = parseInt(20);
if (blusas.toLowerCase() === "si") {
    alert("Las blusas salen 20 pesos cada pack");
    packs = prompt("¿cuantos packs deseas?");
    while (packs < 11) {
        alert("LA COMPRA MÍNIMA SON 11 PACKS");
        packs = prompt("¿cuantos packs deseas?");
    } resultadoblusa = packs * precioblusa;
    alert(`en total son ${packs} * ${precioblusa} = ${resultadoblusa} ARS`);
} else { alert("OK, veamos los siguientes productos") };
/*Camperas */
let preciocampera = parseInt(30);
let camperas = prompt("¿deseas comprar camperas? responder si o no");
if (camperas.toLowerCase() === "si") {
    alert("Las camperas salen 30 pesos cada pack");
    packs = prompt("¿cuantos packs deseas?");
    while (packs < 11) {
        alert("LA COMPRA MÍNIMA SON 11 PACKS");
        packs = prompt("¿cuantos packs deseas?");
    } resultadocampera = packs * preciocampera;
    alert(`en total son ${packs} * ${preciocampera} = ${resultadocampera} ARS`);
} else { alert("OK, veamos los siguientes productos") };

/*zapatillas */
let resultadozapa;
let preciozapatillas = parseInt(50)
let zapatillas = prompt("¿deseas comprar zapatilas? responder si o no");
if (zapatillas.toLowerCase() === "si") {
    alert("Las zapatillas salen 50 pesos cada pack");
    packs = prompt("¿cuantos packs deseas?");
    while (packs < 11) {
        alert("LA COMPRA MÍNIMA SON 11 PACKS");
        packs = prompt("¿cuantos packs deseas?");
    } resultadozapa = packs * preciozapatillas;
    alert(`en total son ${packs} * ${preciocampera} = ${resultadozapa} ARS`)
        ; let final = preciofinal(resultadoblusa, resultadozapa, resultadocampera)
    alert(`el total de todo el pedido es ${final} ars`)
    alert("listo! te enviaremos la cotización al mail registrado")
} else { alert("OK, pronto tendremos más ingresos, esperamos tu regreso") }





