$(function () {
  //   $("#menu").on("click", "a", function (event) {
  //     //отменяем стандартную обработку нажатия по ссылке
  //     event.preventDefault();

  //     //забираем идентификатор бока с атрибута href
  //     var id = $(this).attr("href"),
  //       //узнаем высоту от начала страницы до блока на который ссылается якорь
  //       top = $(id).offset().top;

  //     //анимируем переход на расстояние - top за 1500 мс
  //     $("body,html").animate({ scrollTop: top }, 1000);
  //   });
  $(window).scroll(function () {
    // this will work when your window scrolled.
    var height = $(window).scrollTop(); //getting the scrolling height of window
    if (height > 900) {
      $(".header-top").addClass("fixed");
      $(".menu").css({ background: "#1b1b1b" });
    } else {
      $(".header-top").removeClass("fixed");
      $(".menu").css({ background: "transparent" });
    }
  });

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    console.log(elementOffset);

    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  });
});
