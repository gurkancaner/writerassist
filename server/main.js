import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Accounts.loginServiceConfiguration.remove({
    service: 'twitter'
  });

  Accounts.loginServiceConfiguration.insert({
    service: 'twitter',
    consumerKey: '...',
    secret: '...'
  });

  var Twit = require('twit');
  //global Twitter object
  Twitter = new Twit({
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '..-..',
    access_token_secret: '...',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  });

  //Flickr search
  var FlickrApi = require("flickrapi");
  var FlickrOptions = {
    api_key: "...",
    secret: "..."
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
