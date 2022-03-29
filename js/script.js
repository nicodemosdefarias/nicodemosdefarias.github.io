$(document).ready(function() {
  $(".mudar-idioma").on("click", function() {
    var switchTo = $(this).attr("id");
    $(".idioma").removeClass('ativo');
    $(".idioma#" + switchTo).addClass('ativo');
  });
});
