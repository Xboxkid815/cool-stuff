let number = Math.floor(Math.random()*8000)+1000
document.getElementById("number").textContent= `${number} Trips Booked!`

setInterval(function(){
    if (Math.random() < 0.1){
        number += Math.ceil(Math.random() * 4)
document.getElementById("number").textContent= `${number} Trips Booked!`
    }
},100)