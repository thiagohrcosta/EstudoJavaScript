const modalOverlay = document.querySelector('.modal-overlay');

const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')

    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active");
})

modalOverlay.querySelector("iframe").src="https://www.youtube.com/embed/lFpcZKBUiSY"

