const body = document.querySelector("body");

const IMG_LS = "images";
const IMG_NUMBER = 9;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

// function genRandom() {
//   const number = Math.floor(Math.random() * IMG_NUMBER);
//   return number;
// }

function getImgNum() {
  const getImages = localStorage.getItem(IMG_LS);
  let number = 1;
  if (getImages === null) {
    localStorage.setItem(IMG_LS, 1);
  } else {
    let imageNumber = parseInt(getImages) + 1;
    if (imageNumber >= 10) {
      imageNumber = 1;
    }
    localStorage.setItem(IMG_LS, imageNumber);
    number = imageNumber;
  }
  return number;
}

function init() {
  const imageNumber = getImgNum();
  paintImage(imageNumber);
}

init();
