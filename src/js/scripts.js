$('.slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('div[data-slide]').click(function(e) {
    e.preventDefault();
    var num = $(this).data('slide');
    $('.slider').slick('slickGoTo', num - 1);
});


var time = 10000;
// If theres no activity for 5 seconds do something
var activityTimeout = setTimeout(inActive, time);

function resetActive(){

    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, time);
}

function inActive(){
    $('.slider').slick('slickGoTo', 1);
}

// Check for mousemove, could add other events here such as checking for key presses ect.
$(document).bind('click', function(){resetActive()});