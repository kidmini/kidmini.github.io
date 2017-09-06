





$('.jsTit-7>li').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$('.jsCon-7').find('ul').eq($(this).index()).show().siblings().hide();
});


// $('.jsTit-8>li').bind('mouseenter', function () {
// 	$(this).addClass('on').siblings().removeClass('on');
// 	$('.jsCon-8').find('p').eq($(this).index()).show().siblings().hide();
// });

$('.jsTit-9>li').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$('.jsCon-9').find('ul').eq($(this).index()).show().siblings().hide();
});


$('.jsTab-10>dl').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
});
