
const $menuLi = $(".menu-li");
const $subMenuUl = $(".sub-menu-ul");
const $menuBg = $(".menu-bg");
const $logoColor = $(".logo-color");
const $logo = $(".logo");
const $header = $("header");
const $headerWrap = $(".header-wrap");

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



$(function(){
    let standard = 0;
    let directionIndex = 1;
    $(window).scroll(function(e){
        // e.preventDefault();
        let winHeight = $(window).height();
        let tmp = $(this).scrollTop();
        let standardHeight = winHeight * 4;
        let logo = $headerWrap.find(".logo-color");
        let menuLiA = $headerWrap.find(".menu-li > a")
        let langSelect = $headerWrap.find("#langSelect");
        if(tmp >= standardHeight){
            $(logo).css("display", "block");
            $(menuLiA).each(function(index, item){
                $(item).css("color", "black");
            });
            $(langSelect).css("color", "black");
        }else{
            $(logo).css("display", "none");
            $(menuLiA).each(function(index, item){
                $(item).css("color", "#FFFFFF");
            })
            $(langSelect).css("color", "#FFFFFF");
        }

        
    })

    $menuLi.each(function(index, item){
        console.log($(item))
        $(item).mouseover(function(){
            console.log("hello");
            let thisA = $(this).find(".menu-li-a")
            $(thisA).css("color", "#5E8549");
        }).mouseout(function(){
            let thisA = $(this).find(".menu-li-a")
            $(thisA).css("color", "#FFFFFF");
        })
    })
})




$(".menu-ul").mouseover(function(){
    let logo = $headerWrap.find(".logo-color");
    $subMenuUl.stop().fadeIn(500);
    let menuLiA = $headerWrap.find(".menu-li > a")
    $menuLi.each(function(index, item){
        $(item).css('color', '#fff');
    })
    $(langSelect).css("color", "white");
    $('body').css('overflow', 'hidden');
})
$menuBg.mouseout(function(){
    let logo = $headerWrap.find(".logo-color");
    let menuLiA = $headerWrap.find(".menu-li > a");
    $subMenuUl.stop().fadeOut(500);    
    $('body').css('overflow', 'auto');
})

$header.mouseover(function(){
    $subMenuUl.stop().fadeIn(500);
    $menuBg.stop().fadeIn(400);
    $logoColor.stop().fadeIn();
}).mouseout(function(){
    $subMenuUl.stop().fadeOut(500);
    $menuBg.stop().fadeOut(600);
    $logoColor.stop().fadeOut();
})


// section 1 슬라이드 
 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
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


// 메뉴스토리 메뉴 이미지 호버

$(".menu-story-img").mouseover(function(){
    $(".hover").stop().fadeIn();
}).mouseout(function(){
    $(".hover").stop().fadeOut();
})


// 메뉴스토리 클릭 슬라이드 이벤트

const sliderImg = document.querySelector(".menu-story-container"); //보여지는 영역
const sliderInner = document.querySelector(".menu-story-ul"); //움직이는 영역
const slider = document.querySelectorAll(".menu-story-li"); //개별 이미지
const sliderBtn = document.querySelector(".menu-click-wrap");	//버튼
const sliderBtnPrev = document.querySelector(".button-prev");		//왼쪽버튼
const sliderBtnNext = document.querySelector(".button-next");		//오른쪽버튼

let currentIndex = 0;		//현재 이미지
let sliderCount = slider.length;	//이미지 갯수
let sliderWidth = sliderImg.offsetWidth;	//이미지 가로값


// 이미지 총 길이 넣기
sliderInner.style.width = (sliderWidth * sliderCount) + "px";

// 이미지 움직이는 영역
function gotoSlider(num){
    sliderInner.style.transition = "all 400ms";
    sliderInner.style.transform = "translateX("+ -sliderWidth * num +"px)";
    currentIndex = num;
}

// 왼쪽버튼 클릭
sliderBtnPrev.addEventListener ("click", () => {
    let nextIndex = (currentIndex + sliderCount-1) % sliderCount
    gotoSlider(nextIndex);
})

// 오른쪽버튼 클릭
sliderBtnNext.addEventListener ("click", () => {
    let nextIndex = (currentIndex +1) % sliderCount
    gotoSlider(nextIndex);
});





// 고객서비스 탭 버튼

const $tabMenu = $(".serch-click a");
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






// 모바일 & 태블릿 메뉴 클릭 시 서브메뉴 


$(".mobile-menu-li").click(function (){
	let target =  $(this).find(".mobile-sub-menu-ul")
	if($(target).hasClass("active")){
		$(target).removeClass("active")
	}else{
		$(target).addClass("active")
	}
})



// 모바일 & 태블릿 메뉴바 클릭 시 메뉴바 


$(".hamburger").click(function(){
    $(".mobile-menu-ul").stop().slideDown(500);
    $(".mobile-x").stop().fadeIn(500);
})

$(".mobile-x").click(function(){
    $(".mobile-menu-ul").stop().slideUp(500);
    $(".mobile-x").stop().fadeOut(500);
})


$('header').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
});


// a tag click prevent 

$('.none-click').click(function(e)
{
	e.preventDefault();   
});

$('.menu-li-a').click(function(e)
{
	e.preventDefault();   
});

$('.sub-menu-li>a').click(function(e)
{
	e.preventDefault();   
});

$('.hover-text').click(function(e)
{
	e.preventDefault();   
});

$('.button1').click(function(e)
{
	e.preventDefault();   
});

$('.button2').click(function(e)
{
	e.preventDefault();   
});

$('.serch-click').click(function(e)
{
	e.preventDefault();   
});

$('.inquiry-button-text').click(function(e)
{
	e.preventDefault();   
});