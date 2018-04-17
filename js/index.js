$(function() {
	setTimeout(switchSlide2, 7500);
	
	$('#tropicsapling').css('visibility', 'visible');
	$('#tropicsapling').fadeOut(0);
	setTimeout(function() {
		$('#tropicsapling').fadeIn(2000);
	}, 1000);
	
	$("#projects h1").animate({width:'toggle'}, 0);
	$(".project").animate({width:'toggle'}, 0);
});

function switchSlide() {
	$('#img-wrapper img:first').fadeOut(1000)
	$('#img-wrapper img:first').next().fadeIn(1000, function() {
		setTimeout(switchSlide2, 7500)
	});
}

function switchSlide2() {
	$('#img-wrapper img:first').next().fadeOut(1000)
	$('#img-wrapper img:first').fadeIn(1000, function() {
		setTimeout(switchSlide, 7500)
	});
}

var shown = [false, false];

$(window).scroll(function(e) {
	var scroll = $(window).scrollTop();
	if(!shown[0] && scroll > $(window).height() * 0.75) {
		$(".project:eq(0)").animate({width:'toggle'}, 'fast', function() {
			$(".project:eq(1)").animate({width:'toggle'}, 'fast', function() {
				$(".project:eq(2)").animate({width:'toggle'}, 'fast', function() {
					$(".project:eq(3)").animate({width:'toggle'}, 'fast');
				});
			});
		});

		shown[0] = true;
	} else if(!shown[1] && scroll > $(window).height() * 0.5) {
		$("#projects h1").animate({width:'toggle'}, 'fast');
		shown[1] = true;
	}
});
