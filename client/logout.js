Template.logout.events({
  'click .logout': function(event) {
    Meteor.logout();
    event.preventDefault();
  }
});
