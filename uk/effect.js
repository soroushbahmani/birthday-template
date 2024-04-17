$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function () {
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
		$('#b11').animate({ top: 100, left: 0 }, 500);
		$('#b22').animate({ top: 180, left: 50 }, 500);
		$('#b33').animate({ top: 100, left: 100 }, 500);
		$('#b44').animate({ top: 180, left: 150 }, 500);
		$('#b55').animate({ top: 100, left: 200 }, 500);
		$('#b66').animate({ top: 180, left: 250 }, 500);
		$('#b77').animate({ top: 100, left: 300 }, 500);
		$('#b88').animate({ top: 180, left: 350 }, 500);
		$('#b99').animate({ top: 100, left: 400 }, 500);
	});

	$('#turn_on').click(function () {
		var audio = $('.song')[0];

		audio.play();

		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(10).promise().done(function () {
			$('#play').fadeIn('slow');
		});




		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('fast').promise().done(function () {
			$('#balloons_flying').fadeIn('fast');
		});


		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(1000).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});



		$('#b1,#b4,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');

		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopet();
		loonine();

		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#cake_fadein').fadeIn('fast');
		});
		$(this).fadeOut('fast').promise().done(function () {
			$('#balloons_flying').fadeIn('fast');
		});

		$(this).fadeOut('fast').promise().done(function () {
			$('#balloons_flying').fadeIn('fast');
		});


		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#light_candle').fadeIn('slow');
		});



		$('.balloon-border').animate({ top: 0 }, 6000);
		$('#b1,#b4,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');

		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopet();
		loonine();


		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#cake_fadein').fadeIn('slow');
		});



		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function () {
			$('#wish_message').fadeIn('slow');
		});





		vw = $(window).width() / 2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22')
		$('#b3').attr('id', 'b33')
		$('#b4').attr('id', 'b44')
		$('#b5').attr('id', 'b55')
		$('#b6').attr('id', 'b66')
		$('#b7').attr('id', 'b77')
		$('#b8').attr('id', 'b88')
		$('#b9').attr('id', 'b99')
		$('#b11').animate({ top: 190, left: 0 }, 500);
		$('#b22').animate({ top: 190, left: 60 }, 500);
		$('#b33').animate({ top: 190, left: 120 }, 500);
		$('#b44').animate({ top: 190, left: 180 }, 500);
		$('#b55').animate({ top: 190, left: 220 }, 500);
		$('#b66').animate({ top: 190, left: 280 }, 500);
		$('#b77').animate({ top: 190, left: 340 }, 500);
		$('#b88').animate({ top: 190, left: 400 }, 500);
		$('#b99').animate({ top: 190, left: 460 }, 500);
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#story').fadeIn('slow');
		});




		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow');
		});

		var i;

		function msgLoop(i) {
			$("p:nth-child(" + i + ")").fadeIn('slow').delay(800).promise().done(function () {
				i = i + 1;
				$("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
				window.scroll({
					top: 100000,
					left: 100,
					behavior: 'smooth'
				});
				if (i == 50) {
					$("p:nth-child(49)").fadeIn('slow').promise().done(function () {
						// $('.cake').fadeIn('fast');
					});

				}
				else {
					msgLoop(i);
				}
			})
		};

		msgLoop(0);


	});





	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}
	function loopet() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b8').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopet();
		});
	}
	function loonine() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b9').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loonine();
		});
	}

});

