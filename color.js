/*function PixelColor (x,y,size,color) {
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
*/

function Color(width, height, Color) {
 	this.$els = $('<div></div>');

 	this.set_size(width, height);
 	this.init();
}

Color.prototype = {

	set_size: function(width, height) {
		this.width  = 50;
		this.height = 50;
		this.$els.css({
		width : this.width + 'px',
		height : this.height + 'px',
	})
},

 init: function() {

		this.Color = [
		'#9365B8', '#475577', '#41A85F', '#00A885',
		'#3D8EB9', '#2969B0', '#553982', '#28324E',

		'#F7DA64', '#FBA026', '#EB6B56', '#E25041', 
		'#A38F84', '#EFEFEF', '#FAC51C', '#F37934',
		'#D14841', '#B8312F', '#75706B', '#D1D5D8',
	 	];

	   	for (var i = 0; i < this.Color.length - 1; i++ ) {
	    	//console.log(i);
		    this.$els.clone().appendTo(PixelArt.$toolsColor);
		    this.$els.removeClass().addClass('list color' + i);
		    this.$els.css('background-color', this.Color[i]);
	   	};

   		PixelArt.$toolsColor.find('div').eq(0).remove();

  }
}