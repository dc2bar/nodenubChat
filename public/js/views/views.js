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
    el: '.login-panel',
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
    el: '.chat-container',
    template: 'chatmain',
    initialize: function () {
      this.render();
    },
    render: function () {
      var thisView = this;
      var template = Handlebars.templates[this.template]();
      thisView.$el.html(template);
    },
    renderNested: function( view, selector ) {
      var $element = ( selector instanceof $ ) ? selector : this.$el.find( selector );
      view.setElement( $element ).render();
    }
  });

  app.ChatMessagesView = app.ChatView.extend({
    el: '.chat-messages',
    template: 'chatpanel',
    model: app.users,
    events: {
      'click .widget_profile': 'launchUserOptions'
    },
    render: function() {
      var thisView = this;
      var template = Handlebars.templates[this.template]();
      thisView.$el.html(template);
      thisView.renderNested( thisView.ChatMessagesView, thisView.el);
      return this;
    }
  })

  app.UsersListView = app.ChatView.extend({
    el: '.userslist',
    template: 'userslist',
    model: app.users,
    events: {
      'click .widget_profile': 'launchUserOptions'
    },
    render: function() {
      var thisView = this;
      var template = Handlebars.templates[this.template]();
      thisView.$el.html(template);
      thisView.renderNested( thisView.ChatMessagesView, thisView.el);
      return this;
    }
  })

  new app.start();
});
