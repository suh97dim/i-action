$(function () {

  $(".mask-phone").mask("+7 (999) 999-99-99");

  $('.hamburger').click(function () {
    if ($('.hamburger').hasClass('collapsed')) {
      $(this).removeClass('collapsed');
      $('.page-header-menu').addClass('show');
    }
    else {
      $(this).addClass('collapsed');
      $('.page-header-menu').removeClass('show');
    }
  });
  $('.navigation-list--link').click(function () {
    $(this).parent().parent().parent().removeClass('show');
    $('.hamburger').addClass('collapsed');
  });
  $('.banner-form-control').focus(function () {
    $(this).parent().addClass('focus');
  }).blur(function () {
    $(this).parent().removeClass('focus');
  });

  // scroll to id
  $(".js-scroll-to").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href").replace("#", "");
    $("html, body").animate(
      {
        scrollTop: $("#" + id).offset()
      },
      0
    );
  });

  if ($(window).width() < 764) {
    $('.marquee').marquee({
      duration: 12000,
      allowCss3Support: true,
      gap: 50,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
    });
  } else {
    $('.marquee').marquee({
      duration: 32000,
      allowCss3Support: true,
      gap: 50,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
    });
  }
//select tab в мобилке
  $('.select-nav').on('change', function (e) {
    var optionSelected = $(this).find(':selected').data('target')
    $('a[href="' + optionSelected + '"]').tab('show');
  });


//блок с кейсами и новостями, 8 по умолчанию, кнопка подгружает еще 8
  $(function () {
    var button = $(`.show-content`);
    for (let i = 1; i < 9; i++) {
      var list = $(`#tab-${i} .col-sm-6`);
      var numToShow = 8; //сколько показывать элементов
      let buttonList = $(`#tab-${i}  .show-content`);
      buttonList.hide()
      var numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        buttonList.show();
      }
      list.slice(0, numToShow).show();
    }
    button.click(function () {
      var parent = $(this).closest(".tab-pane")
      let list = parent.find('.col-sm-6')
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      var numInList = list.length
      if (nowShowing >= numInList) {
        $(this).hide();
      }
    });
  });

});

//свайпер
const swiper = new Swiper('.swiper-documents', {
  direction: 'horizontal',
  observer: true,
  observeParents: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    920: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 21
    }

  },
  navigation: {
    nextEl: '.swiper-documents-next',
    prevEl: '.swiper-documents-prev',
  },

});

var forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
