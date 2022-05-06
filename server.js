var http = require('http');
var app = require('./config/express')();
const url = 'mongodb://dswa5:dswa5@clusterleonardo-shard-00-00.3fhkc.mongodb.net:27017,clusterleonardo-shard-00-01.3fhkc.mongodb.net:27017,clusterleonardo-shard-00-02.3fhkc.mongodb.net:27017/ifsp?replicaSet=atlas-4go5n9-shard-0&ssl=true&authSource=admin';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
