var strftime = require ('strftime');
var net = require('net')
    var server = net.createServer(function (socket) {
     var data = strftime('%Y-%m-%d %H:%M'); 
 socket.end(data)
    })
var portNumber = process.argv[2];
    server.listen(portNumber);
