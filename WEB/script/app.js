let cartItems = [];

function addToCart(burgerId) {
    const burger = getBurgerById(burgerId);
  
    cartItems.push(burger);
  
    updateCart();
}

// Función para obtener la hamburguesa por ID
function getBurgerById(burgerId) {
    
    if (burgerId === 'burger1') {
      return {
        id: 'burger1',
        name: 'Hamburguesa Èpica',
        price: 2800
      };
    }
    
    if (burgerId === 'burger2') {
      return {
        id: 'burger2',
        name: 'Hamburguesa Crispy onion',
        price: 3400
      };
    }

    if (burgerId === 'burger3') {
        return {
          id: 'burger3',
          name: 'Hamburguesa Yellow bobm',
          price: 3300
        };
    }

    if (burgerId === 'burger4') {
        return {
          id: 'burger4',
          name: 'Hamburguesa Big hutch',
          price: 3200
        };
    }

    if (burgerId === 'burger5') {
        return {
          id: 'burger5',
          name: 'Hamburguesa Eternal',
          price: 3000
        };
    }
    if (burgerId === 'burger6') {
      return {
        id: 'burger6',
        name: 'Hamburguesa Chb',
        price: 2900
      };
    }
}
  
  // Función para actualizar el carrito y el precio total
  function updateCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPriceElement = document.getElementById('total-price');
  
    // Limpiar el contenido del carrito antes de actualizarlo
    cartItemsList.innerHTML = '';
  
    // Mostrar las hamburguesas agregadas en el carrito
    cartItems.forEach((burger) => {
      const li = document.createElement('li');
      li.textContent = burger.name;
      cartItemsList.appendChild(li);
    });
  
    // Calcular el precio total
    const totalPrice = cartItems.reduce((total, burger) => total + burger.price, 0);
  
    // Mostrar el precio total en el carrito
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  
    // Mostrar el contenedor del carrito
    const cartContainer = document.getElementById('cart-container');
    cartContainer.classList.add('show');
  }
  