import * as express from 'express'
// 这个app就是用来声明服务器端所能提供的http服务的，
const app = express();
// 这个方法是用来处理git请求的服务，服务的目录是
app.get('/',(req,res)=>{
res.send("hello express");
});

app.get('/product',(req,res)=>{
    res.send("接收到商品查询请求");
});
// 端口8000， 域名localhost，
const server = app.listen(8000,'localhost',()=>{
    console.log("服务器已经启动，地址是：http://localhost:8000");
});