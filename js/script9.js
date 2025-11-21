$(document).ready(function() {
    $("#add").click(function() {
        $("thead").addClass("thead-style");
        $("tbody").addClass("tbody-style");
    })
    $("#remove").click(function() {
        $("thead").removeClass("thead-style");
        $("tbody").removeClass("tbody-style");
    });
});