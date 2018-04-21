// this event will trigger when a new todo is entered
$("input[type='text']").on('keypress', function(event){
	if(event.which === 13){
		// code to run if enter is pressed
		var todoText = $(this).val();
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
		$(this).val("");
	}
});

// this will delete the li when a user clicks on the trash icon and the li will fade away
$("ul").on("click", 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		// this code executes after the fading is done
		$(this).remove();
	});
	event.stopPropagation();
});

$('ul').on('click','li',  function(){
	$(this).toggleClass("completed");
});


$('.fa-plus').on("click", function(){
	$('input').fadeToggle();
});

$(document).ready(function(){
	console.log('document loaded.');
});
