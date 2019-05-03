define([
	'core/js/adapt'
], function(Adapt) {

	var TimerDocservice = Backbone.View.extend({

		initialize: function() {

			this.render();
		},

		render: function() {
			
			return this;		
			
		}

	});

	Adapt.once("adapt:initialize", function() {
		var timercontrol = Adapt.course.get("_timerDocservice");
		var selectimer = timercontrol._timerSelect;
		var emaillink = timercontrol._emailContact;
		var linkaddress = emaillink._emailAddress;

		$.getScript('libraries/FileSaver.js');

		if (!timercontrol || !timercontrol._isEnabled) {
			console.log("Timer is not enabled");
		}

		if (timercontrol && timercontrol._isEnabled) {
			if (timercontrol && timercontrol._isLocked) {
				$( '<div id="timer">' + selectimer + '</div>' ).appendTo( '#wrapper' );
			} else {
				$( '<div id="timer" class="nolocktime">' + selectimer + '</div>' ).appendTo( '#wrapper' );
			}
			console.log("Timer has been enabled");
			//new TimerDocservice({ model: new Backbone.Model(button) });
		}

		if (!emaillink || !emaillink._emailEnabled) {
			console.log("Email Address is not enabled");
		}

		if (emaillink && emaillink._emailEnabled) {
			if (!timercontrol || !timercontrol._isEnabled) {
				$( '<div id="myemail" style="right: 214px;"><a href="mailto:' + linkaddress + '" target="_blank">&nbsp;</a></div>' ).appendTo( '#wrapper' );
				console.log("Email Address has been enabled");
			} else {
				$( '<div id="myemail"><a href="mailto:' + linkaddress + '" target="_blank">&nbsp;</a></div>' ).appendTo( '#wrapper' );
				console.log("Email Address has been enabled");
			}
		}

		if ( $('.menu').hasClass('tilesmenu-menu') ) {
			$('#timer').addClass('timer4tile');
			$('#myemail').addClass('email4tile');
			console.log("Is Tile Menu");
		} else {
			console.log("Is Carousel Menu");
		}
		
	});
});
