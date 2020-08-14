// var express = require('express');
// var mongoose = require('mongoose');
// var router = express.Router();
// var bodyParser = require('body-parser')
// var app = express();
// var LocalStrategy = require('passport-local').Strategy;
// var passport = require('passport');
// var MongoClient = require('mongodb').MongoClient;
// var bcrypt = require('bcrypt-nodejs');

// //connecting to the DB
// mongoose.connect('mongodb://admin:adminadmin1@ds151892.mlab.com:51892/carsharing');
// var rez = 0;
// //creating a Schema
// var Schema = mongoose.Schema;

// var usersSchema = new Schema({

//     username:String,
//     email: String,
//     password: String,

// });

// usersSchema.methods.encryptPassword = (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
// }

// usersSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// }

// //creating a model
// var User = mongoose.model('Users', usersSchema);

// // parse application/x-www-form-urlencoded;
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());





// app.get('/coords', function (req, res, next) {


//     res.json([{ latitude: 45.789646, longitude: 21.232754, png: './car_1.png' }, { latitude: 45.767389, longitude: 21.246556, png: './hyundai.png' }, { latitude: 45.750506, longitude: 21.207946, png: './merc.png' }])

// });


// app.get('/users', function (req, res, next) {
//     console.log('Request Url:' + req.url);

//     // get all the users
//     User.findOne({ email: req.query.email }, function (err, users) {
//         if (err) console.log(err);

//         // object of all the users

//         console.log(users)
//         if (users) {
//             console.log('L-am gasit');
//             res.status(200).send(); //e ok
//             rez = 1;
//             console.log(rez);
//         } else {
//             res.status(404).send(); //nu e ok
//             console.log(rez);
//         }
//     });
// });


// app.post('/users', function (req, res, next) {
//     console.log('Request Url:' + req.url);
//     console.log(req.body)
//     User.findOne({ email: req.body.email }, function (err, users) {
//         if (err) console.log(err);

//         // object of all the users

//         console.log(users)
//         if (users) {
//             res.status(408).send();
//         } else {
//             var newUser = new User();
//             newUser.firstname = req.body.firstname;
//             newUser.lastname = req.body.lastname;
//             newUser.email = req.body.email;
//             newUser.password = newUser.encryptPassword(req.body.password);



//             newUser.save(function (err) {

//                 if (err) throw err;

//                 res.end();
//                 console.log('User has been Saved!!!');
//             });

//         }
//     });
// });



// app.listen(3000);