let nume = parseInt(prompt("Ingresa un número:"));

if (nume % 2 === 0) {
   alert("El " + nume + " es divisible por 2.");
} else if (nume % 3 === 0) {
    alert("El " + nume + " es divisible por 3.");
} else if (nume % 5 === 0) {
    alert("El " + nume + " es divisible por 5.");
} else if (nume % 7 === 0) {
    alert("El " + nume + " es divisible por 7.");
} else {
    alert("El " + nume + " no es divisible por 2, 3, 5 ni 7.");
}