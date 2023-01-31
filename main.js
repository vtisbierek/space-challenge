  
  function setBackground(screenSize){
    switch ($("title").attr("class")) {
        case "page0":
            if(screenSize == 0){
                $("body").css("background-image","url(../space-challenge/assets/home/background-home-desktop.jpg)");
            } else if (screenSize == 1){
                $("body").css("background-image","url(../space-challenge/assets/home/background-home-tablet.jpg)");  
            } else if (screenSize == 2){
                $("body").css("background-image","url(../space-challenge/assets/home/background-home-mobile.jpg)");      
            }
            break;
        case "page1":
            if(screenSize == 0){
                $("body").css("background-image","url(../space-challenge/assets/destination/background-destination-desktop.jpg)");  
            } else if (screenSize == 1){
                $("body").css("background-image","url(../space-challenge/assets/destination/background-destination-tablet.jpg)"); 
            } else if (screenSize == 2){
                $("body").css("background-image","url(../space-challenge/assets/destination/background-destination-mobile.jpg)");     
            }
            break;
        case "page2":
            if(screenSize == 0){
                $("body").css("background-image","url(../space-challenge/assets/crew/background-crew-desktop.jpg)");  
            } else if (screenSize == 1){
                $("body").css("background-image","url(../space-challenge/assets/crew/background-crew-tablet.jpg)"); 
            } else if (screenSize == 2){
                $("body").css("background-image","url(../space-challenge/assets/crew/background-crew-mobile.jpg)");     
            }
            break;
        case "page3":
            if(screenSize == 0){
                $("body").css("background-image","url(../space-challenge/assets/technology/background-technology-desktop.jpg)");  
            } else if (screenSize == 1){
                $("body").css("background-image","url(../space-challenge/assets/technology/background-technology-tablet.jpg)"); 
            } else if (screenSize == 2){
                $("body").css("background-image","url(../space-challenge/assets/technology/background-technology-mobile.jpg)");     
            }
            break;
        default:
            break;
    }
  }

$(window).on('load resize', function(){
    var win = $(this);
    if (win.width() >= 1340) {
        setBackground(0);
    } else if (win.width() >= 768) {
        setBackground(1);
    } else {
        setBackground(2);
    }
});

if($("title").attr("class") == "page1"){
    $(".carousel-switcher").on("click",function(){
        $(".carousel-switcher").css("border-bottom","3px solid transparent");    
        $(this).css("border-bottom","3px solid white");

        var carouselSlide = $(this).attr("data-bs-slide-to") * 1;
        $("#destination-img-carousel").carousel(carouselSlide);
    })
} else if($("title").attr("class") == "page2"){
    $(".crew-btn").on("click",function(){

        var carouselSlide = $(this).attr("data-bs-slide-to") * 1;
        $("#crew-img-carousel").carousel(carouselSlide);
    })  
    $(".crew-img").height($(window).height() - ($(window).height() - $(".destination-content").height()));
} else if($("title").attr("class") == "page3"){
    $(".tech-btn").on("click",function(){

        var imageChange = "tech-img-" + (($(this).attr("data-bs-slide-to") * 1) + 1);
        console.log(imageChange);
        $(".tech-img").attr("class", ("tech-img " + imageChange));
    })  
}
