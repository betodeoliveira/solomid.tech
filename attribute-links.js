// Waits webflow and then adds the w--current class to the attributes links
var Webflow = Webflow || [];
Webflow.push(function () {
  // Get all elements that has the "attr-link" attribute
   const attrLinks = document.querySelectorAll('[attr-link]');
   // Checks every element that has the attribute
   attrLinks.forEach((link) => {
       // Gets the value of the attribute
       const linkValue = link.getAttribute('attr-link');
       // Check if the values exists on the url
       if (window.location.href.includes(linkValue)) {
           // If it exists add the w--current class to the link
           $(link).addClass("w--current");
       }
   });
});