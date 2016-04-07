Template.flickrWidget.helpers({
  FlickrPhotos: function() {
    return Session.get("flickrSearchResult");
  },
  flickrUrl: function(photo) {
    var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/"
      + photo.id + "_" + photo.secret + "_m.jpg";
    return url;
  }
});
