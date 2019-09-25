var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.token == "sdkjflkasjdfkljaskdljfaisolsadfkj32kljklej23lkjkjlj23lkrjklj"){
    return res.send('sucsess!!') //sucsess!!
  }
  res.status(500).send('auth failed')
});

module.exports = router;
