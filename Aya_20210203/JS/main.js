// theme one phone media queries

let menu = document.getElementById("menu");
let nav = document.querySelector("header nav");

menu.onclick = function (){
    if (nav.style.display === "flex")
        nav.style.display = "none";
    else
        nav.style.display = "flex";
};

// changing themes

let changeTheme = document.getElementById("changeTheme");
let themeOne = document.getElementById("themeOne");
let themeTwo = document.getElementById("themeTwo");
let footerOne = document.getElementById("footerOne");
let footerTwo = document.getElementById("footerTwo");

if(!window.localStorage.theme)
{
    window.localStorage.theme = 1;
}

function toTheme2 (){
    themeOne.style.display = "none";
    footerOne.style.display = "none";
    themeTwo.style.display = "flex";
    footerTwo.style.display = "flex";
    document.documentElement.style.setProperty("--main-color", "#472988");
    document.documentElement.style.setProperty("--secondary-color", "#bbbfff");
    document.documentElement.style.setProperty("--third-color", "#725b9c");
    document.documentElement.style.setProperty("--fourth-color", "#634991");
    document.documentElement.style.fontFamily = "Poppins, sans-serif";
    window.localStorage.theme = 2;
}

function toTheme1 (){
    themeOne.style.display = "flex";
    footerOne.style.display = "flex";
    themeTwo.style.display = "none";
    footerTwo.style.display = "none";
    document.documentElement.style.setProperty("--main-color", "#16558f");
    document.documentElement.style.setProperty("--secondary-color", "#b8e3ff");
    document.documentElement.style.setProperty("--third-color", "#0583D2");
    document.documentElement.style.setProperty("--fourth-color", "#61B0B7");
    document.documentElement.style.fontFamily = "serif";
    window.localStorage.theme = 1;
}

if (window.localStorage.theme == 2)
{
    toTheme2();
}

changeTheme.onclick = function(){
    if (window.localStorage.theme == 1)
    {
        toTheme2();
    } 
    else 
    {
        toTheme1();
    }
}