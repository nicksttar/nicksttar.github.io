const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
var span_item = document.querySelectorAll('.quantity');

let tg = window.Telegram.WebApp;
tg.expand();

// Объект для хранения информации о товарах и их количестве
const products = {
    'Burger • 2.00$': { price: 2, quantity: 0 },
    'Fish • 2.55$': { price: 2.55, quantity: 0 },
    'Crab • 5.18$': { price: 5.18, quantity: 0 },
    'Meat • 4.22$': { price: 4.22, quantity: 0 },

    'Potato • 0.75$': { price: 0.75, quantity: 0 },
    'Pizza • 10.21$': { price: 10.21, quantity: 0 },
    'Eggs • 0.15$': { price: 0.15, quantity: 0 },
    'Bread • 1.24$': { price: 1.24, quantity: 0 },
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
    totalElement.textContent = `Full payment: $${total}`;
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

    main.style.display = 'none';
    order_form.style.display = 'flex';
}


let order_finish = document.getElementById('order_finish');

function endfunction() {
    let name_user = document.getElementById('user_name').value;
    let mail = document.getElementById('user_email').value;
    let phone = document.getElementById('user_phone').value;
    let foodcort = {
        name: name_user,
        mail: mail,
        phone: phone,
        products
    }
    
    tg.sendData(JSON.stringify(foodcort));
    tg.close();

};







