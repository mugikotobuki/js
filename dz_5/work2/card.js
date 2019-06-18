let buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handClick(event);
    })
});


function handClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    //console.log(cardNode);
    
    const card = {
        all:cardNode,
        name:cardNode.querySelector('.productName'),
        img:cardNode.querySelector('img'),
        button:cardNode.querySelector('button')
    };
    //console.log(card);
    const textOnButton = card.button.innerText;
    //console.log(textOnButton);
    if (textOnButton === 'подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'отмена') {
        hideMoreText(card);
    }
}

function showMoreText(card) {
    card.img.style.display='none';
    card.button.innerText='отмена';
    card.all.querySelector('.desc').style.display='block';
    //card.name.insertAdjacentHTML('beforeend', '<div class="desc">text text text</div>');
}

function hideMoreText(card) {
    card.img.style.display='block';
    card.button.innerText='подробнее';
    card.all.querySelector('.desc').style.display='none';
}

/* пока не работает совместно с функцией
//массив с объектами с подробным текстом
let moreText = [
        {
            text:'lorem aaa aaaa aaaa aaaa',
            name:'product1'
        },
        {
            text:'lorem bbbbbb bbbbb bbbb bbb',
            name:'product2'
        },
        {
            text:'lorem ccccc cccc ccccc ccc',
            name:'product3'
        },
    ];
console.log(moreText[0].text); //выводит правильно
*/