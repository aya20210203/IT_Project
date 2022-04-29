function getCartItems(){
     let index = JSON.parse(localStorage.getItem('usercart')) ;  
    console.log(index);
    let z=0;
    let x=index[z];
    console.log(x);
    //let id=document.getElementById("index");
    for(let i=0;i<index.lenth;i++)
    {
        let id =index[i];
        let ele =document.getElementById(id);
        ele.style.display = "block";
    }
    
 }
// let x = window.localStorage.index; 
// if(x){
//   for(let i=0;i<16;i++){
//       id.style.display="block";
//     }
// }
