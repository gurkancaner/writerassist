//used for determining whether given link is current path
Template.registerHelper('isActive', function(route) {
  return Router.current().route.getName() === route ? "active" : "";
});
