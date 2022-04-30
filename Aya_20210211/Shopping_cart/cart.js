
//working js 
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',ready)
}
else
{ 
    ready();

}

//making function 
function ready(){
    var removeCartButton = document.getElementsByClassName("buuton");
    for(var i =0 ;i<removeCartButton.length ; i++)
    {
        var button = removeCartButton[i]
        button.addEventListener("click", function(event){
            var buttonClicked = event.target ;
            buttonClicked.parentElement.parentElement.parentElement.remove();
    
        var id = buttonClicked.parentElement.parentElement.parentElement.getAttribute('id');
        console.log(id);
        var arr = JSON.parse(localStorage.getItem('usercart'));
        var x = arr.indexOf(id);
        console.log(x);
        arr.splice(x , 1);
        localStorage.setItem('usercart',JSON.stringify(arr));
        console.log(localStorage.usercart);
        location.reload()
    
        })
    }
 }





var total = document.getElementById("TotalPrice");

function subtotal1(){
let quantity = document.getElementById("cart_quantity1");
let price = document.getElementById("Cart_price1");
let subtotall= document.getElementById("subtotall1");
var result ;
var totalProduct1  ;

    if(price.value != ''){
        result =((price.value)*1000*(quantity.value));
        result = Math.round(result);
        subtotall.innerHTML =(result)+ " EGP" ;
        totalProduct1 = result ;
        console.log(totalProduct1);
        total.innerHTML=(totalProduct1)+" EGP";

    }
    else{
        subtotall.innerHTML ='0.000';
    }
}
// total.innerHTML=(totalProduct)+" EGP";
// console.log(total);



function subtotal2(){
    let quantity = document.getElementById("cart_quantity2");
    let price = document.getElementById("Cart_price2");
    let subtotall= document.getElementById("subtotall2");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result ) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";

        }
        else{
            subtotall.innerHTML ='0.000';
        }
 }

 
function subtotal3(){
    let quantity = document.getElementById("cart_quantity3");
    let price = document.getElementById("Cart_price3");
    let subtotall= document.getElementById("subtotall3");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result);
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal4(){
    let quantity = document.getElementById("cart_quantity4");
    let price = document.getElementById("Cart_price4");
    let subtotall= document.getElementById("subtotall4");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result);
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal5(){
    let quantity = document.getElementById("cart_quantity5");
    let price = document.getElementById("Cart_price5");
    let subtotall= document.getElementById("subtotall5");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal6(){
    let quantity = document.getElementById("cart_quantity6");
    let price = document.getElementById("Cart_price6");
    let subtotall= document.getElementById("subtotall6");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal7(){
    let quantity = document.getElementById("cart_quantity7");
    let price = document.getElementById("Cart_price7");
    let subtotall= document.getElementById("subtotall7");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal8(){
    let quantity = document.getElementById("cart_quantity8");
    let price = document.getElementById("Cart_price8");
    let subtotall= document.getElementById("subtotall8");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal9(){
    let quantity = document.getElementById("cart_quantity9");
    let price = document.getElementById("Cart_price9");
    let subtotall= document.getElementById("subtotall9");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal10(){
    let quantity = document.getElementById("cart_quantity10");
    let price = document.getElementById("Cart_price10");
    let subtotall= document.getElementById("subtotall10");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal11(){
    let quantity = document.getElementById("cart_quantity11");
    let price = document.getElementById("Cart_price11");
    let subtotall= document.getElementById("subtotall11");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal12(){
    let quantity = document.getElementById("cart_quantity12");
    let price = document.getElementById("Cart_price12");
    let subtotall= document.getElementById("subtotall12");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result ) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal13(){
    let quantity = document.getElementById("cart_quantity13");
    let price = document.getElementById("Cart_price13");
    let subtotall= document.getElementById("subtotall13");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result );
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal14(){
    let quantity = document.getElementById("cart_quantity14");
    let price = document.getElementById("Cart_price14");
    let subtotall= document.getElementById("subtotall14");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result ) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal15(){
    let quantity = document.getElementById("cart_quantity15");
    let price = document.getElementById("Cart_price15");
    let subtotall= document.getElementById("subtotall15");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result) ;
            subtotall.innerHTML =(result)+ " EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }

    
function subtotal16(){
    let quantity = document.getElementById("cart_quantity16");
    let price = document.getElementById("Cart_price16");
    let subtotall= document.getElementById("subtotall16");
        if(price.value != ''){
            var result =((price.value)*1000*(quantity.value));
            result = Math.round(result ) ;
            subtotall.innerHTML =(result)+" EGP" ;
            totalProduct = result ;
            console.log(totalProduct);
            total.innerHTML=(totalProduct)+" EGP";
        }
        else{
            subtotall.innerHTML ='0.000';
        }
    }




