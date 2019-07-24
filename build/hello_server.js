var http = require ('http');
var server = http.createServer(function(request,response){
    response.end("hello Node!")
});
server.listen(8000);