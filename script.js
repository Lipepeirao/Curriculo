const nav = document.getElementsByTagName("nav")[0];
const topoNav = nav.offsetTop;

window.onscroll = function(){
    FixarMenuNoTopo();
}

function FixarMenuNoTopo(){
    if (window.pageYOffset >= topoNav){
        nav.classList.add("FixoNoTopo");
    }else{ 
        nav.classList.remove("FixoNoTopo"); 
    }
}