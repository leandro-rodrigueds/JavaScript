function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)  

    if (elemento && elemento.localName === 'audio') {
          elemento.play9();  
    }
    else{
        console.log('Elemento não encontrado ou seletor invalido ')
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont]
    const intrumento = tecla.classList[1];
    const idAudio = `#som_${intrumento}`;//template string

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
          tecla.classList.add('ativa');  
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
