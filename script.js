//console.log(productos);
let contenedor = document.getElementById("misprods");

function renderizarProds() {
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
renderizarProds();
