const styleSheetLink = document.createElement('link');
styleSheetLink.rel = "stylesheet";
styleSheetLink.href = "stylesheet.css";

// this is some styling for a few of the sections in the stylessheet

document.head.appendChild(styleSheetLink);

let buttonAmount = 20;

let buttonListElement = document.querySelector('#button-list');




for (i=0; i<buttonAmount; i++)
{

    let newButtonSection = document.createElement('div');
    newButtonSection.className = 'styledButtonSection';
    buttonListElement.appendChild(newButtonSection);
    

    
    let newButton = document.createElement('button');
    newButton.style.backgroundColor = 'red';
    newButton.style.width = '100%';

    newButtonSection.appendChild(newButton);
    
    newButton.addEventListener('click',
    
    function (event)
    {
        event.currentTarget.style.backgroundColor ='blue';
    })

    buttonListElement.style.display = 'flexbox';

}