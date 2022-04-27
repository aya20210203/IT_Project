var removeCartButton = document.getElementsByClassName("buuton");
for(var i =0 ;i<removeCartButton.length ; i++)
{
    var button = removeCartButton[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target ;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        // updatecartTotal();
    })
    //quantity changes 
    // var quantityInputs = document.getElementsByClassName("cart_quantity");
    // for(var i =0 ;i<quantityInputs.length ; i++){
    //     var input = quantityInputs[i];
    //     input.addEventListener("change",quantityChanged);
    // }

    //display your cart page
// function displayCart(){
    // document.getElementById('main').style.display= "none";
    // document.getElementById('details-page').style.display= "none";
    // document.getElementById('cart-container').style.display= "block";
    // if(cartList.length==0){
    //     document.getElementById("samll-container cart-page").style.display= "none";
    //     document.getElementById("empty-cart").style.display= "block";
    // }
    // else{
    //     document.getElementById("empty-cart").style.display= "none";
    //     document.getElementById("samll-container cart-page").style.display= "block";
        
    // }
}



//QuantityChanged function
// function quantityChanged(event){
//     var input = input.value;
//     if(isNaN(input.value)|| input.value <=0) {
//         input.value=1;

//     }
//     updatecartTotal();
// }

//update total
// function updatecartTotal(){
//     var cartItemContainer = document.getElementsByClassName("cart_items")[0];
//     var cartRows= cartItemContainer.getElementsByClassName("cart_row");
//     for(var i =0 ;i<cartRows.length ; i++){
//         var cartRow = cartRows[i];
//         var priceElement = cartRow.getElementsByClassName("Cart_price")[0];
//         var quantity = cartRow.getElementsByClassName("cart_quantity")[0];
//         var price =parseFloat(priceElement.innerText.replace('$',''));
//         var quantityElement  = quantity.value ;
//          console.log(price * quantityElement);
//     };
// };

// function updatecartTotal(){
//     var cartContent = document.getElementsByClassName("cart_items");
//     var cartBoxes = document.getElementsByClassName("cart_row");
//     var subtotal = 0 ;
//     for(var i =0 ;i<cartBoxes.length ; i++){
//         var cartBox = cartBoxes[i];
//         var priceElemant = cartBox.getElementsByClassName("Cart_price")[0];
//         var quantityElement = cartBox.getElementsByClassName("cart_quantity")[0];
//         // var price = parseFloat(priceElemant.innerHTML=replace('$',''));
//         var price = priceElemant.innerText.replace('$','');
//         var quantity = quantityElement.value;
//         subtotal = subtotal + (price*quantity) ; 
//         //if price contain some cents values 
//          total = Math.round(total*100)/100 ;
//         document.getElementsByClassName("TotalPrice")[0].innerText = "$" + subtotal;
//     }
// }



let price = document.getElementById("Cart_price");
let quantity = document.getElementById("cart_quantity");
let subtotall= document.getElementById("subtotall");

function subtotal(){
    if(price.value != ''){
        let result =(Number(+price.value) * +quantity.value);
        subtotall.innerHTML =parseFloat(result)+'.000' ;
        // console.log( Number(+price.value));
        // console.log(typeof(price.value));
    }
    else{
        subtotall.innerHTML ='0.000'
    }
}



