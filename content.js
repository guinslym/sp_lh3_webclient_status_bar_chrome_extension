// content.js
//alert("Hello from your Chrome extension!")

$(window).on('load', function() {

    var staffclient = $("#v-split-52 > div.display-flex.re-v-split-top > div > nav > div > div > div:nth-child(1)");
    var inputMessageBar = $("#v-split-52 > div.display-flex.re-v-split-top > div > nav > div > div > div:nth-child(2)");

    list = staffclient.parentElement;
    list.insertBefore(inputMessageBar, staffclient);

});
