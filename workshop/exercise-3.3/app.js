let buttonCount = 20;

let buttonListNode = document.querySelector('#button-list');

let nonInterSectingBoxes = generateNonIntersectingBoxes(window.innerWidth, window.innerHeight, 50, 50, 20);


nonInterSectingBoxes.forEach(
    function (element)
    {
        let newButton = document.createElement('button');
        
        newButton.style.backgroundColor = 'red';
        newButton.style.position = 'absolute'; 

        newButton.style.top = element.top+"px";
        newButton.style.left = element.left+"px";
        newButton.style.width = element.width+"px";
        newButton.style.height = element.height+"px";

        newButton.addEventListener('click', changeColor);
        buttonListNode.appendChild(newButton);

    }

)

function changeColor(event)
{
    if (event.currentTarget.style.backgroundColor === 'red') {
        event.currentTarget.style.backgroundColor = 'green';
    } else if (event.currentTarget.style.backgroundColor === 'green') {
        event.currentTarget.style.backgroundColor = 'red';
    }
}




function generateNonIntersectingBoxes(screenWidth, screenHeight, boxWidth, boxHeight, boxesNum)
{
    let boxes = [];
    //seed with first box
    boxes.push({left: Math.random() * screenWidth, width: boxWidth, height:boxHeight, top: Math.random() * screenHeight})

    // make a random box, while that box intersects with any other boxes in the array, remake the object params in that box until it does not intersect with any boxes in the array

    for (i=0; i<boxesNum; i++)
    {
         let random_x = (Math.random() * screenWidth) - boxWidth;
         if (random_x < 0) { random_x = 0;}
         let random_y = (Math.random() * screenHeight) - boxHeight;
         if (random_y < 0) { random_y = 0;}

        let newBox = {left: random_x, width: boxWidth, height:boxHeight, top: random_y};
        
        // console.log(new_box);

        let newBoxOverlapsWithBoxesInArray = true;
        while ( newBoxOverlapsWithBoxesInArray === true ) {

                let boxesThatOverlap = boxes.filter(box => (isOverlapping(box, newBox)));

                if (boxesThatOverlap.length === 0)
                {
                    newBoxOverlapsWithBoxesInArray = false;
                }
                else {
                    random_x = (Math.random() * screenWidth) - boxWidth;
                     if (random_x < 0) { random_x = 0;}
                    random_y = (Math.random() * screenHeight) - boxHeight;
                     if (random_y < 0) { random_y = 0;}
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


