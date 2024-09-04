/*console.log("mensaje en consola")

alert("Bienvenido a la calculadora que calcula (Por favor duerman al q creo ese nombre)")

let RespuestaDeUsuario1 = prompt("ingrese un numero")

if (parseInt (RespuestaDeUsuario1) != NaN) {
 let numero1 = parseInt (RespuestaDeUsuario1)
}
else {
    RespuestaDeUsuario1 = prompt ("ingrese un numero")
}

let RespuestaDeUsuario2 = prompt("ingrese el segundo numero")

const resultado = parseInt(RespuestaDeUsuario1) + parseInt(RespuestaDeUsuario2)

alert ("La suma de los dos numeros es =" , resultado)*/

/*let global = 0

if (10 > 1) {
    let local = 34 
    global = 45
    console.log("Local =", local)
}
else
{
    console.error (local)

}

alert(global)
alert(local)
*/






//Clase 4

//!= diferente
// == igual en valor, pero no verifica tipo,  3 == "3" ----> true

// === exactamente igual en: valor y tipo, 3 === "3" -----> false
// && (and) verifica que las 2 condiciones sean verdaderas, con que una sola sea falsa nos vamos al else

// || (or) con que una de las dos condiciones se cumpla entramos a verdadero


// let num1 = 0
// let num2 = 0

// function preguntar() {
//     num1 = parseInt(prompt("ingrese el primer valor"))
//     num2 = parseInt(prompt("ingrese el segundo valor"))
// }

// function sumar(a, b) {
//     return a + b
// }

// preguntar()
// let resultado = sumar(num1, num2)
// console.log(resultado)
// resultado = sumar(3, 5)
// console.log(resultado)
// resultado = sumar(4, 6)
// console.log (resultado)


// console.log("funciona correctamente");

// let num1 = prompt("Ingrese el primer digito")
// let num2 = prompt("Ingrese el segundo digito")


// function sumar(a, b) {

//       console.log(a*1)
//       console.log(b*1)

// if (a*1 && b*1) {
//     a = parseInt(a)
//     b = parseInt(b)
//     return a + b
// }
// else {
//     console.log("Algun valor no es un número")
// }

// let resultado = sumar (num1, num2)


// console.log("el resultado de la suma es = " + resultado)





// if (num1 >= num2) {
//     console.log("El mayor es el primer digito")
// }
// if (num1 == num2) {
//     console.log("Los digitos son iguales")
// }
// else {
//     console.log("El segundo digito es mayor")
// }


//function sumar(a, b) {
//  console.log("¿a es NaN?", typeof (a) != typeof (1))
//  console.log("¿b es NaN?", typeof (b) != typeof (1))
//}



//     if (typeof (a) == typeof (1) && typeof (b) == typeof (1)) {
//         return a + b
//     }
//     else {
//         console.log("Un valor no es un número chistoso")
//     }
// }

//Clase 6

//objetos

// const obj = {
//  clave : "valor",
//  clave2 : "valor 2"
// }

// const producto = {
//     nombre: "zapatilla",
//     precio : "50000",
//     stock:  123
// }

// const producto2 = {
//     nombre: "Medias",
//     precio: "2000",
//     stock: 3
// }

// const arr = [1, 2, 3]


// console.log (obj.clave)




//Desafio 6

// const producto1 = {
//     nombre : "Camiseta",
//     precio : "50000",
//     stock : 123
    
// }

// const producto2 = {
//     nombre : "Medias",
//     precio : "1000",
//     stock : 3,
//     categoria : "ropa"
// }

// producto2.desc = "Las mejores zapatillas que podes encontrar, ademas que estan hechas de bolsas de papas asi que evitas que haya basura al usarlas"

// delete producto2.desc

// producto1.nombre = "Zapatillas"
// producto1.categoria = "Calzado"

// delete stock



// Clase 7

