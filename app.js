const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req,res) => {
    res.statusCode0200;
    res.setHeader('Contet-type','text7plain');
    res.end('Hola mundo!\n');
});

server.listen(port,hostname, ()=>{
    console.log(`Servidor esta corriengo sobre http://${hostname}:${port}`);
})