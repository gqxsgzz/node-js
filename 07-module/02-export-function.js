#!/usr/bin/node

function circle(radius){
  function area(){
    return Math.PI*radius*radius;
  }

  function circumference(){
    return 2* Math.PI * radius; 
  }

  return {
    area:area,
    circumference:circumference;
  }
}

concsole.dir(module);
module.exports = circle;
console.log(p);
