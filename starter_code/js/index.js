$(document).ready(function() {

$(".readmore").click(function(){
		$("#show-this-on-click").slideDown();
	})
$('.readmore').on('click', function(){
	$('.readless').show()
	$('.readmore').hide();
	})

$(".readless").on('click', function(event){
	$("#show-this-on-click").slideUp("slow");
	$("#show-this-on-click").hide();
	$(".readless").hide();
	$('.readmore').show();
	event.preventDefault();

})

$('.learnmore').click(function(){
	$("#learnmoretext").slideDown();
	$('.learnmore').hide();
	event.preventDefault();
})
	});

$('.readmore').on('click',function(e) {
     e.preventDefault(); 
     e.stopPropagation(); 

 $('#register').click(function(){
 	event.preventDefault();
 })
  
  $('.password')
});

//my personal notes on this assignment

// $('.readmore').delay().hide(0);

// $(".readless").delay().show(0);
// $('.readless').on('click', '.readmore', function(){

// 	})

// $(".readless").click(function(){
// 		$("#show-this-on-click").slideUp();
// 	})
// $(".readless").on('click',function(){
// 		$(".readless hide").slideUp();
	// })