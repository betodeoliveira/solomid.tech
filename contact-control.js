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
        console.log($(this).val());
        if ($(this).val() == "") {
            $(this).css("color", "##a0a0a0");
        }
        else {
            $(this).css("color", "#686976");
        }
    });
});