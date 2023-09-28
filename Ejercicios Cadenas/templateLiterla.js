//Template Literals

/*1. Crea una función llamada saludoPersonalizado que tome un nombre y 
una edad como argumentos y utilice un template literal para devolver un 
saludo personalizado que incluya el nombre y la edad.*/

function saludoPersonalizado(name="Iván", age=21){
    return `El usuario se llama: ${name} y tiene ${age} año/s.`
}

console.log(saludoPersonalizado());

/*2. Utiliza un template literal para crear una cadena que muestre 
una lista de compras con varios elementos. Luego, muestra esa cadena en la consola.*/

const listaCompra = ["Platano", " Leche", " Aguacate", " Avena"];
console.log(`La lista de la compra es: ${listaCompra}`);

/*3. Escribe una función llamada informacionProducto que tome un objeto con 
información de un producto (nombre, precio, categoría, etc.) y utilice un template 
literal para generar una descripción del producto. Luego, muestra esa descripción en 
la consola.*/

let producto = 
    {
        id:1,
        nombre:"Sudadera Air Jordan",
        precio:100
    }
function informacionProducto(descripcion="Ropa temporada 23/24", objeto=producto){
    return `Producto con id: ${objeto.id}, nombre: ${objeto.nombre} y precio: ${objeto.precio}€.`;

}
console.log(informacionProducto());
    