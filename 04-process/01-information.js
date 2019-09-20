#!/usr/bin/node

const log = console.log;
log('cpu:',process.arch);
log('os:',process.platform);
log('PID:',process.pid);
log('execPath:',process.execPath);
log('node.js ver:',process.version);
log('uid:',process.getuid());
log('gid:',process.getgid());
