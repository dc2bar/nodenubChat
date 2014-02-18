//application variables
var port = 80;

//application dependencies
var express = require('express'),
    app = express();

//Routes
app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

/*************
 * Startup
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});

//uh, and that's it. everything else is direct client to client using pubnub.