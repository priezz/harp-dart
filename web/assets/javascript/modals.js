//- modal books descriptions on click
$(function () {
	var wrapper = "#modal-wrapper";
	var modalOuter = "#modal-outer";
	var modalInner = "#modal-inner";

	$("[id^=item-]").click(function (e) {
		var id = $(this).attr("id").slice(5);
		$.ajax({
			url: "/path/to/inner/html.html", //path to inner HTML
			dataType: "text",
			success: function (data) {
				$(modalInner).html(data);
				$("body").addClass("modal-open");
				$(wrapper).css('display', 'block');
				$("html").hide().show(0); // redraw page content
				$(modalOuter).addClass("visible");
			}
		});
	});
	$("#bookinfo-wrapper").click(function (e) {
		if ($(e.target).closest("#bookinfo-modal").length === 0 || $(e.target).closest(".close").length !== 0) {
			$(modalOuter).removeClass("visible");
			$(wrapper).css('display', 'none');
			$("body").removeClass("modal-open");
			$("html").hide().show(0);
		};
	});
});