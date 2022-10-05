window.onscroll = function () {

    if (document.documentElement.scrollTop > 99) {
        document.getElementById("retour").style.background = "#f7b022";
        document.getElementById("up").style.color = "white";
    }
    else {
        document.getElementById("retour").style.background = "none";
        document.getElementById("up").style.color = "transparent";
    }


}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("MENU");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(function(){
    $("#retour").click(function(){
        $("html, body").animate({scrollTop: 0},"slow");
    });
});

alert("Bonjour et bienvenue, n'hesite pas à slider vers la droite sur les photos pour faire défiler le carrousel :)"
     );
