let numb = parseInt(prompt("Ingresa un número:"));

if (numb % 2 === 0 || numb % 3 === 0 || numb % 5 === 0 || numb % 7 === 0) {
    alert("El " + numb + " es divisible por al menos uno de los números: 2, 3, 5 o 7.");
} else {
    alert("El " + numb + " no es divisible por ninguno de los números: 2, 3, 5 ni 7.");
}