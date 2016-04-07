Template.flickrWidget.helpers({
  FlickrPhotos: function() {
    return Session.get("flickrSearchResult");
  },
  flickrUrl: function(photo) {
    var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/"
      + photo.id + "_" + photo.secret + "_m.jpg";
    return url;
  },
  flickrUrlBig: function(photo) {
    var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/"
      + photo.id + "_" + photo.secret + "_b.jpg";
    return url;
  }
});

Template.flickrWidget.events({
  "click #add-to-story": function(event, template) {
    event.preventDefault();
    var url = event.target.dataset.url;
    $('.froalaEditorContent').froalaEditor('image.insert', url, true, {
      'name': 'image_name',
      'id': 'image_1'
    });

  }
});
