// JavaScript Document

$(window).ready(function(e) {
    $('a.forget-password').click(function(e) {
        $('div#form-forget-pass').css({'opacity':'1','pointer-events':'auto'});
		
		$('i.exit').click(function(e) {
            $('div#form-forget-pass').css({'opacity':'0','pointer-events':'none'});
        });
    });
});