#!/usr/bin/node

const MyReadable = require('./03-my-readable');

var rs = new MyReadable();
rs.pipe(process.stdout);

