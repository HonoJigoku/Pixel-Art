var pixelArt = {

	pixel_dimension: 10,
	$draw: null,

	pixels: [],

	init: function(){

		var self = this;

		this.init_draw();

		this.$draw.on('mousedown', function(e) {

			var x = Math.floor(e.offsetX/self.pixel_dimension)+1;
			var y = Math.floor(e.offsetY/self.pixel_dimension)+1;

			var p = new Pixel(x,y,self.pixel_dimension, '#f00');

			self.pixels.push(p);

		})	
	},	

	init_draw: function() {

		this.$draw = $('#content');

		var w = window.innerWidth/this.pixel_dimension;
		w = Math.floor(w - (w/6));

		var h = Math.floor(window.innerHeight/this.pixel_dimension);

		this.$draw.css({
			width :(w*this.pixel_dimension)+'px',
			height :(h*this.pixel_dimension)+'px',
			right:0,
		})

		console.log(w,h);
	}
}

$(function(){
	pixelArt.init();
	pixelArt.init_draw();	
})
