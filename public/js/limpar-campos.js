//Função para retirar o is-valid/is-invalid que o bootstrap deixa no arquivo 
//ao clicar o botão "Limpar" e retornar tudo ao estado inicial.
function limparCampos() {
    // Remove as classes de validação dos campos de entrada
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('is-valid', 'is-invalid');
    }

    // Remove as classes de validação dos selects
    var selects = document.getElementsByTagName('select');
    for (var i = 0; i < selects.length; i++) {
        selects[i].classList.remove('is-valid', 'is-invalid');
    }
}
