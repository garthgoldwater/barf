Template.messageNew.events({
  "submit .new-message": function(event, template) {
    var title = template.find(".new-body").value,
        barfId = this._selectorId;

    event.preventDefault();

    var newMessage = _.extend({
      title: title,
      barfId: barfId
    });

    Messages.insert(newMessage);

    event.target.reset();
  }
});
