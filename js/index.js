$(function() {
    setInterval("switchSlide()", 2000);
});

function switchSlide() {
    $('#img-wrapper img:first').fadeOut(1000).next().show().end().appendTo('#img-wrapper');
}
