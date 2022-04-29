function getCartItems(){
     let index = JSON.parse(localStorage.getItem('usercart')) ;  
    console.log(index);
    for(let i=0;i<index.lenth;i++)
    {
        let id =index[i];
        let ele =document.getElementById(id);
        ele.style.display = "block";
    }
    
 }

