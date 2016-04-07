Meteor.methods({
  "twitterSearch": function(term) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    //Twitter search
    var twitterGetSync = Meteor.wrapAsync(Twitter.get, Twitter);
    try {
      var result = twitterGetSync('search/tweets', {
        q: term,
        count: 10
      });
      return result;
    } catch (error) {
      throw new Meteor.Error(error);
    }


  }
});
