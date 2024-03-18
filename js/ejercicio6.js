let num1 = parseInt(prompt("ingresa el primer número:"));
let num2 = parseInt(prompt("ingresa el segundo número:"));

if (num1 > num2) {
    alert("El " + num1 + " es el número más grande.");
} else if (num2 > num1) {
    alert("El " + num2 + " es el número más grande.");
} else {
    alert("Los dos números son iguales.");
}