const dolar = document.querySelector("#val");
const inputReal = document.querySelector("#results");

function currencyConverter() {
  const real = parseFloat(dolar.value) * 5.32;
  inputReal.value = real.toFixed(2);
}

const converterBotton = document.querySelector("button"); 
converterBotton.onclick = currencyConverter;
