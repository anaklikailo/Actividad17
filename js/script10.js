$(document).ready(function() {
    $("#btnHead").click(function() {
        alert($("head").html());
    });
    $("#btnBody").click(function() {
        alert($("body").html());
    });
});