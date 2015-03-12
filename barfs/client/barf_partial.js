Template.barfPartial.helpers({
  messages: function() {
    return Messages.find( {barf_id: this._id} );
  }
});
