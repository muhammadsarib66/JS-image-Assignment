var slider_img = document.querySelector(".slide1");
var images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "slide-1.jpg"
];

document.getElementById("prev_btn").setAttribute("disabled", true);
var i = 0;
function next() {
  i++;
  if (i < images.length) {
    document.getElementById("prev_btn").removeAttribute("disabled");
    setImg(i);
    if (i == 6) {
      document.getElementById("nxt_btn").setAttribute("disabled", true);
    }
  }
}

function prev() {
  i--;
  if (i >= 0) {
    document.getElementById("nxt_btn").removeAttribute("disabled");
    setImg(i);
    if (i == 0) {
      document.getElementById("prev_btn").setAttribute("disabled", true);
    }
  }
}

// function prev() {
//   //   console.log(`value of i in next prev button clicked : ${i}`);
//   if (i <= 0) i = images.length;
//   i--;
//   return setImg();
// }

// function next() {
//   //   console.log(`value of i in next button clicked : ${i}`);
//   if (i >= images.length - 1) {
//   }
//   i = -1;
//   i++;
//   return setImg();
// }

function setImg(para) {
  //   return slider_img.setAttribute("src", "images/" + images[i]);
  //   console.log(document.getElementById("imgchange"));
  document.getElementById("imgchange").src = `${images[para]}`;
}