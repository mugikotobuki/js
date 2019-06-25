"use strong";
let buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handClick(event);
    })
});


function handClick(clickedButtonEvent) {
    const productID = clickedButtonEvent.target.getAttribute('id');
    console.log(productID);
    
    const cardNode = clickedButtonEvent.target.parentNode;
    const card = {
        id:productID,
        name:cardNode.querySelector('.productName'),
        cost:cardNode.querySelector('.cost')
    };
    
    let td = document.getElementsByTagName('td')[0];
    td.innerText=productID;
    
    //пока не реализовала
    
}

