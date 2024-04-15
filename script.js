
//Initialisation
let gameSeq = []
let userSeq = []

let btns = ["pink", "cyan", "orange", "purple"];

let h2 = document.querySelector("h2")   // accessing h2 to change it whenever required

let level = 0;
let start = false;

// Step-1 begins (Start the game on pressing any key)

document.addEventListener('keypress', function(){
    if (start == false){
        console.log('game started');
        start = true;
    }
    levelUp()  //calling levelUp function as soon as any key is pressed
})



// Step-2 begins (Random button flash (jab computer button ko flash krwata hai to use white flash dena) and level up)

function gameFlash(button){           // when call this function, flash class sets to the element (btn) for 250ms.
    button.classList.add("gameFlash");
    setTimeout(function(){
        button.classList.remove("gameFlash")},150)
}

function levelUp(){    //this function does 3 works; 1.levelup and 2.select (flash) a random color and 3.Update innertext of h2 to level ki value
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btns[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(`Generated pattern [${gameSeq}]`)

    gameFlash(randomButton)

} // yahan tk comp is flashing random box on pressing any key on keyboard.


// Step-3 (Add event listeners to buttons so that it detects ki user ne konse button ko press kiya hai (jab user button ko press krta hai to use green flash dena))

function userFlash(){           // when call this function, flash class sets to the element (btn) for 250ms.
    const btn = this
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")},150);

        userSeq.push(btn.id)
        console.log(`my pattern [${userSeq}]`);

        checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box");
for (btn of allBtns){
    btn.addEventListener("click", userFlash)

}

function checkSeq(idx){
    idx = level - 1;
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.index == gameSeq.idx){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! <br> Your Score is <b>${level}</b> <br> Press any key to Start again.`;
        // reset();
    }

}

// function reset(){
//     start = false;
//     gameSeq = [];
//     level = 0;
// }




