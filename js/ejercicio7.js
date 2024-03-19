let nu1 = parseInt(prompt("Ingresa el primer número:"));
let nu2 = parseInt(prompt("Ingresa el segundo número:"));
let nu3 = parseInt(prompt("Ingresa el tercer número:"));

let mayor = nu1;

if (nu1 > mayor) {
    mayor = nu1;
}

if (nu2 > mayor) {
    mayor = nu2;
}

if (nu3 > mayor) {
    mayor = nu3;
}

alert("El número más grande es: " + mayor);