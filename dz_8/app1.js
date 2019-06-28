"use strict";
let buttons = document.querySelectorAll('button');
//console.log(buttons);

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handClick(event);
    })
});


function handClick(clickedButtonEvent) {
    //const productID = clickedButtonEvent.target.getAttribute('id');
    //console.log(productID);
    
    const productNode = clickedButtonEvent.target.parentNode;
    const product = {
        id:clickedButtonEvent.target.getAttribute('id'),
        name:productNode.querySelector('.productName').innerText,
        cost:productNode.querySelector('.cost').innerText,
    };
    console.log(product);
    basket.addProduct({ id: product.id, name: product.name, cost: product.cost })
    //renderProductInBasket();
}

let basket = {
    products: {},
    
    addProduct(product){
        this.renderProductInBasket(product);
        //this.addProductInProduct(product);
    },
    
    //Метод добавляет текст в таблицу - корзину
    renderProductInBasket(product) {
       /* let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        } */
        let productRow = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.cost}</td>
                <td>${product.count}</td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },
    
    
}


