
let buttonCount = 20;

let buttonList = document.querySelector('#button-list');


buttonList.style.display = 'flex';
buttonList.style.flexdirection = 'row';
buttonList.style.with = '100%';


function switchColor(event)
{
    console.log('something');
    console.log(event.currentTarget);

    if (event.currentTarget.style.backgroundColor === 'red')
    {
        event.currentTarget.style.backgroundColor = 'green';
    } else if (event.currentTarget.style.backgroundColor === 'green') {
        event.currentTarget.style.backgroundColor = 'red';

    }

}


for (i= 0; i < buttonCount; i++)
{
    let newButtonSection = document.createElement('div');
    newButtonSection.style.display = 'flex';
    newButtonSection.style.height = '60px';
    newButtonSection.style.width = '100%';
    buttonList.appendChild(newButtonSection)

    let newButton = document.createElement('button')
    newButton.style.width = '100%';
    newButton.style.backgroundColor = 'red';
    newButtonSection.appendChild(newButton);  

    newButton.addEventListener('click', switchColor);
}