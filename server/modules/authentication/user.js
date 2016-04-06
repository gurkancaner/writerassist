Meteor.publish("userData", function() {
  return Meteor.users.find(this.userId, { //only publish necessary info
    fields: {
      "services.twitter.screenName": 1,
      "services.twitter.profile_image_url": 1
    }
  });
});
