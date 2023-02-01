const startBtn = document.querySelector(".start-btn")
const newBtn = document.querySelector(".new-btn")
const statusInfo = document.querySelector(".status-info")
const cards = document.querySelector(".cards")
const sum = document.querySelector(".sum")
const acceptBtn = document.querySelector(".accept-btn")
const nameMoneyStatus = document.querySelector(".name")
const name = document.querySelector("input")
const intro = document.querySelector(".rules")
let blackJack = false
let firstCard = 0
let secondCard = 0
let totalArr = []
let totalNum = 0
let newCard = 0
let money = 120
let newName = ''

function generateRandomNumber(){
    return Math.floor(Math.random() * 13) + 1
}

function startGame(){
    newBtn.addEventListener("click", drawNewCard)
    totalArr = []
    cards.textContent = `cards: `
    firstCard = generateRandomNumber()
    secondCard = generateRandomNumber()
    cards.textContent += `${firstCard} ${secondCard} `
    totalArr.push(firstCard)
    totalArr.push(secondCard)
    totalNum = totalArr.reduce((a, b) => a + b)
    sum.textContent = `sum: ${totalNum} `
    money = money - 10
    nameMoneyStatus.textContent = `${newName}: ${money}`
    confirmBlackJack()
    endGame()
}

function drawNewCard(){
    newCard = generateRandomNumber()
    cards.textContent += `${newCard} `
    totalArr.push(newCard)
    totalNum = totalArr.reduce((a, b) => a + b)
    sum.textContent = `sum: ${totalNum} `
    confirmBlackJack()
    endGame()
}

startBtn.addEventListener("click", startGame)

acceptBtn.addEventListener("click", () => {
    if(!name.value){
        newName = "Player1"
    }else{
        newName = name.value
    }
    nameMoneyStatus.textContent = `${newName}: $200`
    intro.style.display = "none"
})

function confirmBlackJack(){
    if(totalNum <= 20){
        statusInfo.textContent = `Do you want to draw a new card`
    }else if(totalNum > 21){
        statusInfo.textContent = "you're out of the game"
        newBtn.removeEventListener("click", drawNewCard)
        money = money - 20
        nameMoneyStatus.textContent = `${newName}: ${money}`
    }else{
        statusInfo.textContent = "you've got blackjack"
        newBtn.removeEventListener("click", drawNewCard)
        money = money + 30
        nameMoneyStatus.textContent = `${newName}: ${money}`
    }
}

function endGame(){
    if(money <= 20){
        statusInfo.textContent = "Game over! you lose"
        newBtn.removeEventListener("click", drawNewCard)
        startBtn.removeEventListener("click", startGame)
    }
}