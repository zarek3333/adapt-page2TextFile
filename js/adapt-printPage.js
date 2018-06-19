define(['core/js/adapt'], function(Adapt) {

  var printPageView = Backbone.View.extend({

    initialize: function() {
      this.listenTo(Adapt, "remove", this.remove);
      if (this.model._showOn == 'navigation') {
        this.renderNavigation();
      } else {
        this.listenTo(Adapt, {
            "pageView:ready": this.renderBottom
        });
      }
      this.listenTo(Adapt, {
          "pageView:ready": this.appendPrintToComponents
      });
    },

    appendPrintToComponents: function() {
      var currentPage = Adapt.contentObjects._byAdaptID[Adapt.location._currentId][0];
      var pageComponents = currentPage.findDescendantModels("components");
      var hotgridComponents = this.searchComponentType(pageComponents, "hotgrid");
      this.appendHotgirdPrint(hotgridComponents);
    },

    searchComponentType: function(pageComponents, type) {
      return pageComponents.filter(function(model) {
        return model.get("_component") === type;
      });
    },

    appendHotgirdPrint: function(hotgridComponents) {
      if(!hotgridComponents) return;

      for(var i in hotgridComponents) {
        $('.hotgrid-component').eq(i).append("<div class='print-only-text'>" + this.getHotgridItems(hotgridComponents[i].get("_items")) + "</div>");
      }
    },

    getHotgridItems: function(hotgridItems) {
      var text = '';
        for(var i in hotgridItems) {
          text += "<div class='title'>" + hotgridItems[i].title + "</div><div class='text'>" + hotgridItems[i].body + "</div>";
        }
        return text;
    },

    renderNavigation: function() {
      var template = Handlebars.templates["printPage-navigation"];
      this.setElement(template(this.model)).$el.appendTo($(".navigation-inner"));
      this.listenTo(Adapt, {
        "navigation:printPage": function() {
          window.print();
        }
      });
    },

    renderBottom: function() {
      var blocks = Adapt.findById(Adapt.location._currentId).findDescendants('blocks');
      var lastID = blocks.last().get("_id");
      var template = Handlebars.templates["printPage-bottom"];
      this.setElement(template(this.model)).$el.insertAfter($('.' + lastID));
    }
  });

  Adapt.on("pageView:preRender", function(pageView) {
    var model = Adapt.findById(Adapt.location._currentId).get('_printPage');
    if (model == undefined || !model._isEnabled)
      return;
    new printPageView({model: model});
  });
});
