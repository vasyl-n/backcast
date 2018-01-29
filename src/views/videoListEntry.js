var VideoListEntryView = Backbone.View.extend({


  initialize: function(data){

  },

  events: {
    'click .video-list-entry-title': "select"
  },

  select: function(){
    this.model.select();
  },

  render: function() {
    // debugger
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
