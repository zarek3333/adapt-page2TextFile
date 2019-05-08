define([
	'backbone',
    'coreJS/adapt',
], function(Backbone, Adapt) {

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
		var accesspg2txt = pagetotext._mypage2txt;
		var enablepg2txt = pagetotext._isEnabled;

		$.getScript('libraries/FileSaver.js');
		$.getScript('libraries/PageConverter.js');

		// do not proceed until glossary enabled on course.json
        if (!pagetotext || !pagetotext._isEnabled) {
        	console.log("Page converter to text file is not enabled");
            return;
        }

        //sets up the drawer with config title and description
        //shown to the student
        var drawerObject = {
            title: "<div class='savetotxt' onclick='totext()'>" + accesspg2txt + "</div>",
            description: "",
            className: 'page2file-drawer'
        };

        // Syntax for adding a Drawer item
	    Adapt.drawer.addItem(drawerObject, 'pageLevelProgress:show');
		
	});
});
