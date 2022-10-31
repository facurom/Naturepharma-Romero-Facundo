alert('Bienvenido');
if (confirm('¿Deseas que te salude por tu nombre?')) {
    alert (`Hola ${prompt('Cual es tu nombre?')}!`);
}

let precioProd=parseFloat (prompt("Ingresa el precio del producto"));
function calcularIva (precio){
    return precio * 0.21
}
let ivaCalculado = calcularIva (precioProd);
console.log ("EL iva =$"+ivaCalculado);
function calcularPrecioFinal (precio, iva){
    return precio + iva;
}
let precioFinal = calcularPrecioFinal (precioProd, ivaCalculado);
console.log ("El precio final con iva incluido eds $"+precioFinal);

for(let i=1; i<=3;i++){
    let usuario=prompt ("Ingresa nombre de usuario");
    let contrasenia=prompt("Ingresa contraseña para"+usuario);
    if((usuario=="naturepharma123")&&(contrasenia=="Coder123")){
        console.log("Bienvenida Sofi!");
        break;
    }else{
        console.log("Usuario y/o contraseña invalidos, restan "+(3-i)+" intentos");
    }
}