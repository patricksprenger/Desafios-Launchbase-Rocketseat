const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita')

for (let receita of receitas) {
    receita.addEventListener("click", function(){
        
        const image = receita.querySelector("img").src
        const title = receita.querySelector("h3").innerText
        const by = receita.querySelector("p").innerText
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = image
        modalOverlay.querySelector("h3").innerText = title
        modalOverlay.querySelector("p").innerText = by
        
        
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})


