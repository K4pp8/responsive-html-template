$( document ).ready(function() {

  smoothScroll(300);

  workBelt();

});

function workBelt() {
	$('.thumb-unit').on( 'click' , function(){

		$('.work-belt').css('left' , '-100%');
		$('.work-container').show();

	});

	$('.work-return').on( 'click' , function(){

		$('.work-belt').css('left' , '0%');
		$('.work-container').hide(800);

	});
}

function smoothScroll(duration) {
	$('a[href^="#"').on( 'click' ,function(event) {

		var target = $( $(this).attr('href') );

		if(target.length){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}

	});
}