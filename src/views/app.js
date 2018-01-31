var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    // this.videos = new Videos();
    // this.videos.search()
    // test = this.videos.fetch({
    //           data: {'key': YOUTUBE_API_KEY,
    //           'maxResults': '25',
    //           'part': 'snippet',
    //           'q': 'surfing',
    //           'type': ''},
    //   success: function(response,xhr) {
    //      console.log("Inside success");
    //      console.log(response);
    //   },
    //   error: function (errorResponse) {
    //          console.log(errorResponse)
    //   },
    // })
    // this.videos.reset()
    // debugger
    this.search();
  },

  render: function() {
    this.videoPlayer = new VideoPlayerView(this.videos.models[0]);
    this.$el.html(this.template());
    this.$el.find('.list').html(this.list.render());
    this.$el.find('.player').html(this.videoPlayer.render());
  },

  requestData: {'key': YOUTUBE_API_KEY,
    'maxResults': '5',
    'part': 'snippet',
    'q': 'surfing',
    'type': ''
  },

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function() {
    // debugger
    $.ajax( {
      type: 'GET',
      url: this.url,
      data: this.requestData,
      success: (data) => {
        console.log(data.items);
        this.successFetch(data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  successFetch: function(data) {
    this.videos = new Videos(data.items);
    this.list = new VideoListView( { collection: this.videos } );
    this.videos.on('select', function(clickedVideo) {
      this.videoPlayer = new VideoPlayerView(clickedVideo);
      this.$el.find('.player').html(this.videoPlayer.render());
    }, this);
    this.render();
  },

  template: templateURL('src/templates/app.html')

});
