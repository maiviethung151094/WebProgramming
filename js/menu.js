// JavaScript Document

$(window).ready(function(e) {
    $('#menu>ul>li>ul.main-menu').hide();
	
	$('#menu>ul>li>ul.main-menu>li>ul.sub-menu').hide();
	
	$('#menu>ul>li>a').click(function(e) {
        $('#menu>ul>li>ul.main-menu').slideToggle(500);
    });
	
	$('#menu>ul>li').mouseleave(function(e) {
        $('#menu>ul>li>ul.main-menu').slideUp(1000);
    });
	
	$('#menu>ul>li>ul.main-menu>li>a').hover(function(e) {
		if($(this).attr('class')!='actived'){
    		$(this).css({'border-left-color':'#3c8dbc'});
		}
	},
	function(){
		if($(this).attr('class')!='actived'){
    		$(this).css({'border-left-color':'transparent'});
		}
	});

	$('#menu>ul>li>ul.main-menu>li>a').click(function(e) {
		if($(this).attr('class')!='actived'){
			$('#menu>ul>li>ul.main-menu>li>a').css({'border-left-color':'transparent'});
			$(this).css({'border-left-color':'#3c8dbc'});
			$('#menu>ul>li>ul.main-menu>li>a>i.put-right2').css({'transform':'rotate(0deg)'});
			$(this).find('i.put-right2').css({'transform':'rotate(-90deg)'});
			$('#menu>ul>li>ul.main-menu>li>a.actived').next().slideUp(500);
			$('#menu>ul>li>ul.main-menu>li>a').removeClass('actived');
			$(this).addClass('actived').next().slideToggle(500);
		}else{
			$(this).next().slideToggle(500);
			$(this).find('i.put-right2').css({'transform':'rotate(0deg)'});
			$(this).removeClass('actived');
			$(this).css({'border-left-color':'transparent'});
		}
    });
});

$(window).ready(function(e) {
	$(window).scroll(function(e) {
        if($(window).scrollTop()>=100){
			$('#menu').addClass('fixed_menu');
		}else
			$('#menu').removeClass('fixed_menu');
    });
});

$(window).ready(function(e) {
	
	$(window).scroll(function(e) {
        if($(window).scrollTop()>=100){
			$('#scrollTop').fadeIn(500);
		}else{
			$('#scrollTop').fadeOut(500);
		}
    });
	
	$('#scrollTop>i').click(function(e) {
		$('body').animate({
            scrollTop: 0
        },2000);
    });
});



















