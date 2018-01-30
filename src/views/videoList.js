var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.on('change', this.render, this);
    // this.render();
  },

  render: function() {
    // debugger
    this.$el.children().detach();
    this.$el.html(this.template());
    // // debugger
    this.$el.append(this.collection.forEach(function(video) {
      this.$el.find('.video-list').append(this.renderVideo(video));
    }, this));
    return this.$el;
  },

  renderVideo: function(video) {
    // debugger
    var videoListEntry = new VideoListEntryView({model: video});
    return videoListEntry.render();
  },

  template: templateURL('src/templates/videoList.html')

});
