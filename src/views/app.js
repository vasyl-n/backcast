var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // debugger
    this.videos = new Videos(exampleVideoData);
    this.list = new VideoListView({ collection: this.videos });
    this.render();
  },

  render: function() {
    // debugger
    this.$el.html(this.template());
    this.$el.append(this.list.render());
    // return this.$el
  },

  template: templateURL('src/templates/app.html')

});
