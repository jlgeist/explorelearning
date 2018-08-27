$(document).ready(function(){
	// Drag & Drop
	$('#sortable').sortable({
		delay: 900,
		cursor: 'move'
	});
	$('#sortable').disableSelection();

	// Hold Event
	timeOut = 0;
	$('.element').on('mousedown touchstart', function(e) {
		var activeelement = this;
		timeOut = setInterval(function() {
		$(activeelement).addClass('highlight');
		}, 900);
	}).bind('mouseup', function() {
		$(this).removeClass('highlight');
		clearInterval(timeOut);
	});
});