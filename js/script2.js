$(document).ready(function() {
    // Select all 'tr' (table row) elements inside the table with id "myTable"
    $("#myTable tr").click(function() {
        // 'this' refers to the specific 'tr' element that was clicked
        // .css() is used to change the background color to a light blue
        $(this).css("background-color", "#cce5ff");
    });
});