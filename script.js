let about = document.getElementById('About');
const msgbox = document.createElement('div')
let game = document.getElementById('Games')
// console.log(game);


let firstdiv = about.firstElementChild;
msgbox.id = "box"
// firstdiv.appendChild(msgbox)

let allChildren = about.querySelectorAll('*')
let msgbox2 = msgbox.cloneNode(true)
let seconddiv = allChildren[3]
// seconddiv.appendChild(msgbox2)

let div1 = document.createElement('div')
let div2 = document.createElement('div')
let overlay = document.createElement('div')
let result = document.createElement('div')
let buttons = document.createElement('span')
let rock = document.createElement('button')
let paper = document.createElement('button')
let scissor = document.createElement('button')

rock.innerHTML = "Rock"
paper.innerHTML = "Paper"
scissor.innerHTML = "Scissor"

game.append(div1)
div1.append(div2)
div2.append(result, buttons)
buttons.append(rock, paper, scissor)

let count = 1;
result.innerHTML = `Round ${count}`

function replace() {
    if (count>=3) {
        count = 1;
    }else{
        count++;
    }
    result.innerHTML = `Round ${count}`
}
// let rand = Math.floor(Math.random() * 3);
let rand;

function ret() {
    if (rand == 0) { return result.innerHTML = "Rock" }
    else if (rand == 1) { return result.innerHTML = "Paper" }
    else if (rand == 2) { return result.innerHTML = "Scissor" }
}


rock.addEventListener("click", () => {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) { console.log("Match Tie") }
    else if (rand === 1) { console.log("You Lose") }
    else if (rand === 2) { console.log("You Won") };
    ret();
    setTimeout(replace, 3000)
});
paper.addEventListener("click", () => {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) { console.log("You Won") }
    else if (rand === 1) { console.log("Match Tie") }
    else if (rand === 2) { console.log("You Lose") };
    ret();
    setTimeout(replace, 3000)
});
scissor.addEventListener("click", () => {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) { console.log("You Lose") }
    else if (rand === 1) { console.log("You Won") }
    else if (rand === 2) { console.log("Match Tie") };
    ret();
    setTimeout(replace, 3000)
});
