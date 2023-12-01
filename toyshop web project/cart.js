 let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
cart=    [ 
    {
       productId:
       '101',
       quantity:2
    },{
    productId:
    '102',
    quantity:1}
];}

function saveToStorage()
{
localStorage.setItem('cart',JSON.stringify(cart));
}

function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveToStorage(); // Move this line outside the forEach loop
}
      function updateQuantity()
      {   let cartQuantity = 0;

      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;});

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;   }

        function removeFromCart(productId)
        {
           const newCart=[];
          cart.forEach((cartItem)=>{
                 if(cartItem.productId!==productId)
                 {    newCart.push(cartItem) }
          });
          cart=newCart;
          saveToStorage();

            }
        
