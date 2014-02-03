var rotations = {	
	'#aboutme-nav':     -40,
	'#ring-nav':        -26,
	'#workexp-nav':     -10,
	'#photography-nav': 6,
	'#sketches-nav':     22,
	'#contactme-nav':    40
};

Object.keys(rotations).forEach(function(k) { 
    var degree = rotations[k];
   	$(k).click(function(){
			$('#gear').css({
				'-webkit-backface-visibility': 'hidden',
				'transform': 'rotate(' + degree + 'deg)',
          '-webkit-transform': 'rotate(' + degree + 'deg)',
           '-moz-transform': 'rotate(' + degree + 'deg)',
           '-ms-transform': 'rotate(' + degree + 'deg)',
           '-o-transform': 'rotate(' + degree + 'deg)',
           'zoom': 1
      });
		}); 
})

$('#gear').css('transform', 'rotate('+rotations['#aboutme-nav']+'deg)');


$('.venobox').venobox();


	/* open content with custom settings */
	$('.venobox_custom').venobox({
		framewidth: '300px',
		frameheight: '250px',
		border: '6px',
		bordercolor: '#ba7c36',
		numeratio: true
	});
