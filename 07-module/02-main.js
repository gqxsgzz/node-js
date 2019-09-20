#!/usr/bin/node

/*const p = require('./02-export-var');

console.dir(module);
console.log(p);*/

/*const circle = require ('./02-export-function');
console.log('r=10,circle area:%d',circle (10).area());
console.log('r=10,circle circumference:%d',circle(10).circumference());
cobsole.dir(module);*/

/*const circle = require('./02-export-object'),
      log= console.log;
log('r=10,circle diameter:',circle.diameter(10));
log('r=10,circle area:',circle.area(10));
console.dir(module);*/

const area = require('./02-export-o2');

module.exports.circumferences = (radius)=>Math.PI*2*radius;
module.exports.area=(radius)=>Math.PI*radius*radius;
console.dir(module);
