var rotations = {	
	'#aboutme-nav':     -40,
	'#ring-nav':        -24,
	'#workexp-nav':     -18,
	'#photography-nav': -10,
	'#sketches-nav':     10,
	'#contactme-nav':    20
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


