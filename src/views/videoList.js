var VideoListView = Backbone.View.extend({

  initialize: function(data) {
    this.on('change', this.render, this);
    // debugger
    data.collection.models.forEach(this.renderVideo, this);
    this.render();
  },

  render: function() {
    // debugger
    this.$el.children().detach();
    this.$el.html(this.template());
    return this.$el;
  },

  renderVideo: function(video) {
    // debugger
    var videoListEntry = new VideoListEntryView({model: video});
    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
