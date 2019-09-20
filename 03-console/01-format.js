#!/usr/bin/node

console.log('hello world!');

var wd = {
  'name':'王顶',
  'QQ':'408542507',

  'Age':43
};

const log = console.log;
log('name: %s\t Age:%d',wd.name,wd.Age);
log('wangding Info:%j',wd);

log('name:',wd.Name);
log('Age is ${wd.Age}');
