$(document).ready(function () {
    // start aos
    AOS.init();
    // end aos
    // start splitting
    console.clear();

    var s = Splitting();
    // end splitting
});
// start swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// end swiper
// start hover effect
var myAnimation = new hoverEffect({
  parent: document.querySelector('.my-div-1'),
  intensity: 0.3,
  speedIn: 1.7,
  speedOut: 1.7,
  image1: 'project/imgs/slide1.jpg',
  image2: 'project/imgs/slide2.jpg',
  displacementImage: 'project/imgs/diplacement-1.jpg'
});
// end hover effect