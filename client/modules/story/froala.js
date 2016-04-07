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
        // // Get edited HTML from Froala-Editor
        // var newHTML = editor.html.get(true /* keep_markers */ );
        // // Do something to update the edited value provided by the Froala-Editor plugin, if it has changed:
        // if (!_.isEqual(newHTML, self.content)) {
        //   Session.set("froalaEditorContent", newHTML);
        //
        // // myCollection.update({_id: self._id}, {
        // //   $set: {myHTMLField: newHTML}
        // // });
        // }
        return false; // Stop Froala Editor from POSTing to the Save URL
      },
    }
  },
})
