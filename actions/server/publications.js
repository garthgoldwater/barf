Meteor.publish('actions', function() {
  return Actions.find();
});

Meteor.publish('action', function(barfId) {
  return Actions.find({barfId: barfId});
});
