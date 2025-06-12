function convert() {

   const exchangeRates = {
    COP: { USD: 0.00024, EUR: 0.00022 },
    USD: { COP: 4200, EUR: 0.93 },
    EUR: { COP: 4500, USD: 1.08 }
    };

    const amountNumIngresado = document.getElementById('amount');
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    const amount = parseFloat(amountNumIngresado.value)


    if (!amount || amount <= 0) {
        resultDiv.textContent = 'Porfa, ingrese una cantidad mayor a cero  (0)'
        return;
    }

    if (fromCurrency === toCurrency) {
        resultDiv.textContent = `Resultado: ${amount} ${fromCurrency}, no existe modificación por comparar el mismo tipo de moneda`
        return;
    }

    const tasaConversion = exchangeRates[fromCurrency][toCurrency];
    // console.log(tasaConversion);
    // console.log(fromCurrency, toCurrency);
    

    const resultadoConversion= amount*tasaConversion;

    resultDiv.textContent = `Resultado: ${resultadoConversion.toFixed(2)} ${toCurrency}`;
};