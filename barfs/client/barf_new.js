Template.barfNew.events({
  "submit .new-barf": function(event, template) {
    var title = template.find(".new-title").value

    event.preventDefault();

    var newBarf = _.extend({
      title: title
    });

    Barfs.insert(newBarf);

    event.target.reset();
  }
});
