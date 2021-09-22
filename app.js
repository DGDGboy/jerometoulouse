
window.onscroll = function () {

    if (document.documentElement.scrollTop > 100) {
        document.getElementById("retour").style.background = "transparent";
        document.getElementsByClassName("top").style.color = "transparent";
    }
    else {
        document.getElementById("retour").style.background = rgb(247, 176, 34);
        document.getElementsByClassName("top").style.color = "white";
    }


}
