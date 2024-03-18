let num1 = parseInt(prompt("ingresa el primer número: "));
let num2 = parseInt(prompt("ingresa el segundo número: "));

if (num1 > num2) {
    document.write("El " + num1 + " es el número más grande. ");
} else if (num2 > num1) {
    document.write("El " + num2 + " es el número más grande. ");
} else {
    document.write("Los dos números son iguales. ");
}