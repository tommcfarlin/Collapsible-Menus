/*
 * Collapsible Menus
 * A jQuery plugin that makes it easy to create collapsible menus using nested, unordered lists.
 *
 * Copyright 2012 Tom McFarlin, http://tommcfarlin.com
 * Released under the MIT License
 * http://tommcfarlin.com/collapsible-menus/
 *
 * @version	1.1
 */

(function($) {
	"use strict";

	/*--------------------------------------------------*
 	 * Helper Functions
	 *--------------------------------------------------*/
	
	/**
	 * Initializes the menus by collapsing them (if specified) and attaching
	 * event handlers controlling their display.
	 *
	 * opts   The plugins array of options
	 */
	function menuHandler(sId, opts) {

		// Use the menu ID attribute to properly select nested menus
		$('#' + sId + ' li ul').parent('li')
			.prev()
			.each(function() {
			
				// If set, collapse nested menus on load
				if( opts.initialCollapse ) {
					
					$(this).next()
						.addClass('collapsed-menu')
						.hide();
						
				} else {
				
					$(this).next()
						.addClass('expanded-menu');
						
				} // end if/else
				
				// Expand or collapse menu when the root menu is clicked
				$(this).on('click', function() {
					
					var $menu = $(this).next();
					switch(opts.effect.toString().toLowerCase()) {
					
						case 'fade':
						
							if($menu.hasClass('expanded-menu' )) {
							
								$menu.fadeOut('fast', function() {
									$(this).removeClass('expanded-menu')
										.addClass('collapsed-menu');
								});
									
							} else {
								
								$menu.removeClass('collapsed-menu')
									.addClass('expanded-menu')
									.fadeIn('fast');
								
							} // end if/else						
						
							break;
							
						case 'slide':
						
							if( $menu.hasClass('expanded-menu' ) ) {
							
								$menu.slideUp('fast', function() {
									$(this).removeClass('expanded-menu')
										.addClass('collapsed-menu');
								});
									
							} else {
								
								$menu.removeClass('collapsed-menu')
									.addClass('expanded-menu')
									.slideDown('fast');
								
							} // end if/else
						
							break;
							
						default:
							
							if( $menu.hasClass('expanded-menu' ) ) {
							
								$menu.removeClass('expanded-menu')
									.addClass('collapsed-menu')
									.hide();
									
							} else {
								
								$menu.removeClass('collapsed-menu')
									.addClass('expanded-menu')
									.show();
								
							} // end if/else
							
							break;
					
					} // end switch/case

				});
				
			});
	
	} // end menuHandler
	
	/*--------------------------------------------------*
	* Default Settings
	*--------------------------------------------------*/
	
	$.fn.collapsible = function(options) {
	
	    var opts = $.extend({}, $.fn.collapsible.defaults, options);
		return this.each(function(evt) {

			if( undefined === $(this).attr('id') ) {
				throw "Specified element does not include an ID attribute.";
			} else {
				menuHandler($(this).attr('id'), opts);	
			} // end if/else
			
	    });
	
	}; // end collapse
	
	$.fn.collapsible.defaults = {
	    effect: 'none',
	    initialCollapse: false
	}; // end defaults
	
}(jQuery));