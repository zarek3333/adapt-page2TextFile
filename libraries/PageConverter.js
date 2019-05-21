function totext() { 
	$snippets = $('.page');
	$menuitems = $('.menu');
	$perarticle = $('.article');
	$perblock = $('.block');

    //COUNT HOW MANY ARTICLES THERE ARE
	$perarticle.each(function() {
		var countdarticle = $(this).attr('class');
    	var myarticlenum = countdarticle.replace(/testbg/g, "").replace(/quizbg/g, "").replace(/article-block-slider-enabled/g, "").replace(/article/g, "").replace(/nth-child-/g, "").replace(/assessment/g, "").replace(/noSubmitButtons/g, "").replace(/ /g, "");
    	var articledetails = myarticlenum.slice(0, 24);
    	var howmanyarticle = myarticlenum.substring(24);

        if ( $(this).hasClass(articledetails) ) {
        	$(this).prepend( "<div class='articledetails a11y-ignore' aria-hidden='true' tabindex='-1' style='display:none'>********** [ARTICLE NUMBER: 0" + howmanyarticle + "] **********</div>" );
        }
	});

    //COUNT HOW MANY BLOCKS THERE ARE
	$perblock.each(function() {
		var countdablock = $(this).attr('class');
    	var myblocknum = countdablock.replace(/background-switcher-block/g, "").replace(/blockslider-bgimage/g, "").replace(/block/g, "").replace(/paddingoff/g, "").replace(/mytopborder/g, "").replace(/mybottomborder/g, "").replace(/quicknav/g, "").replace(/nth-child-/g, "").replace(/nominheight/g, "").replace(/ /g, "");
    	var blockdetails = myblocknum.slice(0, 24);
    	var howmanyblocks = myblocknum.substring(24);

        if ( $(this).hasClass(blockdetails) ) {
        	$(this).prepend( "<div class='blockdetails a11y-ignore' aria-hidden='true' tabindex='-1' style='display:none'>********** [ BLOCK NUMBER: 0" + howmanyblocks + " ] **********</div>" );
        }
	});

	if ( $('#wrapper').find('div').hasClass('menu') ) {

		$.each($menuitems, function (index, obj) {
	        var $this = $(this);
	        var clonedamenu = $menuitems.clone().prependTo( ".hidepgconvertxt" );
	        clonedamenu.find('script').remove();
	        clonedamenu.find('.aria-label').remove();
	        clonedamenu.find('.viewtext').remove();
	        clonedamenu.find('.menu-item-button button').remove();
	        clonedamenu.find('.menu-tooltip').remove();
	        clonedamenu.find('.skipme').remove();

	        var $backofNotify2 = clonedamenu.text().replace(/\<p\>/g, " ").replace(/\<\/p\>/g, " ").replace(/\<p tabindex\=\"0\" class\=\"prevent-default accessible-text-block\" role=\"region\"\>/g, " ").replace(/\<p role\=\"region\" tabindex\=\"0\" class\=\"prevent-default accessible-text-block\"\>/g, " ");
	   
	        var txt2 = $.trim($backofNotify2);
        	var box2 = $('.hidepgconvertxt');
        	box2.val(box2.val() + txt2);

	    });

	    var menutext = $('.hidepgconvertxt').val().replace(/\s\s+/g, '\n\n');
	    var menublob = new Blob([menutext], { type: "text/plain;charset=utf-8" });
	    var themenuname = $('#wrapper .menu-title-inner').text();
	    themenuname = $.trim(themenuname);
		saveAs(menublob, themenuname + "_Menu" + ".txt");

    } else {

    	$.each($snippets, function (index, obj) {
	        var $this = $(this);
	        var clonedapage = $snippets.clone().prependTo( ".hidepgconvertxt" );

	        clonedapage.find('script').remove();
	        clonedapage.find('.toproceedon').remove();
	        clonedapage.find('.aria-label').remove();
	        clonedapage.find('.azure-widget script').remove();
	        clonedapage.find('.removeazurevid').remove();
	        clonedapage.find('.media-widget').remove();
	        clonedapage.find('.component-inner .buttons').remove();
	        clonedapage.find('.hotgraphic-popup-count').remove();
	        clonedapage.find('.matching-component script').remove();
	        clonedapage.find('.matching-select-container .select2').remove();
	        clonedapage.find('.narrative-component script').remove();
	        clonedapage.find('.reveal-widget-item .reveal-popup-open').remove();
	        clonedapage.find('.slider-scale-numbers .slider-scale-marker').remove();
	        clonedapage.find('.slider-widget .slider-background').remove();
	        clonedapage.find('.narrative-strapline-title .narrative-strapline-title-inner').before( "Mobile Narrative Strapline:" );

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
	        clonedapage.find('ul ul li:first-child').prepend('\n\n\t');
	        clonedapage.find('ol ol li:first-child').prepend('\n\n\t');
	        clonedapage.find('li').append('\t');
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
	    var pageonlytitle = $('.hidepgconvertxt .page-title-inner').text().replace(/\s\s+/g, '');
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

    }   
};
