const expressionFunction = function (a, b, c){
    return parseInt(a + b + c).toLocaleString('de-DE', { minimumFractionDigits: 0 });
}
document.getElementById('resultExpressionFunction').innerText = expressionFunction(500, 10000, 15);
