$(document).ready(function() {


$('.readmore').delay().show(0);

	$(".readmore").click(function(){
		$("#show-this-on-click").slideDown();
	})
	});

$('.readmore').delay().hide(0);

$(".readless").click(function(){
		$("#show-this-on-click").slideUp();
	})

$(".readless").delay().show(0);

$(".readless").click(function(){
		$("#show-this-on-click").slideUp();
	})

$('.readmore').on('click',function(e) {
     e.preventDefault(); 
     e.stopPropagation(); 
   
   return false;  

$('.readless').on('click',function(e) {
     e.preventDefault(); 
     e.stopPropagation(); 
   
   return false;        


})

});



console.log('this is working');