
const productos = [
    {
        id:10,
        nombre:"Crema hidratante corporal Cicatricure",
        detalle:"hidratante corporal",
        precio:1200

    },
    {
        id:10,
        nombre:"Hidratante corporal todo dia",
        detalle:"hidratante corporal",
        precio:1350

    },
    {
        id:10,
        nombre:"Crema Cicatricure firmeza",
        detalle:"crema corporal",
        precio:2500

    },

];
for(const producto of productos){
    console.log(producto.nombre+"Precio $:"+producto.precio);
}
class productosCremas{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const productosCremas = [];
productosCremas.push(new productosCremas("Crema hidratante corporal Cicatricure","1200"));
productosCremas.push(new productosCremas("Hidratante corporal todo dia","1350"));
productosCremas.push(new productosCremas("Crema Cicatricure firmeza","2500"));
console.log(productosCremas);
for(const producto of productosCremas)
producto.sumaIva();