#!/usr/bin/env node

const https = require('https'),
    http = require('http'),
    cheerio = require('cheerio'),
    fs = require('fs'),
    // 爬虫爬取的网址
    url = 'https://maoyan.com/films',
    // 网页文件
    fileUrl = './index.html',
    // 获取信息
    nameHtml = '.movie-hover-info>.movie-hover-title .name',
    rangeHtml = '.movie-hover-info>.movie-hover-title>.score i';

// 设置请求头
url.headers = {
  'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11'
};
let result=[];
// 请求
https.get(url,(res)=>{
  let data = '';
  res.on('data',(chunk)=>data += chunk);
  res.on('end',()=>{
    let $ = cheerio.load(data);
    $('body').find('.movie-item-hover>a').each(function () {
      let id = $(this).attr('data-val').slice(9, -1),
         name = $(this).find(nameHtml).text(),
         range = $(this).find(rangeHtml).text();
      result.push({movieId:`${id}`,movieName:`${name}`,movieRange:`${range}`});  
    });
    console.log(JSON.stringify(result));
  });
});

// 读取网页文件
let html = fs.readFileSync(fileUrl).toString('utf8');
// 路由
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text.html',
            'Content-Length': 'Buffer.byteLengt(html)'
        });
        res.end(html);
    } else if (req.url === '/getlist') {
        res.end(JSON.stringify(result));
    } else {
        res.end('没找到该页面！');
    }
}).listen(8080);