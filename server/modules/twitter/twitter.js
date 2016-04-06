Meteor.methods({
  "twitterSearch": function(term) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var twitterGetSync = Meteor.wrapAsync(Twitter.get, Twitter);
    try {
      var result = twitterGetSync('search/tweets', {
        q: term + ' since:2011-07-11',
        count: 10
      });
      return result;
    } catch (error) {
      throw new Meteor.Error(error);
    }
  }
});
