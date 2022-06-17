titulo.innerText = "Hardware.com"
slogan.innerText = 'Tu lugar de confianza para conseguir el hardware'

const cargarProductos = ()=> {
    Procesador.innerHTML = ""
    for (proce of cpu) {
        const liProductos = document.createElement("li")
                liProductos.className = "collection-item"
                liProductos.innerText = proce
                liProductos.addEventListener("click", ()=> {
                    agregarAlCarrito(`${liProductos.innerText}`)
            })
        Procesador.append(liProductos)
    }
}

cargarProductos();  { 
    placaDeVideo.innerHTML = ""
    for (video of gpu) {
        const liProductos = document.createElement("li")
                liProductos.className = "collection-item"
                liProductos.innerText = video
                liProductos.addEventListener("click", ()=> {
                    agregarAlCarrito(`${liProductos.innerText}`)
            })
        placaDeVideo.append(liProductos)
    }
}

cargarProductos();  {
    memoriaRam.innerHTML = ""
    for (mram of ram) {
        const liProductos = document.createElement("li")
                liProductos.className = "collection-item"
                liProductos.innerText = mram
                liProductos.addEventListener("click", ()=> {
                agregarAlCarrito(`${liProductos.innerText}`)
            })
        memoriaRam.append(liProductos)
    }
}

cargarProductos();  {
    placaMadre.innerHTML = ""
    for (madre of mother) {
        const liProductos = document.createElement("li")
                liProductos.className = "collection-item"
                liProductos.innerText = madre
                liProductos.addEventListener("click", ()=> {
                    agregarAlCarrito(`${liProductos.innerText}`)
            })
        placaMadre.append(liProductos)
    }
}

const agregarAlCarrito = (prod)=> {
    if (prod > "") {
        const id = prod + "enCarrito"
        const liCarrito = document.createElement("li")
              liCarrito.className = "collection-item italica-carrito"
              liCarrito.innerText = prod
              liCarrito.id = id
              liCarrito.addEventListener("dblclick", ()=> {
                  eliminarDelCarrito(`${id}`)
            })
        listadoCarrito.append(liCarrito)
    }
}

const eliminarDelCarrito = (productoID)=> {
    if (confirm("¿Desea eliminar el producto del carrito?")) {
        const itemAeliminar = document.getElementById(productoID)
              itemAeliminar.remove()
              return
    }
}

cargarProductos()