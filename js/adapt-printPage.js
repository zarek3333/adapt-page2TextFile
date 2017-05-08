define([
  'core/js/adapt'
], function(Adapt) {

  var printPageView = Backbone.View.extend({

    className: "block printPage",

    initialize: function() {
      this.listenTo(Adapt, 'remove', this.remove);
      var blocks = this.model.pageModel.findDescendants("blocks");
      var lastID = blocks.last().get("_id");
      this.render(lastID);
    },

    render: function(lastID) {
      var template = Handlebars.templates["printPage"];
      $('.' + lastID).after(this.$el.html(template(this.model.pageModel.attributes._printPage)));
      return this;
    }
  });

  Adapt.on("pageView:ready", function(pageView) {
    if (Adapt.findById(Adapt.location._currentId).attributes._printPage._isEnabled !== true) return;
    var pageModel = pageView.model;
    new printPageView({model:{ pageModel }});
  });

  Adapt.on("menuView:ready", function() {

  });

});
