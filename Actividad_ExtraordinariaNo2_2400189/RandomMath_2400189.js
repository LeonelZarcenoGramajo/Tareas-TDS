function jugar() {
    // La computadora genera un número aleatorio entre 1 y 9
    const numeroComputadora = Math.floor(Math.random() * 9) + 1;

    // Pedir al usuario un número entre 3 y 6
    let numeroUsuario;
    do {
        numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6: "));
    } while (numeroUsuario < 3 || numeroUsuario > 6 || isNaN(numeroUsuario));

    // Preguntar al usuario si su número es mayor, menor o igual al número generado por la computadora
    let adivinanza = prompt("¿Es su número mayor, menor o igual al número de la computadora? (mayor/menor/igual): ").toLowerCase();

    // Comparar los números y mostrar el resultado
    let resultado;
    if (adivinanza === "mayor" && numeroUsuario > numeroComputadora) {
        resultado = "¡Ha adivinado!";
    } else if (adivinanza === "menor" && numeroUsuario < numeroComputadora) {
        resultado = "¡Ha adivinado!";
    } else if (adivinanza === "igual" && numeroUsuario === numeroComputadora) {
        resultado = "¡Ha adivinado!";
    } else {
        resultado = "No ha adivinado.";
    }

    // Mostrar los números y el resultado
    alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${adivinanza}. ${resultado}`);
    
    // Preguntar si quiere jugar otra vez
    let jugarOtraVez = prompt("¿Quiere jugar otra vez? (SI/NO): ").toLowerCase();
    
    if (jugarOtraVez === "si") {
        jugar();  // Reiniciar el juego
    } else {
        // Si no quiere jugar más, mostrar su nombre y número de carnet
        alert(`Gracias por jugar ¡Hasta pronto!`);
    }
}

// Iniciar el juego
jugar();