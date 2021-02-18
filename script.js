const tombolClose = document.querySelector(".close");
const container = document.querySelector(".container");
const card = document.querySelector(".card");


tombolClose.addEventListener("click",function(){
    container.removeChild(card);
});

//ini cara gilang menghapus card
