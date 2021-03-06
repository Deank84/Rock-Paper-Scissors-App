function init () {

var userScore = 0; 
var computerScore = 0; 
var userScore_span = document.getElementById("user-score"); 
var computerScore_span = document.getElementById("computer-score"); 
var scoreBoard_div = document.querySelector(".score-board"); 
var result_p = document.querySelector(".result > p"); 
var rock_div = document.getElementById("r"); 
var paper_div = document.getElementById("p"); 
var scissors_div = document.getElementById("s"); 
var start_div = document.getElementById("start-button"); 
var timeleft = 3; 

document.addEventListener('click', function() {
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0) {
            clearInterval(downloadTimer); 
            document.getElementById("start-button").innerHTML = "Go!"; 
        } else {
            document.getElementById("start-button").innerHTML = timeleft; 
        }
        timeleft -= 1; 
    }, 1000); 
})

function getComputerChoice () {
    const choices = ['r', 'p', 's']; 
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper"; 
    return "Scissors"; 
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userChoice); 
    userScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} you WIN!!!`; 
    userChoice_div.classList.add('green-glow'); 
    setTimeout(function() { userChoice_div.classList.remove('green-glow')},300); 
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userChoice); 
    computerScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} you lost:(`;
    userChoice_div.classList.add('red-glow'); 
    setTimeout(function() { userChoice_div.classList.remove('red-glow')},300); 
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userChoice); 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ties ${convertToWord(computerChoice)}${smallCompWord} its a draw!!!`; 
    userChoice_div.classList.add('gray-glow'); 
    setTimeout(function() { userChoice_div.classList.remove('gray-glow')},300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice); 
            break; 
        case "rp":
        case "ps": 
        case "sr": 
            lose(userChoice, computerChoice); 
            break; 
        case "rr": 
        case "pp": 
        case "ss": 
            draw(userChoice, computerChoice); 
            break; 
    }
}

function main() {

    start_div.addEventListener('click', function() {
      countDown("start-button");   
    })

    rock_div.addEventListener('click', function() {
        game("r"); 
    })
    
    paper_div.addEventListener('click', function() {
        game("p"); 
    })

    scissors_div.addEventListener('click', function() {
        game("s")
    })
}

main()

























































}