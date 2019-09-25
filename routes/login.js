var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/', function(req, res, next) {
  if(req.body.userName=="tetsu" || req.body.password=="yagyu") {
    res.cookie('token', 'sdkjflkasjdfkljaskdljfaisolsadfkj32kljklej23lkjkjlj23lkrjklj', {maxAge:60000000, httpOnly:false});
    res.send("sucsess!");
  }
  res.send("error!");
});

module.exports = router;
