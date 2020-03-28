const modalOverlay = document.querySelector('.modal-overlay');

const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src=`https://www.youtube.com/embed/${videoId}`;


    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src="";
    
})


// Porfolio Scripts


const portfolio = document.querySelectorAll('.myProjectBox');

for (let myProjectBox of portfolio){
    myProjectBox.addEventListener("click", function(){
        const projectId = myProjectBox.getAttribute("");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src="";
        
    })
}

document.querySelector('.close-modal1').addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src="";
    
})

