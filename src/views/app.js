var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.search();
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({ collection: this.videos, el: this.$('.list')}).render();
    new VideoPlayerView({ model: this.videos.models[0], el: this.$('.player')}).render();
    new SearchView({el: this.$('.search')}).render();

    this.videos.on('select', function(clickedVideo) {
      new VideoPlayerView({model: clickedVideo, el: this.$('.player')}).render();
      // this.$el.find('.player').html(this.videoPlayer.render());
    }, this);

  },

  onSearch: function(value) {
    this.requestData.q = value;
    // debugger
    this.initialize();
  },

  requestData: {
    'key': YOUTUBE_API_KEY,
    'maxResults': '5',
    'part': 'snippet',
    'q': 'something',
    'type': ''
  },

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function() {
    $.ajax( {
      type: 'GET',
      url: this.url,
      data: this.requestData,
      success: (data) => {
        // console.log(data.items);
        this.successFetch(data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  successFetch: function(data) {
    this.videos = new Videos(data.items);
    this.render();
  },

  template: templateURL('src/templates/app.html')

});
