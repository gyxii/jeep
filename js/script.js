$(function(){
    $("#ham").click(function(){
        $("nav").animate({"top":"0vh"});
        $("#dim").show();
        $(this).hide();
        $("#close").show();
    });

    $("#close").click(function(){
        $("nav").animate({"top":"-50vh"});
        $("#dim").hide();
        $("#ham").show();
        $("#close").hide();
    });
    AOS.init();

    //클릭시 부드럽게 이동하는 소스
    $(".scroll_move").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });


    //상단메뉴 고정
    var offset = $("#header_wrap").offset();
    $(window).scroll(function(){
        if ($(document).scrollTop() > offset.top) {
            $("#header_wrap").addClass("fixed");
        }
        else {
            $("#header_wrap").removeClass("fixed");
        }
    });
});


// top 버튼
function btn_mv_up(oj) {
    if(!oj) return false;
    var o = $(oj);
    var p = $(window).scrollTop();
    if(p > 300){ o.fadeIn('slow'); }    
    else if(p < 300){ o.fadeOut('slow'); }   
}

$(document).scroll(function(){
    btn_mv_up('.btn_top')}).on('click', '.btn_top', function() {
    $("html, body").animate({scrollTop:0}, 'slow');
});



