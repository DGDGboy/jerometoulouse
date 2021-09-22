
window.onscroll = function () {

    if (document.documentElement.scrollTop > 99) {
        document.getElementById("retour").style.background = rgb(247, 176, 34);
        document.getElementsByClassName("top").style.color = "white";
    }
    else {
        document.getElementById("retour").style.background = "none";
        document.getElementsByClassName(top).style.color = "none";
    }


}
