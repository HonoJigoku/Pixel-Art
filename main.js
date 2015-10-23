var pixelArt = {

	pixel_dimension: 10,
	$draw: null,

	pixels: [],

	init: function(){

		var self = this;

		this.init_tools();

		this.init_draw();

		this.$draw.on('mousedown', function(e) {

			var offset = self.$draw.offset(),
				dx = e.clientX - parseInt(offset.left),
				dy = e.clientY - parseInt(offset.top);

			var x = Math.floor(dx/self.pixel_dimension)+1;
			var y = Math.floor(dy/self.pixel_dimension)+1;


			var p =  new PixelColor(x,y,self.pixel_dimension, color);	

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
	},

	init_tools: function() {
		var t = new Tools(tools);
	}, 
}

$(function(){
	pixelArt.init_tools();	
	pixelArt.init();
	pixelArt.init_draw();	
})
