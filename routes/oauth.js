var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/authorizationCode', function(req, res, next) {
	var state = req.query.state;
	var code = req.query.code;

	var redirectUrlObject = url.parse(state,true);
	redirectUrlObject.query.code=code;
	delete redirectUrlObject.search

	var redirectUrl = url.format(redirectUrlObject);
	console.log('#### redirect url:'+redirectUrl);
	res.redirect(redirectUrl);
});

module.exports = router;