var express = require('express');

var app = express();

app.get('/', function(request,response){

	response.send("Test message");

});

app.listen(2020, function(error){

	if(error){
		console.log("ERROR: Port unavailable");
	}
	console.log("Listen in port 2020");
});
