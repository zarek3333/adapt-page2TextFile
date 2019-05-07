define([
	'core/js/adapt'
], function(Adapt) {

	var Page2TextFile = Backbone.View.extend({

		initialize: function() {

			this.render();
		},

		render: function() {
			
			return this;		
			
		}

	});

	Adapt.once("adapt:initialize", function() {
		var pagetotext = Adapt.course.get("_page2TextFile");
		var enablepg2txt = pagetotext._isEnabled;

		$.getScript('libraries/FileSaver.js');

		if (!enablepg2txt || !enablepg2txt._isEnabled) {
			console.log("Page converter to text file is not enabled");
		}

		if (enablepg2txt && enablepg2txt._isEnabled) {
			$( '<div id="mypage2txt" style="right: 314px;"><a href="#" target="_blank">&nbsp;</a></div>' ).appendTo( '#wrapper' );
		}
		
	});
});
