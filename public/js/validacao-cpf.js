function validaCPF() {
  var strCPF = document.getElementById('cpf').value; // Obtém o valor do campo de CPF
  var resultado = TestaCPF(strCPF); // Chama a função de validação do CPF

  if (resultado) {
    // O CPF é válido, permita o envio do formulário
    return true;
  } else {
    // O CPF é inválido, impedindo o envio do formulário
    alert('CPF inválido. Corrija o CPF antes de enviar o formulário.');
    return false;
  }
}


function TestaCPF(strCPF) {
  var Soma;   // Variável para a soma dos produtos dos dígitos do CPF.
  var Resto;  // Variável para armazenar o resto da divisão.

  Soma = 0;   // Inicializa a soma como 0.

  if (strCPF == "00000000000") return false;  // Verifica se o CPF é igual a 00000000000 e, se for, considera como inválido.

  for (i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);  // Calcula a soma dos produtos dos dígitos.
  }

  Resto = (Soma * 10) % 11;  // Calcula o resto da divisão da soma por 11.

  if (Resto == 10 || Resto == 11) Resto = 0;  // Se o resto for 10 ou 11, ajusta para 0.
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;  // Compara o dígito verificador calculado com o dígito real.

  Soma = 0;  // Reinicializa a soma como 0.
    
  for (i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);  // Calcula a soma dos produtos dos dígitos (incluindo os dígitos verificadores).
  }

  Resto = (Soma * 10) % 11;  // Calcula o resto da divisão da nova soma por 11.

  if (Resto == 10 || Resto == 11) Resto = 0;  // Se o resto for 10 ou 11, ajusta para 0.
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;  // Compara o segundo dígito verificador calculado com o dígito real.

  return true;  // Se todos os testes passarem, o CPF é considerado válido.
}
