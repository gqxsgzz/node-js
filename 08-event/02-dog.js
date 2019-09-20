#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function Dog(name,energy){
  var _name,_energy;
  var that = this;

  EventEmitter.call(this);

  _name=name;
  _energy=energy;

  var timer = setInterval(()=>{
    if(energy>0){
      that.emit('bark');
      _energy--;
    }
    if(_energy<0){
      clearInterval(timer);
    }  
  },1000);

  this.name = () => _name;
      
  this.energy = () => _energy;
}



/*var events = require('events');
function Dog(name){
  var self = this;
  this.name = name;

  var timer = setInterval(function(){
    console.log('self:',self);
    console.log('this:',this);
    self.emit(bark);
  },1000)
  this.stop = function(){
    clearInterval(timer);
  }
}*/

Dog.prototype = EventEmitter.prototype;
module.exports = Dog;
