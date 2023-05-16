const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body"); //consultar um seletor uma tag, nesse caso body
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")
botaoAlterarTema.addEventListener("click",() => {
    
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");//alterar entre duas coisas (se ele tiver o modo escuro ele tira, senão ele insere)

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png");

    }else{
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png");
    }


});

