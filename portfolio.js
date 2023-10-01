const $Menu = $(".menu-li a");
const $line = $(".menu-li::before");
const $nineSelect1 = $(".nine-select-li1");
const $nineSelect2 = $(".nine-select-li2");
const $nineSelect3 = $(".nine-select-li3");
const $popUpMini = $(".popUp-mini");
const $popUpSh = $(".popUp-sh");
const $popUpNeeke = $(".popUp-neeke");
const $popUpBg = $(".popUp-bg");
const $click = $(".click");
let direc = 0; //방향 전환을 위한 변수 정의
let wheelAction = false;
let windowHeight = $(window).innerHeight();
let $menu = $(".menu-li");
$(function(){
    let maxDirec = $("section").length-1;
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
                $menu.each(function(index, item){
                    $(item).removeClass("active");
                    $($(item).find("a")).removeClass("active")
                    if(direc == 0){
                        let target = $menu.get(0);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }else if(direc >= 1 && direc <= 3){
                        let target = $menu.get(1);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }else if(direc >= 4 && direc <=6){
                        let target = $menu.get(2);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }else if(direc == 7){
                        let target = $menu.get(3);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }else{
                        let target = $menu.get(4);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }
                })
            }
        }else if(eventDelta < 0 && wheelAction === false){
            // console.log("wheel down!");
            if(direc >= maxDirec){
                direc = maxDirec;
            }else{
                direc++;
                wheelAction = true;
                console.log(direc);
                wheelFunc($("html"));
                $menu.each(function(index, item){
                    $(item).removeClass("active");
                    $($(item).find("a")).removeClass("active")
                    if(direc == 0){
                        let target = $menu.get(0);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }else if(direc >= 1 && direc <= 3){
                        let target = $menu.get(1);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }else if(direc >= 4 && direc <=6){
                        let target = $menu.get(2);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }else if(direc == 7){
                        let target = $menu.get(3);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }else{
                        let target = $menu.get(4);
                        $(target).addClass("active");
                        $($(target).find("a")).addClass("active")
                    }
                })
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

$Menu.each(function(index, item){
    $(item).click(function(){
        $Menu.each(function(index, item){
            $(item).removeClass("active");
        })
        $(item).addClass("active");
        })
})

$nineSelect1.click(function(){
    $popUpMini.addClass("active");
    $(".popUp-bg").addClass("active");
})

$click.click(function(){
    $popUpMini.removeClass("active");
    $popUpSh.removeClass("active");
    $popUpNeeke.removeClass("active");
    $(".popUp-bg").removeClass("active");
})

$popUpBg.click(function(){
    $popUpMini.removeClass("active");
    $popUpSh.removeClass("active");
    $popUpNeeke.removeClass("active");
    $(".popUp-bg").removeClass("active");
})



$nineSelect2.click(function(){
    $popUpSh.addClass("active");
    $(".popUp-bg").addClass("active");
})

$nineSelect3.click(function(){
    $popUpNeeke.addClass("active");
    $(".popUp-bg").addClass("active");
})

$('.nine-select-li1').click(function(e)
{
	e.preventDefault();   
});
$('.nine-select-li2').click(function(e)
{
	e.preventDefault();   
});
$('.nine-select-li3').click(function(e)
{
	e.preventDefault();   
});



$(".home-button a").click(function(e){
    e.preventDefault();
    direc = 0;
    $menu.each(function(index, item){
        $(item).removeClass("active");
        $($(item).find("a")).removeClass("active");
        if(index == 0){
            $(item).addClass("active");
            $($(item).find("a")).addClass("active");
        }
    })
    wheelFunc($("html"));
})


$('.page-indicator > .menu-ul > .menu-li > a').click(function(e) {
    e.preventDefault();
    console.log($(this));
    var href = $(this).attr('href');

    console.log($menu);
    var targetTop = $(href).offset().top;
    
    /*
    // 한번에 가도록 하는 방법
    $(window).scrollTop(targetTop);
    */
    
    $('html').stop().animate({scrollTop:targetTop}, 300);
    $menu.each(function(index, item){
        let target = $(item).find("a");
        if($(target).hasClass('active')){
            switch(index){
                case 0:
                    direc = 0;
                    break;
                case 1:
                    direc = 1;
                    break;
                case 2:
                    direc = 4;
                    break;
                case 3:
                    direc = 7;
                    break;
                case 4:
                    direc = 8;
                    break;
            }

        }
    })

    

});

// function Page__updateIndicatorActive() {
//     var scrollTop = $(window).scrollTop();
    
//     // 역순으로 검색해야 편하다
//     $($('.page').get().reverse()).each(function(index, node) {
        
//         var $node = $(this);
//         var offsetTop = parseInt($node.attr('data-offset-top'));
        
//         if ( scrollTop >= offsetTop ) {
//             // 기존 녀석에게 활성화 풀고
//             $('.page-indicator > menu-ul > menu-li > a.active').removeClass('active');
//             // 해당하는 녀석에게 활성화 넣고
            
//             var currentPageIndex = $node.index();
//             $('.page-indicator > menu-ul > menu-li > a').eq(currentPageIndex).addClass('active');
            
//             $('html').attr('data-current-page-index', currentPageIndex);
//             // direc = Math.abs(index - 4);
            
//             return false; // 더 이상 다른 페이지를 검사하지 않는다.
//         }
//     });
// }

// // 각 페이지의 offsetTop 속성을 업데이트
// function Page__updateOffsetTop() {
    
//     $('.page').each(function(index, node) {
//         var $page = $(node);
//         var offsetTop = $page.offset().top;
         
//         $page.attr('data-offset-top', offsetTop);
//     });
    
//     // 계산이 바뀌었으니까, 다시 상태 업데이트
//     Page__updateIndicatorActive();
// }

// function Page__init() {
//     Page__updateOffsetTop();
// }

// // 초기화
// Page__init();

// // 화면이 리사이즈 할 때 마다, offsetTop을 다시계산
// $(window).resize(Page__updateOffsetTop);

// // 스크롤이 될 때 마다, 인디케이터의 상태를 갱신
// $(window).scroll(Page__updateIndicatorActive);



// $('.popUp').on('scroll touchmove mousewheel', function(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     return false;
// });

