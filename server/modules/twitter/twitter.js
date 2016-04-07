Meteor.methods({
  "twitterSearch": function(terms) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    var searchKeywords = "";
    if (terms) {
      var list = terms.split(",");
      for (var key in list) {
        searchKeywords += '"' + list[key].trim() + '" OR ';
      }
    } else { //empty string, nothing to do
      return;
    }
    //Twitter search
    var twitterGetSync = Meteor.wrapAsync(Twitter.get, Twitter);
    try {
      var result = twitterGetSync('search/tweets', {
        q: searchKeywords,
        count: 10
      });
      return result;
    } catch (error) {
      throw new Meteor.Error(error);
    }


  }
});
