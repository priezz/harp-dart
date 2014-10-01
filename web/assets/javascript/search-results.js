resultsCount = 0;

//- Use Swiftype's custom render function so we can set up basic results with the title and body
//- Swiftype will automatically put <em> tags around any words/phrases that match our results
var resultRenderFunction = function (document_type, item) {
	++resultsCount;

	var title = item['highlight']['title'] || item['title'];
	var delimiterPos = title.indexOf('|');
	if (delimiterPos > -1) title = title.substring(0, delimiterPos - 1);
	var url = item['url'];
	var body = item['highlight']['body'] || item['body'].substring(0, 300);

	var resultNo = resultsCount + '.'; // значения почему-то удваиваются - пока не используем
	resultNo = '* ';
	var out =
		'<div class="search-result">' +
		'	' + resultNo + ' <a href="' + url + '"><span class="search-result-header">' + title + '</span> (<span class="search-result-url">' + url + '</span>)</a>' +
		'	<p><a href="' + url + '">' +
		'		' + body +
		'	</a></p>' +
		'	<hr/>' +
		'</div>';

	return out;

};

//- Replace the search input with this one.
//- That will make sure that it renders immediately on this page.
$("#search-query").swiftypeSearch({
	renderFunction: resultRenderFunction,
	engineKey: "x_WZVahpxG84W8aDC6tx", // SWIFTYPE_KEY here
	resultContainingElement: "#search-results"
});