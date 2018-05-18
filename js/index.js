$(function() {
	setTimeout(switchSlide2, 7500);
	
	$('#tropicsapling').css('visibility', 'visible');
	$('#tropicsapling').fadeOut(0);
	setTimeout(function() {
		$('#tropicsapling').fadeIn(2000);
	}, 1000);
	
	$("#projects h1").animate({width:'toggle'}, 0);
	$(".project").animate({width:'toggle'}, 0);
	$(".project").css('visibility', 'hidden');
	$(".project").css('display', 'block');

	$("#knowledge h1").animate({width:'toggle'}, 0);
	$("#knowledge-grid").animate({width:'toggle'}, 0);
	$("#knowledge-grid").css('visibility', 'hidden');
	$("#knowledge-grid").css('display', 'block');
	
	setTimeout(function () {
		$("#footer").animate({top: "95%"});
		setTimeout(function() {
			$("#footer").animate({top: "100%"});
		}, 8192);
	}, Math.floor(Math.random() * 65536));
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

var shown = [false, false, false, false];

$(window).scroll(function(e) {
	var scroll = $(window).scrollTop();
	if(!shown[3] && scroll > $(window).height() * 3.75) {
		$("#knowledge .normal-title").animate({width:'toggle'}, 'fast', function() {
			$("#knowledge-grid").css('visibility', 'visible');
			$("#knowledge-grid").css('display', 'none');

			$("#knowledge-grid").animate({width:'toggle'}, 'fast');
		});

		shown[3] = true;
	} else if(!shown[2] && scroll > $(window).height() * 2.5) {
		$(".project:eq(3)").css('visibility', 'visible');
		$(".project:eq(3)").css('display', 'none');
		
		$(".project:eq(3)").animate({width:'toggle'}, 'fast', function() {
			$(".project:eq(4)").css('visibility', 'visible');
			$(".project:eq(4)").css('display', 'none');
			
			$(".project:eq(4)").animate({width:'toggle'}, 'fast', function() {
				$(".project:eq(5)").css('visibility', 'visible');
				$(".project:eq(5)").css('display', 'none');
				
				$(".project:eq(5)").animate({width:'toggle'}, 'fast');
			});
		});
		
		shown[2] = true;
	} else if(!shown[1] && scroll > $(window).height() * 2) {
		$(".project:eq(0)").css('visibility', 'visible');
		$(".project:eq(0)").css('display', 'none');
		
		$(".project:eq(0)").animate({width:'toggle'}, 'fast', function() {
			$(".project:eq(1)").css('visibility', 'visible');
			$(".project:eq(1)").css('display', 'none');
			
			$(".project:eq(1)").animate({width:'toggle'}, 'fast', function() {
				$(".project:eq(2)").css('visibility', 'visible');
				$(".project:eq(2)").css('display', 'none');
				
				$(".project:eq(2)").animate({width:'toggle'}, 'fast');
			});
		});

		shown[1] = true;
	} else if(!shown[0] && scroll > $(window).height() * 1.5) {
		$("#projects h1").animate({width:'toggle'}, 'fast');
		shown[0] = true;
	}
});
