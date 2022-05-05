!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self)
.cookie=t()}(this,function(){"use strict";var e=function(){return e.get.apply(e,arguments)},t=e.utils={isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isPlainObject:function(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)},toArray:function(e){return Array.prototype.slice.call(e)},getKeys:Object.keys||function(e){var t=[],r="";for(r in e)e.hasOwnProperty(r)&&t.push(r);return t},encode:function(e){return String(e).replace(/[,;"\\=\s%]/g,function(e){return encodeURIComponent(e)})},decode:function(e){return decodeURIComponent(e)},retrieve:function(e,t){return null==e?t:e}};return e.defaults={},e.expiresMultiplier=86400,e.set=function(e,r,i){if(t.isPlainObject(e))for(var n in e)e.hasOwnProperty(n)&&this.set(n,e[n],r);else{var o=void 0!==(i=t.isPlainObject(i)?i:{expires:i}).expires?i.expires:this.defaults.expires||"",s=typeof o;"string"===s&&""!==o?o=new Date(o):"number"===s&&(o=new Date(+new Date+1e3*this.expiresMultiplier*o)),""!==o&&"toUTCString"in o&&(o=";expires="+o.toUTCString());var u=i.path||this.defaults.path;u=u?";path="+u:"";var a=i.domain||this.defaults.domain;a=a?";domain="+a:"";var c=i.secure||this.defaults.secure?";secure":"";!1===i.secure&&(c="");var f=i.sameSite||this.defaults.sameSite;f=f?";SameSite="+f:"",null===i.sameSite&&(f=""),document.cookie=t.encode(e)+"="+t.encode(r)+o+u+a+c+f}return this},e.setDefault=function(r,i,n){if(t.isPlainObject(r)){for(var o in r)void 0===this.get(o)&&this.set(o,r[o],i);return e}if(void 0===this.get(r))return this.set.apply(this,arguments)},e.remove=function(e){for(var r=0,i=(e=t.isArray(e)?e:t.toArray(arguments)).length;r<i;r++)this.set(e[r],"",-1);return this},e.removeSpecific=function(e,r){if(!r)return this.remove(e);e=t.isArray(e)?e:[e],r.expires=-1;for(var i=0,n=e.length;i<n;i++)this.set(e[i],"",r);return this},e.empty=function(){return this.remove(t.getKeys(this.all()))},e.get=function(e,r){var i=this.all();if(t.isArray(e)){for(var n={},o=0,s=e.length;o<s;o++){var u=e[o];n[u]=t.retrieve(i[u],r)}return n}return t.retrieve(i[e],r)},e.all=function(){if(""===document.cookie)return{};for(var e=document.cookie.split("; "),r={},i=0,n=e.length;i<n;i++){var o=e[i].split("="),s=t.decode(o.shift()),u=t.decode(o.join("="));r[s]=u}return r},e.enabled=function(){if(navigator.cookieEnabled)return!0;var t="_"===e.set("_","_").get("_");return e.remove("_"),t},e});

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
        cookie.set("name1C",name1.value);
        cookie.set("name2C",name2.value);
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
        cookie.set("email1C",email1.value);
        cookie.set("email2C",email2.value);
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
        cookie.set("phone1C",phone1.value);
        cookie.set("phone2C",phone2.value);
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
        cookie.set("addressC",address.value);
        address_button.innerHTML="Edit";
        address.setAttribute("style","pointer-events : none; color : rgb(121, 121, 121);");
    }
}

//Account Overview Cookies
    
cookie.setDefault({
    name1C: "bassem",
    name2C: "saeed",
    phone1C: "01281441143",
    phone2C: "01119697361",
    email1C: "bassemsaeed620@gmail.com",
    email2C: "bassemsaeed710@gmail.com",
    addressC: "53 10thDistrict - October City"
}, 
{
    expires: 10000
}, 
{
    path: "/"
});
    name1.value=cookie.get("name1C");
    name2.value=cookie.get("name2C");
    email1.value=cookie.get("email1C");
    email2.value=cookie.get("email2C");
    phone1.value=cookie.get("phone1C");
    phone2.value=cookie.get("phone2C");
    address.value=cookie.get("addressC");

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