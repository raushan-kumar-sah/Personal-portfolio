$("#fifth .portfolio .menu li a").click(function(){
    $("#fifth .portfolio .menu li a").removeClass("active");
    $(this).addClass("active");
    $("#fifth .portfolio .common").removeClass("visible");
    $("." + $(this).attr("data")).addClass("visible");
});
AOS.init({
    offset:200,
    duration:500,
    easing: 'ease-in-out',
    mirror: false,
});
$("#first .head nav ul li a").click(function(){
    $("#first .head nav ul li a").removeClass("active");
    $(this).addClass("active");
});