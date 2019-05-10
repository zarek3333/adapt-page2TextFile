function totext() { 
		$snippets = $('.page');

		$.each($snippets, function (index, obj) {
	        var $this = $(this);
	        $this.find('script').remove(':not(.accordion-item script):not(.notify-imagegrid-grid-item script)');
	        $this.find('.toproceedon').remove();
	        $this.find('.aria-label').remove();
	        $this.find('.quicknav').remove();
	        $this.find('.azure-widget script').remove();
	        $this.find('.removeazurevid').remove();
	        $this.find('.media-widget').remove();
	        $this.find('.component-inner .buttons').remove();
	        $this.find('.hotgraphic-popup-count').remove();
	        $this.find('.matching-component script').remove();
	        $this.find('.matching-select-container .select2').remove();
	        $this.find('.narrative-component script').remove();
	        $this.find('.reveal-widget-item .reveal-popup-open').remove();
	        $this.find('.slider-scale-numbers .slider-scale-marker').remove();
	        $this.find('.slider-widget .slider-background').remove();
	        $this.find('.narrative-strapline-title .narrative-strapline-title-inner').before( "Mobile Narrative Strapline:" );

			var $backofNotify = $this.text().replace(/\$\( \'\#accordalert/g, "Accordion Notify ").replace(/\' \)\.on\( \'click\'\, function\(\) \{ require\(\'coreJS\/adapt\'\)\.trigger\(\'notify\:alert\'\,\{title\:\'/g, " Title: ").replace(/\'\,body\:\'/g, "\nNotify Body: ").replace(/\'\,confirmText\: \'Continue\'\}\)\;return false\; \}\)\;/g, "").replace(/\$\( \'img\[src\=\"course\/en\/assets\//g, "Image: ").replace(/\"\]\' \)\.addClass\(\'img2click\'\)\;/g, "\nImage Grid Notify ").replace(/\"\]\' \)\.on\( \'click\'\, function\(\) \{/g, "").replace(/require\(\'coreJS\/adapt\'\)\.trigger\(\'notify\:popup\'\,\{title\:\'/g, " Title: ").replace(/\'\}\)\;return false\;/g, "").replace(/\}\)\;/g, "").replace(/\<p\>/g, "\n").replace(/\<\/p\>/g, "").replace(/\<p role\=\"region\" tabindex\=\"0\" class\=\"prevent-default accessible-text-block\"\>/g, "\n");
	   
	        var txt = $.trim($backofNotify);
        	var box = $('.page');
        	box.val(box.val() + txt);

	    });

	var text = $('.page').val();
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    var thefilename = $('.modulehead').text();
    var thepagination = $('.navpagenum').text();
    thefilename = $.trim(thefilename);
    saveAs(blob, thefilename + "_" + thepagination + ".txt");    
};
