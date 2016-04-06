Template.storyAdd.events({
  'submit #add-story': function(event, target) {
    event.preventDefault();
    //retrieve the input field values
    var id = target.find("#id").value;
    var title = target.find("#title").value;
    var content = target.find("#content").value;

    var method = "storyAdd";
    if (id) {
      method = "storyUpdate";
    }

    Meteor.call(method, id, title, content, function(error) {
      if (error) {
        console.log(error);
        $("#status").html(error.reason);
      } else {
        Router.go("stories");
      }
    });
  },
  'click #delete-story': function(event, target) {
    Meteor.call("storyDelete", this._id, function(error) {
      if (error) {
        console.log(error);
        $("#status").html(error.reason);
      } else {
        $('#confirm-delete').closeModal();
        Router.go("stories");
      }
    });
  },
  'click #delete-story-button': function(event, target) {
    $('#confirm-delete').openModal();
  }
});

Template.stories.helpers({
  Stories: function() {
    return Stories.find({}, {
      sort: {
        updated: -1,
        created: -1
      }
    }).map(function(doc) {
      return _.extend(doc, {
        size: doc.content.split(" ").length
      })
    })
  }
});
