let direc = 0; //방향 전환을 위한 변수 정의
let wheelAction = false;
let windowHeight = $(window).innerHeight();
$(function(){
    let wHeight = $(window).height();
    let maxDirec = $("section").length-1;
    $(window).scroll(function(){
        let thisScrollTop = $(this).scrollTop();
        console.log(thisScrollTop);
        $("section").each(function(){
            let thisElem = $(this);
            console.log(thisElem)
            let thisOffset = $(this).offset();
            console.log(thisOffset);
            if(thisOffset.top <= thisScrollTop && thisScrollTop <= thisOffset.top + wHeight){
                thisElem.addClass("active1");
            }else{
                thisElem.removeClass("active1");
            }
        })
    })

    $(document).on("mousewheel", function(event){
     
        if($('html').is(":animated")) return;
        let eventDelta = event.originalEvent.wheelDelta;
        if(eventDelta > 0 && wheelAction == false){
            if(direc <= 0){
                direc == 0;
            }else {
                direc--;
                wheelAction = true;
                wheelFunc($("html"));
            }
        }else if(eventDelta < 0 && wheelAction === false){
            // console.log("wheel down!");
            if(direc >= maxDirec){
                direc = maxDirec;
            }else{
                direc++;
                wheelAction = true;
                wheelFunc($("html"));
            }
        }
    })
})

function wheelFunc(el){
    el.stop().animate({scrollTop: windowHeight * direc},{
        duration: 1000,
        complete: function(){
            wheelAction = false;
        }
    });
}

//   메뉴바 클릭 시 메뉴바 

$(".hamburger").click(function(){
    $(".pop-up").stop().slideDown(500);
    $(".close-btn").stop().fadeIn(500);
})

$(".close-btn").click(function(){
    $(".pop-up").stop().slideUp(500);
    $(".close-btn").fadeOut(500);
})


$(".none-click").click(function(e){
    e.preventDefault();
});

$(".color").click(function(e){
    e.preventDefault();
});


 
// slide swiper

var swiper = new Swiper(".mySwiper2", {
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


// best menu slide swiper 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      type: "fraction",
    },
    navigation: {
      nextEl: ".best-button-next",
      prevEl: ".best-button-prev",
    },
  });
