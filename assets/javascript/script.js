$(document).ready(function () {
	init();
	name();

	function init() {
			var current = 0;
			var audio = $('#audio');
			var playlist = $('#playlist');
			var tracks = playlist.find('li .playAudio');
			var len = tracks.length - 1;
			audio[0].volume = .95;
			// audio[0].play();
			playlist.on('click', '.playAudio', function (e) {
					e.preventDefault();

					link = $(this);
					current = link.parent().index();
					run(link, audio[0]);
			});
			audio[0].addEventListener('ended', function (e) {
					current++;
					if (current == len) {
							current = 0;
							link = playlist.find('.playAudio')[0];
					} else {
							link = playlist.find('.playAudio')[current];
					}
					run($(link), audio[0]);
			});
	}

	function run(link, player) {
			player.src = link.attr('href');
			par = link.parent();
			par.addClass('active').siblings().removeClass('active');
			player.play();
	}

	function name() {
			$(".btn1").click(function () {
					$("#track-info").empty();
					$("#track-name1").clone().appendTo("#track-info");
					$('html,body').animate({
			scrollTop: $(".audioTop").offset().top},
			'slow');
			})
	
			
			$(".btn2").click(function () {
					$("#track-info").empty();
					$("#track-name2").clone().appendTo("#track-info");
					$('html,body').animate({
			scrollTop: $(".audioTop").offset().top},
			'slow');
			})
	
			
			$(".btn3").click(function () {
					$("#track-info").empty();
					$("#track-name3").clone().appendTo("#track-info");
					$('html,body').animate({
			scrollTop: $(".audioTop").offset().top},
			'slow');
			})
	
			
			$(".btn4").click(function () {
					$("#track-info").empty();
					$("#track-name4").clone().appendTo("#track-info");
					$('html,body').animate({
			scrollTop: $(".audioTop").offset().top},
			'slow');
			})
	
			
			$(".btn5").click(function () {
					$("#track-info").empty();
					$("#track-name5").clone().appendTo("#track-info");
					$('html,body').animate({
			scrollTop: $(".audioTop").offset().top},
			'slow');
			})
	};

});