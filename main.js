let frutas = ["manzana", "pera", "plátano"];
let verduras = ["lechuga", "zanahoria", "tomate"];

console.log(frutas[frutas.length-1]);
console.log(verduras[1]);
console.log(frutas.at(-2));      //Método .at parecido a los [], es para trabajar los ultimos elementos


// Mutable (métodos que al ejecutarlos modifican elementos y estado del array)

frutas.push("melón"); //Para agregar un elemento al final del array
frutas.unshift("sandía"); //Agregar el elemento al inicio del array
frutas.splice(2, 1, "naranja"); //Agregar el elemento en una posición o sustituír

let b = frutas.pop(); //Eliminar el último elemento y retornar el valor
let b2 = frutas.shift(); //Eliminar el primer elemento
console.log(b);
console.log(b2);

// Inmutable

const comida = frutas.concat(verduras);
comida.push("mandarina");

showDom("array1", frutas)
showDom("array2", comida);

function show(arr) {
    for (let i=0 ; i<arr.length; i++){
        console.log(arr[i]);
    }
}

function showDom(element, arr) {
    document.getElementById(element).innerHTML = "";

    for (let i=0 ; i<arr.length; i++) {
        document.getElementById(element).innerHTML +=
            `<div>${arr[i]}</div>`;
    }
}
