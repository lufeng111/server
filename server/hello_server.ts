import * as http from 'http'
/* 
函数createServer接收一个匿名函数，参数是request,response

*/ 
const server = http.createServer((request,response)=>{
    // 不管收到什么请求，都在打印一个hello Node!
    response.end("hello Node!")
})
// 会监听8000端口，收到请求后打印一个hello Node
server.listen(8000);