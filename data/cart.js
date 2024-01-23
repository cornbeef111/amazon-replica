export let carts = [{
    productId: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    quantity: 2,
}, {
    productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 1,
}];


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
        })   
    }
}


export function removeFromCart(productId){
    let newCart = [];
    carts.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })

    carts = newCart;
}