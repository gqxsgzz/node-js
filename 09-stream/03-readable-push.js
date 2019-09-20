#!/usr/bin/node

const read = require('stream').Readable;

var rs = new read();
rs.push('hello\n');
rs.push('world!');
rs.push(null);

rs.pipe(process.stdout);

