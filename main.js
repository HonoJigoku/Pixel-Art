var pixelArt = {

	pixel_dimension: 10,
	$draw: null,

	pixels: [],

	init: function(){

		var self = this;

		this.init_color();

		this.init_draw();

		var point 	= true;
		var line 	= false;
		var gomme	= false;
	
		$('#point').on('click', function() {
			point 	= true;
			line 	= false;
			gomme	= false;

			console.log(point, line, gomme);

		});

		$('#ligne').on('click', function() {
			point 	= false;
			line 	= true;
			gomme	= false;

			console.log(point, line, gomme);

		});

		$('#gomme').on('click', function() {
			point 	= false;
			line 	= false;
			gomme	= true;	

			console.log(point, line, gomme);

		});


		if (point === true && line === false && gomme === false) {
			this.$draw.on('mousedown', function(e) {

				var offset = self.$draw.offset(),
					dx = e.clientX - parseInt(offset.left),
					dy = e.clientY - parseInt(offset.top);

				var x = Math.floor(dx/self.pixel_dimension)+1;
				var y = Math.floor(dy/self.pixel_dimension)+1;


				var p =  new Pixel(x,y,self.pixel_dimension, Color.color);
				console.log(point, line, gomme, 'point');
				

				self.pixels.push(p);

			})
		}

		else if (point === false && line === true && gomme === false) {
			this.$draw.on('mousemove', function(e) {

				var offset = self.$draw.offset(),
					dx = e.clientX - parseInt(offset.left),
					dy = e.clientY - parseInt(offset.top);

				var x = Math.floor(dx/self.pixel_dimension)+1;
				var y = Math.floor(dy/self.pixel_dimension)+1;


				var p =  new Pixel(x,y,self.pixel_dimension, '#fff');
				console.log(point, line, gomme, 'ligne');


				self.pixels.push(p);

			})
		}

		else if (point === false && line === false && gomme === true) {
			this.$draw.on('mousedown', function(e) {

				var offset = self.$draw.offset(),
					dx = e.clientX - parseInt(offset.left),
					dy = e.clientY - parseInt(offset.top);

				var x = Math.floor(dx/self.pixel_dimension)+1;
				var y = Math.floor(dy/self.pixel_dimension)+1;


				var p =  new Pixel(x,y,self.pixel_dimension, '#646809');
				console.log(point, line, gomme, 'gomme');


				self.pixels.push(p);

			})
		}			
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

	init_color: function() {
		this.$toolsColor = $('#toolbar');
	}
}

$(function(){
	pixelArt.init();
	pixelArt.init_draw();
	pixelArt.init_color();
})
