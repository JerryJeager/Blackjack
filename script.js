const startBtn = document.querySelector(".start-btn")
const newBtn = document.querySelector(".new-btn")
const statusInfo = document.querySelector(".status-info")
const cards = document.querySelector(".cards")
const sum = document.querySelector(".sum")
let blackJack = false
let firstCard = 0
let secondCard = 0
let totalArr = []
let totalNum = 0
let newCard = 0

function generateRandomNumber(){
    return Math.floor(Math.random() * 13) + 1
}


startBtn.addEventListener("click", () => {
    firstCard = generateRandomNumber()
    secondCard = generateRandomNumber()
    cards.textContent += `${firstCard} ${secondCard} `
    totalArr.push(firstCard)
    totalArr.push(secondCard)
    totalNum = totalArr.reduce((a, b) => a + b)
    sum.textContent = `sum: ${totalNum} `
    confirmBlackJack()
})

newBtn.addEventListener("click", () => {
    newCard = generateRandomNumber()
    cards.textContent += `${newCard} `
    totalArr.push(newCard)
    totalNum = totalArr.reduce((a, b) => a + b)
    sum.textContent = `sum: ${totalNum} `
    confirmBlackJack()
})

function confirmBlackJack(){
    if(totalNum <= 20){
        statusInfo.textContent = `Do you want to draw a new card`
    }else if(totalNum > 21){
        statusInfo.textContent = "you're out of the game"
    }else{
        statusInfo.textContent = "you've got blackjack"
    }
}

console.log(generateRandomNumber())