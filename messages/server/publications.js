Meteor.publish('messages', function() {
  return Messages.find();
});

Meteor.publish('barfMessages', function(barfId) {
  return Messages.find({ barfId: barfId });
});
