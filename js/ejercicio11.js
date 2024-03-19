let numb = parseInt(prompt("Ingresa un número:"));
let divisores = "";

if (numb % 2 === 0) {
    divisores += "2 ";
}
if (numb % 3 === 0) {
    divisores += "3 ";
}
if (numb % 5 === 0) {
    divisores += "5 ";
}
if (numb % 7 === 0) {
    divisores += "7 ";
}

if (divisores !== "") {
    alert("El " + numb + " es divisible por " + divisores.trim() + ".");
} else {
    alert("El " + numb + " no es divisible ni por 2, ni por 3, ni por 5 ni por 7.");
}