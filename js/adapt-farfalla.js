define([
    'core/js/adapt'
], function(Adapt) {

    Adapt.on("app:dataReady", function() {



        // var GaTag = document.createElement("script");
        // var GaScript = $("head").append('<script>$.getScript("",function(){console.log("Farfalla project has been loaded")});</script>');
        // GaTag.innerHTML = GaScript;
        // document.head.appendChild(GaTag);
    });

    Adapt.on("pageView:ready", function() {

    });

    Adapt.on("menuView:ready", function() {

    });

});
