var SearchView = Backbone.View.extend({

  events: {
    'click .btn': "search"
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  search: function(){
    var text = this.$el.find('.form-control').val();

    // AppView.prototype.onSearch(text);
  },

  template: templateURL('src/templates/search.html')

});
