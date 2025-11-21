$(document).ready(function() {
    // Select all 'tr' elements that are descendants of the element with id "table1"
    $("#table1 tr").click(function() {
        // Change the background color of the clicked row to green
        $(this).css("background-color", "green");
    });
});