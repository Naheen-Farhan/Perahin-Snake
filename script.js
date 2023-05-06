const playBoard = document.querySelector(".playboard")
const scoreElement = document.querySelector(".score")
const highScoreElement = document.querySelector(".high-score")
const controls = document.querySelector(".controls i")

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;


let highScore = localStorage.getItem("high-score")
highScoreElement.innerText = `High Score: ${highScore}`;

const updateFoodPosition = () =>{
    foodX = Math.floor(Math.random() * 30) + 1
    foodY = Math.floor(Math.random() * 30) + 1
}

const handleGameOver = () =>{
    clearInterval(setIntervalId);
    alert("Game Over! Now go to his coaching to continue");
    location.reload();
}

const changeDirection = e => {
    if (e.key === "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY =-1;
    }

    
}
