//console.log(productos);
let contenedor = document.getElementById("misprods");

function renderizarProds() {
    for (const producto of productos) {
        contenedor.innerHTML +=`
            <div class="card" style="width: 18rem;">
             <img scr=${producto.img} class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${producto.id}</h5>
                 <p class="card-text">${producto.nombre}</p>
                 <p class="card-text">${producto.precio}</p>
                 <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }

}
renderizarProds();
