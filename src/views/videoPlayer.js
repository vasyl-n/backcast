var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this, 'all', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
