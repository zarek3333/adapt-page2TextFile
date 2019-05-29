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

		// do not proceed until page to text is enabled on course.json
        if (!pagetotext || !pagetotext._isEnabled) {
        	console.log("Page converter to text file is not enabled");
            return;
        }

        var getUrlParameter = function getUrlParameter(sParam) { 
		    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		    sURLVariables = sPageURL.split('&'),
		    sParameterName,
		    i;
		    for (i = 0; i < sURLVariables.length; i++) { 
		        sParameterName = sURLVariables[i].split('='); 
		        if (sParameterName[0] === sParam) {
		            return sParameterName[1] === undefined ? true : sParameterName[1];
		        }
		    };
		};
		var dev = getUrlParameter('export');
		if(dev == 'on'){

			$('html').addClass('pagesave2txt');
	        
	        //sets up the drawer with config title and description
	        //shown to the student
	        var drawerObject = {
	            title: "",
	            description: "",
	            className: 'page2file-drawer'
	        };

	        // Syntax for adding a Drawer item
		    Adapt.drawer.addItem(drawerObject, 'pageLevelProgress:show');

		    $(function () {
			  $(".navigation-drawer-toggle-button").bind("click", function () {
			    window.setTimeout(function(){ 
			    	$( "<div class='savetotxt'>" + accesspg2txt + "</div>" ).appendTo( ".page2file-drawer .drawer-item-title-inner" );
			    	$( "<div class='hidepgconvertxt'></div><script>if ( $('html').hasClass('accessibility') ) { $('.page2file-drawer').keyup(function(event) { if (event.keyCode === 13) { totext(); $('.articledetails').remove(); $('.blockdetails').remove(); $(this).remove(); } }); $('.page2file-drawer .drawer-item-title-inner').attr('tabindex','-1'); $('.page2file-drawer').attr('aria-label','" + accesspg2txt + "'); } else { $('.page2file-drawer').click(function(){ totext(); $('.articledetails').remove(); $('.blockdetails').remove(); $(this).remove(); }); }</script>" ).appendTo( ".page2file-drawer .drawer-item-description-inner" );
			    }, 111);
			  });
			});

		} else {
			//Don't show save button
		}
		
	});
});
