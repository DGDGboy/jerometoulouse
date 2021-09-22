
window.onscroll = function () {

    if (document.documentElement.scrollTop > 100) {
        document.getElementById("retour").style.background = rgb(247, 176, 34);
        document.getElementsByClassName("top").style.color = "white";
    }
    else {
        document.getElementById("retour").style.background = rgba(0, 0, 0, 0);
        document.getElementsByClassName("top").style.color = rgba(0, 0, 0, 0);
    }


}
