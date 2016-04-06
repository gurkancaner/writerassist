Template.twitterWidget.helpers({
  Tweets: function() {
    return Session.get("twitterSearchResult");
  }
});
