// JavaScript Document

$(window).ready(function(e) {
    $('a.forget-password').click(function(e) {
        $('div#form-forget-pass').css({'opacity':'1','pointer-events':'auto'});
		$('div#form-forget-pass>div.form-main').css({'animation':'slideInDown 1s 1'});
		
	$('i.exit').click(function(e) {
		$('div#form-forget-pass>div.form-main').css({'animation':'none'});
		$('div#form-forget-pass').css({'opacity':'0','pointer-events':'none'});
	});
    });
});