// const productos = [
//     {
//         nombre: "medias",
//         precio: 1000,
//         img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyECPZe2zZec28whTPhSKUz82z3L1BOpsRg&s",
//         stock: 3,
//         categoria: "ropa",
//     },
//     {
//         nombre: "pelota",
//         precio: 15000,
//         Img: "https://services.meteored.com/img/article/la-pelota-del-mundial-de-qatar-2022-con-inteligencia-artificial-imu-al-rihla-offside-lautaro-martinez-argentina-1669444068237_512.jpg",
//         stock: 8,
//         categoria: "accesorios"
//     },
//     {
//         nombre: "zapatilla",
//         precio: 50000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv73226boxMhcc5jKHwOLD8FOuEFvAupXOXQ&s",
//         stock: 4,
//         categoria: "calzado",
//     },
  
// ]

// const productosFiltrados = productos.filter(el => el.categoria === "calzado")

// console.log (productosFiltrados)


// const arr = [1,2,3,4]

// arr.map ((el) => console.log(el))

// const numeroHTML = productos.map(prod => {
//     return `
//     <div>
//             <h3>${prod.nombre}</h3>
//             <p>${prod.precio}</p>
//             <p>${prod.categoria}</p>
//             <button>Comprar</button>
//             </div>
//     `
// }) .join("")










// const container = document.getElementById("container")

// container.innerHTML = "<h1> XD </h1>"

// console.log(container.innerHTML)




// function normal (parametros) {
//     return parametros + 1
// }

// normal (1);

// const flecha = (parametros) => {
//     return parametros + 1 
// }

// function consoleloggear(elemento) {
//     console.log(elemento)
// }

// flecha (1 + 1)



// arr.map ( (elemento) => consoleloggear(elemento))

//arr.map ( (elemento) => console.log(elemento + 1))

// arr.map( (elemento) => console.log (elemento) )


//Desafio 7 

// const precio = document.getElementById("precioProducto")

// precio.innerText = $450

// const nomProd = document.querySelector("#nombreProducto")

// nomProd.innerText = "Smartphone Motorola"





//Clase 8

//  const productos = [
//      {
//         id : 1,
//          nombre: "medias",
//          precio: 1000,
//          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyECPZe2zZec28whTPhSKUz82z3L1BOpsRg&s",
//          stock: 3,
//          categoria: "ropa",
//      },
//      {
//         id : 2,
//          nombre: "pelota",
//          precio: 15000,
//          Img: "https://services.meteored.com/img/article/la-pelota-del-mundial-de-qatar-2022-con-inteligencia-artificial-imu-al-rihla-offside-lautaro-martinez-argentina-1669444068237_512.jpg",
//          stock: 8,
//          categoria: "accesorios"
//      },
//      {
//         id : 3,
//          nombre: "zapatilla",
//          precio: 50000,
//          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv73226boxMhcc5jKHwOLD8FOuEFvAupXOXQ&s",
//          stock: 4,
//          categoria: "calzado",
//      },
  
//  ]
//  const carrito = []

//  const productosFiltrados = productos.filter(el => el.stock === "calzado")

//  console.log (productosFiltrados)


// //  const arr = [1,2,3,4]

// //  arr.map ((el) => console.log(el))

//  const productosContainer = productos.map(prod => {
//      return `
//      <div class = "productos">
//              <h3>${prod.nombre}</h3>
//              <p>${prod.precio}</p>
//              <p>${prod.categoria}</p>
//              <button class = "btn-comprar" id=${prod.id}>Comprar</button>
//              </div>
//      `
//  }) .join("")

// let totalCarrito = 0

// let cantItems = 0

// totalCarrito += 1

//  const totalContainer = document.getElementById("total")

//  const container = document.getElementById('container')

// console.log(container.innerHTML)

// container.innerHTML = productosContainer

// const botonesComprar = document.querySelectorAll(".btn-comprar")
// console.log (botonesComprar)

// const AgregarAlCarrito = (id) => {
//     let prodComprado = productos.find(prod => prod.id === id)
//     carrito.push(prodComprado)
//     mostrarCarrito()
//     totalCarrito = calcularTotal ()
//     let tot = carrito.reduce((acc, precio) => acc + precio, totalCarrito)
//     totalContainer.innerHTML = ` ${carrito.length} Total de tu compra : ${totalCarrito} `
//     // carrito.push(productos.find(prod => prod.id === id)) Forma alternativa
// }


