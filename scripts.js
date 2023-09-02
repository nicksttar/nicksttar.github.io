const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
var span_item = document.querySelectorAll('.quantity');

let tg = window.Telegram.WebApp;
tg.expand();

// Объект для хранения информации о товарах и их количестве
const products = {
    'Бургер • 50₴': { price: 50, quantity: 0 },
    'Риба • 129₴': { price: 129, quantity: 0 },
    'Краб • 450.70₴': { price: 450.70, quantity: 0 },
    "М'ясо • 526.20₴": { price: 526.20, quantity: 0 },

    'Картопля • 11.60₴': { price: 11.60, quantity: 0 },
    'Піцца • 345₴': { price: 345, quantity: 0 },
    'Яйця • 4.60₴': { price: 4.60, quantity: 0 },
    'Хліб • 45.50₴': { price: 45.50, quantity: 0 },
};

// Функция для обновления информации о корзине
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    for (const productName in products) {
        const product = products[productName];
        if (product.quantity > 0) {
            const li = document.createElement('li');
            const productPrice = (product.price * product.quantity).toFixed(2); // Округляем цену
            li.textContent = `${productName} x${product.quantity} - $${productPrice}`;
            cartItems.appendChild(li);
            total += parseFloat(productPrice); // Преобразуем строку в число и округляем до 2 десятичных знаков
            span_item.textContent = product.quantity;
        }
    }
    total = total.toFixed(2); 
    totalElement.textContent = `Загалом: ${total}₴`;
}

// Добавляем обработчики событий для кнопок "плюс"
incrementButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const productName = card.querySelector('p').textContent;

        products[productName].quantity++;
        const quantitySpan = card.querySelector('.quantity'); // Находим span внутри карточки
        quantitySpan.textContent = products[productName].quantity;
        updateCart();
    });
});




// Добавляем обработчики событий для кнопок "минус"
decrementButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const productName = card.querySelector('p').textContent;

        if (products[productName].quantity > 0) {
            products[productName].quantity--;
            const quantitySpan = card.querySelector('.quantity'); // Находим span внутри карточки
            quantitySpan.textContent = products[productName].quantity;
            updateCart();
        }
    });
});

// Начальное обновление корзины
updateCart();




function custom() {
    let order_form = document.getElementById('order-form');
    let main = document.getElementById('main');
    let menu = document.getElementById('back-btn');
    let order_finish_btn = document.getElementById('order-finish-btn');

    order_finish_btn.style.display = 'none';
    main.style.display = 'none';
    menu.style.display = 'inline';
    order_form.style.display = 'flex';
}


let order_finish = document.getElementById('order_finish');

function endfunction() {
    let name_user = document.getElementById('user_name').value;
    let adress = document.getElementById('user_adress').value;
    let phone = document.getElementById('user_phone').value;
    let comment = document.getElementById('user_comment')
    let foodcort = {
        name: name_user,
        adress: adress,
        phone: phone,
        comment: comment,
        products
    }
    
    tg.sendData(JSON.stringify(foodcort));
    tg.close();

};


function superf() {
    let secret_menu = document.getElementById('view-order')
    let okbtn = document.getElementById('Ok-button')

    secret_menu.style.display = 'inline'
    okbtn.style.display = 'none'
}

function hideorder() {
    let secret_menu = document.getElementById('view-order')
    let okbtn = document.getElementById('Ok-button')

    secret_menu.style.display = 'none'
    okbtn.style.display = 'inline'
}


function menuf() {
    let order_finish_btn = document.getElementById('order-finish-btn');
    let menu = document.getElementById('back-btn');
    let main = document.getElementById('main');
    let order_form = document.getElementById('order-form');

    order_form.style.display = 'none'
    order_finish_btn.style.display = 'inline';
    main.style.display = 'flex'
    menu.style.display = 'none'
}

