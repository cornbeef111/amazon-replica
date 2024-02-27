// here we use the local storage to save the cart so that it doesnt change on reload
export let carts = JSON.parse(localStorage.getItem('cart'));

if(!carts){
    carts = [{
        productId: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
        quantity: 2,
        deliveryOptionId: '1',
    }, {
        productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity: 1,
        deliveryOptionId: '2'
    }];
}


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(carts));
}


export function addToCart(productId){
    let matchingItem;

    carts.forEach((cartItem) =>{
        if(productId === cartItem.productId){
        matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity += 1;
    }else{
        carts.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1',
        })   
    }

    saveToStorage();
}


export function removeFromCart(productId){
    let newCart = [];
    carts.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })

    carts = newCart;

    saveToStorage();
}
