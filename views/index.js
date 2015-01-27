$(document).ready(function () {
	$('form#search').submit(function (event) {
		var query = encodeURIComponent($('#search-query').val());
		location.href = '/search?q=' + query;
		event.preventDefault();
	});

	$('#search-query').focus();

	if ($('#search-query').val() === '') {
		if (sessionStorage.getItem('query') !== '') {
			$('#search-query').val(sessionStorage.getItem('query'));
		}
	} else {
		sessionStorage.setItem('query', $('#search-query').val());
	}
});
