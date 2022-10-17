
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
class productoCream{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const productosCream = [];
productosCream.push(new productoCream("Crema hidratante corporal Cicatricure","1200"));
productosCream.push(new productoCream("Hidratante corporal todo dia","1350"));
productosCream.push(new productoCream("Crema Cicatricure firmeza","2500"));
console.log(productosCream);
for(const producto of productosCream)
producto.sumaIva();