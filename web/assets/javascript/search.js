var resultsCount = 0;

$("#search-form").submit(function (event) {
	event.preventDefault();
	resultsCount = 0;
	var query = $("#search-query").val();
	// When submitted, send the user to pages/search.html with the query string.
	window.location = "/search/#stq=" + query;
});