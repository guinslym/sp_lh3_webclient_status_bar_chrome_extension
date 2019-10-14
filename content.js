// content.js
//alert("Hello from your Chrome extension!")

window.addEventListener('load', function () {

    var sel = $(".dropdown.open.btn-group.btn-group-default")
    
    sel.css("background-color","blue");

    //if ($("#user-show-dropdown-button > div > span").firstElementChild.alt =="busy"){}

    $("#user-show-dropdown-button > div > span").change(function () {
        console.log("change");
    });


});