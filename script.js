// Прокрутка от клика на меню до контента

$('a[href^="#"]').bind("click", function (e) {
  var anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top - 120,
      },
      1500
    );

  e.preventDefault();
});
