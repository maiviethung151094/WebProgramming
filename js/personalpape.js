// JavaScript Document

$(window).ready(function(e) {
	$('i.cart2').click(function(e) {
		$('div#nav-info>div').removeClass('nav-actived');
		$('div.nav-card-info').addClass('nav-actived');
    });
	
	$('i.home').click(function(e) {
		$('div#nav-info>div').removeClass('nav-actived');
		$('div.nav-person-info').addClass('nav-actived');
    });
	
	$('div#nav-info>div.nav-person-info>table tr td a.change-pass').click(function(e) {
		$('div#form-change-pass>div.form-main').css({'animation':'slideInDown 1s 1'});
        $('div#form-change-pass').css({'opacity':'1','pointer-events':'auto'});
    });
	
	$('div#form-change-pass>div.form-main>div.fm-head>i.exit').click(function(e) {
		$('div#form-change-pass>div.form-main').css({'animation':'none'});
		$('div#form-change-pass').css({'opacity':'0','pointer-events':'none'});
    });
	
	
	$('div#nav-info>div.nav-person-info>table th a.edit-info').click(function(e) {
        $('div#form-edit-info>div.form-main').css({'animation':'slideInDown 1s 1'});
        $('div#form-edit-info').css({'opacity':'1','pointer-events':'auto'});
    });
	
	$('div#form-edit-info>div.form-main>div.fm-head>i.exit').click(function(e) {
        $('div#form-edit-info>div.form-main').css({'animation':'none'});
        $('div#form-edit-info').css({'opacity':'0','pointer-events':'none'});
    });
});

$(window).ready(function(e) {
    var mouse_is_outside=true;
	
	$('div.form-main').hover(
		function(){
			mouse_is_outside=false;
		},
		function(){
			mouse_is_outside=true;
		}
	)
	
	$('div#form-change-pass').mouseup(function(e) {
        if(mouse_is_outside){
			$(this).find('div.form-main').css({'animation':'none'});
			$(this).css({'opacity':'0','pointer-events':'none'});
		}
    });
});

