

let shop = document.getElementById('shop');

// this function get the shop data from data.json
function getData() {
    return fetch('http://localhost:3000/shopItems')
        .then(res => res.json())
        .then(items => items.forEach(item => {
            let { id, name, price, desc, img } = item;
            console.log(img)

            const cartAmount = document.getElementById('cartAmount')

            // creating a appending a div that will store the product-ID
            const div = document.createElement('div');
            div.id = `product-id-${id}`
            div.className = 'item';
            shop.appendChild(div)

            // creating a appending a div that will store the product-image
            const image = document.createElement('img');
            image.width = '220';
            image.height = '220'
            image.src = `${img}`;
            div.appendChild(image)

            // creating a appending a div that will store the product-detail
            const detail = document.createElement('div');
            detail.className = 'detail';
            div.appendChild(detail)

            // inside the detail h3 element is created to store the product-name
            const h3 = document.createElement('h3')
            h3.innerText = `${name}`;
            detail.appendChild(h3)

            // inside the detail 'p' element is created to store the product-description
            const description = document.createElement('p');
            description.innerText = `${desc}`;
            description.className = 'description'
            detail.appendChild(description);

            // inside the detail div element is created to store the product-price and the icon
            const priceQuantity = document.createElement('div');
            priceQuantity.className = 'priceQuantity'
            detail.appendChild(priceQuantity)

            // inside the detail h2 element is created to store the product-price
            const itemPrice = document.createElement('h2');
            itemPrice.className = 'itemPrice'
            itemPrice.innerText = `$ ${price}`;
            priceQuantity.appendChild(itemPrice)

            // inside the detail div element is created to store the product-icon
            const icon = document.createElement('div')
            icon.className = 'icon'
            priceQuantity.appendChild(icon)

            // this is the minus icon
            const iconMinus = document.createElement('i');
            iconMinus.className = 'bi bi-dash-lg'
            // an eventlistner is added to the minus icon so the anytime is clicked the product amount will decrease
            iconMinus.addEventListener('click', () => {
                // the if statement is to make sure that when it reach zero its doesn't go negative
                if (parseInt(itemQuantity.innerText) === 0) return;
                else {
                    itemQuantity.innerText = parseInt(itemQuantity.innerText) - 1;
                    cartAmount.innerText = parseInt(cartAmount.innerText) - 1;
                }
            })

            icon.appendChild(iconMinus)

            // this div is where the amount is 
            let itemQuantity = document.createElement('div')
            itemQuantity.innerText = 0;
            itemQuantity.className = 'itemQuantity'
            icon.appendChild(itemQuantity)

            // this is the plus icon
            const iconPlus = document.createElement('i')
            iconPlus.className = 'bi bi-plus-lg';
            iconPlus.addEventListener('click', () => {
                itemQuantity.innerText = parseInt(itemQuantity.innerText) + 1;
                cartAmount.innerText = parseInt(cartAmount.innerText) + 1;
            })
            icon.appendChild(iconPlus)




        }))
}

getData();



//this is when the mouse enter the cart, a popup will show the number of item you have!
const cart = document.querySelector('.cart')
cart.addEventListener('mouseenter', () => {
    const popup = document.createElement('div')
    popup.className = 'popup';
    popup.id = 'popup';
    popup.innerText = alert(`Your total item is: ${cartAmount.innerText}`)
})



























