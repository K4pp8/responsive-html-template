$( document ).ready(function() {

  smoothScroll(300);

  workBelt();

  workload();

});

function workload() {
	$.ajaxSetup({ cache: false });
	$('.thumb-unit').click( function() {
		
		var $this = $(this),
			newTitle = $this.find( 'strong' ).text(),
			// variabile da usare per passare la cartella del progetto
			cartellaproj = $this.data( 'folder' ),
			spinner = '<div class="loader">Loading...</div>',
		 	newHTML = '/work-dummy.html';

		 	console.log( cartellaproj );

			$('.project-load').html(spinner).load( newHTML );
			
			$('.projec-title').text( "< " + newTitle );
	 });

}

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