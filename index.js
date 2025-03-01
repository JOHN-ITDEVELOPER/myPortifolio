

var taplinks = document.getElementsByClassName("tap-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(taplinks of taplinks){
        taplinks.classList.remove("active-link");

    }
    for(tabcontents of tabcontents){
        tabcontents.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}