var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/get-file-size', upload.any(), function (req, res) {
	res.json(req.files[0].size);
});

app.listen(8080, function () {
  console.log('working!');
});