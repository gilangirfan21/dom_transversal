// const tombolClose = document.querySelector(".close");
// const card = document.querySelector(".card");


// tombolClose.addEventListener("click",function(){
//     card.style.display = "none";
// });


const close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");


//ini menggunakan for
// for (let i = 0 ; i < close.length ; i++){
//     close[i].addEventListener("click",function(e){
//         // card[i].style.display = "none";
//         // close[i].parentElement.style.display = "none"; //dom transversal
//         e.target.parentElement.style.display = "none"; //memanfaatkan e (informasi event yang sedang terjadi)
//     });
// }


//ini menggunakan forEach
close.forEach(function(el){
    el.addEventListener("click",function(e){
        e.target.parentElement.style.display = "none";
    });
});