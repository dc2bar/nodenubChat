(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['chatmain'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container chat-view\">\n  <div class=\"row\" style=\"height:100%;\">\n    <!-- chat panel -->\n    <div class=\"col-sm-9 pane\">\n    </div>\n    <!-- userslist -->\n    <div class=\"col-sm-3 widget-container userslist styled boxed-velvet pane\">\n    </div>\n  </div>\n</div>\n<!--/ container -->";
  });
templates['chatmessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"comment-list clearfix\" id=\"comments\">\n  <ol>\n    <li class=\"comment first last\">\n      <div class=\"comment-body\">\n        <div class=\"inner gradient\">\n          <div class=\"comment-arrow\"></div>\n          <div class=\"comment-avatar\">\n            <div class=\"avatar\"><img src=\"";
  if (helper = helpers.avatar) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.avatar); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\"></div>\n          </div>\n          <div class=\"comment-text\">\n            <div class=\"comment-author clearfix\">\n              <a href=\"#\" class=\"link-author\" hidefocus=\"true\" style=\"outline: none;\">";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> <span\n                class=\"comment-date\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " | ";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </div>\n            <div class=\"comment-entry\">\n              ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </div>\n          </div>\n          <div class=\"clear\"></div>\n        </div>\n      </div>\n    </li>\n  </ol>\n</div>";
  return buffer;
  });
templates['chatpanel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"room-name\">";
  if (helper = helpers.roomname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.roomname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"chat-area-container\">\n  <!-- messages -->\n  <div class=\"chat-area\">\n  </div>\n</div>\n<div class=\"chat-input\">\n  <span class=\"btn btn-small chat-send\" style=\"opacity: 1;\"><input type=\"button\" id=\"sendChat\" value=\"Send\"\n                                                                   class=\"gradient\"></span>\n\n  <div class=\"chat-text-input\">\n    <input class=\"gradient\" id=\"chatInput\" placeholder=\"Chat Text Here\" value=\"\" type=\"text\" hidefocus=\"true\">\n  </div>\n</div>";
  return buffer;
  });
templates['login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container login\">\n  <div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1\">\n      <!-- login form -->\n      <div class=\"absolute-center add-comment add-comment-velvet styled\" id=\"addcomments\">\n        <div class=\"add-comment-title\"><h3>Chat Login</h3></div>\n        <div class=\"comment-form login-form\">\n          <form>\n            <div class=\"form-inner\">\n              <div class=\"field_text\">\n                <label for=\"username\" class=\"label_title\">Username:</label>\n                <input type=\"text\" id=\"username\" value=\"\" placeholder=\"Pick a chat name\"\n                       class=\"inputtext input_middle\"/>\n              </div>\n              <div class=\"field_text\">\n                <label for=\"password\" class=\"label_title\">Password:</label>\n                <input type=\"text\" id=\"password\" value=\"\" placeholder=\"Password\"\n                       class=\"inputtext input_middle\"/>\n              </div>\n              <div class=\"field_text\">\n                <div>No password needed right now. will work on that later.</div>\n              </div>\n              <div class=\"field_select\">\n                <label for=\"image\">Pick a chat icon</label>\n                <div id=\"image\" class=\"avatar\">\n                  <img src=\"images/avatar_placeholder.jpg\">\n                </div>\n              </div>\n              <div class=\"field_select\">\n                <label for=\"color\">Pick a chat color</label>\n                <div id=\"color\" class=\"color\"></div>\n              </div>\n            </div>\n\n            <div class=\"rowSubmit\">\n              <span class=\"btn\"><input type=\"button\" id=\"login\" value=\"Login\"/></span>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--/ container -->";
  });
templates['usercard'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"widget-container widget_profile boxed-velvet\" data-uuid=\"";
  if (helper = helpers.uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div class=\"inner gradient\">\n    <div class=\"widget_profile_top clearfix\">\n      <div class=\"avatar\"><img src=\"";
  if (helper = helpers.avatar) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.avatar); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\"></div>\n      <h5>";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n      <span class=\"subtitle\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['userslist'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- userslist -->\n<div class=\"col-sm-3 widget-container chat-actions styled boxed-velvet pane\">\n\n</div>";
  });
})();