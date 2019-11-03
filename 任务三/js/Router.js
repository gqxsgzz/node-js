#! usr/bin/node

const fs = require('fs'),
      http = require('http'),
      url  = require('url'),
      qs   = require('querystring'),
      { chapterList, userList} = require('./chapterList'),
      path = require('path');

var items = [];
var Id=0;
var nowChapter = {};

Router = () => {
    http.createServer((req,res) => {
        res.setHeader("Content-Type","text/html;charset='utf-8'");
        if(url.parse(req.url).pathname === '/login/'){
                fs.readFile('../login.html',"utf-8",function(err,data){
                    if(err) {
                        console.log(err);
                    }
                    else{
                        res.end(data);
                    }
                });
        }
        else if(url.parse(req.url).pathname === '/list/'){
            fs.readFile("../chapterList.html","utf-8",function(err,data){
                if(err) {
                    console.log(err);
                }
                else{
                    res.end(data);
                }9
            });
            }
        else if(url.parse(req.url).pathname === '/a/' ){
            res.write(JSON.stringify(chapterList));
            res.end();
        }
        else if(url.parse(req.url).pathname === '/detail/'){
            Id = JSON.stringify(lj.query).replace(/chapterId=/,"")-1;

                fs.readFile('../chapter.html','utf-8',(err,data)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.ensd(data);
                    }
                });
        }
        else if(url.parse(req.url).pathname === '/listmanager/'){
                if(url.parse(req.url, true).query.username == userList[0].username && url.parse(req.url, true).query.pwd ==userList[0].pwd ){
                    fs.readFile('../list.html','utf-8',(err,data)=>{
                        if(err){
                            console.log(err);
                        }else{
                            res.end(data);
                        }
                    })
                }else{
                    res.end('404');
                }
        }
        else if(url.parse(req.url).pathname === '/addChapter/'){
            fs.readFile("../addChapter.html","utf-8",function(err,data){
                if(err) {
                    console.log(err);
                }
                else{
                    res.end(data);
                }
            });
        }
        else if(url.parse(req.url).pathname === '/art/'){
            res.write(JSON.stringify(chapterList));
            res.end();
        }
        else if(url.parse(req.url).pathname === '/nowChapter/'){
            res.writeHead(200,{'Content-Type':'text/json'});
            nowChapter=chapterList[Id];  
            res.end(JSON.stringify(nowChapter));
        }
        else if(url.parse(req.url).pathname === '/add/'){
            var newChapter = {};
                    
            var postData = ""; 
            req.addListener("data", function (postDataChunk) {
                postData += postDataChunk;
              
                var title=postData.split("&")[0].replace(/title=/,'');
                var content=postData.split("&")[1].replace(/content=/,'');
                newChapter.chapterId=chapterList.length+1;
                newChapter.chapterName=title;
                newChapter.chapterDes=content;
                newChapter.chapterContent=content;
                newChapter.publishTimer= "2019-10-3";
                newChapter.author="admin";
                newChapter.views=1022;
                newChapter.imgPath='';
                chapterList.push(newChapter);            
                });
        }
    }).listen(3000);
}


Router();