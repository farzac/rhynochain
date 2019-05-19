const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.send('<h1> Teste express 1</h1>');
});

module.exports = router;
