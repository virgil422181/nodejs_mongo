var app = require('./app.js');

app.set('port', process.env.PORT || 3300);

app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

