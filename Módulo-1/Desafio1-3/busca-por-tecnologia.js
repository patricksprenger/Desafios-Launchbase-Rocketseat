const usuarios = [
    {nome: "Patrick", tecnologias: ["HTML", "CSS"]},
    {nome: "Juliana", tecnologias: ["JavaScript", "CSS"]},
    {nome: "Joao", tecnologias: ["HTML", "Node.js"]},
    {nome: "Chico", tecnologias: ["JS", "C#", "C"]},
    {nome: "Jonas", tecnologias: ["CSS", "JS"]}
]

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias){
        if (tecnologia === "CSS" ) return true }
        
        
            return false
        }

for (let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}





