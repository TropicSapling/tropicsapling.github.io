$(function() {
    setTimeout(switchSlide, 2000);
});

function switchSlide() {
    $('#img-wrapper img:first').fadeOut(1000).next().fadeIn(1000, setTimeout(switchSlide2, 2000));
}

function switchSlide2() {
    $('#img-wrapper img:second').fadeOut(1000).prev().fadeIn(1000, setTimeout(switchSlide, 2000));
}
