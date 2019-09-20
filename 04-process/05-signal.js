#!/usr/bin/node

process.on('SIGINT',()=>{
  console.log('you process ctrl+C or kill -2');

  process.exit();
})

process.on('SIGTSTP',()=>{
  console.log('you press ctr +z');
})
process.stdin.resume();
