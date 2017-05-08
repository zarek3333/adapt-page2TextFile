define([
  'core/js/adapt'
], function(Adapt) {


  var printPageView = Backbone.View.extend({

    className: "block printPage",

    initialize: function() {
      this.listenTo(Adapt, 'remove', this.remove);
      console.log('PRINTPAGEINIT');
      console.log(this.model.pageModel);
      var blocks = this.model.pageModel.findDescendants("blocks");
      var lastID = blocks.last().get("_id");
      console.log(blocks.last());
      console.log(lastID);
      this.render(lastID);
    },

    render: function(lastID) {
      var template = Handlebars.templates["printPage"];
      $('.' + lastID).after(this.$el.html(template(this.model)));
      this.$el.html(template(this.model));
      return this;
    }

  });

  Adapt.on("app:dataReady", function() {});

  Adapt.on("pageView:ready", function(pageView) {
    console.log(Adapt.findById(Adapt.location._currentId));
    console.log(pageView);
    if (Adapt.findById(Adapt.location._currentId).attributes._printPage._isEnabled !== true) return;
    var pageModel = pageView.model;
    new printPageView({model:{ pageModel }});
    // var pageModel = pageView.model;
    // var blocks = pageModel.findDescendants("blocks");
    // var lastID = blocks.last().get("_id");
    // console.log(blocks.last());
    // console.log(lastID);
    // $('.' + lastID).append
  });

  // Adapt.on("pageView:postRender", function(pageView) {
  //   var pageModel = pageView.model;
  //   if (pageModel.get("_quicknav") === undefined) return;
  //   var config = pageModel.get("_quicknav");
  //   if (config._isEnabled !== true && config._isEnabled !== undefined) return;
  //
  //   var blocks = pageModel.findDescendants("blocks");
  //
  //   var parentId = pageModel.get("_parentId");
  //   quicknav.state.currentMenu = Adapt.findById(parentId);
  //   quicknav.state.currentPage = pageView;
  //   quicknav.state.lastBlock = blocks.last();
  //   quicknav.config = config;
  // });

  Adapt.on("menuView:ready", function() {

  });

});
