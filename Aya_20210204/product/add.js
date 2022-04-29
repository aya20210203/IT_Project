let index1 = document.getElementById("b1");
let index2 = document.getElementById("b2");
let index3 = document.getElementById("b3");
let index4 = document.getElementById("b4");
let index5 = document.getElementById("b5");
let index6 = document.getElementById("b6");
let index7 = document.getElementById("b7");
let index8 = document.getElementById("b8");
let index9 = document.getElementById("b9");
let index10 = document.getElementById("b10");
let index11 = document.getElementById("b11");
let index12 = document.getElementById("b12");
let index13 = document.getElementById("b13");
let index14 = document.getElementById("b14");
let index15 = document.getElementById("b15");
let index16 = document.getElementById("b16");




let arr=[];
function addProduct(id){
   arr.push(id);
   localStorage.setItem('usercart',JSON.stringify(arr));
   let index = JSON.parse(localStorage.getItem('usercart'));
   console.log(index);
}
index1.onclick = function(){
   if(index1.innerHTML=="Add To Cart"){
       index1.innerHTML="Added";
       addProduct(index1.id);
       
   }
   else
     index1.innerHTML="Add To Cart";
      
}
index2.onclick = function(){
   if(index2.innerHTML=="Add To Cart"){
      index2.innerHTML="Added";
      addProduct(index2.id);
   }
   else 
     index2.innerHTML="Add To Cart";
}
index3.onclick = function(){
   if(index3.innerHTML=="Add To Cart"){
      index3.innerHTML="Added";
      addProduct(index3.id);
   }
   else
   index3.innerHTML="Add To Cart";
       
}
index4.onclick = function(){
   if(index4.innerHTML=="Add To Cart"){
      index4.innerHTML="Added";
      addProduct(index4.id);
   }
   else
   index4.innerHTML="Add To Cart";   
}
index5.onclick = function(){
   if(index5.innerHTML=="Add To Cart"){
      index5.innerHTML="Added";
      addProduct(index5.id);
   }
   else
   index5.innerHTML="Add To Cart";   
}
index6.onclick = function(){
   if(index6.innerHTML=="Add To Cart"){
       index6.innerHTML="Added";
       addProduct(index6.id);
   }
   else
   index6.innerHTML="Add To Cart";  
}
index7.onclick = function(){
   if(index7.innerHTML=="Add To Cart"){
      index7.innerHTML="Added";
      addProduct(index7.id);
   }
   else
   index7.innerHTML="Add To Cart";    
}
index8.onclick = function(){
   if(index8.innerHTML=="Add To Cart"){
       index8.innerHTML="Added";
       addProduct(index8.id);
   }
   else
   index8.innerHTML="Add To Cart";   
}
index9.onclick = function(){
   if(index9.innerHTML=="Add To Cart"){
       index9.innerHTML="Added";
       addProduct(index9.id);
   }
   else
   index9.innerHTML="Add To Cart";   
}
index10.onclick = function(){
   if(index10.innerHTML=="Add To Cart"){
       index10.innerHTML="Added";
       addProduct(index10.id);
   }
   else
   index10.innerHTML="Add To Cart";   
}
index11.onclick = function(){
   if(index11.innerHTML=="Add To Cart"){
       index11.innerHTML="Added";
       addProduct(index11.id);
   }
   else
   index11.innerHTML="Add To Cart";
      
}
index12.onclick = function(){
   if(index12.innerHTML=="Add To Cart"){
       index12.innerHTML="Added";
       addProduct(index12.id);
   }
   else
   index12.innerHTML="Add To Cart";
}
index13.onclick = function(){
   if(index13.innerHTML=="Add To Cart"){
      index13.innerHTML="Added";
      addProduct(index13.id);
   }
   else
   index13.innerHTML="Add To Cart";    
}
index14.onclick = function(){
   if(index14.innerHTML=="Add To Cart"){
      index14.innerHTML="Added";
      addProduct(index14.id);
   }
   else
   index14.innerHTML="Add To Cart";    
}
index15.onclick = function(){
   if(index15.innerHTML=="Add To Cart"){
       index15.innerHTML="Added";
       addProduct(index15.id);
       
   } 
   else
     index15.innerHTML="Add To Cart";
}
index16.onclick = function(){
   if(index16.innerHTML=="Add To Cart"){
       index16.innerHTML="Added";
       addProduct(index16.id);
   }
   else
   index16.innerHTML="Add To Cart";
}
