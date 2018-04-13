$(function() {
    setTimeout(switchSlide2, 5000);
	
	$("#projects h1").animate({width:'toggle'}, 0);
	$(".project").animate({width:'toggle'}, 0);
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

var shown = false;

$(window).scroll(function(e) {
	var scroll = $(window).scrollTop();
	if(!shown) {
		if(scroll > $(window).height() * 0.75) {
			$("#projects h2:eq(0)").animate({width:'toggle'}, 'fast', function() {
				$("#projects h2:eq(1)").animate({width:'toggle'}, 'fast', function() {
					$("#projects h2:eq(2)").animate({width:'toggle'}, 'fast', function() {
						$("#projects h2:eq(3)").animate({width:'toggle'}, 'fast');
					});
				});
			});
		} else if(scroll > $(window).height() * 0.6) {
			$("#projects h1").animate({width:'toggle'}, 'fast');
			
			shown = true;
		}
	}
});
