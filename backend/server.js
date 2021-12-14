const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const {Server} = require('socket.io');

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin:'*',
        method:["GET", "POST"]

    },
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('join_room', (data)=>{
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room ${data}`);
    })

})

server.listen(3001, ()=>{
    console.log('server is running on port 3001');
})


