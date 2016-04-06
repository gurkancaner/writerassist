Router.configure({
  // we use the  master template to define the layout for the entire app
  layoutTemplate: 'masterPublic',

  // the notFound template is used for unknown routes and missing lists
  notFoundTemplate: 'notFound',

  // show the loading template whilst the subscriptions below load their data
  loadingTemplate: 'loading',

  yieldRegions: {
    'headerNav': {
      to: 'headerNav'
    },
    'sideNav': {
      to: 'sideNav'
    }

  },

  controller: 'ApplicationController'

});



Router.route('accessDenied', function() {
  var req = this.request;
  var res = this.response;
  res.writeHead(403);
  res.end('403 Access Denied.');
}, {
  where: "server"
});


Router.route('/', {
  name: 'stories',
  template: 'stories'
});

//auth
Router.route('login', function() {
  if (Meteor.userId()) {
    Router.go("/");
  } else {
    this.render();
  }
});
Router.route('register');
Router.route('logout', function() {
  Meteor.logout();
  Router.go("login");
});
