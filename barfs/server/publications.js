Meteor.publish('barfs', function() {
  return Barfs.find();
});

Meteor.publish('barf', function(barfId) {
  return Barfs.find({_id: barfId}, {limit: 1});
});
