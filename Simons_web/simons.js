jQuery(document).ready(function(){
    $(".menu-li").mouseover(function(){
        $(".sub-menu-ul").stop().fadeIn(500);
        $(".sub-menu-bg").stop().fadeIn(300);
    }).mouseout(function(){
        $(".sub-menu-ul").stop().fadeOut(500);
        $(".sub-menu-bg").stop().fadeOut(700);
    })
})


// slide-swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });