var PUBLIC_ROUTES = ['login', 'register', 'accessDenied', 'notFound'];
ApplicationController = RouteController.extend({
  layoutTemplate: 'master',
  onBeforeAction: function() {
    var self = this;
    var name = self.route.getName();
    if (PUBLIC_ROUTES.indexOf(name) != -1) {
      self.layout('masterPublic');
      self.next();
    } else {
      if (Meteor.userId == undefined || Meteor.userId() === null) {
        Router.go('login');
      } else {
        self.next();
      }
    }
  }
});
