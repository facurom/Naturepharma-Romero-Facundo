const shopContent= document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
let carrito= [];

/*console.log(productos);
let contenedor = document.getElementById("misprods");

/*function renderizarProds() {
    for (const producto of productos) {
        contenedor.innerHTML +=`
            <div class="card col-sm-3" >
             <img scr=${producto.img} class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${producto.id}</h5>
                 <p class="card-text">${producto.nombre}</p>
                 <p class="card-text">${producto.precio}</p>
                 <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }
    productos.forEach(producto =>{
        document.getElementById()
    })

}
renderizarProds();*/

productos.forEach((producto)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${producto.img}">
      <h3>${producto.nombre}</h3>
      <p class="price">${producto.precio} $</p>
    `;
    shopContent.append(content);
    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    content.append(comprar);
    comprar.addEventListener ("click", () =>{
       carrito.push({
           id : producto.id,
           img : producto.img,
            nombre: producto.nombre,
           precio: producto.precio,
        });
      console.log(carrito);

    });
});
