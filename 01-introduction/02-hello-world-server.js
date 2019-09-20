#!/usr/bin/node
sudo chmod u+x 01-hello-world.js
const http=require('http');
http.createServer(req,res=>{console.log('hello world')}).listen(8080)
