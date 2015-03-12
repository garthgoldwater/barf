Template.messageNew.events({
  "submit .new-message": function(event, template) {
    var body = template.find(".new-body").value,
    barfId = this.barf._id;

    event.preventDefault();

    var newMessage = _.extend({
      body: body,
      barfId: barfId,
      userId: Meteor.userId()
    });

    Messages.insert(newMessage);

    event.target.reset();
    event.target.focus();
  }
});
