$('.side-right-hover').hover(function(){
    $('.left-image').animate({width: '2%'}, 400)
}, function(){
    $('.left-image').animate({width: '55%'}, 400)
});

$('.side-left-hover').hover(function(){
    $('.left-image').animate({width: '98%'}, 400)
}, function(){
    $('.left-image').animate({width: '55%'}, 400)
});

$('.side-right-hover').hover(function(){
    $('.side-right').animate({'z-index': '1'}, 1)
}, function(){
    $('.side-right').animate({'z-index': '101'}, 600)
});
