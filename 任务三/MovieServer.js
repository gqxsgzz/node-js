#!/usr/bin/env node

const dataList = require('./data'),
      fs = require('fs'),
      http = require('http'),
      movieList = dataList;

function option (){
    // 筛选暂无评分项
    for(var i = 0;i < dataList.length;i++){
        if(movieList[i].movieRange === '暂无评分'){
            movieList.splice(i--,1)
        }
    }
    // 大小排序
    for(var i = 0;i < movieList.length;i++){
        for(var j = i;j > 0;j--){
            if(movieList[j].movieRange < movieList[j-1].movieRange){
                let temp = movieList[j-1];
                movieList[j-1] = movieList[j];
                movieList[j] = temp
            }
        }
    }

    return JSON.stringify(movieList);
}

var html = fs.readFileSync( './index.html' ).toString('utf8');

http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end (html);
    }
    if(req.url ==='/getlist'){ 
        res.end(option());
    }
}).listen(8080);