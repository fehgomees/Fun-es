function calcularMedia() {
    // VALORES DO CAMPO DE INPUT
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let numero3 = parseFloat(document.getElementById('numero3').value);
    let numero4 = parseFloat(document.getElementById('numero4').value);
    let numero5 = parseFloat(document.getElementById('numero5').value);

    // CALCULADORA DE MÉDIA
    let media = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;

    // RESULTADO DO CAMPO DE RESULTADO
    document.getElementById('resultado').innerText = `A média dos números é: ${media}`;
}
