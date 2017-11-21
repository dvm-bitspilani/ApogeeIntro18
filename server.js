var http = require('http');
var fs =   require('fs');
var express = require('express');
var app = require('app');
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	var myreadstream = fs.createReadStream(__dirname+'/index.html', 'utf-8');
	app.use(express.static(__dirname+'/css'));
	myreadstream.pipe(res);
})	
server.listen(8000,'127.0.0.1');
console.log('this is a running server');