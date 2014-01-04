
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var auth = require('./routes/auth');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.cookieParser());
app.use(express.session({secret: 'N1j2o3l4l5e6n7', cookie: { path: '/', httpOnly: true, maxAge: null }}));

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(checkAuth());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

function checkAuth(req, res, next) {
    console.log(' ----- checkAuth ------');
  if (!req.session.user_id) {
       return res.redirect('/login');
  }
    console.log(' ----- 通過檢查!!1 ------');
    next();
}

app.get('/', routes.index);
app.get('/login',  auth.index);
app.post('/login', auth.loginAuth);

app.get('/users',  checkAuth);
app.get('/users',  user.index);

app.get('/inHome', checkAuth);
app.get('/inHome', user.inMyhome);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
