$(function() {
	$('#fullpage').fullpage({
		scrollBar: true,
		scrollOverflow: true
	});
	
	setTimeout(switchSlide2, 7500);

	if($(window).width() < 668) {
        // Mobile
        $(".knowledge-box:eq(1)").before($("#jsimg"));
    }
	
	$('#tropicsapling').css('visibility', 'visible');
	$('#intro.wrapper .scroller').css('visibility', 'visible');
	$('#tropicsapling').fadeOut(0);
	$('#intro.wrapper .scroller').fadeOut(0);
	setTimeout(function() {
		$('#tropicsapling').fadeIn(2000);
		setTimeout(function() {
			$('#intro.wrapper .scroller').fadeIn(1000);
		}, 2000);
	}, 1000);
	
	$("#projects h1").animate({width:'toggle'}, 0);
	$(".project").animate({width:'toggle'}, 0);
	$(".project").css('visibility', 'hidden');
	$(".project").css('display', 'block');

	$("#knowledge h1").animate({width:'toggle'}, 0);
	if($(window).width() < 668) {
        // Mobile
        $("#knowledge-grid").animate({margin: '40%'}, 0);
    } else {
		$("#knowledge-grid").animate({margin: '20%'}, 0);
	}
	$("#knowledge-grid").css('visibility', 'hidden');
	
	$("#contact.wrapper h1").animate({width:'toggle'}, 0);
	$("#contact.wrapper > p").fadeOut(0);
	$("#contact.wrapper div").fadeOut(0);
	
	setTimeout(function () {
		$("#footer").animate({top: "95%"});
		setTimeout(function() {
			$("#footer").animate({top: "100%"});
		}, 8192);
	}, Math.floor(Math.random() * 65536));

/*	$("#intro.wrapper img.scroller").click(function() {
		$('html, body').animate({
			scrollTop: $("#about.wrapper").offset().top
		}, 750);
	});

	$("#about.wrapper img.scroller").click(function() {
		$('html, body').animate({
			scrollTop: $("#projects.wrapper").offset().top
		}, 750);
	}); */
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

var shown = [false, false, false, false, false];
var scroll_pos = 0;
var section = 0;
var scrolling = false;

$(window).scroll(function(e) {
	var scroll = $(window).scrollTop();
	if(!shown[4] && scroll > $(window).height() * 4.75) {
		$("#contact.wrapper h1").animate({width:'toggle'}, 'fast', function() {
			setTimeout(function() {
				$("#contact.wrapper > p").fadeIn(1000);
				setTimeout(function() {
					$("#contact.wrapper div").fadeIn(1000);
				}, 1500);
			}, 500);
		});
		
		shown[4] = true;
	} else if(!shown[3] && scroll > $(window).height() * 3.75) {
		$("#knowledge .normal-title").animate({width:'toggle'}, 'fast', function() {
			setTimeout(function() {
				$("#knowledge-grid").css('visibility', 'visible');
				$("#knowledge-grid").animate({margin: 0}, 'medium');
			}, 500);
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
	} else if(!shown[1] && scroll > $(window).height() * 1.9) {
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
	
/*	if(!scrolling) {
		var sections = ["#intro.wrapper", "#about.wrapper", "#projects.wrapper", ".project:eq(3)", "#knowledge.wrapper", "#contact.wrapper"];
		
		if(scroll - scroll_pos > 0 && section < sections.length - 1) {
			section += 1;
		} else if(section > 0) {
			section -= 1;
		}
		
		scroll_pos = $(sections[section]).offset().top;
		scrolling = true;
		
		$('html, body').animate({
			scrollTop: $(sections[section]).offset().top
		}, 750, function() {
			setTimeout(function() {
				scrolling = false;
			}, 40);
		});
	} */
});
