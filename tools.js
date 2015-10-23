function Tools(tools) {

	this.set_mouse(tools || 'mousedown');

}

Tools.prototype = {

	set_mouse: function(tools) {

		this.tools = tools;

		$('#pxbpx').on('click', function() {
			this.tools = 'mousedown';
		});

		$('#linec').on('click', function() {
			this.tools = 'mousemove';
		});
	}
};