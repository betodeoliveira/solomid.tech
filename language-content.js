let hostname;
let subdomain
let englishContent;
let portugueseContent;

document.addEventListener("DOMContentLoaded", function () {
    hostname = window.location.hostname;
    subdomain = hostname.split('.')[0];
    englishContent = $("[language=en");
    portugueseContent = $("[language=ptbr");
    checkContent();
});

function checkContent() {
    if (subdomain === "pt-br") {
        $(englishContent).remove();
        $(portugueseContent).css("display", "inline");
    }
    else {
        $(englishContent).css("display", "inline");
        $(portugueseContent).remove();
    }
}