// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let body = document.querySelector('body');
body.innerText ="click here";

let hasUserClicked = false;
let timeExpired = false;
let winStatement = 'You have clicked within one second!  Winner';

let loseStatement = 'You have NOT clicked within one second!  Loser!';

let rewardStatement = document.createElement('p');
rewardStatement.style.textAlign = 'center';
rewardStatement.id = 'rewardStatement';
document.body.appendChild(rewardStatement);


let rankingInterval = setTimeout(
    function() {

        if (hasUserClicked == false) {
            rewardStatement.style.color = 'red';
            rewardStatement.innerText = loseStatement;
        }

        timeExpired = true;
    }, 
1000);


body.addEventListener('click', function (event) {

    if (timeExpired === false) {
        hasUserClicked = true;
        rewardStatement.style.color = 'green';
        rewardStatement.innerText = winStatement;
    }
});
  