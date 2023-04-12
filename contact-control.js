var Webflow = Webflow || [];
Webflow.push(function () {
    let urlParams = new URLSearchParams(window.location.search);
    let contactType = urlParams.get('type');
    let serviceType = urlParams.get('service');
    let updateUrl = false;

    if (contactType) {
        if (contactType === 'Sales') {
            $(".contact_tab-item.is-sales").triggerHandler('click');
        }
        else {
            $(".contact_tab-item.is-general").triggerHandler('click');
        }
    }

    if (serviceType) {
        $("#sales-service").val(serviceType);
        $("#sales-service").change();
    }
});

document.addEventListener("DOMContentLoaded", function (e) {
    // Get all elements that has the "attr-select-field" attribute
    $("[attr-select-field]").each(function (index) {
        // Get the current color
        let selectedColor = $(this).css("color");
        // Get the placeholder color
        let placeholderselectedColor = $(this).attr("attr-select-field");
        // Update the current color to match the placeholder color
        $(this).css("color", placeholderselectedColor);
        // Verify whenever the select value changes
        $(this).change(function () {
            // If the value is empty set the color to be he pleceholder color
            if ($(this).val().length <= 0) {
                $(this).css("color", placeholderselectedColor);
            }
            // If the value isn't empty the color should be the selected color
            else {
                $(this).css("color", selectedColor);
            }
        });
    });
 });