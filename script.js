// const tombolClose = document.querySelector(".close");
// const card = document.querySelector(".card");


// tombolClose.addEventListener("click",function(){
//     card.style.display = "none";
// });


const close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

for (let i = 0 ; i < close.length ; i++){
    close[i].addEventListener("click",function(){
        // card[i].style.display = "none";
        close[i].parentElement.style.display = "none"; //dom transversal
    });
}