var express = require('express');
var path = require('path');

var app = express();
var staticPath = express.static(path.join(__dirname,'/'));
app.use(staticPath);

app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname,'/index.html'))
})
var port = 8024;
app.listen(port,function(error) {
	if(error) {
		console.error(error)
	}else{
		console.info('===>listen at %s <===',port)
	}
})