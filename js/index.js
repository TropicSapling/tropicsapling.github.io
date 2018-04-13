$(function() {
    setTimeout(switchSlide2, 5000);
});

function switchSlide() {
    $('#img-wrapper img:first').fadeOut(1000)
    $('#img-wrapper img:first').next().fadeIn(1000, function() {
        setTimeout(switchSlide2, 5000)
    });
}

function switchSlide2() {
    $('#img-wrapper img:first').next().fadeOut(1000)
    $('#img-wrapper img:first').fadeIn(1000, function() {
        setTimeout(switchSlide, 5000)
    });
}

var shown = [false, false, false, false, false];

$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    
	if(!shown[0] && scroll > 56) {
		$("#projects h1").animate({width:'toggle'}, 0);
		$("#projects h1").animate({width:'toggle'}, 350);
		shown[0] = true;
    } else if(!shown[1] && scroll > 136) {
		$("#projects h2:eq(0)").animate({width:'toggle'}, 0);
		$("#projects h2:eq(0)").animate({width:'toggle'}, 350);
		shown[1] = true;
    }
});
