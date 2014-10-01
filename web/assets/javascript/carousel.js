//- cover flow
$(function () {
	$('.flipster').flipster({
		itemContainer: 'ul', // Container for the flippin' items.
		itemSelector: 'li', // Selector for children of itemContainer to flip
		style: 'carousel', // Switch between 'coverflow' or 'carousel' display styles
		start: 0, // Starting item. Set to 0 to start at the first, 'center' to start in the middle or the index of the item you want to start with.

		enableKeyboard: true, // Enable left/right arrow navigation
		enableMousewheel: true, // Enable scrollwheel navigation (up = left, down = right)
		enableTouch: true, // Enable swipe navigation for touch devices

		enableNav: false, // If true, flipster will insert an unordered list of the slides
		enableNavButtons: true, // If true, flipster will insert Previous / Next buttons

		onItemSwitch: function () {}, // Callback function when items are switches
	});
	$("#series-coverflow").css('display', 'block');
});