var VideoListView = Backbone.View.extend({

  initialize: function(data) {
    this.collection = data.collection;
    this.on('change', this.render, this);
    // debugger

    this.render();
  },

  render: function() {
    // debugger
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(function(video) {
      this.renderVideo(video);
    }, this);

    return this.$el;
  },

  renderVideo: function(video) {
    // debugger
    var videoListEntry = new VideoListEntryView({model: video});
    return this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
