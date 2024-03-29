// Crie uma função chamada dobrar números , insira dois parametros que deverão ser dobrados. 

// Esta função será chamada ao abrir a página e mostrará um alerta com o resultado. Exemplo: “O dobro do número 10 é 20.”


function dobrar(num){
    let num2 = parseFloat(prompt('Digite um número para dobrá-lo'))
    let dobro = num2 * num;
    document.write(`O número que você digitou é: ${num2}<br>`)
    document.write(`E o dobro do seu número é: ${dobro}`)
}

let calc = dobrar(2)