
//npm install express --save
var express = require('express');
var app = express();

//npm install ejs --save
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('home');
});



app.listen(2020, function () {
  console.log("Server listening on port 2020");
});

