let userScore=0;
let computerScore=0;
/*show  to the page/document/dom*/
/*both are dom variables,with the span tag */
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
/*rock,paper and scissor buttons*/
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s"); 
/*caching the DOM is completed. caching is storing something for future use. Instead of typing getelement by id,
query selector every time we need the var, it is recommended to use this approach , we store the values in a variable 
and we have that reference in that variable. convenient and efficient in performance.*/

/* what happens when we click on those individual buttons? 
when we click on rock, we need to take tant value, compare it against the computer's choice which will be a random 
choice b/w those three options. then we comapre those two and then check who wins. then just play the result back
in the DOM*/


/* step-3 create a function called main() and wrap all of the content inside it.*/
/* step-1 add some eventListeners to each button*/
/* step-2 creating a function called game instead of console.log("you clicked on rock/paper/sci'). if the user clicks on 
rock,then give the function a "r" and so on.*/

/* step-5 define a function called game() that is gonna take a user input i.e. userChoice. when you click on any of these
buttons take the value of them(r/p/s)and compare it against the computers choice and get the result back.
step-6 Now,to get a random computers choice we gonna add that in a separate function. running func in other functions.
possible values are r/p/s. now, to get a random element from the choices array, use  Math.random
Math is a built-in object in JS and random is a method that exists in that Math object.
but it'll always result in decimal numbers, so we round it down and make it a whole number, so for that use 
another method in the mat hobject called Math.floor it clearly gives us a random number between 0-3 viz. 0/1/2
then store it to a variable.

*/

function getComputerChoice()
{
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
/* step-10- convert choices into choice name*/
function convertToWord(letter)
{
   if (letter==="r") return "Rock";
   if (letter==="p") return "Paper";
   return "Scissor";


}

/* step 11, perform win functionality, then lose and draw*/

/* step 9--increase user score*/
 function win(userChoice,computerChoice)
 {  
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;   
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300);
 }

 /*setTimeout(function() { console.log("hello")}, 1000)*/

 function lose(userChoice,computerChoice) 
 {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost :(`;   
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300);

  }


function draw(userChoice,computerChoice) 
{
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a Draw ._.`;   
  userChoice_div.classList.add('blue-glow');
  setTimeout(function() { userChoice_div.classList.remove('blue-glow')}, 300);

}


function game(userChoice)
{
  const computerChoice = getComputerChoice(); /*step -7 gets random choice from computer*/
  switch (userChoice+computerChoice) {
    /*step -8 CASES WHEN USER WIN lose and draw..then separately create functions for winning losing and draw*/
    case "rs":
    case "pr":
    case "sp":
    win(userChoice,computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice,computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice,computerChoice);
    break;
  }
}


function main() 
{
  rock_div.addEventListener('click', function() {
    game("r");
 })

  paper_div.addEventListener('click', function() {
    game("p");
    ;
 })

  scissors_div.addEventListener('click', function() {
    game("s");
 })
}

main(); /* step-4 calling the main function*/