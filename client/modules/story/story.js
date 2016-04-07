Template.storyAdd.events({
  'submit #add-story': function(event, target) {
    event.preventDefault();
    //retrieve the input field values
    var id = target.find("#id").value;
    var title = target.find("#title").value;
    // var content = Session.get("froalaEditorContent");
    var content = $('#summernote').summernote('code');

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
  },
  'summernote.change #summernote': function(event, target, content) {
    var lastChekPoint = Session.get("lastChekPoint");
    if (lastChekPoint === undefined) {
      if (target.data !== null) {
        lastChekPoint = target.data.content.length;
      } else {
        lastChekPoint = 0;
      }
    }


    if (content.length > 100) { //is content enought to extract keywords
      if (Math.abs(lastChekPoint - content.length) > 100) { //are there enough changes
        Session.set("lastChekPoint", content.length);
        Meteor.call("alchemyGetKeywords", content, function(error, data) {
          if (error) {
            console.log("alchemyGetKeywordsError", error);
          } else {
            if (data)
              searchTwitterandFlickr(data);
          }
        });
      }
    } else { //search by title
      var keywords = $("#title").val();
      searchTwitterandFlickr(keywords);
    }
    function searchTwitterandFlickr(keywords) {
      $('ul.tabs').tabs(); //hack
      var searchTerms = "";
      if (typeof keywords === "string") {
        if (keywords == Session.get("keywords"))
          return;
        Session.set("keywords", keywords);
        searchTerms = keywords.replace(" ", ", ");
      } else {
        for (i = 0; i < keywords.length; i++) {
          searchTerms += keywords[i].text + ", ";
        }
      }
      Meteor.call("twitterSearch", searchTerms, function(error, result) {
        if (error) {
          console.log("twitterSearch error", error);
        } else if (result) {
          // console.log("twitter search result", result);
          Session.set("twitterSearchResult", result.statuses);
        }
      });
      Meteor.call("flickrSearch", searchTerms, function(error, result) {
        if (error) {
          console.log("flickr error", error);
        } else if (result) {
          Session.set("flickrSearchResult", result.photos.photo);
        }
      });
    }

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
