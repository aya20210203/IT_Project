let searchable =[
    "iPhone 11",
    "kenmore 28 ",
     "OPPo A54",
     "Hp laptop",
     "VIZIO smart TV",
     "Sony smart TV",
     "Mac laptop",
     "LG smart TV",
     "Asus ZenBook laptop",
     "SAMSUNG Galaxy S20 phone",
     "Redmi phone",
     "SUPER DEAL mimi",
     "Lenovo laptop 2022",
     "SAMSUNG smart TV",
     "COMFEE Portable washing",
     "Porlable washing machine",
 
 ];







const searchInput = document.getElementById('search');

const searchWapper = document.querySelector('.Wapper');

const resultsWapper = document.querySelector('.results');


searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;

    if (input.length) {
        results = searchable.filter((item) => {
            return item.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
         
    }
    renderResults(results);
});




function renderResults(results) {
    if (!results.length){
        return searchWapper.classList.remove('show')

    }

    let content = results
     .map((item) => {
          return `<li><a href='../Aya_20210204/index.html'>${item}</a></li>`;
      })
      .join('');
      searchWapper.classList.add('show')
      resultsWapper.innerHTML = `<ul>${content}</ul>`
    
}