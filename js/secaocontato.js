
const formularioAgendamento = document.querySelector("form");
const nomeDoUsuario = document.querySelector("input[type=text]");
const telefoneDoUsuario = document.querySelector("input[type=tel]");
const seletorDeOpcoes = document.querySelector('select');
const descricaoDoCachorro = document.querySelector("textarea");
const botaoDeSubmissaoDoFormulario = document.querySelector('input[type=button]');



function estadoInput (event) {
    const input = event.target
    if(input.value.trim() !== ""){
      input.style.border = "2px solid #0f0";
      input.style.transition = "0.2s ease-in-out";
    }else if(input.value.trim() === ""){
        input.style.border = "2px solid #f00";
        input.style.transition = "0.2s ease-in-out";
    }
}

const elements = [nomeDoUsuario, telefoneDoUsuario, descricaoDoCachorro];
elements.forEach(e => {
    e.addEventListener("blur", estadoInput)
})

formularioAgendamento.addEventListener("submit", event => {
    event.preventDefault()

    const numero = "5524998749911"
    let nomeCliente = nomeDoUsuario.value
    let telefoneCliente = telefoneDoUsuario.value
    let porteDoCao = seletorDeOpcoes.value

    const mensagemCliente = `Olá Adriano gostaria de fazer um passeio experimental.
    Dados do cliente:
    Nome: ${nomeCliente}
    Telefone: ${telefoneCliente}
    Porte do cão: ${porteDoCao}
    Mensagem: ${descricaoDoCachorro.value}`

    const mensagemFormatoUrl = encodeURIComponent(mensagemCliente)

    const mensagemFormatoUrlWhatsApp = `https://wa.me/${numero}?text=${mensagemFormatoUrl}`

    window.open(mensagemFormatoUrlWhatsApp, '_blank')
})


seletorDeOpcoes.addEventListener("change", (event) => {
    const selectOptions = event.target
    const opcaoSelecionada = selectOptions.value
    
    if (opcaoSelecionada) {
        selectOptions.style.border = "2px solid #0f0";
        selectOptions.style.transition = "0.2s ease-in-out";
    }else{
        input.style.border = "2px solid #f00";
        input.style.transition = "0.2s ease-in-out";
    }
})

 
 