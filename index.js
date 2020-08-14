const express = require("express");
const app = express();
const http = require("http");
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
const port = process.env.PORT || 8080;

io.on('connection', (socket) => {
    // console.log(socket);
	socket.on('connection', (data) => {
		var a = JSON.parse(data);
		console.log(JSON.stringify(a.navigator));
	});
});

httpServer.listen(port, function () {
    console.log("Listening on port *:" + port);
});
