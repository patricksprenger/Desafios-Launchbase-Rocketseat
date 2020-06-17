//Programa para calcular o IMC de uma pessoa

const nome = 'Juliana' //Nome
const peso = 75.8 //Peso em kg;
const altura = 1.66 //Alturam em m;
const sexo = 'Feminino' //Genêro da pessoa;

const imc = peso / (altura * altura) //Cálculo do IMC

if (imc >= 30){
    console.log(`${nome}, você está acima do peso, seu IMC = ${imc.toFixed(2)}.`)
} else {
    console.log(`${nome}, você não está acima do peso, seu IMC = ${imc.toFixed(2)}.`)
}