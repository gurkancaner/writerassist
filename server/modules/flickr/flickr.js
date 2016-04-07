Meteor.methods({
  "flickrSearch": function(term) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    if (Flickr) {
      var searchSync = Meteor.wrapAsync(Flickr.photos.search, Flickr.photos);
      try {
        var result = searchSync({
          tags: term,
          media: "photo",
          per_page: 10
        });
        return result;
      } catch (error) {
        throw new Meteor.Error(error);
      }
    }
    throw new Meteor.Error("Flick not initialized");
  }
});
