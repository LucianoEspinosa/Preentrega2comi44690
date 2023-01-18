//carga de productos
class fragancia {
    constructor(marca, nombre, precio) {
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const producto1 = new fragancia("dior", "homme", 32000);
const producto2 = new fragancia("dior", "homme intense", 35000);
const producto3 = new fragancia("givenchy", "gentleman", 32000);
const producto4 = new fragancia("givenchy", "play", 30000);
const producto5 = new fragancia("moschino", "toy boy", 32000);
const producto6 = new fragancia("azzaro", "wanted", 25000);
const producto7 = new fragancia("azzaro", "most wanted", 25000);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
const carrito = [];
let deseaAgregarProductos = "";
let precioTotal = 0;


console.log(productos);
alert("bienvenido a fragance.net");
let preg = "";
pregunta();

if (preg == "si") {
    preguntaFiltro();
    agregarAlCarrito();
    do {
        deseaAgregarProductos = prompt("Desea agregar mas productos al carrito").toLocaleLowerCase();
        while (deseaAgregarProductos != "si" && deseaAgregarProductos != "no") {
            deseaAgregarProductos = prompt("Ingreso incorrecto. Por favor ingrese 'si o 'no'");
        }
        if (deseaAgregarProductos == "si") {
            preguntaFiltro();
            agregarAlCarrito();
        } else {
            precioTotal = carrito.reduce((total, item) => total + item.precio, 0);
            mostrarCarrito();
            alert("Gracias por su compra");
        }
    } while (deseaAgregarProductos == "si");
} else {
    alert("Hasta luego");
}



function filtroDiseniador() {
    let existe = true;

    let diseniador = prompt("seleccione marca o diseñador").toLocaleLowerCase();
    existe = productos.some(item => item.marca === diseniador);
    while (existe === false) {
        diseniador = prompt("el diseñador esta mal escrito o no trabajamos con el. Intente nuevamente");
        existe = productos.some(item => item.marca === diseniador);
        
    }
    const filtroMarcas = productos.filter(p => p.marca == diseniador);
    console.log(filtroMarcas);
    const fraganciasSeleccionadas = filtroMarcas.map(p => p.nombre + " " + " $" + p.precio);
    alert("A continuacion las fragancias de " + diseniador);
    alert(fraganciasSeleccionadas.join(" - "));


}

function todosLosProductos() {
    const prod = productos.map(p => p.nombre + " " + " $" + p.precio);
    alert("A continuacion todas las fragancias en stock ");
    alert(prod.join(" - "));

}

function pregunta() {
    preg = prompt("Desea comprar alguna fragancia? si/no").toLocaleLowerCase();
    while (preg != "si" && preg != "no") {
        alert("por favor ingrese si o no");
        preg = prompt("ingrese si o no");
    }

}
function preguntaFiltro() {
    let pregunta = prompt("Para ver todas las fragancias teclee 1, para filtrar por diseñador teclee 2");
    while (pregunta != "1" && pregunta != "2") {
        pregunta = prompt("Su ingreso es incorreco. Por favor ingrese [ 1 ] o [ 2 ]");
    }
    if (pregunta === "1") {
        todosLosProductos();
    } else {

        filtroDiseniador();
    }
}
function agregarAlCarrito() {
    let existe = true;
    let deseaAgregarProductos = "";
    let compra = prompt("ingrese el nombre de la fragancia para agregar al carrito");
    existe = productos.some(item => item.nombre === compra);
    while (existe === false) {
        compra = prompt("el nombre de la fragancia esta mal escrito o no la tenemos a disposicion en este momento. Intente nuevamente");
        existe = productos.some(item => item.nombre === compra);
    }
    for (let item of productos) {
        if (item.nombre === compra) {
            carrito.push(item);
        }
    }

}
function mostrarCarrito() {

    const mostrarCarro = carrito.map(item => item.marca + " " + item.nombre + " $" + item.precio);
    alert("A continuacion los productos en el carrito");
    alert(mostrarCarro.join(" - ") + " ----- total $ " + precioTotal);


}

