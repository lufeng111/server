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
3: 将typeScript编译成JavaScript，需要创建一个文件tsconfig.json，这个文件配置，会告诉如何将typeScript编译成JavaScript
有了配置文件之后，还需要让ide知道要用这个配置文件编译typeScript
4: 在原始的node上开发需要处理很多问题比如配置等，为了简化工作量用express框架 npm install express --save
express框架提供所有web应用都需要的常用功能，可以很方便的创建restful的http服务，
5：安装express的类型定义文件，以便使用typeSCript来开发，npm install @types/express --save 就可以使用typeSCript语法来使用它的api了，
6: shift + command + b 运行tsconfig.json 把ts编译成js, 启动项目 npm build/hello_server.ts
7: npm install -g nodemon 安装这个插件，每次修改文件服务器就自动重启了，

 -->
