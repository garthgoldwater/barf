Template.messageNew.events({
  "keypress .new-message": function(event, template) {
    if (event.which === 13) {
      console.log("hello");
      var body = template.find(".new-body").value,
      barfId = this.barf._id;

      event.preventDefault();

      var messageAddress = Messages.find({barfId: barfId}).count();
      // this will not work for updating previous messages I think, and we
      // still have to handle re-ordering messages after the fact
      var actionAddress = Actions.find({barfId: barfId}).count();

      var newAction = _.extend({
        type: "create",
        noun: "message",
        time: new Date(),
        barfId: barfId,
        nounId: null,
        actionAddress: actionAddress
        });

      actionId = Actions.insert(newAction);

      var newMessage = _.extend({
        body: body,
        barfId: barfId,
        userId: Meteor.userId(),
        messageAddress: messageAddress,
        actionId: actionId
      });

      messageId = Messages.insert(newMessage);

      Actions.update({_id: actionId}, {$set: {nounId: messageId}})

      template.find(".new-body").value = "";

      Tracker.afterFlush(function(){
        $('.barf-messages').scrollTop($('.barf-messages')[0].scrollHeight);
      });
    }
  }
});
