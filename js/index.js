$(function() {
    setTimeout(switchSlide, 2000);
});

function switchSlide() {
    $('#img-wrapper img:first').fadeOut(1000)
    $('#img-wrapper img:first').next().fadeIn(1000, function() {
        setTimeout(switchSlide2, 2000)
    });
}

function switchSlide2() {
    $('#img-wrapper img:first').next().fadeOut(1000)
    $('#img-wrapper img:first').fadeIn(1000, function() {
        setTimeout(switchSlide, 2000)
    });
}
