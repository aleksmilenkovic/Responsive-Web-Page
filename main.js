//Mobile menu and Icon//

const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchBox = document.getElementById("searchbox");

menuIcon.addEventListener("click", function () {
  if (slideoutMenu.style.visibility == "visible") {
    slideoutMenu.style.visibility = "hidden";
    slideoutMenu.style.pointerEvents = "none";
  } else {
    slideoutMenu.style.visibility = "visible";
    slideoutMenu.style.pointerEvents = "auto";
  }
});

// Read More Button

const readMore = document.getElementById("readMore");
const paragraph = document.getElementById("paragraph");
const scrollPoint = document.getElementById("aboutus");
readMore.addEventListener("click", showMore());

function showMore() {
  const text = document.getElementById("article-about");

  if (text.style.display == "none") {
    text.style.display = "flex";
    readMore.innerText = "Read less...";
    paragraph.style.display = "none";
    scrollPoint.scrollIntoView(true);
  } else {
    text.style.display = "none";
    readMore.innerText = "Read More";
    paragraph.style.display = "flex";
    scrollPoint.scrollIntoView(false);
  }
}

function closeMenu(e) {
  console.log("clicked");
  if (slideoutMenu.style.visibility == "visible") {
    slideoutMenu.style.visibility = "hidden";
  } else {
    slideoutMenu.style.visibility = "visible";
  }
}
