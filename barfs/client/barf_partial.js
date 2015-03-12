Template.barfPartial.helpers({
  barfUserEmail: function() {
    var user = Meteor.users.findOne({_id: this.userId});
    return user.emails[0].address;
    },

  messages: function() {
    return Messages.find({barf_id: this._id});
  }
});
