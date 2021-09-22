
window.onscroll = function () {

    if (document.documentElement.scrollTop > 299) {
        document.getElementById("retour").style.background = "#f7b022";
        document.getElementsByClassName("top").style.color = "white";
    }
    else {
        document.getElementById("retour").style.background = "none";
        document.getElementsByClassName(top).style.color = "none";
    }


}
