$( document ).ready(function() {

  smoothScroll(300);

  workBelt();

  workload();

  clientload();

});

function clientload() {
	$( '.client-logo' ).click(function () {
		var $this = $(this),
		clentNR = $this.data( 'client' );

		//Deattivo tutto e setto l'elemento cliccato
		$('.client-logo').removeClass('active-client');
		$this.addClass('active-client');

		//Cambio il contenuto
		$('.client-name').text( "New " + clentNR + " Nome Cognome" );
		$('.client-title').text( "New " + clentNR + "Titolo lavorativo" );
		$('.clients-content').text( "New " + clentNR + "content" );
	});

	//FIXME NON funzione na mazza
	$( '.clients-mobile-nav span' ).click(function () {
		var $this = $(this),
		clentNR = $this.data( 'client' );

		//Deattivo tutto e setto l'elemento cliccato
		$('.clients-mobile-nav span').removeClass('active-client');
		$this.addClass('active-client');

		//Cambio il contenuto
		$('.client-name').text( "New " + clentNR + " Nome Cognome" );
		$('.client-title').text( "New " + clentNR + "Titolo lavorativo" );
		$('.clients-content').text( "New " + clentNR + "content" );
	});
}

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