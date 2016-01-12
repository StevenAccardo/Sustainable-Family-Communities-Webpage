$(document).ready(function(){
	$('a').click(function(e) {
		e.preventDefault();

		$("#videoplayer").attr("src", $(this).attr("href"));
	})
});