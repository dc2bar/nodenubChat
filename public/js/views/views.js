$(function () {
  /*-------------Application----------*/
  var app = {
    start: function () {
      app.loginView = new app.LoginView();
    }
  }

  /*-------------Models --------------*/
  app.User = Backbone.Model.extend({});

  /*------------Collections-----------*/
  app.ConnectedUsers = Backbone.Collection.extend({
    model: app.User
  })
  app.users = new app.ConnectedUsers();

  /*------------Views----------------*/

  app.LoginView = Backbone.View.extend({
    el: '.login-view',
    template: 'templates/login',
    model: app.users,
    events: {
      'keyup #username': 'validateUsername',
      'click .remove-provider': 'removeProvider'
    },
    initialize: function () {
      this.model.bind('reset', this.render, this);
    },
    render: function (e) {
      var thisView = this;
      var template = HandlebarsTemplates[this.template]({providers: this.model.toJSON()});
      thisView.$el.html(template);
      this.delegateEvents();
    },
    validateUsername: function (e) {
      console.log(e);
    }
  });

  new app.start();
});
