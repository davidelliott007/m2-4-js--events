// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)



let userHasClicked = false;

let randomTimeToClickIn =     Math.random() * (5 - 3) + 3;
randomTimeToClickIn = Math.floor(randomTimeToClickIn)
console.log(randomTimeToClickIn)

let remaingSeconds = randomTimeToClickIn;


let warningStatement = document.querySelector('.time-text');
let timeSpan = document.querySelector('#time');
const resultP = document.querySelector('.result');


let body = document.querySelector('body');

timeSpan.innerText = remaingSeconds;

let noticeInterval = setInterval( 
    function (){
        timeSpan.innerText = remaingSeconds.toFixed(1);

        if (remaingSeconds <= 0) 
        {
            if (userHasClicked === false) {
                resultP.innerText = 'Countdown done- you are dead!';
            }
            body.removeChild(warningStatement);
            clearInterval(noticeInterval);
        }
        
        remaingSeconds = remaingSeconds - 0.1;

    }
,100);

function CelebrateClicked()
{
    userHasClicked = true;
    resultP.innerText = 'You clicked in time!';
    body.removeChild(warningStatement);
    clearInterval(noticeInterval);
}

body.addEventListener('click', 
CelebrateClicked);


