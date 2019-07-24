## 与服务器通讯
<!-- 
创建web服务器：
  angular可以与任何支持http协议或者web socket协议的服务器进行通讯，本章介绍如何使用angular的api进行通讯，首先创建一个件的web服务器，本章会使用node.js和exspring框架来实现这个服务器，
Http通讯：使用agular的http服务，创建并发送http请求，并且响应式的处理服务器端的返回
WebSocket通讯：学习WebSocket协议来与服务器通讯，

 -->
## 创建web服务器
<!-- 
1：使用node.js创建服务器
第一：使用node.js是因为node.js 支持typeScript语言，第二：node.js使用http或webSocket通讯方面做了大量的工作，
2：使用express创建restful的http服务
3：监控服务器文件的变化
 -->
## 如何使用node.js创建服务器
<!-- 
1：npm init -y 在server下创建一个包含默认配置的package.json 文件，
2：因为使用typeScript语言所以引入node的类型定义文件 npm i @types/node --save, 类型定义文件的作用，是让开发者可以在typeScript中使用现在已有的JavaScript写成的库，需要注意的是node本身是不认typeScript，所以需要将typeScript编译成JavaScript，
将typeScript编译成JavaScript，需要创建一个文件tsconfig.json，这个文件配置，会告诉如何将typeScript编译成JavaScript
有了配置文件之后，还需要让ide知道要用这个配置文件编译typeScript

 -->