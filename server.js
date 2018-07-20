var app = require('./app/app');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

