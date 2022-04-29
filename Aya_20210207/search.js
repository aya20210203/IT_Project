let searchable =[
    "<a href='../Aya_20210204/product/index.html#moblie-4'>iPhone 11</a>",
    "<a href='../Aya_20210204/product/index.html#washingMachine-2'>kenmore 28 </a>",
    "<a href='../Aya_20210204/product/index.html#moblie-2'>OPPo A54</a>",
    "<a href='../Aya_20210204/product/index.html#laptop-2'>Hp laptop</a>",
    "<a href='../Aya_20210204/product/index.html#tv-4'>VIZIO smart TV</a>",
    "<a href='../Aya_20210204/product/index.html#tv-3'>Sony smart TV</a>",
    "<a href='../Aya_20210204/product/index.html#laptop-3'>Mac laptop</a>",
    "<a href='../Aya_20210204/product/index.html#tv-1'>LG smart TV</a>",
    "<a href='../Aya_20210204/product/index.html#laptop-1'>Asus ZenBook laptop</a>",
    "<a href='../Aya_20210204/product/index.html#moblie-1'>SAMSUNG Galaxy S20 phone</a>",
    "<a href='../Aya_20210204/product/index.html#mobile-3'>Redmi phone</a>",
    "<a href='../Aya_20210204/product/index.html#washingMachine-3'>SUPER DEAL mimi</a>",
    "<a href='../Aya_20210204/product/index.html#laptop-4'>Lenovo laptop 2022</a>",
    "<a href='../Aya_20210204/product/index.html#tv-2'>SAMSUNG smart TV</a>",
    "<a href='../Aya_20210204/product/index.html#washingMachine-1'>COMFEE Portable washing</a>",
    "<a href='../Aya_20210204/product/index.html#washingMachine-4'>Porlable washing machine</a>",
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
        return `<li>${item}</li>`;
    })
    .join('');
    searchWapper.classList.add('show')
    resultsWapper.innerHTML = `<ul>${content}</ul>`
    
}