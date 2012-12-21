(function($) {

	$(function() {
		
		/* ----- Site Functions ----- */
		
		prettyPrint();
		
		$(document).scroll(function() {
		
			if( $(this).scrollTop() >= 133 ) {
				
				$('nav').addClass('subnav-fixed');
				$('.hidden').removeClass('hidden');
				
			} else {
			
				if($('nav').hasClass('subnav-fixed')) {
					
					$('nav').removeClass('subnav-fixed');
					$('.nav').children(':last')
						.addClass('hidden');
					
				} // end if
				
			} // end if
			
		});
		
		$('button').click(function() {
			window.location.href = 'https://github.com/tommcfarlin/Collapsible-Menus/';
		});
	
		/* ----- Menu Demos----- */
		
		$('#vanilla-menu').collapsible({
			effect: 'none',
		    initialCollapse: true
		});
	
		$('#vanilla-menu li').each(function() {
			if($(this).next().hasClass('expanded-menu') || $(this).next().hasClass('collapsed-menu')) {
				$(this).addClass('has-children');
			} // end if
		});
	
		$('#accordion').collapsible({
			effect: 'slide',
			initialCollapse: true
		});
		
	});

}(jQuery));