var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $portfolioImg = $('.portfolio-img');
var $dipper = $('.dipper');
var $shuttle = $('.shuttle');
var $shuttleSection = $('.shuttle-section');
var $shipsSection = $('.ships-section');
var $ship1 = $('.ship-1');
var $ship2 = $('.ship-2');
var $ship3 = $('.ship-3');
var $ship4 = $('.ship-4');


$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
	$shipsSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});

$portfolioImg.waypoint(function () {
	$portfolio-img.addClass('js-portfolio-img-fade');
}, { offset: '50%' });
	
$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade-up');
}, { offset: '50%' });

$shipsSection.waypoint(function () {
	$ship1.addClass('js-ships-1-3');
	$ship3.addClass('js-ships-1-3');
}, { offset: '50%' });

$shipsSection.waypoint(function () {
	$ship2.addClass('js-ships-2-4');
	$ship4.addClass('js-ships-2-4');
}, { offset: '50%' });