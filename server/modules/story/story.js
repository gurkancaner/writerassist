Meteor.publish("stories", function() {
  return Stories.find({
    user: this.userId
  });
});
Meteor.methods({
  "storyAdd": function(id, title, content) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var id = Stories.insert({
      title: title,
      content: content,
      user: Meteor.userId(),
      created: new Date()
    });
  },
  "storyUpdate": function(id, title, content) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Stories.update({
      _id: id,
      user: Meteor.userId()
    }, {
      $set: {
        title: title,
        content: content,
        updated: new Date()
      }
    });
  },
  "storyDelete": function(id) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Stories.remove({
      _id: id,
      user: Meteor.userId()
    });
  }

});
