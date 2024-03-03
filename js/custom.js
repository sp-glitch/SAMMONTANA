$(function () {
  feather.replace();

  $("#content").fullpage({
    scrollOverflow: false,
    responsiveWidth: 1600,
    navigation: true,

    anchors: ["main", "sec1", "sec2", "sec3", "foot"],

    afterLoad: function (origin, destination, direction, trigger) {
      console.log(destination.index);
      let n = destination.index;
      if (n > 0) {
        $("#header").addClass("on");
      } else {
        $("#header").removeClass("on");
      }
    },
  });

  $("#header .mobile_btn").on("click", function () {
    $(this).toggleClass("on");
    $(".gnb").toggleClass("on");
    $(".icon_area").toggleClass("on");
  });
  $(window).on("resize", function () {
    $("#header .mobile_btn").removeClass("on");
    $(".gnb").removeClass("on");
    $(".icon_area").removeClass("on");
  });
  $(".gnb").on("wheel touchmove", function (e) {
    if ($(this).hasClass("on")) {
      e.preventDefault();
    }
  });

  $(".icon_area").on("wheel touchmove", function (e) {
    if ($(this).hasClass("on")) {
      e.preventDefault();
    }
  });

  var MAIN_SLIDE = new Swiper(".main_slide .slide_wrap", {
    spaceBetween: 30,
    effect: "fade",
    slideActiveClass: "on",
    loop: true,
    speed: 1000,
    on: {
      slideChangeTransitionStart: function () {
        console.log(this.realIndex);
        let n = this.realIndex;
        $(".main_slide .slide_txt_area")
          .eq(n)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p",
    },

    autoplay: {
      disableOnInteraction: false,
    },
  });

  let scrollNum = 0;
  function scroll() {
    $(".scroll span").eq(scrollNum).addClass("on").siblings().removeClass("on");
    scrollNum++;
    if (scrollNum > 2) {
      scrollNum = 0;
    }
  }

  setInterval(scroll, 600);

  $(".main_menu .main_menu_l").slick({
    arrows: false,
    fade: true,
    slidesToShow: 1,
    asNavFor: ".main_menu .main_menu_r, .main_menu .main_menu_txt",

    responsive: [
      {
        breakpoint: 1260,
        settings: {
          fade: false,
          slidesToShow: 4,
          asNavFor: ".main_menu .main_menu_txt",
        },
      },
      {
        breakpoint: 769,
        settings: {
          fade: false,
          slidesToShow: 2,
          asNavFor: ".main_menu .main_menu_txt",
        },
      },
      {
        breakpoint: 500,
        settings: {
          fade: false,
          slidesToShow: 1,
          asNavFor: ".main_menu .main_menu_txt",
        },
      },
    ],
  });

  $(".main_menu .main_menu_r").slick({
    arrows: false,
    slidesToShow: 4,
    asNavFor: ".main_menu .main_menu_l",
  });

  $(".main_menu .main_menu_txt").slick({
    arrows: false,
    fade: true,
    asNavFor: ".main_menu .main_menu_l",
  });

  $(".bt_left").on("click", function () {
    $(".main_menu .main_menu_l").slick("slickPrev");
  });

  $(".bt_right").on("click", function () {
    $(".main_menu .main_menu_l").slick("slickNext");
  });

  $(".main_tab li").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index();
    $(".tab_content .swiper")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
  });

  var secondSwiper = new Swiper(".main_content_bottom .swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    slideActiveClass: "on",
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-pp",
      prevEl: ".swiper-button-nn",
    },

    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      430: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  });
});
