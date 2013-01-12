(function($){
	var site = {

		init: function()
		{
			this.tehslider();
		}, 
		tehslider: function(){
		 	$("#tehslider").mbSlider({
                autoplay: true,
                showControls: { 
                    next: false, 
                    prev: false, 
                    play: false, 
                    pause: false, 
                    first: false, 
                    last: false
                },
                playPauseButtonSeperate: true,
                pagination: true,
                direction:'btt',
                orientation: 'vertical',  
                easing: 'swing',
                slideDuration: 7000
            }); 
		}

	}
	$(function(){
		site.init();
	});

}(jQuery));