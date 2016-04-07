Template.froalaEditor.helpers({
  getFEContext: function() {
    var self = this;
    Session.set("froalaEditorContent", self.content);
    return {
      // Set html content
      _value: self.content,

      // Preserving cursor markers
      _keepMarkers: true,
      // Override wrapper class
      _className: "froalaEditorContent",

      // Set some FE options
      toolbarInline: true,
      initOnClick: false,
      tabSpaces: false,

      // FE save.before event handler function:
      "_onsave.before": function(e, editor) {
        // Get edited HTML from Froala-Editor
        var newHTML = editor.html.get(true /* keep_markers */ );
        var lastChekPoint = Session.get("lastChekPoint");
        if (lastChekPoint === undefined) {
          lastChekPoint = self.content.length;
        }

        // Get keywords for the edited value provided by the Froala-Editor plugin, if it has changed:
        if (newHTML.length > 100) {
          if (Math.abs(lastChekPoint - newHTML.length) > 100) {
            Session.set("lastChekPoint", newHTML);
            Meteor.call("alchemyGetKeywords", newHTML, function(error, data) {
              if (error) {
                console.log("alchemyGetKeywords", error);
              } else {
                console.log("keywords", data);
              }
            });
          }
        } else { //get by title

        }
        return false; // Stop Froala Editor from POSTing to the Save URL
      },
    }
  },
})
