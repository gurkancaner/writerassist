Meteor.methods({
  "alchemyGetKeywords": function(content) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    var params = {
      html: content
    };
    var alchemyGetKeywordsSync = Meteor.wrapAsync(AlchemyLanguage.keywords, AlchemyLanguage);
    try {
      var response = alchemyGetKeywordsSync(params);
      //console.log(response)
      if (response && response.keywords)
        return response.keywords.slice(0, 5);
      return;
    } catch (error) {
      console.log("alchemy error", error);
      throw new Meteor.Error(JSON.stringify(error, null, 2));
    }


  }
});
