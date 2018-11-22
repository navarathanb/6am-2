$(document).ready(function(){
    
    var widthLi = $(".slider ul li").width();//1000
    var licount = $(".slider ul li").length;//6
    var widthUl = widthLi * licount;//6000

    $(".slider ul").css({width:widthUl,marginLeft: -widthLi});

    $(".prev").click(function(){
        $(".slider ul").animate({left: widthLi},2000,function(){
            $(".slider ul li:last-child").prependTo("ul");
            $(".slider ul").css("left","");
        })
    })
    $(".next").click(function(){
        $(".slider ul").animate({left: -widthLi},2000,function(){
            $(".slider ul li:first-child").appendTo("ul");
            $(".slider ul").css("left","");
        })
    })
})