// JavaScript Document

$(window).ready(function(e) {
	var totalWidth=0;
	var position=new Array();
	
	$('#slides .slide').each(function(index) {
		position[index]=totalWidth;
        totalWidth+=$(this).width();
    });
	
	$('#slides').width(totalWidth);
		
	var totalImage=$('#slides .slide').length;
	var curIndex=0;
	
	setInterval(
		function(){
			if(curIndex<totalImage){
				curIndex++;
				$('#slides').animate({'marginLeft':-position[curIndex]});
			}else
			{
				curIndex=0;
				$('#slides').animate({'marginLeft':-position[curIndex]});
			}
		},5000
	);
});

/* Cái slide này dành cho cái chạy chạy bên chỗ chi tiết sản phẩm ấy*/
$(window).ready(function(e) {
	var tw=0;
	var pos=new Array();
	
	$('div.product-image>.gallery-small-image>.slides>.slide-image').each(function(index) {
		pos[index]=tw;
        tw+=$(this).width();
    });
	
	$('div.product-image>.gallery-small-image>.slides').width(tw);
	
	var tImage=$('div.product-image>.gallery-small-image>.slides>.slide-image').length;
	var cur=0;
	setInterval(
		function(){
			if(cur<tImage){
				cur++;
				$('div.product-image>.gallery-small-image>.slides').animate({'marginLeft':-pos[cur]});
			}else
			{
				cur=0;
				$('div.product-image>.gallery-small-image>.slides').animate({'marginLeft':-pos[cur]});
			}
		},3000
	);
});