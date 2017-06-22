define([
  'core/js/adapt'
], function(Adapt) {

  var printPageView = Backbone.View.extend({

    className: "printPage",

    initialize: function() {
      this.listenTo(Adapt, {
        "navigation:printPage": function(){
          window.print();},
      });

      this.listenTo(Adapt, 'remove', this.remove);
      console.log(this.model);
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
      console.log(template);
      console.log(this.$el);
      $('.navigation-inner').append(this.$el.html(template(this.model.pageModel.attributes._printPage)));
    },

    renderBottom: function(lastID) {
      var template = Handlebars.templates["printPage-bottom"];
      $('.' + lastID).after(this.$el.html(template(this.model.pageModel.attributes._printPage)));
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

  Adapt.on("menuView:ready", function() {

  });

});
