Meteor.methods({
  "twitterSearch": function(terms) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    var searchKeywords = "";
    if (terms) {
      var list = terms.split(",");
      searchKeywords += '"' + list[0].trim() + '"';
    // for (var key in list) {
    //   if (list[key].trim())
    //
    // }
    } else { //empty string, nothing to do
      return;
    }
    //Twitter search
    console.log("searchKeywords", searchKeywords);
    var twitterGetSync = Meteor.wrapAsync(Twitter.get, Twitter);
    try {
      var result = twitterGetSync('search/tweets', {
        q: searchKeywords,
        count: 10,
        lang: "en"
      });
      return result;
    } catch (error) {
      throw new Meteor.Error(error);
    }


  }
});
