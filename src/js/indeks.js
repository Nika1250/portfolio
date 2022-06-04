
$(".toggle").click(function() {
    $(".toggle span").toggleClass("fa-bars fa-xmark");
    $(".fullscreen-nav").toggle();
    console.log("test");
});

$("ul li a").click(function() {
    $(".fullscreen-nav").hide();
    $(".toggle span").removeClass("fa-bars fa-xmark");
    $(".toggle span").addClass("fa-bars");
});