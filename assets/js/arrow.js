/* Función original
suma = function(a, b){
    return a + b
}
*/

const suma = (a, b) => parseInt(a + b).toLocaleString('de-DE');
document.getElementById('resultArrowFunction').innerText = suma(1000 , 5000);
