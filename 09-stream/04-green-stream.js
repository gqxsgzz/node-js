#!/usr/bin/node

const write = require('stream').Writable;

function GreenStream(){
  write.call(this);
}

GreenStream.prototype=write.prototype;
GreenStream.prototype._write=function(chunk,encoding,callback){
  process.stdout.write('\033[1;32m' + chunk.toString('utf8') + '\033[1;37m');
  callback();
}

module.exports = GreenStream;

