#!/usr/bin/node

const read  = require('stream').Readable;

function MyReadable() {
   read.call(this);

};

MyReadable.prototype = read.prototype;

var c = 'a'.charCodeAt(0);
MyReadable.prototype._read = function() {
    this.push(String.fromCharCode(c++));
    if(c>'z'.charCodeAt(0)) this.push(null);

};

module.exports = MyReadable;




