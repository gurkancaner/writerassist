//used for determining whether given link is current path
Template.registerHelper('isActive', function(route) {
  return Router.current().route.getName() === route ? "active" : "";
});
//used for pretty print date
Template.registerHelper('formatDate', function(date) {
  var momentDate = moment(new Date(date));
  if (momentDate.isSame(new Date(), "day")) { //today
    return momentDate.format("LT");
  } else {
    return momentDate.format("l");
  }
});
