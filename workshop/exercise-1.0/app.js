// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------


let body = document.querySelector('body');
body.innerText ="click here";
body.addEventListener('click', function (event) {
    console.log(event);

    const userClickText = document.createElement('p');
    userClickText.innerText = 'you have clicked!';
    userClickText.style.textAlign = 'center';
    document.body.appendChild(userClickText);

  });
  

