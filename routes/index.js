var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.post('/get-file-size', upload.single('file'), function(req, res) {
    res.json({"size": req.file.size});
});

module.exports = router;