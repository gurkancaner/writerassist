import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Accounts.loginServiceConfiguration.remove({
    service: 'twitter'
  });

  Accounts.loginServiceConfiguration.insert({
    service: 'twitter',
    consumerKey: 'D5Ta3vzXS6EBpjqmQnj0EnWXa',
    secret: 'ETnQ9zKiBzULQPWTN7mkhXvh4mKspNFTJufYODX3VJNxls3f2k'
  });

  var Twit = require('twit');
  //global Twitter object
  Twitter = new Twit({
    consumer_key: 'D5Ta3vzXS6EBpjqmQnj0EnWXa',
    consumer_secret: 'ETnQ9zKiBzULQPWTN7mkhXvh4mKspNFTJufYODX3VJNxls3f2k',
    access_token: '87769085-54v0WMcVHs8ePJIme7WB0oAa8fE3nb83LxiiQG1p5',
    access_token_secret: 'uDIv7ujLwjE8EwwcBvSChE8ndNbFBPtSdsJYhnKVy2HFK',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  });

  //Flickr search
  var FlickrApi = require("flickrapi");
  var FlickrOptions = {
    api_key: "2dc7ddfc8e170ab6051cfc07cd6a568f",
    secret: "1805cdacdb190b25"
  };
  FlickrApi.tokenOnly(FlickrOptions, function(error, flickrObj) {
    if (error) {
      console.log(error);
    } else {
      Flickr = flickrObj;
    }
  });
  // var flickrTokenSync = Meteor.wrapAsync(FlickrApi.tokenOnly, FlickrApi);
  // try {
  //   //Global flickr object
  //   Flickr = flickrTokenSync(FlickrOptions);
  // } catch (error) {
  //   console.log(error);
  // }


});
