/* Función original
function example(a, b, c){
    return a+b+c
}
*/

const expressionFunction = function (a, b, c){
    return parseInt(a + b + c).toLocaleString('de-DE');
}
document.getElementById('resultExpressionFunction').innerText = expressionFunction(500, 10000, 15);
