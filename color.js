function PixelColor (x,y,size,color) {
	console.log(x, y, size, color);
	Pixel.call(this,x,y,size,color);
}

PixelColor.prototype = Object.create(Pixel.prototype);

PixelColor.prototype.set_color = function(color) {

	var that = this;

	$('#toolbar').on('click', '.pen', function(){

		console.log('changement de couleur...', $(this).data('color'))

		that.color = $(this).data('color');

	})

	console.log('changement du backgroundColor...', that.color)

	this.$el.css({
		backgroundColor : that.color,
	})
}
