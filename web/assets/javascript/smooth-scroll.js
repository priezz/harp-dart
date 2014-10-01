//- smooth scroll to anchor
$(function () {
	// $('.flip-items a[href*=#]:not([href=#])').click(function () {
	$('a[href*=#]:not([href=#])').click(function () {
		isFlipOther = $(this).parents('.flip-prev').length || $(this).parents('.flip-past').length || $(this).parents('.flip-next').length || $(this).parents('.flip-future').length;
		// hasFlipParent = $(this).parents('.flip-*').length;
		isFlipCurrent = $(this).parents('.flip-current').length;
		if (
			(isFlipCurrent || !isFlipOther) &&
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});