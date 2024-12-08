let about = document.getElementById('About');
const msgbox = document.createElement('div')
let game = document.getElementById('Games')
console.log(game);


let firstdiv = about.firstElementChild;
msgbox.id = "box"
// firstdiv.appendChild(msgbox)

let allChildren = about.querySelectorAll('*')
let msgbox2 = msgbox.cloneNode(true)
let seconddiv = allChildren[3]
// seconddiv.appendChild(msgbox2)

let div = document.createElement('div')
let result = document.createElement('div')
let buttons = document.createElement('span')
let rock = document.createElement('button')
let paper = document.createElement('button')
let scissor = document.createElement('button')


result.innerHTML = "My Game"

rock.innerHTML = "Rock"
paper.innerHTML = "Paper"
scissor.innerHTML = "Scissor"

game.append(div)
div.append(result, buttons)
buttons.append(rock, paper, scissor)

rock("onclick", () =>{
    
});