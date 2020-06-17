const usuarios = [
    {nome: "Patrick", tecnologias: ["HTML", " CSS"]},
    {nome: "Juliana", tecnologias: ["JavaScript", " CSS"]},
    {nome: "Joao", tecnologias: ["HTML", " Node.js"]},
    {nome: "Chico", tecnologias: ["JS", " C#", " C"]}
]

for (i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome}, trabalha com ${usuarios[i].tecnologias}`)
}