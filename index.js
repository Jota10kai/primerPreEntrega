console.log("PRIMER ENTREGA");
console.log("--------------------------------------------------------------");
//pedimos el nombre del usuario, y lo guardamos en una variable
let nombre = prompt("Ingrese su nombre");
//pedimos fecha de nacimiento dia mes año
let dia = prompt("Ingrese el dia de su nacimiento");
let mes = prompt("Ingrese el mes de su nacimiento");
let anio = prompt("Ingrese el año de su nacimiento");

//valido los datos ingresados
while (dia > 31 || mes > 12 || dia == 0 || mes == 0) {
    alert("La fecha ingresada no es correcta");
    dia = prompt("Ingrese el dia de su nacimiento");
    mes = prompt("Ingrese el mes de su nacimiento");
}
//validar que no ponga un año mayor al actual
while (anio > 2023) {
    alert("El año ingresado no es correcto");
    anio = prompt("Ingrese el año de su nacimiento");
}

let edad = 2023 - anio;
if (mes > 11) {
    edad = edad - 1;
} 
if (mes == 11 && dia > 30) {
    edad = edad - 1;
} 
//muestro por pantalla la edad
console.log("Hola " + nombre + " tu edad es: " + edad);

//cuento las letras del nombre
let cantidadLetras = 0;
for (let i = 0; i < nombre.length; i++) {
    cantidadLetras++;
}
console.log("La cantidad de letras de tu nombre es: " + cantidadLetras);

//muestro el mes de nacimiento con palabras
switch (mes) {
    case "01":
        console.log("Naciste en Enero");
        break;
    case "02":
        console.log("Naciste en Febrero");
        break;
    case "03":
        console.log("Naciste en Marzo");
        break;
    case "04":
        console.log("Naciste en Abril");
        break;
    case "05":
        console.log("Naciste en Mayo");
        break;
    case "06":
        console.log("Naciste en Junio");
        break;
    case "07":
        console.log("Naciste en Julio");
        break;
    case "08":
        console.log("Naciste en Agosto");
        break;
    case "09":
        console.log("Naciste en Septiembre");
        break;
    case "10":
        console.log("Naciste en Octubre");
        break;
    case "11":
        console.log("Naciste en Noviembre");
        break;
    case "12":
        console.log("Naciste en Diciembre");
        break;
    default:
        console.log("No ingresaste un mes correcto");
        break;
}

//funcion para calcular tus dias de vida. ME FALTA PULIR
function calcularDiasVida(edad) {
    let diasVida = edad * 365;
    return diasVida;
}

let diasVida = calcularDiasVida(edad);
console.log("Tus dias de vida son: " + diasVida);

console.log("--------------------------------------------------------------");
console.log("SEGUNDA ENTREGA");
console.log("--------------------------------------------------------------");
//Incorporando un Array en mi proyecto.
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
             "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];  
//muestro el mes de nacimiento con palabras
console.log("Naciste en " + meses[mes - 1]);


while (edad < 18) {
    alert("Sos menor de edad");
    edad = prompt("Ingrese su edad");
}
if (edad >= 18) {
    alert("Sos mayor de edad");
}


///por falta de luz no llegue a terinar. tuvimos un mal temporal
    
