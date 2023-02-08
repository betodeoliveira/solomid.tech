$(".card-item.is-link").on("mouseenter", function() {
	$(this).find(".button-text.is-icon").toggleClass("hovered");
});
$(".card-item.is-link").on("mouseleave", function() {
	$(this).find(".button-text.is-icon").toggleClass("hovered");
});