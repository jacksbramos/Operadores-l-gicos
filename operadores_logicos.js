/*DECLARAÇÃO DAS VARIÁVEIS*/

let numero1;
let numero2;
let numero3;
let operador;
let resultado;

function testar(){

    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);
    numero3 = parseInt(document.querySelector('#numero3').value);
    operador = document.querySelector('#slcOperador').value;
    
    if(operador == 'or'){
        //AÇÃO DO OPERADOR LÓGICO OR
        if(numero1 == numero2 || numero1 == numero3 || numero2 == numero3){
            resultado = 'PELO MENOS DOIS DOS TRÊS NÚMEROS SÃO IGUAIS!';
        }else{
            resultado = 'OS NÚMEROS SÃO DIFERENTES';

        }
        
    }else{
        //AÇÃO DO OPERADOR LÓGICO AND
        if(numero1 == numero2 && numero1 && numero3 && numero2 == numero3){
            resultado = 'OS TRÊS NÚMEROS SÃO IGUAIS!';
        }else{
            resultado = 'OS TRÊS NÚMEROS NÃO SÃO DIFERENTES';
            
        }
    }
    document.querySelector('#resultado').innerHTML = resultado;

}

//FUNÇÃO DO OPERADOR OR

function operadorOR(){
    if(numero1 == numero2 || numero1 == numero3 || numero2 == numero3){
        resultado = 'PELO MENOS DOIS DOS TRÊS NÚMEROS SÃO IGUAIS!';
    }else{
        resultado = 'OS NÚMEROS SÃO DIFERENTES';

    }

}

//FUNÇÃO DO OPERADOR AND

function operadorAND(){
    if(numero1 == numero2 && numero1 && numero3 && numero2 == numero3){
        resultado = 'OS TRÊS NÚMEROS SÃO IGUAIS!';
    }else{
        resultado = 'OS TRÊS NÚMEROS NÃO SÃO DIFERENTES';
        
    }
}


