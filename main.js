function tocaSom (elementoAudio) {
    const som = document.querySelector(elementoAudio);
    
    if (som && som.localName === 'audio'){
        // som != null. O JS ja sabe que se algo é nao nulo
        som.play();
    }
    else {
        alert('Elemento não Encontrado');
    }
}

// Botoes 
const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;// template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown =  function (e) {
        
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
   
}