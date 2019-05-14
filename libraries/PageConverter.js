function totext() { 
		$snippets = $('.page');
		$menuitems = $('.menu');

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
		        clonedapage.find('script').remove(':not(.accordion-item script):not(.notify-imagegrid-grid-item script)');
		        clonedapage.find('.toproceedon').remove();
		        clonedapage.find('.aria-label').remove();
		        clonedapage.find('.quicknav').remove();
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

				var $backofNotify = clonedapage.text().replace(/\$\( \'\#accordalert/g, "Accordion Notify ").replace(/\' \)\.on\( \'click\'\, function\(\) \{ require\(\'coreJS\/adapt\'\)\.trigger\(\'notify\:alert\'\,\{title\:\'/g, ": ").replace(/\'\,body\:\'/g, "\nNotify Body: ").replace(/\'\,confirmText\: \'Continue\'\}\)\;return false\; \}\)\;/g, "").replace(/\$\( \'img\[src\=\"course\/en\/assets\//g, "Notifier Image: ").replace(/\"\]\' \)\.addClass\(\'img2click\'\)\;/g, "").replace(/\"\]\' \)\.on\( \'click\'\, function\(\) \{/g, "").replace(/require\(\'coreJS\/adapt\'\)\.trigger\(\'notify\:popup\'\,\{title\:\'/g, "").replace(/\'\}\)\;return false\;/g, "").replace(/\}\)\;/g, "").replace(/\<p\>/g, " ").replace(/\<\/p\>/g, " ").replace(/\<p tabindex\=\"0\" class\=\"prevent-default accessible-text-block\" role=\"region\"\>/g, " ").replace(/\<p role\=\"region\" tabindex\=\"0\" class\=\"prevent-default accessible-text-block\"\>/g, " ");
		   
		        var txt = $.trim($backofNotify);
	        	var box = $('.hidepgconvertxt');
	        	box.val(box.val() + txt);

		    });

		    var text = $('.hidepgconvertxt').val().replace(/\s\s+/g, '\n\n');
		    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
		    var thepagination = $('.navpagenum').text();
		    var thefilename = $('.modulehead').text();
		    thefilename = $.trim(thefilename);
		    var pagetitletag = $('title').text();
		    pagetitletag = $.trim(pagetitletag);

		    if( $('.navpagenum').contents().length == 0) {
		    	saveAs(blob, pagetitletag + ".txt");
		    } else {
		    	saveAs(blob, thefilename + "_" + thepagination + ".txt");
		    }

	    }
        
};
