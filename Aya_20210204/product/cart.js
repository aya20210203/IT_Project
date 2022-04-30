function getCartItems(){
    let index = JSON.parse(localStorage.getItem('usercart')) ;  
    console.log(index);
    for(let i=0;i<index.length;i++)
    {
        let id =index[i];
        let ele =document.getElementById(id);
        ele.style.display = "table-row";
<<<<<<< HEAD

        
    }
    
=======
    }  
>>>>>>> 03790d2d2aaaa17e9e1b1b392fbd6d6ef8311a2c
 }

