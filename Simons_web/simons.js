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


  //  tab active
const $tabMenu = $(".tab-menu a");
const $tab = $(".tab");

$tabMenu.each(function(index, item){
    $(item).click(function(){
        $tabMenu.each(function(index, item){
            $(item).removeClass("active");
        })
        $(item).addClass("active");
        $tab.each(function(index, item){
            $(item).removeClass("active");
        })
        let target = $tab.get(index);
        $(target).addClass("active");
    })
})

// 클릭 시 상단이동 방지

$tabMenu.click(function(e){
  e.preventDefault();
})

$tab.click(function(e){
  e.preventDefault();
})


// top button

const $topBtn = document.querySelector(".moveTopBtn");

// 버튼 클릭 시 맨 위로 이동
$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}

