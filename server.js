var path = require('path');
var express = require('express'),
    // config = require('./server/configure'),
    app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.set('port', process.env.PORT || 3300);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
// app = config(app);

app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

