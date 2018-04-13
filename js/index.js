$(function() {
    setInterval("switchSlide()", 2000);
});

function switchSlide() {
    $('#img-wrapper img:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#img-wrapper');
}
