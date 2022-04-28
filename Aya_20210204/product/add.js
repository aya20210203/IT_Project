let arr = [];
function add(id){
   arr.push(id);
   localStorage.setItem('usercart',JSON.stringify(arr));
   let item = JSON.parse(localStorage.getItem('usercart'));
}
