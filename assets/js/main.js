$(document).ready(function () {
  $('.project-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $('#project-next')
  });

  $('.project-slider').on('init reInit afterChange', function (event, slick) {
    $('.slick-slide').each(function () {
      if ($(this).hasClass('slick-active')) {
        $(this).removeAttr('aria-hidden').removeAttr('inert');
      } else {
        $(this).attr('inert', '');
      }
    });
  });

  let lastScrollY = $(window).scrollTop();

  $(window).on("scroll", function () {
    let currentScrollY = $(window).scrollTop();

    if (currentScrollY > lastScrollY) {
      $("header").addClass("hide"); // Ẩn header khi scroll xuống
    } else {
      $("header").removeClass("hide"); // Hiện header khi scroll lên
    }

    lastScrollY = currentScrollY;
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("section").forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse"
      }
    });
  });

});
