function calcularFactorial() {
  // se obtiene el valor del input
  const input = document.getElementById("numeroInput").value;

  // se convierte el input a un numero
  const numero = parseInt(input);

  // Verificamos si el valor es un número válido
  if (isNaN(numero) || numero < 0) {
    // Si no es un número válido o es negativo, mostramos un mensaje de error
    document.getElementById("resultado").innerHTML =
      "Por favor, ingresa un número entero positivo.";
  } else {
    // Si el numero es valido, procede a calcular el factorial
    const factorial = calcularFactorialNumero(numero);
    // Mostramos el resultado en HTML utilizando innerHTML
    document.getElementById(
      "resultado"
    ).innerHTML = `El factorial de ${numero} es ${factorial}.`;
  }
}

// Function calculo factorial
function calcularFactorialNumero(n) {
  let resultado = 1; //iniciar variable en 1, que almacena el resultado
  for (let i = 1; i <= n; i++) {
    //recorrer desde 1 hasta n
    resultado *= i; //el resultado lo multiplica por el resultado anterior hasta llegar al numero ingresado por el usuario
  }
  return resultado;
}
