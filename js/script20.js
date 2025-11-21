$(document).ready(function () {
      $("#bloqueTexto").click(function () {
            $(this).hide(2500, function () {
                  $(this).show(2500);
            });
      });
});