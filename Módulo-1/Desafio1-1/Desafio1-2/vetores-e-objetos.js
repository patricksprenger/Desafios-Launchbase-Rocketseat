//desafio utilizando um pouco de manipulação de arrays e objetos


const dados = {
    programador: [
        {
            nome: "Patrick",
            idade: 22,
            tecnologias: [
                { nome: "C++", especialidade: "Desktop" },
                { nome: "Phyton", especialidade: "Data Science" },
                { nome: "JavaScript", especialidade: "Web/Mobile" }

            ]   
        }
    ]
}

console.log(`O usuário ${dados.programador[0].nome} tem ${dados.programador[0].idade} anos e usa a tecnologia ${dados.programador[0].tecnologias[0].nome} com especialidade em ${dados.programador[0].tecnologias[0].especialidade}.`)