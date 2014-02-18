$(function () {
  /*-------------Application----------*/
  var app = {
    start: function () {
      app.loginView = new app.LoginView();
      app.chatView = new app.ChatView();
      app.chatMessagesView = new app.ChatMessagesView();
      app.usersListView = new app.UsersListView();
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
    el: '.body_wrap',
    template: 'login',
    usernameField: '#username',
    passwordField: '#password',
    avatarField: '#image',
    colorField: '#color',
    avatarURL: 'images/avatar_placeholder.jpg',
    chatColor: '#959da6',
    model: app.users,
    events: {
      'click #login': 'login',
      'click #image': 'editAvatar',
      'click #color': 'editColor'
    },
    initialize: function () {
      this.model.bind('reset', this.render, this);
      this.render();
    },
    render: function () {
      var thisView = this;
      var template = Handlebars.templates[this.template]({providers: this.model.toJSON()});
      thisView.$el.html(template);
      this.delegateEvents();
    },
    login: function () {
      var username = $(this.usernameField, this.el).val();
      var password = $(this.passwordField, this.el).val();
      this.validateUsername(username);
      this.validatePassword(password);
      this.validateAvatar();
      this.validateColor();
      app.ChatView.render();
    },
    editAvatar: function () {
      var avatarURL = prompt('Enter the URL for your avatar',this.avatarURL);
      this.avatarURL = avatarURL;
      $(this.avatarField + ' img', this.el).attr('src',this.avatarURL);
    },
    editColor: function () {
      var chatColor = prompt('Enter a hexadecimal chat color.',this.chatColor);
      this.chatColor = chatColor;
      $(this.colorField, this.el).css('background-color',this.chatColor);
    },
    validateUsername: function (username) {
      console.log(username)
    },
    validatePassword: function (password) {
      console.log(password);
    },
    validateColor: function () {
      console.log(this.chatColor);
    },
    validateAvatar: function () {
      console.log(this.avatarURL);
    }
  });

  app.ChatView = Backbone.View.extend({
    el: '.body_wrap',
    template: 'login',
    usernameField: '#username',
    passwordField: '#password',
    avatarField: '#image',
    colorField: '#color',
    avatarURL: 'images/avatar_placeholder.jpg',
    chatColor: '#959da6',
    model: app.users,
    events: {
      'click #login': 'login',
      'click #image': 'editAvatar',
      'click #color': 'editColor'
    },
    initialize: function () {
      this.model.bind('reset', this.render, this);
      this.render();
    },
    render: function () {
      var thisView = this;
      var template = Handlebars.templates[this.template]({providers: this.model.toJSON()});
      thisView.$el.html(template);
      this.delegateEvents();
      this.ChatMessagesView.setElement(this.$('.chat-messages')).render();
      this.UsersListView.setElement(this.$('.userslist')).render();
      return this;
    }
  });

  app.ChatMessagesView = Backbone.View.extend({
    el: '.chat-messages',
    template: 'chatpanel',
    model: app.users,
    events: {
      'click .widget_profile': 'launchUserOptions'
    },
    initialize: function () {
      this.model.bind('reset', this.render, this);
    },
    render: function () {
      var thisView = this;
      var template = Handlebars.templates[this.template]({providers: this.model.toJSON()});
      thisView.$el.html(template);
      this.delegateEvents();
    }
  })

  app.UsersListView = Backbone.View.extend({
    el: '.userslist',
    template: 'userslist',
    model: app.users,
    events: {
      'click .widget_profile': 'launchUserOptions'
    },
    initialize: function () {
      this.model.bind('reset', this.render, this);
    },
    render: function () {
      var thisView = this;
      var template = Handlebars.templates[this.template]({providers: this.model.toJSON()});
      thisView.$el.html(template);
      this.delegateEvents();
    }
  })

  new app.start();
});