// botonesComprar.forEach(boton => {
//     boton.addEventListener("click", () => {
//         console.log ("Compraste el producto" , boton.id)
//         AgregarAlCarrito(parseInt(boton.id))
//     })
// })

// AgregarAlCarrito(2)

// const mostrarCarrito = () => {
// for (const prod of carrito){
//     let h2 = document.createElement('h2')
//     h2.innerHTML = prod.nombre  
//     carritoContainer.appendChild(h2)
//  }
// }
// const calcularTotal = () => {
//     let total = 0
//     for (const prod of carrito) {
//         total += prod.precio
//     }
//     return total
// }

// const carritoContainer = document.getElementById("carrito")

//Base del for
//  for (const iterator of Object) {

//  }


//Clase 8 (Codigo de Ap)


// const productos = [
//     {
//         id: 1,
//         nombre: "zoquetes",
//         precio: 2000,
//         img:"https://complot.com.ar/media/catalog/product/cache/479c9cdc016090c3dba85230b5b617b2/c/o/complot_75056807_blanco_1_p.jpg",
//         stock: 3,
//         categoria: "calzado"
//     },
//     {
//         id: 2,
//         nombre: "Balón",
//         precio: 18000,
//         img: "https://www.digitalsport.com.ar/files/products/624b1bc16431e-565339-500x500.jpg",
//         stock: 8,
//         categoria: "accesorios"
//     },
//     {
//         id: 3,
//         nombre: "zapatilla",
//         img: "https://acdn.mitiendanube.com/stores/001/467/692/products/img_62521-9faa9be7a9ddbdf7db16596220978285-640-0.webp",
//         precio: 50000,
//         stock: 2,
//         categoria: "calzado",
//     },
// ]




// const carrito = []


// const productosFiltrados = productos.filter(el => el.categoria === "calzado")


// console.log(productosFiltrados)


// const productosContainer = productos.map( prod => {
//     return `
//     <div class="producto">
//         <h3>${prod.nombre}</h3>
//         <img src=${prod.img}>
//         <p>${prod.precio}</p>
//         <p>${prod.categoria}</p>
//         <button class="btn-comprar" id=${prod.id}>Comprar</button>
//     </div>
//     `
// }).join("")


// let totalCarrito = 0
// let cantItems = 0


// const totalContainer = document.getElementById("total")


// const container = document.getElementById('container')


// console.log(container.innerHTML)


// container.innerHTML = productosContainer
// totalContainer.innerHTML = `🛒${carrito.length} Total de tu compra : ${totalCarrito}`


// const botonesComprar = document.querySelectorAll(".btn-comprar")


// const AgregarAlCarrito = (id) => {
//     let prodComprado = productos.find(prod => prod.id === id)
//     carrito.push(prodComprado)
//     mostrarCarrito()
//     totalCarrito = calcularTotal()
//     totalContainer.innerHTML = `🛒${carrito.length} Total de tu compra : ${totalCarrito}`
// }


// botonesComprar.forEach( boton => {
//    boton.addEventListener('click', ()=> {
//         AgregarAlCarrito(parseInt(boton.id))
//     })
// })


// const  mostrarCarrito = () => {
//     carritoContainer.innerHTML = ""
//     for (const prod of carrito) {
//         let h2 = document.createElement('h2')
//         h2.innerHTML = prod.nombre
//         carritoContainer.appendChild(h2)
//     }
// }


// const calcularTotal = () =>{
//     let total = 0
//     for (const prod of carrito) {
//         total += prod.precio
//     }
//     return total
// }


// const carritoContainer = document.getElementById('carrito')

// Desafio 8

// const arr = ["medias", "zapatillas", "balon"]

// const desafio = document.getElementById("des")
// for (const prod of arr) {
//     let h2 = document.createElement("h2");
//     h2.innerHTML = prod;
//     document.body.appendChild(h2);
// }



//Clase y Desafio 10
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