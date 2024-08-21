const menu_btn = window.document.getElementById("menu")
const menu = document.getElementById("menu_botao")
const section_present = document.getElementById("main-banner")
var state;




menu_btn.addEventListener('click', function(){

    if(state != true)
    {
        menu_btn.style.transform = "rotate(90deg)"
        menu_btn.style.transitionDelay = "5ms"
        menu.style.display = "flex";
        menu.style.flexDirection = "column"
        menu.style.alignItems = "center"
        menu.style.textAlign = "center "
        section_present.style.paddingTop = "150px"
        state = true;
    }
    else
    {
        menu_btn.style.transform = "rotate(-90deg)"
        section_present.style.paddingTop = "100px"
        menu.style.display = "none";
        state = false;
    }




})
