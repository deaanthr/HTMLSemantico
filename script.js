function alterarNome() {
    let trocarNome = document.getElementById('inputNome').value;

    if (trocarNome === '') {
        alert('Digite um nome!')
    } else {
        document.getElementById('nomeUsuario').innerHTML = trocarNome;
    }
}

function alterarCurso () {
    let trocarCurso = document.getElementById('inputCurso').value;

    if (trocarCurso == '') {
        alert ('Digite um curso!')
    } else {
        document.getElementById('nomeCurso').innerHTML = trocarCurso
    }
}

function alterarStatus () {
    let trocarCurso = document.getElementById('inputStatus').value;

    if (trocarCurso == '') {
        alert ('Digite um curso!')
    } else {
        document.getElementById('status').innerHTML = trocarCurso
    }
}

function mudarCorHeader() {
    let cor = document.getElementById('corHeader').value;

    document.querySelector('.cabecalho').style.backgroundColor = cor;
}

function mudarCorNav() {
    let cor = document.getElementById('corNav').value;

    document.querySelector('.navegacao').style.backgroundColor = cor;
}

function mudarCorSection() {
    let cor = document.getElementById('corSection').value;
    
    document.querySelector('.secao').style.backgroundColor = cor;
}

function mudarCorFooter() {
    let cor = document.getElementById('corFooter').value;

    document.querySelector('.rodape').style.backgroundColor = cor;
}