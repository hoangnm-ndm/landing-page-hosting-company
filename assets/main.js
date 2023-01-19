window.onscroll = function () {
  myScroll();
};

var header = document.getElementById("header");

function myFunction() {
  if (window.pageYOffset > 80) {
    header.classList.add("myScroll");
  } else {
    header.classList.remove("myScroll");
  }
}
