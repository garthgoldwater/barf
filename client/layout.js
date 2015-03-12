Template.layout.helpers({
  currentUserEmail: function(){
    return Meteor.user().emails[0].address;
  }
});
