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


$(".form_input.is-select-input").each(function (index) {
    $(this).change(function () {
        if ($(this).val().length <= 0) {
            $(this).css("selectedColor", "#a0a0a0");
        }
        else {
            $(this).css("selectedColor", "#686976");
        }
    });
});