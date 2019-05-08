define([
	'backbone',
    'coreJS/adapt',
    /*'./adapt-notesView',*/
], function(Backbone, Adapt/*, NotesView*/) {

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
		pagetotext = new Backbone.Model(pagetotext);
		var accesspg2txt = pagetotext._ariaLabel;
		var enablepg2txt = pagetotext._isEnabled;

		$.getScript('libraries/FileSaver.js');
		$.getScript('libraries/PageConverter.js');

		// do not proceed until glossary enabled on course.json
        if (!pagetotext || !pagetotext._isEnabled) {
        	console.log("Page converter to text file is not enabled");
            return;
        }

        var template = Handlebars.templates['page2TextItem'];
        var $element = $(template(pagetotext.toJSON()));

        Adapt.drawer.triggerCustomView($element, false);

        //sets up the drawer with config title and description
        //shown to the student
        /*var drawerObject = {
            title: "Convert this page to text file",
            description: "<script>$('.page2file-drawer').attr('onclick=\"totext()\"');</script>",
            className: 'page2file-drawer'
        };*/

        // Syntax for adding a Drawer item
	    /*Adapt.drawer.addItem(drawerObject, 'pageLevelProgress:show');*/
		
	});
});
