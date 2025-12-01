let playing=false;
let timeremaining;
let action;
let correctAnswer;
//for starting a game after clicking
document.getElementById("startreset").onclick=function()
{
    if(playing==true) //if game is already running
    {
        location.reload(); //reload the page to start a new game
    }
    else //if game is not running
    {
        playing=true; //set playing to true
        document.getElementById("startreset").innerHTML="RESET GAME"; //change button text
        document.getElementById("scorevalue").innerHTML=0; //reset score to 0
        show("timeremaining"); //show time remaining box
        timeremaining=60; //set time remaining to 60 seconds
        document.getElementById("trvalue").innerHTML=timeremaining; //show
        generateQA(); // generate the first question
        startCountdown(); // <-- Add this line to start the timer
    }
}
function show(id)
{
    document.getElementById(id).style.display="block";
}
function hide(id)
{
    document.getElementById(id).style.display="none"; // <-- Fix: use "none" to hide
}
function startCountdown()
{
    action=setInterval(function()
    {
        timeremaining-=1; //decrease time remaining by 1
        document.getElementById("trvalue").innerHTML=timeremaining; //update time remaining display
        if(timeremaining==0) //if time is up
        {
            stopCountdown();
            show("gameover") //stop the countdown
            document.getElementById("gameover").innerHTML="<p>Game Over</p><p>Your score is: " + document.getElementById("scorevalue").innerHTML + "</p>"; //show game over message
            hide("timeremaining"); //hide time remaining box
            hide("correct"); //hide correct message
            hide("wrong"); //hide try again message
            playing=false; //set playing to false
            document.getElementById("startreset").innerHTML="START GAME"; //change button
            document.getElementById("startreset").innerHTML="reset game";
            showCountdown();
            generateQA();
        }
    },1000); //run every second
}
function stopCountdown()
{
    clearInterval(action);

}
function generateQA()
{
    let x=1+Math.floor(9*Math.random());
    let y=1+Math.floor(9*Math.random());
    correctAnswer=x*y;
    document.getElementById("question").innerHTML=x + "x" + y;
    let correctPosition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer; //fill one box with correct answer
    var answers=[correctAnswer]; //array to store answers
    for(i=1;i<5;i++) //fill other boxes with wrong answers
    {
        if(i!=correctPosition) //if not the correct position
        {
            let wrongAnswer;
            do
            {
                wrongAnswer=(1+Math.floor(9*Math.random()))*(1+Math.floor(9*Math.random())); //generate a wrong answer
            }
            while(answers.indexOf(wrongAnswer)>-1) //make sure the same answer is not repeated
            document.getElementById("box"+i).innerHTML=wrongAnswer; //fill box with wrong answer
            answers.push(wrongAnswer);
        }
    }
}
for(let i=1; i<=4; i++) {
    document.getElementById("box"+i).onclick = function() {
        if(playing) {
            if(this.innerHTML == correctAnswer) {
                // Correct answer
                document.getElementById("scorevalue").innerHTML = 
                    parseInt(document.getElementById("scorevalue").innerHTML) + 1;
                generateQA();
            } else {
                // Wrong answer: Game Over
                stopCountdown();
                show("gameover");
                document.getElementById("gameover").innerHTML = 
                    "<p>Game Over</p><p>Your score is: " + document.getElementById("scorevalue").innerHTML + "</p>";
                hide("timeremaining");
                hide("correct");
                hide("wrong");
                playing = false;
                document.getElementById("startreset").innerHTML = "START GAME";
            }
        }
    }
}