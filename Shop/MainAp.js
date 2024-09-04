const productos = [
    {
      id: 1,
      nombre: "Mando wireless Harrow G808",
      precio: 49.137,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4K_R6jqiKtT3gKy05KibKe9q6fuij8yD90HoJyqBH6Wz3eXumty-A-wi7cJ8aPf62H0&usqp=CAU",
      stock: 3,
      categoria: "Tecnologia",
    },
    {
      id: 2,
      nombre: "Mouse Gamer Razer Basilisk",
      precio: 119000 ,
      img: "https://http2.mlstatic.com/D_NQ_NP_757052-MLU72836354263_112023-O.webp",
      stock: 8,
      categoria: "Tecnologia",
    },
    {
      id: 3,
      nombre: "Teclado gamer Redragon Kumara",
      img: "https://http2.mlstatic.com/D_NQ_NP_864807-MLA77594879101_072024-O.webp",
      precio: 100.544,
      stock: 2,
      categoria: "Tecnologia",
    },
    {
      id: 4,
      nombre: "Smartwatch Xiaomi Redmi Watch 3",
      img: "https://http2.mlstatic.com/D_NQ_NP_779389-MLU70654720405_072023-O.webp",
      precio: 76.999,
      stock: 5,
      categoria: "Tecnologia",
    },
  ];
  const usuarios = [
    { id: "1", nombre: "Ulises", password: "123456" },
    { id: "2", nombre: "Lucas", password: "654321" },
  ];
  let carrito = [];
  
  const productosFiltrados = productos.filter((el) => el.categoria === "calzado");
  
  console.log(productosFiltrados);
  
  const productosContainer = productos
    .map((prod) => {
      return `
      <div class="producto">
          <h3>${prod.nombre}</h3>
          <img src=${prod.img}>
          <p>${prod.precio}</p>
          <p>${prod.categoria}</p>
          <button class="btn-comprar" id=${prod.id}>Comprar</button>
      </div>
      `;
    })
    .join("");
  let totalCarrito = 0;
  let cantItems = 0;
  const totalContainer = document.getElementById("total");
  const container = document.getElementById("container");
  console.log(container.innerHTML);
  container.innerHTML = productosContainer;
  const mostTotal = (arr) => {
    totalContainer.innerHTML = `🛒${arr.length} Total de tu compra : ${totalCarrito}`;
  };
  mostTotal(carrito);
  const botonesComprar = document.querySelectorAll(".btn-comprar");
  const cant = 1;
  
  const AgregarAlCarrito = (id) => {
    let prodComprado = productos.find((prod) => prod.id === id);
    if (carrito.some((el) => el.id === id)) {
      prodComprado.cantidad += cant;
    } else {
      prodComprado.cantidad = 1;
      carrito.push(prodComprado);
    }
    mostrarCarrito();
    addEventos();
    totalCarrito = calcularTotal(carrito);
  
    totalContainer.innerHTML = `🛒${cantidadItems(
      carrito
    )} Total de tu compra : ${totalCarrito}`;
    console.log(carrito);
  };
  const cantidadItems = (arr) => {
    let items = 0;
    arr.map((e) => (items += e.cantidad));
    return items;
  };
  botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
      AgregarAlCarrito(parseInt(boton.id));
    });
  });
  const borrarProd = (id) => {
    const index = carrito.findIndex((e) => e.id === id);
    if (index !== -1) {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad -= 1;
      } else {
        const newArr = carrito.filter((e) => e.id !== id);
        carrito = newArr;
      }
      carritoContainer.innerHTML = "";
      mostrarCarrito();
      mostTotal(carrito);
      addEventos();
      totalCarrito = calcularTotal(carrito);
      totalContainer.innerHTML = `🛒${cantidadItems(
        carrito
      )} Total de tu compra : ${totalCarrito}`;
    }
  };
  const addEventos = () => {
    const botonesBorrar = document.querySelectorAll(".btn-borrar");
    botonesBorrar.forEach((btn) => {
      btn.addEventListener("click", () => {
        borrarProd(parseInt(btn.id), carrito);
      });
    });
  };
  const mostrarCarrito = () => {
    carritoContainer.innerHTML = "";
    const cart = carrito
      .map((prod) => {
        return `
      <div class="carrito">
          <h3>${prod.nombre} X${prod.cantidad}</h3>
          <button class="btn-borrar" id=${prod.id}>Borrar</button>
      </div>
      `;
      })
      .join("");
    carritoContainer.innerHTML = cart;
  };
  const calcularTotal = (arr) => {
    let total = 0;
    for (const prod of arr) {
      total += prod.precio * prod.cantidad;
    }
    return total;
  };
  
  const carritoContainer = document.getElementById("carrito");
