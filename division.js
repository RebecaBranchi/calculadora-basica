//
// Esta funcion tiene que retornar la divide de dos numeros, los cuales llegan por parametro
//
function dividir(dividendo, divisor) {
    if (divisor == 0) {
        return "No se puede dividir por cero"
    } else { return dividendo / divisor;
    }
}

module.exports = dividir; 