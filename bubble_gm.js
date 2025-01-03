var timer = 60;
var score = 0;
var changeHitt = 0; 

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function changeHit(){
    changeHitt = Math.floor(Math.random() * 10);
    document.querySelector("#countHit").textContent = changeHitt;
}

function makeBubble(){
    var calc = "";

    for (let i = 1; i <= 160; i++) {
        var ran = Math.floor(Math.random() * 10);
        var randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        calc += `<div class="bubble" style="background-color: ${randomColor};">${ran}</div>`;
    }
    document.querySelector(".bottom-box").innerHTML = calc;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#countTimer").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".bottom-box").innerHTML = `<h2>Game Over. <br>Your Score is ${score}</h2>`;
        }
    }, 1000);
}

document.querySelector(".bottom-box").addEventListener("click", function(dets){
    var clickedNumber = (Number(dets.target.textContent));
    if(clickedNumber === changeHitt){
        increaseScore();
        makeBubble();
        changeHit();
    }
});

makeBubble();
runTimer();
changeHit();
