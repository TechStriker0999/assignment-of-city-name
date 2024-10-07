// function call() {
//     let userInput = document.querySelector('input');
//     let show = document.querySelector('cityname')

//     if (userInput === "lahore" ){
//         show.innerHTML = "city of donkey eaters";
//     }
//     else{
//         show.innerHTML = "WellCome"
//     }
// }


function call() {
    let userInput = document.querySelector('.input').value.toLowerCase();
    let show = document.querySelector('.cityname');

    if (userInput === "karachi"){
        show.innerHTML = "welcome to city of lites";
    }

    else{show.innerHTML = "welcome";}



}