$(document).ready(function() {
    $("#caja").css({
        "width": "800px",
        "height": "70px",
        "background-color": "lightpink",
        "border": "2px solid black",
    });

    let expandido = false;


    $("#caja").on("dblclick", function() {
      if (!expandido) {
        $(this).css({
          "width": "250px",
          "height": "250px"
        });
      } else {
        $(this).css({
          "width": "800px",
          "height": "70px"
        });
      }
      expandido = !expandido;
    });
});