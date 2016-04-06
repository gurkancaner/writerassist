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
});
