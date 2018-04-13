$(function() {
    setTimeout(switchSlide, 2000);
});

function switchSlide() {
    $('#img-wrapper img:first').fadeOut(1000).next().fadeIn(1000, setTimeout(switchSlide, 2000));
}
