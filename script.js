const imagem = document.getElementById('imagem')

const botao1 = document.getElementById('botao1')
const botao2 = document.getElementById('botao2')
const botao3 = document.getElementById('botao3')
const botao4 = document.getElementById('botao4')
const botao5 = document.getElementById('botao5')
const botao6 = document.getElementById('botao6')

function trocarImagem(img){
    imagem.src = img;
}

botao1.addEventListener('click', function(){
    trocarImagem('imagem1.jpeg')
})
botao2.addEventListener('click', function(){
    trocarImagem('imagem2.jpeg')
})
botao3.addEventListener('click', function(){
    trocarImagem('imagem3.jpeg')
})
botao4.addEventListener('click', function(){
    trocarImagem('imagem4.jpeg')
})
botao5.addEventListener('click', function(){
    trocarImagem('imagem5.jpeg')
})
botao6.addEventListener('click', function(){
    trocarImagem('imagem6.jpeg')
})