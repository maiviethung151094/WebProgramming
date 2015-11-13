// JavaScript Document

$(window).ready(function(e) {
    $('#group-header-info>ul.group-header-info-user>li>a.get-form-login').click(function(e) {
        $('#group-header-info>ul.group-header-info-user>li>form.form-login').slideToggle(700);
    });
	
	$('form.form-login').mouseleave(function(e) {
        $(this).slideUp(700);
    });
});