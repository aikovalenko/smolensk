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


var time = 300000;

var activityTimeout = setTimeout(inActive, time);

function resetActive(){
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, time);
}

function inActive(){
    $('.slider').slick('slickGoTo', 1);
}


$(document).bind('click', function(){resetActive()});


// $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
//     if ($('.slide-map').hasClass('slick-current')) {
//         $('.hint').addClass('active');
//     } else {
//         $('.hint').removeClass('active');
//     }
// });
