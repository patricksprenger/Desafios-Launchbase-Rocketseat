//Programa para verificar possibilidade de aposentadoria

const nome = 'Patrick' // Nome;
const idade = 50 // Idade;
const sexo = 'M' // Genero;
const contribuicao = 36 // Tempo de contribuição ao INSS em anos;

if (sexo === 'M'){
    if (contribuicao >= 35 && contribuicao+idade >= 95){
        console.log(`${nome}, você pode se aposentar!`)
    }
    else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    if (contribuicao >= 30 && contribuicao+idade >= 85){
        console.log(`${nome}, você pode se aposentar!`)
    }
    else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}