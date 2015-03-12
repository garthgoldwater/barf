Template.messagePartial.helpers({
  messageUserEmail: function(){
    var user = Meteor.users.findOne({_id: this.userId});
    return user.emails[0].address;
  }
});
