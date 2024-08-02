

//tienda de productos con carrito de compras al final de esta. 


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            imgSrc: "./images/habitacion (10).jpg",
            alt: "Cubre cama teddy rosa",
            title: "Cubre cama teddy rosa",
            transferPrice: "$15500",
            listPrice: "$18900",
            installment: "3 cuotas sin interés de $6300"
        },
        {
            id: 2,
            imgSrc: "./images/habitacion (11).jpg",
            alt: "Manta pompones",
            title: "Manta pompones",
            transferPrice: "$15500",
            listPrice: "$18900",
            installment: "3 cuotas sin interés de $6300"
        },
        {
            id: 3,
            imgSrc: "./images/habitacion (12).jpg",
            alt: "Acolchado corderito king",
            title: "Acolchado corderito king",
            transferPrice: "$15500",
            listPrice: "$18900",
            installment: "3 cuotas sin interés de $6300"
        },
        {
            id: 4,
            imgSrc: "./images/habitacion (13).jpg",
            alt: "Edredón visón",
            title: "Edredón visón",
            transferPrice: "$15500",
            listPrice: "$18900",
            installment: "3 cuotas sin interés de $6300"
        }
    ];


    localStorage.setItem('products', JSON.stringify(products));


    const storedProducts = JSON.parse(localStorage.getItem('products'));

    const productContainer = document.getElementById('product-container');

    
    storedProducts.forEach(product => {
        const productElement = document.createElement('article');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.alt}">
            <div class="product-body">
                <h2>${product.title}</h2>
                <h3>Transferencia ${product.transferPrice}</h3>
                <h4>Lista ${product.listPrice}</h4>
                <p>${product.installment}</p>
                <button data-id="${product.id}">Comprar</button>
            </div>
        `;

        productContainer.appendChild(productElement);
    });

    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCartUI = () => {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;
            cartItems.appendChild(li);
        });
    };

    
    productContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const productToAdd = storedProducts.find(product => product.id === productId);
            cart.push(productToAdd);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
        }
    });

    
    const clearCartButton = document.getElementById('clear-cart');
    clearCartButton.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    });

    
    updateCartUI();
});
