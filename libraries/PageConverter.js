function totext() { 
	$snippets = $('.page');
	$menuitems = $('.menu');
	$perarticle = $('.article');
	$perblock = $('.block');
	$percomponent = $('.component');
	$perimage = $('img');

    //COUNT HOW MANY ARTICLES THERE ARE
	$perarticle.each(function() {
		var countdarticle = $(this).attr('class');
    	var myarticlenum = countdarticle.replace(/testbg/g, "").replace(/quizbg/g, "").replace(/abs/g, "").replace(/article/g, "").replace(/is-assessment/g, "").replace(/noSubmitButtons/g, "").replace(/submitallOff/g, "").replace(/is-complete/g, "").replace(/is-disabled/g, "").replace(/ /g, "");
    	var articledetails = myarticlenum.slice(0, 24);
    	//var howmanyarticle = myarticlenum.substring(24);
    	var howmanyarticle = $(this).index() + 1;

        if ( $(this).hasClass(articledetails) ) {
        	$(this).prepend( "<div class='articledetails a11y-ignore' aria-hidden='true' tabindex='-1' style='display:none'>********** [ARTICLE NUMBER: " + howmanyarticle + "] **********</div>" );
        }
	});

    //COUNT HOW MANY BLOCKS THERE ARE
	$perblock.each(function() {
		var countdablock = $(this).attr('class');
    	var myblocknum = countdablock.replace(/background-switcher-block/g, "").replace(/block/g, "").replace(/paddingoff/g, "").replace(/mytopborder/g, "").replace(/mybottomborder/g, "").replace(/quicknav/g, "").replace(/half2topmerge/g, "").replace(/nominheight/g, "").replace(/removeminheight/g, "").replace(/noborderline/g, "").replace(/removetoppad/g, "").replace(/removebotpad/g, "").replace(/middlemerge/g, "").replace(/narrativeaudio/g, "").replace(/blocknext/g, "").replace(/u-visibility-hidden/g, "").replace(/greyblock/g, "").replace(/hidewhitebg/g, "").replace(/is-complete/g, "").replace(/is-disabled/g, "").replace(/u-display-none/g, "").replace(/has-bg-image/g, "").replace(/ /g, "");
    	var blockdetails = myblocknum.slice(0, 24);
    	//var howmanyblocks = myblocknum.substring(24);
    	var howmanyblocks = $(this).index() + 1;

        if ( $(this).hasClass(blockdetails) ) {
        	$(this).prepend( "<div class='blockdetails a11y-ignore' aria-hidden='true' tabindex='-1' style='display:none'>********** [ BLOCK NUMBER: " + howmanyblocks + " ] **********</div>" );
        }
	});

	//PLACE A LABEL FOR A COMPONENT
	$percomponent.each(function() {
        	$(this).prepend( "<div class='componentdetails a11y-ignore' aria-hidden='true' tabindex='-1' style='display:none'>********** [ COMPONENT DETAILS BELOW ] **********</div>" );
	});

	//PULL ALT TAGS FOR IMAGE TAGS
	$perimage.each(function() {
        	var imgaltinfo = $(this).attr('alt');
        	if (typeof imgaltinfo === "undefined") {
			    $(this).prepend( "<div class='imagedetails a11y-ignore' aria-hidden='true' tabindex='-1' style='display:none'>[ IMAGE ALT TAG ] = *IMAGE IS MISSING AN ALT TAG" );
			} else {
				$(this).prepend( "<div class='imagedetails a11y-ignore' aria-hidden='true' tabindex='-1' style='display:none'>[ IMAGE ALT TAG ] = " + imgaltinfo );
			}
	});

	if ( $('#wrapper').find('div').hasClass('menu') ) {

		$.each($menuitems, function (index, obj) {
	        var $this = $(this);
	        var clonedamenu = $menuitems.clone().prependTo( ".hidepgconvertxt" );
	        clonedamenu.find('script').remove();
	        clonedamenu.find('.aria-label').remove();
	        clonedamenu.find('.viewtext').remove();
	        clonedamenu.find('.carousel-menu-item button').remove();
	        clonedamenu.find('.menu-tooltip').remove();
	        clonedamenu.find('.skipme').remove();

	        var $backofNotify2 = clonedamenu.text().replace(/\<p\>/g, " ").replace(/\<\/p\>/g, " ").replace(/\<p tabindex\=\"0\" class\=\"prevent-default accessible-text-block\" role=\"region\"\>/g, " ").replace(/\<p role\=\"region\" tabindex\=\"0\" class\=\"prevent-default accessible-text-block\"\>/g, " ");
	   
	        var txt2 = $.trim($backofNotify2);
        	var box2 = $('.hidepgconvertxt');
        	box2.val(box2.val() + txt2);

	    });

	    var menutext = $('.hidepgconvertxt').val().replace(/\s\s+/g, '\n\n');
	    var menublob = new Blob([menutext], { type: "text/plain;charset=utf-8" });
	    var Adapt = require('core/js/adapt'); // get me the Adapt singleton!
		var courseModel = Adapt.course; // get me the course model
		var themenuname = courseModel.get('displayTitle'); // get me the course title from the course model
	    themenuname = $.trim(themenuname);
		saveAs(menublob, themenuname + "_Menu" + ".txt");

    } else {

    	$.each($snippets, function (index, obj) {
	        var $this = $(this);
	        var clonedapage = $snippets.clone().prependTo( ".hidepgconvertxt" );

	        clonedapage.find('script').remove();
	        clonedapage.find('.toproceedon').remove();
	        clonedapage.find('.aria-label').remove();
	        clonedapage.find('.azure__widget script').remove();
	        clonedapage.find('.removeazurevid').remove();
	        clonedapage.find('.media__widget').remove();
	        clonedapage.find('.component__inner .buttons').remove();
	        clonedapage.find('.hotgraphic-popup__count').remove();
	        clonedapage.find('.matching script').remove();
	        clonedapage.find('.narrative script').remove();
	        clonedapage.find('.reveal__widget-item .reveal-popup-open').remove();
	        clonedapage.find('.slider__number-container .slider__number').remove();
	        clonedapage.find('.slider__widget .slider__scale-container').remove();
	        clonedapage.find('.dragquesbutton button').remove();
	        clonedapage.find('.narrative__strapline-title .narrative__strapline-title-inner').remove();
	        clonedapage.find('.trickle__btn-text-inner style').remove();

	        //Image Grid Notifier find items using notifier
	        $('.notify-imagegrid-grid-item').each(function() {
		        if ( $(this).find('div').hasClass('howmanygrid') ) {
		        	$(this).addClass( "griditemhasimg" );
		        }
	        });

	        clonedapage.find('.griditemhasimg .notify-imagegrid-item-title').remove();
	        clonedapage.find('p').append('\n\n');
	        clonedapage.find('ul').append('\n\n');
	        clonedapage.find('ol').append('\n\n');
	        clonedapage.find('ul > :first-child').prepend('\n\n\t• ');
	        clonedapage.find('ol > :first-child').prepend('\n\n\t• ');
	        clonedapage.find('li').not(':first-child').prepend('\t• ');
	        clonedapage.find('tr').append('\n\n');
	        clonedapage.find('td').append('\t');
	        clonedapage.find('th').append('\t');

			var $backofNotify = clonedapage.text().replace(/\' \)\.on\( \'click\'\, function\(\) \{ require\(\'coreJS\/adapt\'\)\.trigger\(\'notify\:alert\'\,\{title\:\'/g, ": ").replace(/\'\,body\:\'/g, "\nNotify Body: ").replace(/\'\,confirmText\: \'Continue\'\}\)\;return false\; \}\)\;/g, "").replace(/\" \)\.on\( \"click\"\, function\(\) \{ require\(\"coreJS\/adapt\"\)\.trigger\(\"notify\:alert\"\,\{title\:\"/g, ": ").replace(/\"\,body\:\"/g, "\nNotify Body: ").replace(/\"return false\; \}\)\;/g, "\n\n").replace(/\"\,confirmText\: \"/g, "\n\n").replace(/\'return false\; \}\)\;/g, "\n\n").replace(/\'\,confirmText\: \'/g, "\n\n").replace(/\"\]\' \)\.addClass\(\'img2click\'\)\;/g, "").replace(/\"\]\' \)\.on\( \'click\'\, function\(\) \{/g, "").replace(/require\(\'coreJS\/adapt\'\)\.trigger\(\'notify\:popup\'\,\{title\:\'/g, "").replace(/\'\}\)\;return false\;/g, "").replace(/\}\)\;/g, "").replace(/\<p\>/g, " ").replace(/\<\/p\>/g, " ").replace(/\<p tabindex\=\"0\" class\=\"prevent-default accessible-text-block\" role=\"region\"\>/g, " ").replace(/\<p role\=\"region\" tabindex\=\"0\" class\=\"prevent-default accessible-text-block\"\>/g, " ");
	   
	        var txt = $.trim($backofNotify);
        	var box = $('.hidepgconvertxt');
        	box.val(box.val() + txt);

	    });

	    var text = $('.hidepgconvertxt').val().replace(/\s\s+/g, '\n\n');
	    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
	    var thepagination = $('.navpagenum').text();
	    var thefilename = $('.modulehead').text();
	    thefilename = $.trim(thefilename);
	    var pagetitletag = $('title').text().replace(/\s\s+/g, '');
	    pagetitletag = $.trim(pagetitletag);
	    var pageonlytitle = $('.hidepgconvertxt .page__title-inner').text().replace(/\s\s+/g, '');
	    pageonlytitle = $.trim(pageonlytitle);

	    if( $('.navpagenum').contents().length == 0) {
	    	saveAs(blob, pagetitletag + ".txt");
	    } else {
	    	if( $('.modulehead').contents().length == 0) {
	    		saveAs(blob, pageonlytitle + "_" + thepagination + ".txt");
	    	} else {
	    		saveAs(blob, thefilename + "_" + thepagination + ".txt");
	    	}
	    }
	    
	    require("coreJS/adapt").trigger("notify:popup",{title:"Caution you are viewing this course in developer mode!",body:"To preview the course as a regular viewer with complete functionality restored, please remove '<b>?export=on</b>' in URL path above."});return false;

    }   
};
