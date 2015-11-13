//JavaScript for INDEX
$(window).ready(function(e) {
	$('.sidebar-menu>li>.sub_menu').hide();
	
	$('.sidebar-menu>li>a').click(function(e) {
        $(this).next().slideToggle();
    });
});

//JavaScript for HOA DON
$(window).ready(function(e) {
	$('#content .box table tbody tr:even').css({'backgroundColor':'#f9f9f9'});    
});


