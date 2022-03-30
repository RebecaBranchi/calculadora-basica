//
// Esta funcion tiene que retornar la multiplicacion de dos numeros, los cuales llegan por parametro
//
function multiplicar(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return 0;
    } else {
        return num1 * num2;
    }
}

module.exports = multiplicar;