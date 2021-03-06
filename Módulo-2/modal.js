const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const cursoID = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cursoID}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximized')
    modalOverlay.querySelector("iframe").src =""

})

document.querySelector(".maximize-modal").addEventListener("click", function() {
    if (modal.classList.contains('maximized')){
        modal.classList.remove('maximized')
    } 
    else {
        modal.classList.add('maximized')
    }
})

