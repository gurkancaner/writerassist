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

  Twitter = new Twit({
    consumer_key: 'D5Ta3vzXS6EBpjqmQnj0EnWXa',
    consumer_secret: 'ETnQ9zKiBzULQPWTN7mkhXvh4mKspNFTJufYODX3VJNxls3f2k',
    access_token: '87769085-54v0WMcVHs8ePJIme7WB0oAa8fE3nb83LxiiQG1p5',
    access_token_secret: 'uDIv7ujLwjE8EwwcBvSChE8ndNbFBPtSdsJYhnKVy2HFK',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  });



});
