if ($(window).width() <= 1080) {
  (function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 16 + 'px'
    }

    win.addEventListener('resize', function() {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    }, false);
    refreshRem();
  })(window);
}


function myBrowser() {
  var userAgent = navigator.userAgent;
  var isOpera = userAgent.indexOf("Opera") > -1;
  if (userAgent.indexOf("Firefox") > -1) {
    return "FF";
  }
  if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  }
}
var mb = myBrowser();
if ("FF" == mb) {

}

var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  spaceBetween:0,
  centeredSlides: true,
  autoplay: 2500,
  loop:true,
  autoplayDisableOnInteraction: false
});

$('.read_r_nav > div').on('click',function(){
  $('.read_r_nav > div').find('i').removeClass('active');
  $(this).addClass('active').siblings().removeClass('active');
  $(this).find('i').addClass('active');
  $('.read_r_tab > div').eq($(this).index()).addClass('active').siblings().removeClass('active');
});

$('.tit-rt li ').hover(function(){
  $('.tit-rt li div,.tit-rt li i,.tit-rt li span').removeClass('active');
  $(this).find('div').addClass('active').find('i').addClass('active');
  $(this).find('span').addClass('active');
  $('.con_rt > p').eq($(this).index()).addClass('active').siblings().removeClass('active');
});


$('.jsTit-7>li').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$('.jsCon-7').find('ul').eq($(this).index()).show().siblings().hide();
});



$('.jsTit-9>li').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$('.jsCon-9').find('ul').eq($(this).index()).show().siblings().hide();
});


$('.jsTab-10>dl').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
});
