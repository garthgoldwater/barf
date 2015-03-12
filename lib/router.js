Router.configure({
  layoutTemplate: 'layout',
});

if(Meteor.isClient){
BarfsIndexController = RouteController.extend({
  waitOn: function() {
    return Meteor.subscribe('barfs');
  },
  data: function() {
    return { barfs: Barfs.find() };
    },
});


Router.route('/', { name: 'barfsIndex' });

BarfShowController = RouteController.extend({
  waitOn: function() {
    barfId = this.params._id;
    return [
      Meteor.subscribe('barfMessages', barfId),
      Meteor.subscribe('barf', barfId)
    ];
  },

  data: function() {

    return {
      barf: Barfs.findOne(this.params._id),
      barfMessages: Messages.find({barfId: this.params._id})
    };
  }
});

Router.route('/barfs/:_id', { name: 'barfShow', controller: 'BarfShowController' });

// MessageShowController = RouteController.extend({
//   message: function() {
//     return Messages.findOne(this.params._id);
//   },
//     data: function() {
//     return {
//       message: message()
//     }
//   }
// });

// Router.route('/messages/:id', { name: 'messageShow' });
//
//
};
