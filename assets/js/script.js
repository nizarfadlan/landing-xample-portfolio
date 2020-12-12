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
   $('.animated-icon').toggleClass('open')
});

$('.btn-video').on('click', function () {
   $('.materi-video').attr('style','width: 100% !important');
   $('.btn-video').attr('style', 'display: none');
});

$('#video').on('ended', function() {
   $('.btn-video').attr('style', 'display: block !important');
});
