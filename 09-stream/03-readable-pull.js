#!/usr/bin/node

const read = require('stream').Readable;

var rs = new read();
var c ='a'.charCodeAt(0);
rs._read=()=>{
  rs.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);


