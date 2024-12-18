// Used audio 
let waudio = new Audio('./assets/win.mp3')
let laudio = new Audio('./assets/lose.mp3')
let taudio = new Audio('./assets/tie.mp3')
let bgaudio = new Audio('./assets/ground-music.mp3')
let saudio = new Audio('./assets/button.mp3')
let sound = document.createElement('img');

// Needed Eelements 
let about = document.getElementById('About');
let game = document.getElementById('Games')
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let result = document.createElement('div')
let buttons = document.createElement('span')
let rock = document.createElement('button')
let paper = document.createElement('button')
let scissor = document.createElement('button')
const msgbox = document.createElement('div')
let overbox = document.createElement('div')
let overlay = document.createElement('div')
let overlaymsg = document.createElement('div')
let start = document.createElement('button')
let reset = document.createElement('button')

let firstdiv = about.firstElementChild;

let allChildren = about.querySelectorAll('*')
let msgbox2 = msgbox.cloneNode(true)
let seconddiv = allChildren[3]

// add Element on location

game.append(overlay, div1, sound)
div1.append(div2)
div2.append(result, buttons)
buttons.append(rock, paper, scissor)
overlay.appendChild(overbox)
overbox.appendChild(start)

// Provide id 
msgbox.id = "box"
result.id = "result"
buttons.id = "rpc"
overbox.id = "overbox"
overlaymsg.id = "msg";
overlay.id = "overlay"
start.id = "start"
sound.id = 'music'

rock.innerHTML = "Rock"
paper.innerHTML = "Paper"
scissor.innerHTML = "Scissor"
start.textContent = "Start"
sound.src = "./assets/volume.png"


// Game Code Started
let rand; // Random Number variable

let count = 1; // Count Rounds
result.innerHTML = `Round ${count}`

let Won = 0;
let Lose = 0;
let Tie = 0;

// Elements that to be click
rock.addEventListener("click", () => {saudio.currentTime = 0; saudio.play();updateResult("rock");});
paper.addEventListener("click", () => {saudio.currentTime = 0; saudio.play(); updateResult("paper");});
scissor.addEventListener("click", () => {saudio.currentTime = 0; saudio.play(); updateResult("scissor");});
start.addEventListener('click',() => setTimeout(overlay.remove(), sound.style.cssText = "opacity:1", bgaudio.play(), 1000))


function updateResult(choice) {
    rand = Math.floor(Math.random() * 3); // Random computer choice
    if (choice === "rock") {
        if (rand === 0) { Tie++; console.log("tie"); }
        else if (rand === 1) { Lose++; console.log("lose"); }
        else if (rand === 2) { Won++; console.log("won"); }
    } else if (choice === "paper") {
        if (rand === 0) { Won++; console.log("won"); }
        else if (rand === 1) { Tie++; console.log("tie"); }
        else if (rand === 2) { Lose++; console.log("lose"); }
    } else if (choice === "scissor") {
        if (rand === 0) { Lose++; console.log("lose"); }
        else if (rand === 1) { Won++; console.log("won"); }
        else if (rand === 2) { Tie++; console.log("tie"); }
    }
    
    
    get(); // Update display
    
    setTimeout(replace, 1000); // Replace logic
    console.log(Won);
    console.log(Lose);
    console.log(Tie);
}

// Result Function

function get() {
    if (rand == 0) { return result.innerHTML = "Rock" }
    else if (rand == 1) { return result.innerHTML = "Paper" }
    else if (rand == 2) { return result.innerHTML = "Scissor" }
    
}

// Overlayer On The Game

function replace() {
    if (count>=3) {
        count = 1;
        // let div3 = document.createElement('div')
        if(Won>Lose>Tie || Won>Tie>Lose){overlaymsg.textContent = `Match ${"Won"}`; waudio.play();}
        else if(Lose>Tie>Won || Lose>Won>Tie){overlaymsg.textContent = `Match ${"Lose"}`; laudio.play();}
        else if(Tie>Won>Lose || Tie>Lose>Won){overlaymsg.textContent = `Match ${"Tie"}`; taudio.play();}
        else{overlaymsg.textContent = "Match Tie"; taudio.play();}
        overlay = document.createElement('div')
        overbox = document.createElement('div')

        overlay.id = "overlay"
        overbox.id = "overbox"
        game.appendChild(overlay)
        overlay.appendChild(overbox)
        
        reset.innerHTML = "Reset"
        // overlay.appendChild(div3)
        overbox.append(overlaymsg, reset)
        // overlay.appendChild()
        reset.addEventListener('click',()=>{
            overlay.remove()
            start.remove()
            Won = 0; Lose = 0; Tie = 0;
        })
    }else{
        count++;
    }
    result.innerHTML = `Round ${count}`
}

sound.addEventListener('click',()=>{
    if (sound.src.includes('volume.png')) {
        // sound.style.cssText = 'background-color:white; color:white'
        sound.src = './assets/mute.png';
        bgaudio.pause();
    }else{
        // sound.style.cssText = 'background-color:white; color:white'
        sound.src = './assets/volume.png';
        bgaudio.loop = true;
        bgaudio.currentTime = 0;
        bgaudio.play();
    }
})
