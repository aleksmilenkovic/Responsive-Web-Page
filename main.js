const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener("click", function () {
  if (searchBox.style.top == "72px") {
    searchBox.style.top = "24px";
    searchBox.style.pointerEvents = "none";
  } else {
    searchBox.style.top = "72px";
    searchBox.style.pointerEvents = "auto";
  }
});

menuIcon.addEventListener("click", function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = "0";
    slideoutMenu.style.pointerEvents = "none";
  } else {
    slideoutMenu.style.opacity = "1";
    slideoutMenu.style.pointerEvents = "auto";
  }
});

const readMore = document.getElementById("readMore");
const paragraph = document.getElementById("paragraph");
readMore.addEventListener("click", showMore());
function showMore() {
  const text = document.getElementById("article-about");

  if (text.style.display == "none") {
    text.style.display = "flex";
    readMore.innerText = "Read less...";
    paragraph.style.display = "none";
  } else {
    text.style.display = "none";
    readMore.innerText = "Read More";
    paragraph.style.display = "block";

  }
  //window.scrollTo(0, 2300);
}
