$( document ).ready(function() {

  smoothScroll(300);

  workBelt();

  workload();

  clientload();

  jQuery("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '92px' });

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
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );