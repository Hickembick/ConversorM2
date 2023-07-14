// Unidades de medida por categoria
var unidadesMedida = {
  comprimento: ["metros", "centímetros", "polegadas"],
  peso: ["quilogramas", "gramas", "libras"],
  temperatura: ["Celsius", "Fahrenheit", "Kelvin"]
};

// Função para atualizar as opções de unidade de medida
function atualizarUnidades() {
  var categoria = document.getElementById("categoria").value;
  var unidadesOrigem = unidadesMedida[categoria];
  var unidadesOrigemSelect = document.getElementById("unidadeOrigem");
  var unidadesDestinoSelect = document.getElementById("unidadeDestino");

  // Limpar as opções de unidade de medida dos dois campos
  unidadesOrigemSelect.innerHTML = "";
  unidadesDestinoSelect.innerHTML = "";

  // Adicionar as opções de unidade de medida
  for (var i = 0; i < unidadesOrigem.length; i++) {
    var option = document.createElement("option");
    option.text = unidadesOrigem[i];
    unidadesOrigemSelect.add(option);
  }

  // Adicionar as opções de unidade de medida de destino
  for (var i = 0; i < unidadesOrigem.length; i++) {
    var option = document.createElement("option");
    option.text = unidadesOrigem[i];
    unidadesDestinoSelect.add(option);
  }
}

// Função para realizar a conversão de comprimento
function converterComprimento(valor, unidadeOrigem, unidadeDestino) {
  switch (unidadeOrigem) {
    case "metros":
      switch (unidadeDestino) {
        case "metros":
          return valor;
        case "centímetros":
          return valor * 100;
        case "polegadas":
          return valor * 39.37;
      }
      break;
    case "centímetros":
      switch (unidadeDestino) {
        case "metros":
          return valor / 100;
        case "centímetros":
          return valor;
        case "polegadas":
          return valor / 2.54;
      }
      break;
    case "polegadas":
      switch (unidadeDestino) {
        case "metros":
          return valor * 0.0254;
        case "centímetros":
          return valor * 2.54;
        case "polegadas":
          return valor;
      }
      break;
  }
  return 0;
}

// Função para realizar a conversão de peso
function converterPeso(valor, unidadeOrigem, unidadeDestino) {
  switch (unidadeOrigem) {
    case "quilogramas":
      switch (unidadeDestino) {
        case "quilogramas":
          return valor;
        case "gramas":
          return valor * 1000;
        case "libras":
          return valor * 2.20462;
      }
      break;
    case "gramas":
      switch (unidadeDestino) {
        case "quilogramas":
          return valor / 1000;
        case "gramas":
          return valor;
        case "libras":
          return valor * 0.00220462;
      }
      break;
    case "libras":
      switch (unidadeDestino) {
        case "quilogramas":
          return valor * 0.453592;
        case "gramas":
          return valor * 453.592;
        case "libras":
          return valor;
      }
      break;
  }
  return 0;
}

// Função para realizar a conversão de temperatura
function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {
  switch (unidadeOrigem) {
    case "Celsius":
      switch (unidadeDestino) {
        case "Celsius":
          return valor;
        case "Fahrenheit":
          return (valor * 9 / 5) + 32;
        case "Kelvin":
          return valor + 273.15;
      }
      break;
    case "Fahrenheit":
      switch (unidadeDestino) {
        case "Celsius":
          return (valor - 32) * 5 / 9;
        case "Fahrenheit":
          return valor;
        case "Kelvin":
          return (valor + 459.67) * 5 / 9;
      }
      break;
    case "Kelvin":
      switch (unidadeDestino) {
        case "Celsius":
          return valor - 273.15;
        case "Fahrenheit":
          return (valor * 9 / 5) - 459.67;
        case "Kelvin":
          return valor;
      }
      break;
  }
  return 0;
}

// Função para realizar a conversão
function converter() {
  var valor = parseFloat(document.getElementById("valor").value);
  var unidadeOrigem = document.getElementById("unidadeOrigem").value;
  var unidadeDestino = document.getElementById("unidadeDestino").value;
  var resultado;

  // Fazer a conversão com base na categoria selecionada anteriormente
  var categoria = document.getElementById("categoria").value;
  switch (categoria) {
    case "comprimento":
      resultado = converterComprimento(valor, unidadeOrigem, unidadeDestino);
      break;
    case "peso":
      resultado = converterPeso(valor, unidadeOrigem, unidadeDestino);
      break;
    case "temperatura":
      resultado = converterTemperatura(valor, unidadeOrigem, unidadeDestino);
      break;
  }

 // Exibir o resultado
var resultadoOutput = document.getElementById("resultado");
resultadoOutput.textContent = resultado.toFixed(2);
resultadoOutput.classList.remove("hidden");
resultadoOutput.classList.add("text-center");

}

// Atualizar as opções ao carregar a página
window.onload = atualizarUnidades;

// Função para validar o formulário
function validarFormulario() {
  var valorInput = document.getElementById("valor");
  var valor = parseFloat(valorInput.value);

  if (isNaN(valor) || valorInput.value.trim() === "") {
    valorInput.classList.add("campo-invalido");
    alert("Preencha um valor numérico válido");
    return false;
  }
  valorInput.classList.remove("campo-invalido");
  return true;
}


