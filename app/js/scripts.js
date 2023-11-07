$(function () {
  // bootstrap-fileinput
  if ($(".bootstrap-file-upload").length > 0) {
    $(".bootstrap-file-upload").fileinput({
      uploadUrl: "#",
      language: "ru",
      showUpload: false,
      showCaption: false,
      showCancel: false,
      showRemove: false,
      showProgress: true,
      browseClass: "box-file",
      overwriteInitial: false,
      initialPreviewAsData: true,
      preferIconicZoomPreview: true,
      allowedFileExtensions: ["jpg", "png", "gif", "mp4", "mov", "avi"],
    });
  }
  // маска для номера телефона
  $(".mask-phone").mask("+7 (999) 999-99-99");
  $.fn.DataTable.ext.pager.numbers_length = 5;
  var oTable = $('#winners').DataTable({ ordering: false, bLengthChange: false, info: false, pageLength: 6, pagingType: "numbers" });

  $('#codes,#appl').DataTable({ ordering: false, bLengthChange: false, info: false, pageLength: 6, pagingType: "numbers" });

  $(".faq-title").click(function () {
    if ($('.faq-desc').is(':visible')) {
      $(".faq-desc").slideUp(700);
      $(".faq-item").removeClass('active');
      $(".faq-desc").css('opacity', '0');
    }
    if ($(this).next(".faq-desc").is(':visible')) {
      $(this).next(".faq-desc").slideUp(700);
      $(this).parent().removeClass('active');
      $(this).next(".faq-desc").css('opacity', '0');
    } else {
      $(this).next(".faq-desc").slideDown(700);
      $(this).next(".faq-desc").css('opacity', '1');
      $(this).parent().addClass('active');
    }
  });

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
  // setTimeout(() => {
  //   $("#modal-confirmation").modal("show");
  // }, 1000);
  // scroll to id
  $(".js-change-modal").on("click", function (e) {
    e.preventDefault();
    $(".modal").modal("hide");
    var id = $(this).attr("href");
    setTimeout(() => {
      $(id).modal("show");
    }, 1000);
  });
  // Маска для даты
  $('[data-toggle="datepicker"]').mask("99.99.9999");
  // bootstrap datepicker
  $('[data-toggle="datepicker"], .datepicker').datepicker({
    autoHide: true,
    zIndex: 2048,
    language: "ru-RU",
    format: "dd.mm.yyyy",
  });
  // Скрываем поля адреса если он совпадает с пропиской
  $('.js-address').change(function () {
    if ($(this).is(':checked')) {
      $('#address').addClass('d-n')
      $('#address').prev().addClass('mb-xl-20')
    } else {
      $('#address').removeClass('d-n')
      $('#address').prev().removeClass('mb-xl-20')
    }
  });

  $(function () {
    $('.to-data-tab').click(function (e) {
      e.preventDefault();
      $('a[href="#tab-5"]').tab('show');
    })
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
  // bootstrap-fileinput
  // if ($(".bootstrap-file-upload").length > 0) {
  //   $(".bootstrap-file-upload").fileinput({
  //     uploadUrl: "#",
  //     language: "ru",
  //     showUpload: false,
  //     showCaption: false,
  //     showCancel: false,
  //     showRemove: false,
  //     showProgress: true,
  //     browseClass: "box-file",
  //     overwriteInitial: false,
  //     initialPreviewAsData: true,
  //     preferIconicZoomPreview: true,
  //     allowedFileExtensions: ["jpg", "png", "gif"],
  //   });
  // }
  // const tooltipTriggerList = document.querySelectorAll(
  //   '[data-bs-toggle="tooltip"]'
  // );
  // const tooltipList = [...tooltipTriggerList].map(
  //   (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  // );
  // Маска для даты
  // $('[data-toggle="datepicker"]').mask("99.99.9999");
  // bootstrap datepicker
  // $('[data-toggle="datepicker"]').datepicker({
  //   autoHide: true,
  //   zIndex: 2048,
  //   language: "ru-RU",
  //   format: "dd.mm.yyyy",
  // });
  // маска для номера телефона
  // $(".mask-phone").mask("+7 (999) 999-99-99");
  // маска для времени
  // $(".mask-time").mask("99:99");
  // DataTable
  // if ($(".js-datatable").length > 0) {
  //   $(".js-datatable").DataTable({
  //     autoWidth: false,
  //     length: false,
  //     filter: false,
  //     searching: false,
  //     bLengthChange: false,
  //     pagingType: "simple_numbers",
  //     info: false,
  //     order: [],
  //     bSort: false,
  //     oLanguage: {
  //       sUrl: "../libs/datatables/russian.lang",
  //     },
  //     sDom: '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center g-pagination"ip>>>',
  //   });
  // }


  // изменяем вид шапки при скролле
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 1) {
  //     $(".page-header").addClass("page-header_scroll");
  //   } else if ($(this).scrollTop() < 60) {
  //     $(".page-header").removeClass("page-header_scroll");
  //   }
  // });
  // if ($(this).scrollTop() > 1) {
  //   $(".page-header").addClass("page-header_scroll");
  // } else if ($(this).scrollTop() < 60) {
  //   $(".page-header").removeClass("page-header_scroll");
  // }
  // scroll to id
  // $(".js-scroll-to").on("click", function (e) {
  //   e.preventDefault();
  //   var id = $(this).attr("href").replace("#", "");
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#" + id).offset().top - $(".page-header").height(),
  //     },
  //     0
  //   );
  // });
  // $fn.parallax( resistance, mouse )
  // $(document).mousemove(function (e) {
  //   $(".img-parallax").parallax(40, e);
  // });
  // .resizer
  // if ($("#resizer").length > 0) {
  //   var el = document.getElementById("resizer");
  //   var resize = new Croppie(el, {
  //     viewport: { width: 360, height: 220 },
  //     boundary: { width: 360, height: 230 },
  //     showZoomer: true,
  //     enableResize: true,
  //     enableOrientation: true,
  //     mouseWheelZoom: "ctrl",
  //   });
  // }





  var $myMarquee = $('.marquee').marquee({
    //duration in milliseconds of the marquee
    duration: 32000,
    //gap in pixels between the tickers
    allowCss3Support: true,

    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,

    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
  }
  );

  // $myMarquee.marquee('resume');


  $('.select-nav').on('change', function (e) {
    var optionSelected = $(this).find(':selected').data('target')


    $('a[href="' + optionSelected + '"]').tab('show');


  });

  

  $(function () {
    var list = $(".cases_block .col-sm-6");
    var numToShow = 3; //сколько показывать элементов
    var button = $(".show-content");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function () {
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
    });
  });

});

const swiper = new Swiper('.swiper-documents', {
  // Optional parameters
  direction: 'horizontal',

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 21
    },
    920: {
      slidesPerView: 6,
      spaceBetween: 21
    },
    1200: {
      slidesPerView: 8,
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
