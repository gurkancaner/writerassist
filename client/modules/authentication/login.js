Template.login.events({
  'click #login-with-twitter': function(event) {
    event.preventDefault(); //dont submit
    Meteor.loginWithTwitter();
  }
});
