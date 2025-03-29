
/*
$(document).ready(function () {
  // grab the initial top offset of the navigation
  var stickyNavTop = $(".nav").offset().top;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  };
  

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function () {
    stickyNav();
  });
});
*/

$(".scroll").on("click", function (event) {
  event.preventDefault();
  $("html,body").animate({
    scrollTop: $(this.hash).offset().top - 50,
  });
});

$("#navbarSupportedContent .nav-item .nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

//counter js

let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter);

arr.map((item) => {
  let count = item.innerHTML;
  item.innerHTML = 0;
  let counterValue = 0; //10

  function counterUP() {
    item.innerHTML = counterValue++;

    if (counterValue > count) {
      clearInterval(counting);
    }
  }

  let counting = setInterval(() => {
    counterUP();
  }, item.dataset.speed / count);
});

AOS.init();

$(".owl-two").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

// bottom to up
$(window).on("scroll", function () {
  var scrolled = $(window).scrollTop();
  if (scrolled > 500) $(".go-top").addClass("active");
  if (scrolled < 500) $(".go-top").removeClass("active");
});


$(document).ready(function() {
  $("[data-fancybox]").fancybox({
      // Options can be added here
  });
});