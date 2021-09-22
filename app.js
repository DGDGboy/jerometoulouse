
window.onscroll = function () {

    if (document.documentElement.scrollTop > 499) {
        document.getElementById("retour").style.background = "#f7b022";
        document.getElementById("top").style.color = "white";
    }
    else {
        document.getElementById("retour").style.background = "none";
        document.getElementById("top").style.color = "none";
    }


}
