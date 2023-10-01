

let mainText = document.querySelector(".half1>a");

window.addEventListener("scroll", function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if (value > 500) {
        mainText.style.animation = "disappear 2s ease-out forwards";
    }else{
        mainText.style.animation='slide 2s ease-out'
    }
});


$(".none-click").click(function(e){
    e.preventDefault();
});
