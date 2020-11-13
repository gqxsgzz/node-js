#!/usr/bin/env node

const fs   = require('fs'),
    join = require('path').join,
    order  = process.argv[2];
    src =  './sysFile/'+process.argv[3] || __dirname;

function list1(fileArray,Json,stats){
    fs.readdirSync(__dirname).forEach((val,index)=>{
        stats = fs.statSync(val);
        Json = {"fileName":val,"fileSize":stats.size};
        fileArray[index] = Json;
});
    console.log(fileArray);
}

function deleteDir(folder) {
    let files = fs.readdirSync(folder);
    
    for(let i=0; i<files.length; i++) {
        let file = join(folder, files[i]);
    
        if(fs.statSync(file).isFile()) {
        fs.unlinkSync(file);
        continue;
        }
    
        if(fs.statSync(file).isDirectory()) deleteDir(file);
    }
    
    fs.rmdirSync(folder);
    }
      
if(order === '-list'){
    let fileArray = [];
    let Json = {};
    let stats;
    list1(fileArray,Json,stats)
}else if(order === '-show'){
    fs.readFile(src, (err, buf) => {
        if(err) {
            console.error('该文件不存在');
            process.exit(1);
        } else {
            console.log(buf.toString('utf8'));
        }
    });
}else if(order === '-del'){
    if(typeof(src) === 'undefined') {
        process.exit(1);
    }
    if(!fs.existsSync(src)) {
        process.exit(2);
    }
      
    if(fs.statSync(src).isFile()){
        console.log(process.argv[3] + '删除成功');
        fs.unlinkSync(src);
    }else if(fs.statSync(src).isDirectory()){
        console.log(process.argv[3] + '删除成功');
        deleteDir(src);
    } 
      
}
