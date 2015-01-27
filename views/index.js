$(document).ready(function () {
	$('form#search').submit(function (event) {
		var query = encodeURIComponent($('#search-query').val());
		location.href = 'search?q=' + query;
		event.preventDefault();
	});
});
