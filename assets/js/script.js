$(window).scroll(function() {
   var sticky = $('nav'),
      scroll = $(window).scrollTop();
      
   if (scroll > 0) { 
      sticky.addClass('sticky');
   }else { 
      sticky.removeClass('sticky');
   }
});

$('.navbar-toggler').on('click', function () {
   $('.animated-icon').toggleClass('open');
   if ($('.navbar-collapse').hasClass('show')){
      $('body').removeClass('snone');
   } else {
      $('body').addClass('snone');
   }
});

$('.btn-video').on('click', function () {
   $('.btn-video').addClass('btnhide');
   $('.materi-video').addClass('fullvid');
});

$('#video').on('ended', function() {
   $('.btn-video').removeClass('btnhide');
   $('.materi-video').removeClass('fullvid');
});
