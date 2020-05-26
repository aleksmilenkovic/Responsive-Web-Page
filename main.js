//Mobile menu and Icon//

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

// Close mobile menu//
const content = document.getElementsByClassName("content");
content.array.forEach((element) => {
  addEventListener("click", closeMenu);
});

function closeMenu(e) {
  console.log("clicked");
  if (slideoutMenu.style.visibility == "visible") {
    slideoutMenu.style.visibility = "hidden";
  } else {
    slideoutMenu.style.visibility = "visible";
  }
}
