var nome_cavalos = [];
var numeroCavalosPermitidos = 0;
var qtdVoltas = 0

function main() {
    console.log('ENTREI NA MAIN');

}

function validarCavalo() {
    console.log('ENTREI NA VALIDARCAVALO()');

    

    let nomeCavalo = ipt_nome_cavalo.value;

    if (isNaN(nomeCavalo)) {

        lista_cavalos_registrados.innerHTML = '';

        if (nomeCavalo.length >= 0 && nomeCavalo != '') {
            
            inserirCavalo(nomeCavalo);

            mostrarCavalos()

        } else {
            alert('Insira um nome válido! O nome deve ter 1 ou mais caracteres.');
        }

    } else if (nomeCavalo == '') {
        alert('Insira um nome válido! O nome deve ter 1 ou mais caracteres.');
    } else {
        alert('O nome não pode ser um número!')
    }

}

function inserirCavalo(nomeCavalo) {

    if (nome_cavalos.length < numeroCavalosPermitidos) {
        nome_cavalos.push(nomeCavalo);
        container_titulo_lista.style.display = 'block';
    } else {
        alert('Número máximo de registros atingido!');
    }

    ipt_nome_cavalo.value = '';
    
}

function mostrarCavalos() {

    for (let i = nome_cavalos.length - 1; i >= 0; --i) {   
        lista_cavalos_registrados.innerHTML += `<li>${nome_cavalos[i]}</li>`;
    }
}

function validarNumeroCavalos(ipt_numeroCavalos) {

    if (isInt(ipt_numeroCavalos)) {
        if (ipt_numeroCavalos >= 2 && ipt_numeroCavalos <= 6) {
            alert('Validado com sucesso!');
            btn_continuar_inicial.style.display = 'block';
        } else {
            alert('Você deve registrar, no mínimo, 2 cavalos e, no máximo, 6.');
        }
    } else {
        alert('Insira um número inteiro! Ex.: 2, 5 ou 3.');
    }

    numeroCavalosPermitidos = ipt_numeroCavalos;

}

function isInt(numero) {
    return numero % 1 === 0; 
}

function trocarTela() {

    window.setTimeout(() => {
        main();
    }, 100);

    tela1.style.display = 'none';
    tela2.style.display = 'block';
}

function continuar(proximaTela) {
    if (proximaTela == 'container_ipt_nome_cavalos') {
        container_ipt_nome_cavalos.style.display = 'block';
        // container_menu_inicial.display = 'none';
    } else if (proximaTela == 'container_voltas') {
        container_voltas.style.display = 'block';
        // container_ipt_nome_cavalo.style.display = 'none';
    }
}

function inserirVoltas(ipt_voltas) {
    btn_trocar_tela.style.display = 'block';
    qtdVoltas = ipt_voltas;
}


