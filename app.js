var express = require('express');

var app = express();

var firebase = require('firebase');

app.set('view engine', 'ejs');

app.use(require('body-parser').urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

app.use('*/css', express.static('public/css'));
app.use('*/js', express.static('public/js'));
app.use('*/img', express.static('public/img'));
app.use('*/webfonts', express.static('public/webfonts'));

var firebaseConfig = {
  apiKey: "AIzaSyAbIrxhlpo0cX8-uIvHUSuCCYSK2Gsa6Q4",
  authDomain: "ecellweb-d32be.firebaseapp.com",
  databaseURL: "https://ecellweb-d32be.firebaseio.com",
  projectId: "ecellweb-d32be",
  storageBucket: "ecellweb-d32be.appspot.com",
  messagingSenderId: "1009691924549",
  appId: "1:1009691924549:web:5892786fa2f1003d22eb2c",
  measurementId: "G-FYZVWEDYY9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.get('/', function (req, res) {
  res.render('home');
});


app.get('/team', function (req, res) {
  res.render('team');
});

app.post('/', function (req, res) {
  var name = req.body.name;
  var subject = req.body.subject;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;
  var database = firebase.database();
  var cmessage = database.ref('cmessage');
  var data = {
    cname: name,
    csubject: subject,
    cemail: email,
    cphone: phone,
    cmess: message
  }
  cmessage.push(data);
  res.redirect('/');
  console.log(cmessage);
});


app.use(function (req, res, next) {
  console.log("looking for url" + req.url);
});


app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + ' press Ctrl-C to terminate');
});

