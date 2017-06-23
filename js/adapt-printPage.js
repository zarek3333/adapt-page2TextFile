define([
  'core/js/adapt'
], function(Adapt) {

  var printPageView = Backbone.View.extend({

    initialize: function() {

      this.listenTo(Adapt, 'remove', this.remove);
      console.log(this.model.model._showOn);
      if(this.model.model._showOn == 'navigation'){
        this.renderNavigation();
      } else {
        var blocks = this.model.pageModel.findDescendants("blocks");
        var lastID = blocks.last().get("_id");
        this.renderBottom(lastID);
      }
    },

    renderNavigation: function() {
      var template = Handlebars.templates["printPage-navigation"];
      this.setElement(template(this.model.model)).$el.appendTo($(".navigation-inner"));
      this.listenTo(Adapt, {
        "navigation:printPage": function(){
          window.print();},
      });
    },

    renderBottom: function(lastID) {
      var template = Handlebars.templates["printPage-bottom"];
      this.setElement(template(this.model.model)).$el.insertAfter($('.' + lastID));
      return this;
    }
  });

  Adapt.on("pageView:ready", function(pageView) {
    var model = Adapt.findById(Adapt.location._currentId).attributes._printPage;
    if(model == undefined) return;
    if (model._isEnabled !== true) return;
    var pageModel = pageView.model;
    new printPageView({model:{ pageModel, model }});
  });
});
