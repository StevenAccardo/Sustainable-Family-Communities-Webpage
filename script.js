$(document).ready(function(){

	//Video Switch function//
	$('a').click(function(e) {
		e.preventDefault();

		$("#videoplayer").attr("src", $(this).attr("href"));
	});

	$('.button').hover(function() {
		$(this).css({'background-color':'#FFF', 'color': '#3366cc'});
	}, function() {
		$(this).css({'background-color':'#3366cc', 'color':'#FFF'});
	}
	);

});
