//on scroll
let scrollBtn=document.querySelectorAll(".scroll");
window.onscroll=function(){
    if(window.scrollY>=200)
    {
        for(let i=0 ; i<scrollBtn.length; i++)
        {
            scrollBtn[i].style.cssText="display : block;";
        }
    }
    else
    {
        for(let i=0 ; i<scrollBtn.length; i++)
        {
            scrollBtn[i].style.cssText="display : none;";
        }
    }
}
for(let i=0 ; i<scrollBtn.length; i++)
{
    scrollBtn[i].onclick=function(){
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
    }
}

// Pages button
    //My account overview content button
    document.getElementById("ao_view").onclick=function()
        {
            window.scrollTo(0,0);
            document.getElementById("ao_content").style.display="flex";
            document.getElementById("rv_content").style.display="none";
        }
        //Recently viewed content button
        document.getElementById("rv_view").onclick=function()
        {
            window.scrollTo(0,0);
            document.getElementById("ao_content").style.display="none";
            document.getElementById("rv_content").style.display="flex";
        }

//Name edit button
let name_button=document.getElementById("name_edit_button");
let name1=document.getElementById("name1");
let name2=document.getElementById("name2");
name_button.onclick=function()
{
    if(name_button.innerHTML=="Edit")
    {
        name_button.innerHTML="Save";
        name2.setAttribute("style","pointer-events : all; color : black;");
        name1.setAttribute("style","pointer-events : all; color : black;");
    }
    else
    {
        name_button.innerHTML="Edit";
        name1.setAttribute("style","pointer-events : none; color : rgb(121, 121, 121);");
        name2.setAttribute("style","pointer-events : none; color : rgb(121, 121, 121);");
    }
}

//Email edit button
let email_button=document.getElementById("email_edit_button");
let email1=document.getElementById("email1");
let email2=document.getElementById("email2");
email_button.onclick=function()
{
    if(email_button.innerHTML=="Edit")
    {
        email_button.innerHTML="Save";
        email2.setAttribute("style","pointer-events : all; color : black;");
        email1.setAttribute("style","pointer-events : all; color : black;");
    }
    else
    {
        email_button.innerHTML="Edit";
        email1.setAttribute("style","pointer-events : none; color : rgb(121, 121, 121);");
        email2.setAttribute("style","pointer-events : none; color : rgb(121, 121, 121);");
    }
}

//phone edit button
let phone_button=document.getElementById("phone_edit_button");
let phone1=document.getElementById("phone1");
let phone2=document.getElementById("phone2");
phone_button.onclick=function()
{
    if(phone_button.innerHTML=="Edit")
    {
        phone_button.innerHTML="Save";
        phone2.setAttribute("style","pointer-events : all; color : black;");
        phone1.setAttribute("style","pointer-events : all; color : black;");
    }
    else
    {
        phone_button.innerHTML="Edit";
        phone1.setAttribute("style","pointer-events : none; color : rgb(121, 121, 121);");
        phone2.setAttribute("style","pointer-events : none; color : rgb(121, 121, 121);");
    }
}

//address edit button
let address_button=document.getElementById("address_edit_button");
let address=document.getElementById("address");
address_button.onclick=function()
{
    if(address_button.innerHTML=="Edit")
    {
        address_button.innerHTML="Save";
        address.setAttribute("style","pointer-events : all; color : black;");

    }
    else
    {
        address_button.innerHTML="Edit";
        address.setAttribute("style","pointer-events : none; color : rgb(121, 121, 121);");
    }
}

//add to cart button
function addcartbutton(buttonId){
    let button=document.getElementById(buttonId);
    button.onclick=function(){
        if(button.innerHTML=="Add to cart")
        {
            button.innerHTML="Added";
        }
        else
        {
            button.innerHTML="Add to cart";
        }
    }
}
addcartbutton("AddToCart1");
addcartbutton("AddToCart2");
addcartbutton("AddToCart3");
addcartbutton("AddToCart4");
addcartbutton("AddToCart5");
addcartbutton("AddToCart6");
addcartbutton("AddToCart7");
addcartbutton("AddToCart8");
addcartbutton("AddToCart9");
addcartbutton("AddToCart10");
addcartbutton("AddToCart11");
addcartbutton("AddToCart12");
addcartbutton("AddToCart13");
addcartbutton("AddToCart14");
addcartbutton("AddToCart15");
addcartbutton("AddToCart16");
addcartbutton("AddToCart17");

//views buttons
let view1=document.getElementById("view1");
let view2=document.getElementById("view2");
let boxes=document.getElementById("boxes");
let box=document.querySelectorAll(".boxes .box");
let priceBorder=document.getElementsByClassName("PriceAndButton");
let desc=document.getElementsByClassName("desc");
view1.onclick=function()
{
    for(let i=0 ; i<box.length; i++)
    {
        boxes.setAttribute("style" , "flex-direction: column; overflow:auto;");
        box[i].style.cssText="width : 97%; justify-content: space-around; align-content: center; align-items: center; flex-direction: row; margin:10px 0;";
        priceBorder[i].style.cssText="border-style: solid;";
        desc[i].style.cssText="flex-direction:column; justify-content: flex-start; align-items: flex-start; width:60%; padding: 10px;";
    }
}
view2.onclick=function()
{
    for(let i=0 ; i<box.length; i++)
    {
        boxes.setAttribute("style" , "width:100%; flex-direction: row; flex-wrap:wrap; overflow:auto; padding-left :40px;");
        box[i].style.cssText="width : 31%; justify-content: space-around; align-content: center; align-items: center; flex-direction: column; margin:5px;";
        priceBorder[i].style.cssText="border-style: none;";
        desc[i].style.cssText="justify-content: center; align-items: center; width:100%; padding: 5px;";
    }
}

//Product details
function productDetails(boxId,boxId_Id,link)
{
    let box=document.getElementById(boxId);
    let box_2=document.getElementById(boxId_Id);
    box.onclick=function(){
        window.open(link, "_blank");
    }
    box_2.onclick=function(){
        window.open(link, "_blank");
    }
}
productDetails("box2","box2_2","../Aya_20210204/product/index.html#laptop-1");
productDetails("box3","box3_3","../Aya_20210204/product/index.html#laptop-2");
productDetails("box4","box4_4","../Aya_20210204/product/index.html#laptop-3");
productDetails("box5","box5_5","../Aya_20210204/product/index.html#laptop-4");
productDetails("box6","box6_6","../Aya_20210204/product/index.html#tv-1");
productDetails("box7","box7_7","../Aya_20210204/product/index.html#tv-2");
productDetails("box8","box8_8","../Aya_20210204/product/index.html#tv-3");
productDetails("box9","box9_9","../Aya_20210204/product/index.html#tv-4");
productDetails("box11","box10_10","../Aya_20210204/product/index.html#moblie-1");
productDetails("box12","box11_11","../Aya_20210204/product/index.html#moblie-2");
productDetails("box10","box12_12","../Aya_20210204/product/index.html#mobile-3");
productDetails("box13","box13_13","../Aya_20210204/product/index.html#moblie-4");
productDetails("box15","box14_14","../Aya_20210204/product/index.html#washingMachine-1");
productDetails("box14","box15_15","../Aya_20210204/product/index.html#washingMachine-2");
productDetails("box16","box16_16","../Aya_20210204/product/index.html#washingMachine-3");
productDetails("box17","box17_17","../Aya_20210204/product/index.html#washingMachine-4");



