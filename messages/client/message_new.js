Template.messageNew.events({
  "keypress .new-message": function(event, template) {
    if (event.which === 13) {
      var body = template.find(".new-body").value,
      barfId = this.barf._id;

      event.preventDefault();

      var newMessage = _.extend({
        body: body,
        barfId: barfId,
        userId: Meteor.userId()
      });

      Messages.insert(newMessage);

      template.find(".new-body").value = "";

      Tracker.afterFlush(function(){
        $('.barf-messages').scrollTop($('.barf-messages')[0].scrollHeight);
      });
    }
  }
});
