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