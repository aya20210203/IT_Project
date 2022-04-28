var removeCartButton = document.getElementsByClassName("buuton");
for(var i =0 ;i<removeCartButton.length ; i++)
{
    var button = removeCartButton[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target ;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        
    })

}
let price = document.getElementById("Cart_price");
let quantity = document.getElementById("cart_quantity");
let subtotall= document.getElementById("subtotall");
let total = document.getElementById("TotalPrice");


function subtotal(){
    if(price.value != ''){
        let result =(Number(+price.value) * (+quantity.value));
        subtotall.innerHTML =parseFloat(result)+" EGP" ;
        total.innerHTML=parseFloat(result)+" EGP";
        // total = result.value;
        // console.log(total.value);

    }
    else{
        subtotall.innerHTML ='0.000';
        total.innerHTML='0.000';

    }
}






