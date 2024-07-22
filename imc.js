
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.querySelector('input#nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura!== '' && peso !== '') {
       const valorIMC = (peso/(altura * altura)).toFixed(1);

       let classificaçao = "";
       if (valorIMC < 18.5){classificaçao = 'abaixo do pesso!!';}
       else if(valorIMC < 25) {classificaçao = 'com o peso ideal, Parabéns.';}
       else if(valorIMC < 30) {classificaçao = 'levemente acima do peso.';}
       else if (valorIMC< 35) {classificaçao = 'com obesidade glau I.';}
       else if (valorIMC < 40) { classificaçao= 'com obsesidade glau II.';}
       else classificaçao = 'com obesidade grau III, cuidado!!!'
       
       resultado.textContent = `${nome} seu IMC é ${valorIMC} e vocé está ${classificaçao}`
    }
        else { 
           resultado.textContent = 'preencha todos os campos!!'
    }
    }

calcular.addEventListener ('click', imc);
