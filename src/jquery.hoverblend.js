
/**
 * Creates crossfade mouse rollover effects for links
 *
 * @author  Alexander Vourtsis
 * @version	0.1.0
 * @updated	26 October 2012, 17:30 UTC+02:00
 * @license	The Unlicense
 */

jQuery.fn.bgBlend = function(options) {

	var defaults = {
		duration: 300,
		hover: 'blue.png'
	};
	
	var options = $.extend(defaults, options);

	return this.each(function() {
		
		$(this).css({
			'position':'relative',
			'display':'block'
		});
		
		$(this).append('<span class="hoverblend" style="position:absolute;left:0;bottom:0;display:none;background:url('+options.hover+');width:inherit;height:inherit;padding:inherit;margin:0;z-index:-99999;"></span>');
		
		$(this).hover(function(){
			$(this).find('.hoverblend').stop().fadeIn(options.duration);
		}, function(){
			$(this).find('.hoverblend').stop().fadeOut(options.duration);
		});
		
	});
};
