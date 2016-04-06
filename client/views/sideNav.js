Template.sideNav.helpers({
  StoryCount: function() {
    return Stories.find().count();
  }
});
