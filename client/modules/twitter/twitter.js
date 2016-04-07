Template.twitterWidget.onRendered = function() {
  $(document).ready(function() {
    $('ul.tabs').tabs();
  });

}
Template.twitterWidget.helpers({
  Tweets: function() {
    return Session.get("twitterSearchResult");
  }
});
