
const formularioAgendamento = document.querySelector("form");
const nomeDoUsuario = document.querySelector("input[type=text]");
const telefoneDoUsuario = document.querySelector("input[type=tel]");
const seletorDeOpcoes = document.querySelector('select');
const descricaoDoCachorro = document.querySelector("textarea");
const botaoDeSubmissaoDoFormulario = document.querySelector('input[type=button]');


//FUNÇÃO QUE VERIFICA O ESTADO DO INPUT
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
})

