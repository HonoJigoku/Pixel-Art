/**
 * Represnetation du pixel
 * @param {number} x     position Horizontal
 * @param {number} y     position vertical
 * @param {number} size  taile du pixel
 * @param {string} color couleur du pixel
 */
function Pixel(x, y, size, color) {

	this.$el 	= $('<div class="pixel"></div>');

	this.set_color(color || '#f00');
	this.set_size(size || 50);
	this.set_position(x,y);

	pixelArt.$draw.append(this.$el);
}

Pixel.prototype = {

	/**
	 * Changer la position du pixel
	 * @param {number} x     position Horizontal
	 * @param {number} y     position vertical
	 */
	set_position: function(x,y) {
		this.x = x;
		this.y = y;
		this.$el.css({
		left				: ((this.x-1) * this.size) + 'px',
		top					: ((this.y-1) * this.size) + 'px',
		})

	},

	/**
	 * Changer la taile du pixel
 	 * @param {number} size  taile du pixel
	 */
	set_size: function(size) {
		this.size = size;
		this.$el.css({
			width : this.size,
			height : this.size,
		})
	},

	/**
	 * Changer la couleur
 	 * @param {string} color couleur du pixel
	 */
	set_color : function(color) {
		this.color 	= color;
		
		this.$el.css({
			backgroundColor : this.color,
		})

	}
};