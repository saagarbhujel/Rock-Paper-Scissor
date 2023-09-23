const computerChoice = document.querySelector('#computer-choice')
const userChoice  = document.querySelector('#user-choice')
let result = document.querySelector('#result')
const rock = document.querySelector('#rock')
const paper= document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const button = document.querySelectorAll('button')
let displayResult = ""
let user;
let res;

function getResult(){
    if(user === "rock" && res === "rock"){
        displayResult = "you draw"
        
    }
    if(user === "rock" && res === "paper"){
        displayResult = "you lost"
        
    }
    if(user === "rock" && res === "scissor"){
        displayResult = "you win"
        
    }
    if(user === "paper" && res === "rock"){
        displayResult = "you win"
        
    }
    if(user === "paper" && res === "paper"){
        displayResult = "you draw"
        
    }
    if(user === "paper" && res === "scissor"){
        displayResult = "you lost"
        
    }
    if(user === "scissor" && res === "rock"){
        displayResult = "you lost"
        
    }

    if(user === "scissor" && res === "paper"){
        displayResult = "you win"
        
    }
    if(user === "scissor" && res === "scissor"){
        displayResult = "you draw"
        
    }
    
   
    
    result.innerText = displayResult 
    
    
}

function generateComputerChoice(){
    let choices =["rock","paper","scissor"]
    let index = Math.floor(Math.random() * 3)
    res = choices[index]
    computerChoice.innerHTML = res
}


button.forEach(element => element.addEventListener('click', (e) => {
    user = e.target.id
    userChoice.textContent = user
    console.log(user)
    generateComputerChoice()
    getResult()
   

}))






