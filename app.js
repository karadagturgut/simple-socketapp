const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

const io = socketio.listen(server);

io.sockets.on('connection',(socket)=>
{
  console.log("Bir kullanıcı bağlandı.");
  
  socket.on('disconnect',()=>{
  console.log('Kullanıcı ayrıldı.')
  })

});