/*
 * Collapsible Menu
 * A jQuery plugin for creating collapsible menus out of unordered lists.
 *
 * Copyright 2012 Tom McFarlin, http://tommcfarlin.com
 * Released under the MIT License
 *
 * http://github.com/tommcfarlin/Collapsible-Menus
 */

(function($) {

	$.fn.collapsible = function(options) {
	
	    var opts = $.extend({}, $.fn.collapsible.defaults, options);
		return this.each(function(evt) {
			setupMenus($(this).attr('id'), opts);
	    });
	
	}; // end collapse

	/*--------------------------------------------------*
 	 * Helper Functions
	 *--------------------------------------------------*/
	
	/**
	 * Initializes the menus by collapsing them (if specified) and attaching
	 * event handlers controlling their display.
	 *
	 * opts   The plugins array of options
	 */
	function setupMenus(sId, opts) {

		$('#' + sId + ' li ul').parent('li')
			.prev()
			.each(function() {
			
				// If set, collapse nested menus on load
				if(opts.initialCollapse) {
					collapse(opts, $(this).next());
				} // end if
				
				// Expand or collapse menu when the root menu is clicked
				$(this).on('click', function() {
					toggle(opts, $(this).next());
				});
				
			});
	
	} // end setupMenus
	
	/**
	 * Click handler that toggles the visibility of each menu based
	 * on the effect option specified.
	 *
	 * opts   	  The plugins array of options
	 * $menu	 The menu to toggle
	 */
	function toggle(opts, $menu) {

		switch(opts.effect.toString().toLowerCase()) {
		
			case 'fade':
				$menu.fadeToggle('fast');
				break;
			
			case 'slide':
				$menu.slideToggle('fast');
				break;
			
			default:
				$menu.toggle();
				break;
		
		} // end switch/case
	
	} // end toggle
	
	/**
	* Toggles the visibility of each menu based on the effect
	* option specified.
	*
	* opts   The plugins array of options
	* $menu	 The menu to toggle
	*/
	function collapse(opts, $menu) {

		// Updates the class name of the menu based on its state
		$menu.toggleClass(function() {
		
			var sClass = '';
		  
		  	if($(this).hasClass('collapsed-menu')) {
		  	
			    $(this)
			    	.removeClass('collapsed-menu')
			    	.show();
			    sClass = 'expanded-menu';
			    
		  	} else {
		  	
			    $(this)
			    	.removeClass('expanded-menu')
			    	.hide();
			    sClass = 'collapsed-menu';
			    
		  	} // end if/else
		  
		  return sClass;
		  
		});
	
	} // end collapse
	
	/*--------------------------------------------------*
	* Default Settings
	*--------------------------------------------------*/
	
	$.fn.collapsible.defaults = {
	    effect: 'none',
	    initialCollapse: false
	}; // end defaults
	
})(jQuery);