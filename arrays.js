const shopContent = document.getElementById("shopContent");

const productos = [
    {
        id:1,
        nombre:"Crema hidratante corporal Cicatricure",
        detalle:"hidratante corporal",
        precio:1200,
        img:"src=./assetts/Icons/trat corp 1.png",

    },
    {
        id:2,
        nombre:"Hidratante corporal todo dia",
        detalle:"hidratante corporal",
        precio:1350,
        img:"src=./assetts/Icons/trat corp 2.jpg",
        

    },
    {
        id:3,
        nombre:"Crema Cicatricure firmeza",
        detalle:"crema corporal",
        precio:2500,
        img:"src=./assetts/Icons/trat corp 3.jpg",
    },

];
let carrito = [];
productos.forEach((product)=>{
    let content = document.createElement("div");
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p>${product.precio} $</p>
    `;
    shopContent.appendChild(content);
    let comprar = document.createElement("button")
    comprar.inn
});