#!/usr/bin/node

const log = console.log;

var data = process.argv[2];
var buf = new Buffer(process.argv[2],'base64'),
    info = buf.toString('utf8').split(':');

log('usr:%s,pwd:%s',buf[0],info[1]);
