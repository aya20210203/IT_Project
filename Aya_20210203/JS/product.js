let n = window.localStorage.item;
let products = document.getElementsByClassName("product");

if (n)
{
    // clearing page
    for (let i = 0; i < 16; i++)
    {
        products[i].style.display = "none";
    }
    // showing products and categories
    if (n <= 11)
        {
            products[n].style.display = "block";
        }        
    else 
    {
        for (let i = n - 12 ; i < n - 8; i++)
        {
            products[i].style.display = "block";
        }
    }
    window.localStorage.removeItem("item");
}



