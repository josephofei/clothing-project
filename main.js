

let shop = document.getElementById('shop');

// this function get the shop data from data.json
function getData() {
    return fetch('http://localhost:3000/shopItems')
        .then(res => res.json())
        .then(items => items.forEach(item => {
            let { id, name, price, desc, img } = item;
            console.log(img)

            const div = document.createElement('div');
            div.id = `product-id-${id}`
            div.className = 'item';
            shop.appendChild(div)

            const image = document.createElement('img');
            image.width = '220';
            image.height = '220'
            image.src = `${img}`;
            div.appendChild(image)

            const detail = document.createElement('div');
            detail.className = 'detail';
            div.appendChild(detail)

            const h3 = document.createElement('h3')
            h3.innerText = `${name}`;
            detail.appendChild(h3)

            const description = document.createElement('p');
            description.innerText = `${desc}`;
            description.className = 'description'
            detail.appendChild(description);


            const priceQuantity = document.createElement('div');
            priceQuantity.className = 'priceQuantity'
            detail.appendChild(priceQuantity)

            const itemPrice = document.createElement('h2');
            itemPrice.className = 'itemPrice'
            itemPrice.innerText = `$ ${price}`;
            priceQuantity.appendChild(itemPrice)

            const icon = document.createElement('div')
            icon.className = 'icon'
            priceQuantity.appendChild(icon)

            // const iconMinus = document.createElement('i');
            // iconMinus.className = 'bi bi-dash-lg'
            // icon.appendChild(iconMinus)

            let itemQuantity = document.createElement('div')
            itemQuantity.innerText = 0;
            icon.appendChild(itemQuantity)

            const iconPlus = document.createElement('i')
            iconPlus.className = 'bi bi-plus-lg';
            icon.appendChild(iconPlus)

            // const addShop = document.getElementById('addShop')


        }))
}

getData();

//let itemQuantity = document.createElement('div')

function plus() {
    const increment = document.querySelectorAll('.bi bi-plus-lg')
    increment.addEventListner('click', () => {
        itemQuantity.innerText += 1
    })
}

function minus() {
    const decrement = document.querySelectorAll('.bi bi-dash-lg')
    decrement.addEventListner('click', () => {
        itemQuantity.innerText -= 1
    })
}












