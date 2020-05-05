let buttonCount = 5;

let secondsToComplete = 5;

let timeRemaining = 0;

let buttonsClicked = 0;


let buttonListNode = document.querySelector('#button-list');

let gameInstructionsDiv = document.querySelector('.game-instructions-div');

let startButton = document.querySelector('#start-button');

let gameInstructions = document.createElement('div');


let nonInterSectingBoxes = generateNonIntersectingBoxes(window.innerWidth, window.innerHeight, 50, 50, buttonCount);




gameInstructions.innerText = `Click all the buttons within the next ${secondsToComplete} seconds`;;



startButton.addEventListener('click',
    function (event) {
        createButtons();
        gameInstructionsDiv.appendChild(gameInstructions);
        event.currentTarget.style.display = 'none';
        beginCountDown();
}   
)

function beginCountDown()
{
    timeRemaining= secondsToComplete;
    
    var updateTimer = setInterval(
        function ()
        {

            if (timeRemaining > 0) {
                timeRemaining = timeRemaining - 1;
                gameInstructions.innerText = `Click all the buttons within the next ${timeRemaining} seconds`;;
            }

            if (timeRemaining <= 0) {
                if (buttonsClicked < buttonCount) {
                    gameInstructions.innerText = "Game over man!";
                }
            }

            if (buttonsClicked >= buttonCount && timeRemaining > 0) {
                gameInstructions.style.color = 'green';
                gameInstructions.innerText = "You win!";
                clearInterval(updateTimer);
            }

            if (buttonsClicked < buttonCount &&  timeRemaining < 4) {
                gameInstructions.style.color = 'red';
            }
 

        }, 1000);
        
}




function createButtons()
{
    nonInterSectingBoxes.forEach(
        function (element) {
            let newButton = document.createElement('button');
            
            newButton.style.backgroundColor = 'red';
            newButton.style.position = 'absolute'; 
    
            newButton.style.top = element.top+"px";
            newButton.style.left = element.left+"px";
            newButton.style.width = element.width+"px";
            newButton.style.height = element.height+"px";

            newButton.style.outline = 'none';


            newButton.className = 'newButton';

            newButton.style.borderRadius = '15px';
    
            newButton.addEventListener('click', changeColorAndCountButton);
            buttonListNode.appendChild(newButton);
    
        }
    
    )
    
}



function changeColorAndCountButton(event)
{
    if (event.currentTarget.style.backgroundColor === 'red') {
        event.currentTarget.style.backgroundColor = 'green';
        buttonsClicked++;
        if (buttonsClicked >= buttonCount && timeRemaining > 0) {
            gameInstructions.style.color = 'green';

            gameInstructions.innerText = "You win!";

        }   


    }
}




function generateNonIntersectingBoxes(screenWidth, screenHeight, boxWidth, boxHeight, boxesNum)
{
    let boxes = [];
    //seed with first box
    boxes.push({left: Math.random() * screenWidth, width: boxWidth, height:boxHeight, top: Math.random() * screenHeight})

    // make a random box, if that box intersects with any other boxes 
    //in the array, remake the object params in that box until it does not 
    //intersect with any boxes in the array

    for (i=0; i<(boxesNum-1); i++) {
         let random_x = (Math.random() * screenWidth) - boxWidth;
         // don't want the boces to generate off-screen
         if (random_x < 0) { random_x = 0;}
         let random_y = (Math.random() * screenHeight) - boxHeight;
         if (random_y < 50) { random_y = 50;}

        let newBox = {left: random_x, width: boxWidth, height:boxHeight, top: random_y};
        
        // console.log(new_box);

        let newBoxOverlapsWithBoxesInArray = true;
        
        while ( newBoxOverlapsWithBoxesInArray === true ) {

                // find out if any boxes in the existing array overlap with the random newBox we just made
                let boxesThatOverlap = boxes.filter(box => (isOverlapping(box, newBox)));

                if (boxesThatOverlap.length === 0) {
                    newBoxOverlapsWithBoxesInArray = false;
                }
                else {
                    random_x = (Math.random() * screenWidth) - boxWidth;
                     if (random_x < 0) { random_x = 0;}
                    random_y = (Math.random() * screenHeight) - boxHeight;
                     if (random_y < 50) { random_y = 50;}

                    newBox.left = random_x;
                    newBox.width = boxWidth;
                    newBox.height = boxHeight;
                    newBox.top = random_y;
                }
            }

            boxes.push(newBox);
    }
    // console.log(boxes);
    return boxes;
}


  function isOverlapping(element_1, element_2)
  {
        if (element_1.left < element_2.left + element_2.width  && element_1.left + element_1.width  > element_2.left && element_1.top < element_2.top + element_2.height && element_1.top + element_1.height > element_2.top) {
            return true;
        }

  }


