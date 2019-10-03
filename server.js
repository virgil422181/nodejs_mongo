var app = require('./app/app');
var config = require('./app/config')

app.set('port', process.env.PORT || config.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

