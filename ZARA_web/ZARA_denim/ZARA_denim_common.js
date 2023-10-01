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