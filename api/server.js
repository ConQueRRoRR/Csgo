const express = require('express'),
path = require('path'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose');
config=require('./DB');

const weaponRoute=require('./routes/weapon.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let port = process.env.PORT || 4000;

app.use('/Weapon',weaponRoute);
const server = app.listen(port,function(){
    console.log('Listening on port ' + port);
});