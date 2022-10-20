const suma = (a, b) => parseInt(a + b).toLocaleString('de-DE', { minimumFractionDigits: 0 });
document.getElementById('resultArrowFunction').innerText = suma(1000 , 5000);
