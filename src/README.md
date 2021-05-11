# 前端知识体系（大纲）
## 前端工程化体系
### 基础设施
#### 规范化
- 前端标准（基础）
  - W3C
  - SPA
  - DOM
  - BOM
  - XHTML
  - XML
  - JSON
  - JSONP
  - HTTP
  - HTML5
  - CSS3

- 编码规范
  - eslint
  - tslint
  - stylelint

- 命名规范
  - Pascal 大小写
    - 组成标识符的每个单词的首字母大写，其余字母
    小写的书写约定。对于缩写的双字母单词，要求全
    部大写
  - Camel 大小写
    - 标识符的首字母小写，每个后面连接的单词的首
    字母大写，其余字母小写的书写约定。对于缩写的
    双字母单词，要求它们出现在标识符首部时全部小
    写，否则全部大写
  - 匈牙利命名法
    - 变量名 = 属性 ＋ 类型 ＋ 对象描述
  - 常量的命名
    - 常量的名字应该都使用大写字母，并且指出该常
    量完整含义

- 目录规范
- commit提交规范
  - commitiizen
  - cz-customizable
  - commitlint

- 文档规范
- 接口规范
- 流程规范
  - gitflow

#### 基础构建优化
- 压缩
- 校验
- 资源合并
- 打包构建工具
  - Browserify
  - webpack
  - gulp
  - rollup
  - grunt
  - …
- 包管理工具
  - Bower
  - npm
  - yarn

#### 模块化
- JS模块规范
  - 模块规范
    - AMD
      - RequireJS
    - CMD
      - seaJS
    - CommonJS
      - node模块系统
    - ES6+ Module

  - 模块加载机制原理

- CSS模块化
  - css预处理器
    - Less
    - Sass
      - node-sass
      - dart-sass
    - Stylus
  - css Module
  - css in JS
- 模块设计

#### 组件化

- 组件化标准
  - Web Component
- 组件设计
  - UI和功能拆分（独立性/自由组合）
- 组件设计
  - 目录结构（就近维护）

#### 资源管理
- 按需加载
- 延迟加载
- 缓存复用
- CDN部署
- 文件指纹
- 请求合并
- 异步同步加载


### 工具链
#### 脚手架
- 脚手架工具原理
- 命令行工作流
- 项目模板设计

#### 搭建本地开发环境

#### 搭建本地mock环境

#### 自动化构建

- webpack配置使用
- 常用插件
- webpack构建性能优化
- 代码转换：ES与Babel
- CSS预编译与postcss
- 模块合并：webpack模块化构建
- webpack增量更新构建
- 资源定位
- 自动刷新

#### 引入单元测试

#### 部署发布

- Jenkins
- 部署流程
- 静态资源部署策略

#### 监控

- 行为监控

- 异常监控

- 采集
  - 用户信息
  - 行为信息
  - 异常信息
  - 环境信息
- 性能监控

  - 运行时监控

    - 文件级
    - 模块级
    - 函数级
    - 算法级
  - 网络请求速率

  - 系统性能

#### 工作流
- 本地工作流

  - 本地环境
  - 代码分离
  - 测试沙箱
- 云平台工作流

  - 角色划分

    - 本地开发环境
    - gitlab
    - 云平台
  - 自动化构建与部署

    - gitflow 与版本管理
    - webhook 与自动构建
  - 持续集成与持续交付

    - 自动构建与测试
    - 生产环境的迭代版本、版本回流
    - Docker 容器技术
  - IDE 云平台开发

    - IDE 工具

#### 调试工具
- Chrome

  - Element 标签页

    - 用于查看和编辑当前页面中的 HTML 和 CSS 元素
  - Network 标签页

    - 用于查看 HTTP 请求的详细信息，如请求头、响应头及返回内容等
  - Source 标签页

    - 用于查看和调试当前页面所加载的脚本的源文件
  - TimeLine 标签页

    - 用于查看脚本的执行时间、页面元素渲染时间等信息
  - Profiles 标签页

    - 用于查看 CPU 执行时间与内存占用等信息
  - Resource 标签页

    - 用于查看当前页面所请求的资源文件，如 HTML，CSS 样式文件等
  - Audits 标签页

    - 分析页面加载的过程，进而提供减少页面加载时间、提升响应速度的方案，用于优化前端页面，加速网页加载速度等
  - Console 标签页

    - 用于显示脚本中所输出的调试信息，或运行测试脚本等
- firefox 插件 Firebug

  - Chrome 浏览器出现之前常用的调试工具
- IE 的开发者工具

- IETest

  - IE 浏览器版本切换工具

    - 在开发 Web 项目的时候，经常会碰到需要在不同的 IE 版本
    中检查完成的网页是否能正常展现，这时就需要 IETest 帮我们
    模拟网页在 IE5.5、IE6、IE7、IE8、IE9 以及 IE10 等浏览
    器中的兼容性，让我们看一下辛苦做好的 CSS 样式或网站版面是
    否可以在各个主要浏览器正常显示
- Emmet

  - HTML/CSS 开发中的神器
- JSON 格式化和校验工具

- Postman

  - 用于调试请求和响应
- 移动端抓包调试

  - fiddler
  - Charles


### node
#### 基础知识
- web 服务

  - express

    - 中间件、生态完善
  - koa

    - 脱胎于 express，提升异步编程体验
  - hapi

    - 遵循配置大于编码原则，沃尔玛前端团队出品
  - sails

    - 模仿 ruby on rails 框架
  - tsw

    - qq 空间出品，集成了很多腾讯内部组件
  - Meteor

    - 快速搭建框架、10 倍的减轻工作量
  - Feathers

    - 创建一个面向服务的架构，是一个很好地适合创建 Node.js 微服务
  - Keystone

    - Keystone 是得到一个管理客户端并运行的最好的解决方案之一，以便管理来自 MongoDB 数据库的内容。管理界面自动从模型生成，具有所有 CRUD 操作和精细的过滤器。
  - Loopback

    - 内置许多函数，包括使用令牌和到任何类型的数据库连接器的认证
  - egg

    - 为企业级框架和应用而生，是阿里开源的企业级 Node.js 框架
  - Daruk

    - Daruk 是一款基于 Koa2，使用 Typescript 开发的轻量级 web 框架
  - uma

    - 58 同城 node 框架
- 模板引擎

  - handlebars
  - ejs
  - jade
- 前端打包

  - webpak
  - fis
- 任务管理

  - gulp
- 单元测试

  - karma
  - mocha
  - jasmine
- 包管理

  - npm
  - cnpm
  - yarn
- 守护进程

  - pm2
  - forever

#### 三大特点
- 单线程
  - Node.js 不为每个客户连接创建一个新的线程，而仅仅
  使用一个线程。当有用户连接了，就触发一个内部事件，通
  过非阻塞 I/O、事件驱动机制，让 Node.js 程序宏观上
  也是并行的

- 非阻塞 I/O

  - 由于 Node.js 中采用了非阻塞型 I/O 机制，因此在执
  行了访问数据库的代码之后，将立即转而执行其后面的代码，
  把数据库返回结果的处理代码放在回调函数中，从而提高了程
  序的执行效率。
  - 当某个 I/O 执行完毕时，将以事件的形式通知执行 I/O
  操作的线程，线程执行这个事件的回调函数。为了处理异步
   I/O，线程必须有事件循环，不断的检查有没有未处理的事件
   ，依次予以处理。
  - 阻塞模式下，一个线程只能处理一项任务，要想提高吞吐量
  必须通过多线程。而非阻塞模式下，一个线程永远在执行计算操
  作，这个线程的 CPU 核心利用率永远是 100%。所以，这是一
  种特别有哲理的解决方案：与其人多，但是好多人闲着；还不如
  一个人玩命，往死里干活儿。

- 事件驱动 event-driven

  - 在 Node 中，在一个时刻，只能执行一个事件回调函数，但
  是在执行一个事件回调函数的中途，可以转而处理其他事件（比
  如，又有新用户连接了），然后返回继续执行原事件的回调函数
  ，这种处理机制，称为“事件环”机制。
  - Node.js 底层是 C++（V8 也是 C++写的）。底层代码中，
  近半数都用于事件队列、回调函数队列的构建

#### 技术架构
- 底层架构

  - v8 engine

    - 虚拟机的功能，执行 js 代码
    - 提供 C++函数接口，为 nodejs 提供 v8 初始化，创建 context，scope 等
  - libuv

    - 它是基于事件驱动的异步 IO 模型库，我们的 js 代码发出请求，最终由 libuv 完成，而我们所设置的回调函数则是在 libuv 触发
  - builtin modules

    - 它是由 C++代码写成各类模块，包含了 crypto，zlib, file stream etc 基础功能
    - v8 提供了函数接口，libuv 提供异步 IO 模型库，以及一些 nodejs 函数，为 builtin modules 提供服务
  - native modules

    - 它是由 js 写成，提供我们应用程序调用的库，同时这些模块又依赖 builtin modules 来获取相应的服务支持
- node 函数调用机制

#### 通信协议
- 网络协议

  - http/https

    - 推荐 request.js
  - tcp

    - net 模块
  - udp

    - dgram 模块
- 数据序列化协议

  - json

    - 文本协议，常用于 http 通信
  - protocol buffer

    - 二进制协议，常用于 socket 通信
    - js 原生不支持，可以使用 protobuf.js 来解析
- 接口协议

  - restful apis

    - 语义化，几乎所有 web 框架都支持
  - Graphql

    - 解决 restful 接口过于原子化的缺陷，facebook 出品
    - 需要在前端和后台接口之前搭建一层 graphql server 做数据处理
  - RPC

    - 后台服务间通信
  - 网络序/本地序

    - Buffer 模块 api 原生支持两种序列的转换


#### 存储
- 数据库

  - MySql

  - MongoDB

  - Oracle

  - MSSQL

    - 微软的 SQLServer 数据库服务器
  - PostreSQL

    - 功能强大的开源对象关系数据库系统
  - MariaSQL

- 缓存

  - redis
  - memcache
  - nosql
  - mongodb
  - orm
  - sequelize（mysql）
  - bookshelf（mysql）
  - zookeeper
- 消息队列

  - RabbitMQ

    - 实现了高级消息队列协议（AMQP）的开源消息代理软件
  - Kafka

    - 消息队列 Kafka 版是阿里云基于 Apache Kafka 构建的高吞吐量、高可扩展性的分布式消息队列服务
  - zmq

    - 是一个消息处理队列库，可在多个线程、内核和主机盒之间弹性伸缩
  - server render

  - websocket

    - 是一种在单个 TCP 连接上进行全双工通信的协议

#### 设计模式
- 单例模式

  - 保证一个类只有一个实例
- 适配器模式

  - 适配器模式可以使原本由于接口不兼容而不能一起工作的那些类可以一起工作
- 装饰模式

  - 可以通过继承的方式，为一个基类对象扩展功能
- 观察者模式

  - 就是为某一对象添加一监听事件



### 主流技术栈
#### React
- 简介

- React 是一个 MVC 框架
- React 主要是用来构建 UI
- React 是起源于 Facebook 的内部项目，用于构建 Instagram 网站，在 2013.05 开源
- 特点

- 声明式

- 使用 React 编写 UI 界面和写 HTML 几乎一样
- 高效

- React 通过对 DOM 的模拟，最大限度地减少与 DOM 的交互
- 灵活

- React 可以与已知的库或框架很好地配合
- 生命周期

- constructor

- 构造函数
- componentWillMount

- 在渲染前调用,在客户端也在服务端（高版本已废弃）
- componentDidMount

- 在第一次渲染后调用，只在客户端
- componentWillReceiveProps

- 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化 render 时不会被调用
- shouldComponentUpdate

- 返回一个布尔值。在组件接收到新的 props 或者 state 时被调用。在初始化时或者使用 forceUpdate 时不被调用
- componentWillUpdate

- 在组件接收到新的 props 或者 state 但还没有 render 时被调用。在初始化时不会被调用
- componentDidUpdate

- 在组件完成更新后立即调用。在初始化时不会被调用
- componentWillUnmount

- 在组件从 DOM 中移除的时候立刻被调用
- React 思想

- 组件编写顺序

- 1.组件划分原则

- 解耦
- 复用
- 适度
- 2.编写静态组件

- 3.分析 State

- 哪些是 State

- 对组件进行两个灵魂质问
- 对 State 集合进行检查和去重
- State 保存的位置

- 单一状态
- 状态上移
- 添加交互行为
- mock 方式

- server
- public
- Redux 思想

- 使用 redux 是在解决什么问题

- 问题原因：数据状态包括 API 数据，本地数据和 UI 状态等随着项目扩大变的管理复杂
- 解决问题的目的：防止管理状态失控
- 解决问题的手段：使用 redux 将视图层和状态管理层从逻辑上解耦
- State

- 集中管理，全局唯一
- 不可变性
- 定义原则与 React State 定义原则相同
- Action

- 普通 Acion

- ActionCreators
- ActionTypes
- 异步 Action

- 异步 action 的创建

- 请求开始 action
- 请求成功 action
- 请求失败 action
- 拓展 reducer

- 请求数据相关的 state 数据结构的变化
- 请求数据相关的 reducer 内容扩充
- 集成 redux-thunk

- 问题原因：净化 react 组件的代码，想将数据请求放在 action 当中做
- 解决问题的目的：实现异步 Action
- 解决问题的手段：使用 redux-thunk 实现异步 Action，抽离 react 中的数据请求代码
- Reducer

- combineReducers
- Store

- redux-devtools

- 浏览器插件
- 项目依赖库
- React-Redux 思想

- 使用 react-redux 是在解决什么问题

- 问题原因：reactUI 层和 redux 状态层的相关代码冗杂在 react 组件中
- 解决问题的目的：既能链接 reactUI 层和 redux 状态层，又不让两者代码糅合
- 解决问题的手段：使用 react-redux 将视图层和状态管理层从代码上解耦
- 功能

- Provider 组件
- connect 高阶 HOC 组件
- map api
- 容器性组件和展示性组件

- 关注点
- 对 redux 感知
- 读数据
- 写数据
- 如何创建
- 流程图总结

- https://www.taopoppy.cn/react_redux_jiagou_react_redux.png
- React-Router

- 服务端路由和客户端路由的区别

- 服务端路由：访问 http://a 就返回 a.html，访问 http://b 就返回 b.html，是服务器根据不同的路由返回不同的页面
- 客户端路由：无论访问什么路径，返回的页面信息都是相同的，是通过 js 通过判断路径的不同来渲染不同的组件而已，所以叫做客户端路由
- BrowserRouter 和 HashRouter 区别

- 之前说 react-router-dom 是将 react-route 和 web-api 做绑定，这些 web-api 具体指的就是 HTML5 history API，利用这些 pushState、replaceState 等方法实现在客户端实现路由的操作
- 哈希路由是使用 url 的 hash 部分作为路由信息，是通过使用页面不同的哈希和不同的组件之间做映射来完成的，哈希的出现主要为了兼容老版本浏览器，因为老版本的浏览器不支持 history 的 API，所以通过哈希的变化来实现路由的变化。但是这样的情况在现在已经很少了，而且哈希的本身含义就是页面的定位，其逻辑也不符合路由的需求
- 路由渲染组件的三种方式

- component
- render
- children
- 全新思维

- 一切皆组件
- 动态路由离散式声明法
- 架构设计基础

- React+Redux 项目结构组织方式

- type（按照类型）

- 定义

- 类型指的是该文件在项目当中充当的角色类型
- 特点

- 优点

- 目录结构清晰却明确，功能文件比较紧凑
- 缺点

- 新添功能需要在不同的文件中做修改
- 不利于多人合作下的代码表写和提交合并
- function（按照功能模块）

- 定义

- 功能指的是按照功能或者页面将相关的文件写在同一个文件夹
- 特点

- 优点

- 有利于新功能的开发和拓展
- 缺点

- 容易造成 store 当中存在大量重复性的数据
- 同一状态在不同的模块中会有不一致的风险
- Ducks（鸭子类型）

- 定义

- 将应用的状态作为模块的划分依据
- 特点

- 目录结构清晰紧凑，添加新功能只需添加新模块文件即可
- 组件需要任何状态只需要引入对应的 state 模块文件即可
- 三种设计 Redux-State 的依据

- API 为依据

- 定义

- 以后端 API 返回数据结构作为 State 的数据结构
- 缺点

- 大量数组类型的结构会造成重复数据的存在
- UI 为依据

- 定义

- 不同的 UI 显示都对应一份 State
- 缺点

- State 数量过多，容易出现错误的 State 和重复的 State
- 数据库基本原则为依据

- 整个应用的状态按照领域分成若干子 State，子 State 之间不能保存重复的数据
- State 以键值对的结构存储数据，以记录的 key/Id 作为记录的索引，记录中的其他字段都依赖于索引
- State 中不能保存可以通过已有数据计算而来的数据，即 State 中的字段不互相依赖
- 架构设计进阶

- selector 函数

- 使用 selector 是在解决什么问题

- 问题原因：redux 和容器性组件存在部分耦合，redux 中的 state 结构变化会影响后者
- 解决问题的目的：实现 react 容器性组件和 redux 状态层的终极解耦
- 解决问题的手段：selectors 是作为不同层级之间的接口不仅彻底解耦了层级，还使得不同层级通过接口进行安全交互和通讯得以实现
- selector 带来的好处

- selector 限制了层级的内部变化影响范围最多到接口
- selector 防止不同层级互相知道内部结构的风险
- selector 可以负责计算和过滤的工作
- redux 中间件（Middleware）

- middleware 的写法
- middleware 的本质
- redux 增强器（Enhancer）

- Enhancer 的写法

- Enhancer 和 Middleware 的关系

- 实际上 middleware 是 store enhancer 的一种，中间件虽然比较低阶，但是它约束了我们的行为，而增强器 enhancer 虽然更加灵活，但是破坏 redux 底层结构的风险更大，所以如果你对 redux 整体的结构和逻辑都不是太熟悉，尽量就别用
- 架构设计高级

- reducer 如何返回新的 state 对象

- Object.assign

- ES6 扩展语法

- Immutable

- Immutable 的常规使用

- Immutable 的优化

- Immutable 的选择考虑

- 对项目的整体侵入性很强，我们需要改的地方很多，如果你的项目不是很大，且 store 当中的数据层级不是很多，结构不复杂，不推荐使用的，我们一定要根据需求去搭建架构，去决定是否使用某些工具
- Reselect

- 使用 Reselect 是解决什么问题

- store 当中的 state 发生了变化，每个容器型组件的 mapStateToProps 都要重新执行，产生的结果就是上述的这些 selectors 函数也要重复执行，也就导致了重复计算，使用 Reselect 创建的 selectors 函数，只要使用到的 state 没有发生变化，这个 selectors 函数就不会去重新计算，比如 getVisibleTodos 函数使用到了 state.filter 和 state.todos，修改 state.text 并不会影响 state.filter 和 state.todos，所以 getVisibleTodos 函数也就不会重复执行
- Reselect 的常规使用

- Reselect 的选择考虑

- React Hooks

- 特性

- hooks 的出现使得你可以在不编写 class 的情况下使用状态管理以及其它 React 的特性
- Hooks API

- useState

- 用来承担与类组件中的 state 一样的作用，组件内部的状态管理
- useEffect

- 可以用来模拟生命周期，即可以完成某些副作用
- useLayoutEffect

- 它与 useEffect 的用法完全一样，作用也基本相同，唯一的不同在于执行时机，它会在所有的 DOM 变更之后同步调用 effect，可以使用它来
- useReducer

- useState 的替代方案，它接收一个 (state, action) => newState 的 reducer 处理函数，并返回当前的 state 和 配套的 dispatch 方法。使用方法与 redux 非常相似
- useCallback

- 它有的作用：性能优化，父组件更新，传递给子组件的函数指针不会每次都改变，只有当依赖项发生改变的时候才会改变指针。避免了子组件的无谓渲染
- 它的本质是对函数依赖进行分析，依赖变更时才重新执行。
- useMemo

- useMemo 用于缓存一些耗时的计算结果（返回值），只有当依赖项改变时才重新进行计算
- useContext

- 专门为函数组件提供的 context hook API，可以更加方便地获取 context 的值
- useContext(MyContext) 接收一个 context 对象，当前获取到的值由上层组件中距离最近的 <MyContext.Provider> 的 value 决定
- useRef

- useRef 返回一个可变的 ref 对象，其 current 属性被初始化为传入的参数。返回的 ref 对象在组件的整个生命周期内保持不变
- 未完待续…

#### Angular
- 博主未曾使用特附上一个其他大神总结的链接
- https://img.58cdn.com.cn/escstatic/docs/imgUpload/gongchenghui/angular.png

#### JavaScript
- JS 变量

- 变量声明

- 声明

- 显示声明
- var 变量名
- 隐式声明
- 自动添加到闭包
- 陋习

- 没有类型
- 重复声明
- 隐式声明
- 不声明直接赋值
- 提倡

- 先声明后使用
- 先赋值后运算
- 作用域

- 全局变量

- 包含

- 在函数体外定义的变量
- 在函数体内定义的无 var 的变量
- 调用

- 任何位置
- 局部变量

- 包含

- 在函数体内部 var 声明的变量
- 函数的参数变量
- 调用

- 当前函数体内部
- 优先级

- 局部变量高于同名全局变量
- 参数变量高于同名全局变量
- 局部变量高于同名参数变量
- 特性

- 忽略块级作用域

- 全局变量是全局对象的属性

- 局部变量是调用对象的属性

- 作用域链

- 内层函数可访问外层函数局部变量
- 外层函数不能访问内层函数局部变量
- 生命周期

- 全局变量

- 除非被显示删除，否则一直存在
- 局部变量

- 自声明起至函数执行完毕或被显示删除
- 回收机制

- 标记清除
- 引用计数
- JS 数据类型

- undefined

- 使用 var 声明但未初始化
- 区分空对象指针与尚未定义的变量
- 对未初始化的变量及未声明的变量使用 typeof 都返回 undefined
- null

- 逻辑上 null 表示一个空对象的指针
- 使用 typeof 检测时会返回 object
- boolean

- true 为真 false 为假

- true 不一定=1 false 不一定=0

- 使用 Boolean()进行转换

- 转换为 true

- 任何非空字符串
- 任何非空对象
- 任何非零数字
- 转换为 false

- 空字符串
- 0 和 NaN
- null 及 undefined
- string

- 特性

- 0 个或多个 16 位 Unicode 字符组成

- 单引号与双引号不能交叉使用

- 使用.length 属性访问字符串长度

- 转义序列表示一个字符串
- 无法精确返回双字节字符串长度
- 字符串一旦被创建，其值将不能改变，若要改变必须销毁原有字符串

- 转义序列

- \n 换行
- \t 制表符
- \b 空格
- \r 回车
- \f 分页符
- \ 斜杠\
- ’ 单引号
- " 双引号
- \xnn 十六进制数，n 代表 0~F
- \unnnn 以十六进制表示一个 Unicode 字符
- 类型转换

- toString()

- 使用类型

- number
- string
- object
- boolean
- 参数

- number 类型的数值基数
- String()

- undefined
- null
- evel()

- 计算字符串表达式的值并以数值的形式返回
- number

- 进制

- 十进制
- 八进制
- 十六进制
- 浮点数

- 小数点后至少一位数字

- 科学计数法

- 小数点后带有 6 个 0 的浮点数
- 以 e 为底\*10 的 ±N 次幂
- 最高精度

- 17 位小数
- 缺陷

- 存在舍入误差
- 无法测试特定浮点数值
- 数值范围

- 最小值

- Number.MIN_VALUE

- 5e-324
- 最大值

- Number.MAX_VALUE

- 1.7976931348623157e+308
- 超出范围

- 正无穷

- Infinity
- Number.POSITIVE_INFINITY
- 负无穷

- -Infinity
- Number.NEGATIVE_INFINITY
- 缺陷

- 无法参与下一次计算
- 检测方法

- isFinite()

- 可转换为数值 true
- 不可转换为数值 false
- NaN

- 含义

- Not a Number
- 非数值
- 特性

- 任何涉及 NaN 的操作都将返回 NaN
- NaN 与任何值都不相等包括自身
- 检测

- isNaN()

- 可转换为数值 false
- 不可转换为数值 true
- 数值转换

- Number()

- Boolean

- true

- 1
- false

- 0
- null

- 0
- undefined

- NaN
- String

- 只包含数字

- 十进制数
- 前导 0 被忽略
- 包含有浮点格式

- 浮点数值
- 忽略前导 0
- 包含有效十六进制数

- 相同大小的十进制数
- 空字符串

- 0
- 其他字符串

- NaN
- object

- 基于 toString 转成字符串，再转换成数字
- object

- 定义

- 一组数据或者功能的集合
- 声明

- var obj = new Object()
- var obj = {}
- 属性与方法

- constructor

- 保存拥有创建当前对象的函数
- hasOwnProperty

- 检测给定属性在当前对象中是否存在
- isPrototypeOf

- 检测传入的对象是否是另一个对象的原型
- propertyIsEnumerable

- 检测给定的属性是否能用 for-in 枚举
- toLocaleString

- 返回对象的字符串表示，该字符串与执行环境的地区对应
- toString

- 返回对象的字符串表示
- valueOf

- 返回对象的字符串、布尔或数值表示
- 未完待续…

#### TypeScript
- 基础类型

- string

- 同 JavaScript 用"或者’标识字符串

- let name: string = “abc”
- number

- 数组

- number[]

- let list: number[] = [1,2,3]
- Array<元素类型>

- let list: Array = [1,2,3]
- 数字

- let decLiteral: number = 6
- boolean

- let isDone: boolean = false
- Tuple

- 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
- let x: [string, number];
- x = [‘hello’, 10]; // OK
- enum

- 枚举类型是对 JavaScript 标准数据类型的一个补充
- enum Color {Red, Green, Blue}
- let c: Color = Color.Green;
- Any

- 未知的数据类型一般使用 any
- Void

- void 类型像是与 any 类型相反，它表示没有任何类型
- Null 和 Undefined

- undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null
- 它们的本身的类型用处不是很大
- 默认情况下 null 和 undefined 是所有类型的子类型
- Never

- never 类型表示的是那些永不存在的值的类型
- never 类型是任何类型的子类型，也可以赋值给任何类型
- 没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外）
- 即使 any 也不可以赋值给 never
- Object

- object 表示非原始类型
- 也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型
- 接口

- 特殊符号

- 可选

- ?
- 只读

- readonly
- 签名

- 字符串型签名

- 数组型签名

- 数字型签名会将数字转换成字符串再去匹配
- 如果同时使用那么数组型签名的返回值必须是字符串型签名的子类的返回值

- 对象型接口

- 普通模式

- key 需要对应上
- 配合签名使用的 option 模式

- 函数型接口

- 参数

- 不需要 key 对应，只需要相应位置的相应类型对应
- 返回值

- 类类型接口

- 特点

- 接口只需要描述类的公共部分，不会去检查私有部分
- 构造函数的控制方式

- 构造函数时金泰属性，不属于公共部分
- 控制 new 过程
- 接口继承

- 接口的切割和继承
- 特点：类可当做值也可以当做类型
- 类 class

- 定义了一件事物的抽象特点，包含它的属性和方法

- ES6 类的使用

- 属性和方法

- 使用 class 定义类
- 使用 constructor 定义构造函数
- 通过 new 生成实例会自动调用构造函数
- 类的继承

- 使用 extends 关键字实现继承
- 子类中使用 super 关键字来调用父类的构造函数和方法
- 静态方法

- 使用 static 修饰符修饰的方法称为静态类
- 不需要实例化
- 直接通过类来调用
- TypeScript 类的使用

- 三种访问修饰符

- public

- public 修饰的属性或方法是公有的，可以在任何地方被访问到
- 默认所有的属性和方法都是 public
- private

- private 修饰的属性或方法是私有的
- 不能在声明它的类的外部访问
- 很多时候，我们希望有的属性是无法直接存取的，这时候就可以用 private 了
- 需要注意的是，TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性
- 使用 private 修饰的属性或方法，在子类中也是不允许访问的
- protected

- protected 修饰的属性或方法是受保护的
- 它和 private 类似，区别是它在子类中也是允许被访问的
- 抽象类

- 抽象类是供其它类继承的基类
- 他们一般不会直接被实例化
- 抽象类可以包含成员的实现细节
- abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法
- 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
- 抽象方法的语法与接口方法相似。 两者都是定义方法签名不包含方法体。 然而，抽象方法必须使用 abstract 关键字并且可以包含访问符
- 类的类型

- 实现方式类似接口
- 类实现接口

- 实现（implements）是面向对象中的一个重要概念
- 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现
- 这个特性大大提高了面向对象的灵活性
- 函数

- 有可选参数的函数

- 调用函数时传的参数的数量或者类型不符合函数中定义的参数要求时，TypeScript 编译器会报错
- 在一些场景下我们不需要传所有的参数；TypeScript 一个函数可选参数的特性；
- 在 TypeScript 中通过在函数参数后面追加一个?，指定参数是可选的
- 有默认参数的函数

- 当函数有可选参数时，我们必须检测参数是否被传递了
- 在声明函数签名时使用=提供一个默认值，即可指定函数参数是可选的；
- TypeScript 编译会在 JavaScript 输出结果中生成一个 if 结构
- 有剩余参数的函数

- add = (…foo:number[]):number => {}
- 声明文件

- 场景

- 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
- 什么是声明语句

- 假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过

#### Vue
- 简介

- Vue 是一个 MVVM 框架
- Vue 是用于构建用户界面的渐进式框架
- 尤雨溪最开始想起名为 seed.js，但是 npm 已经被注册了，后来根据 ”view“起名为 vue
- 2014 年由 Laravel 框架作者推荐后逐渐流行
- 特点

- 易用

- 已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！
- 灵活

- 不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。
- 高效

- 20kB min+gzip 运行大小
- 超快虚拟 DOM
- 最省心的优化
- Vue 思想

- 数据驱动
- 组件化
- Vue API

- 应用 API

- component

- 注册或检索全局组件。注册还会使用给定的 name 参数自动设置组件的 name。
- config

- 包含应用配置的对象。
- directive

- 注册或检索全局指令。
- mixin

- 在整个应用范围内应用混入。一旦注册，它们就可以在当前的应用中任何组件模板内使用它。插件作者可以使用此方法将自定义行为注入组件。不建议在应用代码中使用。
- mount

- 将应用实例的根组件挂载在提供的 DOM 元素上
- provide

- 设置一个可以被注入到应用范围内所有组件中的值。组件应该使用 inject 来接收 provide 的值。
- 从 provide/inject 的角度来看，可以将应用程序视为根级别的祖先，而根组件是其唯一的子级。
- 该方法不应该与 provide 组件选项或组合式 API 中的 provide 方法混淆。虽然它们也是相同的 provide/inject 机制的一部分，但是是用来配置组件 provide 的值而不是应用 provide 的值。
- 通过应用提供值在写插件时尤其有用，因为插件一般不能使用组件提供值。这是使用 globalProperties 的替代选择。
- unmount

- 在提供的 DOM 元素上卸载应用实例的根组件。
- use

- 安装 Vue.js 插件。如果插件是一个对象，它必须暴露一个 install 方法。如果它本身是一个函数，它将被视为安装方法。
- 该安装方法将以应用实例作为第一个参数被调用。传给 use 的其他 options 参数将作为后续参数传入该安装方法。
- 当在同一个插件上多次调用此方法时，该插件将仅安装一次
- 全局 API

- createApp

- 返回一个提供应用上下文的应用实例。应用实例挂载的整个组件树共享同一个上下文。
- h

- 返回一个”虚拟节点“，通常缩写为 VNode：一个普通对象，其中包含向 Vue 描述它应在页面上渲染哪种节点的信息，包括所有子节点的描述。它的目的是用于手动编写的渲染函数
- defineComponent

- 从实现上看，defineComponent 只返回传递给它的对象。但是，就类型而言，返回的值有一个合成类型的构造函数，用于手动渲染函数、TSX 和 IDE 工具支持。
- defineAsyncComponent

- 创建一个只有在需要时才会加载的异步组件
- resolveComponent

- 如果在当前应用实例中可用，则允许按名称解析 component。返回一个 Component。如果没有找到，则返回 undefined。
- resolveDynamicComponent

- 允许使用与 相同的机制来解析一个 component。返回已解析的 Component 或新创建的 VNode，其中组件名称作为节点标签。如果找不到 Component，将发出警告。
- withDirectives

- 允许将指令应用于 VNode。返回一个包含应用指令的 VNode。
- createRenderer

- createRenderer 函数接受两个泛型参数： HostNode 和 HostElement，对应于宿主环境中的 Node 和 Element 类型。
- nextTick

- 将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它
- options

- Data

- data

- 返回组件实例的 data 对象的函数
- props

- props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高阶选项，如类型检测、自定义验证和设置默认值。
- computed

- 计算属性将被混入到组件实例中。所有 getter 和 setter 的 this 上下文自动地绑定为组件实例。
- methods

- methods 将被混入到组件实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为组件实例。
- watch

- 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象
- emits

- emits 可以是数组或对象，从组件触发自定义事件，emits 可以是简单的数组，或者对象作为替代，允许配置和事件验证
- DOM

- template

- 一个字符串模板作为 component 实例的标识使用。模板将会替换挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。
- render

- 字符串模板的另一种选择，允许你充分利用 JavaScript 的编程功能。
- 生命周期

- beforeCreate->setup()

- 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
- created->setup()

- 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用
- beforeMount->onBeforeMount

- 在挂载开始之前被调用：相关的 render 函数首次被调用。
- 该钩子在服务器端渲染期间不被调用。
- mounted->onMounted

- 实例被挂载后调用，这时 Vue.createApp({}).mount() 被新创建的 vm.e l 替 换 了 。 如 果 根 实 例 挂 载 到 了 一 个 文 档 内 的 元 素 上 ， 当 m o u n t e d 被 调 用 时 v m . el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.el 也在文档内。
- 注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick
- 该钩子在服务器端渲染期间不被调用
- beforeUpdate->onBeforeUpdate

- 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
- 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行
- updated->onUpdated

- 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
- 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或侦听器取而代之。
- 注意，updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick
- 该钩子在服务器端渲染期间不被调用
- activated

- 被 keep-alive 缓存的组件激活时调用。
- 该钩子在服务器端渲染期间不被调用。
- deactivated

- 被 keep-alive 缓存的组件停用时调用。
- 该钩子在服务器端渲染期间不被调用。
- beforeUnmount(3.0)->onBeforeUnmount

- 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。
- 该钩子在服务器端渲染期间不被调用。
- unmounted(3.0)->onUnmounted

- 卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。
- 该钩子在服务器端渲染期间不被调用。
- errorCaptured->onErrorCaptured

- 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。
- renderTracked(3.0)->onRenderTracked

- 跟踪虚拟 DOM 重新渲染时调用。钩子接收 debugger event 作为参数。此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。
- renderTriggered(3.0)->onRenderTriggered

- 当虚拟 DOM 重新渲染为 triggered.Similarly 为 renderTracked，接收 debugger event 作为参数。此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。
- 选项/资源

- directives

- 包含组件实例可用指令的哈希表。
- components

- 包含组件实例可用组件的哈希表。
- 实例 property

- $data

- 组件实例观察的数据对象。组件实例代理了对其 data 对象 property 的访问。
- $props

- 当前组件接收到的 props 对象。组件实例代理了对其 props 对象 property 的访问。
- $el

- 组件实例使用的根 DOM 元素。
- $options

- 用于当前组件实例的初始化选项
- $parent

- 父实例，如果当前实例有的话。
- $root

- 当前组件树的根组件实例。如果当前实例没有父实例，此实例将会是其自己。
- $slots

- 用来访问被插槽分发的内容。
- $refs

- 一个对象，持有注册过 ref attribute 的所有 DOM 元素和组件实例。
- $attrs

- 包含了父作用域中不作为组件 props 或自定义事件。
- 实例方法

- $watch

- 侦听组件实例上的响应式 property 或函数计算结果的变化。
- $emit

- 触发当前实例上的事件。附加参数都会传给监听器回调。
- $forceUpdate

- 迫使组件实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
- $nextTick

- 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
- 指令

- v-text

- 更新元素的 textContent。如果要更新部分的 textContent，需要使用 Mustache 插值。
- v-html

- 更新元素的 innerHTML。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。
- v-show

- 根据表达式的真假值，切换元素的 display CSS property。
- 当条件变化时该指令触发过渡效果。
- v-if

- 根据表达式的真假值来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 ，将提取它的内容作为条件块。
- 当条件变化时该指令触发过渡效果。
- 当和 v-for 一起使用时，v-if 的优先级比 v-for 更高
- v-else

- 为 v-if 或者 v-else-if 添加“else 块”。
- v-else-if

- 表示 v-if 的“else if 块”。可以链式调用。
- v-for

- 基于源数据多次渲染元素或模板块
- v-on

- .stop - 调用 event.stopPropagation()。
- .prevent - 调用 event.preventDefault()。
- .capture - 添加事件侦听器时使用 capture 模式。
- .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- .{keyAlias} - 仅当事件是从特定键触发时才触发回调。
- .once - 只触发一次回调。
- .left - 只当点击鼠标左键时触发。
- .right - 只当点击鼠标右键时触发。
- .middle - 只当点击鼠标中键时触发。
- .passive - { passive: true } 模式添加侦听器
- 绑定事件监听器。事件类型由参数指定。
- v-bind

- 动态地绑定一个或多个 attribute，或一个组件 prop 到表达式。
- v-model

- .lazy - 监听 change 而不是 input 事件
- .number - 输入字符串转为有效的数字
- .trim - 输入首尾空格过滤
- 在表单控件或者组件上创建双向绑定。
- v-slot

- 提供具名插槽或需要接收 prop 的插槽。
- v-pre

- 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
- v-cloak

- 这个指令保持在元素上直到关联组件实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到组件实例准备完毕。
- v-once

- 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
- v-is

- 在 DOM 内模板使用时，模板受原生 HTML 解析规则的约束
- 特殊指令

- key

- key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除/销毁 key 不存在的元素。
- 有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。
- ref

- ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
- is

- 使用动态组件。
- 内置组件

- component

- 渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。is 的值是一个字符串，它既可以是 HTML 标签名称也可以是组件名称。
- transition

- 元素作为单个元素/组件的过渡效果。 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中。
- transition-group

- 提供多个元素/组件的过渡效果。默认情况下，它不呈现包装 DOM 元素，但可以通过 tag 属性定义一个。
- 注意，每个 的子节点必须有独立的 key，动画才能正常工作
- keep-alive

- 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 相似， 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。
- 当组件在 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
- 主要用于保留组件状态或避免重新渲染。
- slot

- 元素作为组件模板之中的内容分发插槽。 元素自身将被替换。
- teleport

- 允许我们控制在 DOM 中哪个父节点下渲染了 HTML，而不必求助于全局状态或将其拆分为两个组件。
- 响应式 API

- 响应式基础 API

- reactive

- 返回对象的响应式副本
- 响应式转换是“深层”的——它影响所有嵌套 property。在基于 ES2015 Proxy 的实现中，返回的 proxy 是不等于原始对象的。建议只使用响应式 proxy，避免依赖原始对象。
- readonly

- 获取一个对象 (响应式或纯对象) 或 ref 并返回原始 proxy 的只读 proxy。只读 proxy 是深层的：访问的任何嵌套 property 也是只读的。
- isProxy

- 检查对象是否是由 reactive 或 readonly 创建的 proxy。
- isReactive

- 检查对象是否是 reactive 创建的响应式 proxy。
- isReadonly

- 检查对象是否是由 readonly 创建的只读 proxy。
- toRaw

- 返回 reactive 或 readonly proxy 的原始对象。这是一个转义口，可用于临时读取而不会引起 proxy 访问/跟踪开销，也可用于写入而不会触发更改
- markRaw

- 标记一个对象，使其永远不会转换为 proxy。返回对象本身。
- shallowReactive

- 创建一个响应式 proxy，跟踪其自身 property 的响应性，但不执行嵌套对象的深度响应式转换 (暴露原始值)。
- shallowReadonly

- 创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换 (暴露原始值)。
- Refs

- ref

- 接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 property .value。
- unref

- 如果参数为 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val。
- toRef

- 可以用来为源响应式对象上的 property 新创建一个 ref。然后可以将 ref 传递出去，从而保持对其源 property 的响应式连接。
- toRefs

- 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref。
- isRef

- 检查值是否是 ref 对象。
- customRef

- 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。它需要一个工厂函数，该函数接收 track 和 trigger 函数作为参数，并应返回一个带有 get 和 set 的对象。
- shallowRef

- 创建一个 ref，它跟踪自己的 .value 更改，但不会使其值成为响应式的。
- triggerRef

- 手动执行与 shallowRef 关联的任何副作用。
- Computed 和 watch

- computed

- 使用 getter 函数，并为从 getter 返回的值返回一个不变的响应式 ref 对象。
- watchEffect

- 在响应式地跟踪其依赖项时立即运行一个函数，并在更改依赖项时重新运行它。
- watch

- watch API 与选项式 API this.$watch (以及相应的 watch 选项) 完全等效。watch 需要侦听特定的数据源，并在单独的回调函数中执行副作用。默认情况下，它也是惰性的——即回调仅在侦听源发生更改时调用。
- 组合式 API

- setup

- 一个组件选项，在创建组件之前执行，一旦 props 被解析，并作为组合式 API 的入口点

- props

- setup 函数中的第一个参数是 props。正如在一个标准组件中所期望的那样，setup 函数中的 props 是响应式的，当传入新的 prop 时，它将被更新。
- context

- 传递给 setup 函数的第二个参数是 context。context 是一个普通的 JavaScript 对象，它暴露三个组件的 property
- 生命周期钩子

- Vuex

- Vue-router

- Vue-SSR

- Vue-Loader

- Vue-Cli

- 通过 @vue/cli 实现的交互式的项目脚手架。

- 通过 @vue/cli + @vue/cli-service-global 实现的零配置原型开发。

- 一个运行时依赖 (@vue/cli-service)

- Cli

- CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令。它可以通过 vue create 快速搭建一个新项目，或者直接通过 vue serve 构建新想法的原型。你也可以通过 vue ui 通过一套图形化界面管理你的所有项目
- Cli 服务

- CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中。

- CLI 服务是构建于 webpack 和 webpack-dev-server 之上的

- 加载其它 CLI 插件的核心服务；
- 一个针对绝大部分应用优化过的内部的 webpack 配置；
- 项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令
- Cli 插件

- CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头，非常容易使用。
- 当你在项目内部运行 vue-cli-service 命令时，它会自动解析并加载 package.json 中列出的所有 CLI 插件。
- 插件可以作为项目创建过程的一部分，或在后期加入到项目中。它们也可以被归成一组可复用的 preset
- Vue-Devtools

- vue-class-component


### 跨平台技术
#### 跨端技术发展的三个阶段
- 第一阶段是混合开发的 web 容器时代

- 为了解决原生开发的高成本、低效率，出现了 Hybrid 混合开发
- 原生中嵌入依托于浏览器的 WebView
- Web 浏览器中可以实现的需求在 WebView 中基本都可以实现
- 但是 Web 最大的问题是，它的性能和体验与原生开发存在肉眼可感知的差异
- 因此并不适用于对性能和用户体验要求较高的场景
- 第二阶段是以 RN 和 Weex 为代表的泛 web 容器时代

- RN 对 Web 标准进行了功能裁剪
- 用户体验更接近于原生了
- 由于进行了功能裁剪，所以 RN 对业务的支持能力还不到浏览器的 5%
- 因此仅适用于中低复杂度的低交互类页面。面对稍微复杂一点儿的交互和动画需求，都需要通过调用原生代码去扩展才能实现
- 第三阶段是以 Flutter 为代表的自绘引擎时代

- Flutter 是构建 Google 物联网操作系统 Fuchsia 的 SDK
- 它使用 Dart 语言开发 APP
- 一套代码可以同时运行在 iOS 和 Android 平台上
- Flutter 采用自带的 Native 渲染引擎渲染视图，它是自己完成了组件渲染的闭环
- 而 RN、Weex 之类的框架，只是通过 JavaScript 虚拟机扩展调用系统组件，最后是由 Android 或者 iOS 系统来完成组件的渲染


#### Hybrid
- 为什么要引入 hybrid 开发

- Native 应对急速业务需求，APP 迭代加快，频繁的发版已难以应付
- Android 渠道众多，apple store 审核周期长
- 纯 native 开发效率低，开发维护成本高，不支持热更新
- 相对于其他动态发布技术，技术研发成本较低，使用语言更广泛，社区资源更丰富
- 优劣势

- 原生 APP

- 优点

- 打造完美的用户体验
- 性能稳定、操作速度快，上手流畅
- 访问本地资源（通讯录，相册）
- 设计出色的动效，转场
- 拥有系统级别的贴心通知或提醒
- 用户留存率高
- 缺点

- 分发成本高（不同平台有不同的开发语言和界面适配）
- 维护成本高
- 更新缓慢，根据不同平台，提交–审核–上线 等等不同的流程，需要经过的流程较复杂
- Web APP

- 优点

- 发版完全自控随时更新开发成本小时间快
- 缺点

- 性能差弱网络无网络条件下体验差
- Hybrid APP

- 优点

- 跨平台
- 开发周期短、成本低
- 用户体验良好
- 可以即时修复 bug、动态发版
- 缺点

- 仿原生 iOS 效果复杂
- 机型兼容性
- 整体架构

- viewLayer（视图层）

- H5

- H5 页面
- webview 引擎渲染
- Native

- Native 页面
- 系统原生引擎渲染
- coreLayer（通信层）

- 自定义 webview 资源拦截管理器

- 内置资源管理
- 缓存模块
- 文件下载模块
- 定义页面跳转管理器

- 定义混合通信交互模块

- 交互设计

- 交互原理

- 两种交互

- native 主动调用前端 JS
- H5 主动与 native 发起通信
- 交互过程（OC）

- 搭建 JS 调用 OC 的桥梁，注册供 JS 调用的方法 name

- JS 在调用 Native 注册方法

- iOS：window.webkit.messageHandlers.自定义属性.postMessage()
- Android：window.自定义方法
- Native 接收 JS 调用，解析处理，返回回调

- 通信方式

- 假跳转的请求拦截（不建议）

- 假跳转的请求拦截 就是由网页发出一条新的跳转请求，跳转的目的地是一个非法的压根就不存在的地址

- 比如：wbcst://testhost/action?params=xxx

- 模拟 http 协议网络请求 scheme://host/action?params

- 客户端会无差别拦截所有请求，真正的 url 地址应该照常放过，只有协议域名匹配的 url 地址才应该被客户端拦截

- JS 调用方式

- a 标签跳转
- location.href 跳转
- iframe 跳转
- 不建议使用，android 系统对 url 参数做了字节限制，无法进行大数据的通信

- 弹窗拦截（不建议）

- alert

- 弹出个提示框，只能点确认无回调
- confirm

- 弹出个确认框（确认，取消），可以回调
- prompt

- 弹出个输入框，让用户输入东西，可以回调
- 不建议使用，会无差别的拦截所有前端的 window 弹窗

- JS 上下文注入（推荐）

- iOS

- WKWebView scriptMessageHandler 注入
- android

- addJavascriptInterface 注入
- 特点

- 不通过任何拦截的办法，而是直接将一个 native 对象（or 函数）注入到 JS 里面，可以由 web 的 js 代码直接调用，直接操作 

#### ReactNative
- 简介

- 特性

- Learn Once,Write AnyWhere
- 提供了原生控件支持
- 异步执行
- 触屏处理
- 设计理念

- 既拥有 Native 的用户体验
- 又保留 React 的开发效率
- 优势

- 它对比原生开发更为灵活，对比 H5 体验更为高效。
- 替代传统的 WebView，打开效率更高，和原生之间的交互更方便。
- 多个版本迭代后的今天，它已经拥有了丰富第三方插件支持
- 更方便的热更新
- 劣势

- 尽管是跨平台，但是不同平台 Api 的特性与显示并不一定一致
- 调试’相对‘麻烦。
- Android 上的兼容性问题
- 风险

- 尽管 Facebook 有 3 款 App(Groups、Ads Manager、F8)使用了 React Native，随着 React Native 大规模应用，Appstore 的政策是否有变不得而知
- 环境搭建

- https://reactnative.cn/docs/environment-setup
- 架构设计

- Native

- Bridge

- 异步（asynchronous）：不依赖于同步通信
- 可序列化（serializable）：保证一切 UI 操作都能序列化成 JSON 并转换回来
- 批处理（batched）：对 Native 调用进行排队，批量处理
- JavaScript

- 组件及布局

- 核心组件

- View
- Text
- ScrollView
- Image
- TextInput
- 原生组件

- 运行时 RN 为前端组件创建相应的 android 和 iOS 视图
- RN 就是对原生视图的封装
- style

- RN 编写的应用的样式不是靠 css 来实现的

- 而是依赖 javascript 来为你的应用来添加样式

- 样式声明

- 依赖导入

- import React, { StyleSheet } from “react-native”;
- 调用 React-Native 的一个构造方法

- 传入一个对象生成 style

- 和 React 的 React.createCladd()语法是一样的，传入对象的 key 就相当于类名，每个类也是一个对象，可以配置各种样式参数

- 注意

- 对象 key 全部是驼峰写法
- 长度不加单位
- 示例

- const styles = StyleSheet.create({
- active: {
- borderWidth: 2,
- borderColor: ‘#ff00ff’,
- },
- });
- 样式使用

- 外部引入

- 设置多个属性类

- style={[styles.base,styles.backgroundColor]}
- 行内样式

- style={{width:this.state.width}}
- flexBox 布局

- 什么是 FlexBox 布局

- 弹性盒模型（The Flexible Box Module）,又叫 Flexbox，意为“弹性布局”

- 旨在通过弹性的方式来对齐和分布容器中内容的空间，使其能适应不同屏幕，为盒装模型提供最大的灵活性

- 布局思想

- 让容器有能力让其子项目能够改变其宽度、高度（甚至是顺序）
- 以最佳方式填充可用空间
- Flex 布局基于 flex-flow 流

- 水平的主轴（main axis）

- 主轴的开始位置（与边框的交叉点）叫做 main start
- 结束位置叫做 main end
- 垂直的交叉轴（cross axis）

- 交叉轴的开始位置叫做 cross start
- 结束位置叫做 cross end
- 项目默认沿主轴排列，单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size

- 属性

- 4 个容器属性

- flexDirection

- 决定主轴的方向（即项目的排列方向）
- row：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端
- column(默认值)：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。
- flexWrap

- 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap 属性定义，如果一条轴线排不下，如何换行。
- nowrap(默认值)：不换行
- wrap：换行，第一行在上方
- wrap-reverse：换行，第一行在下方。（和 wrap 相反）
- justifyContent

- 定义了伸缩项目在主轴线的对齐方式
- flex-start(默认值)：伸缩项目向一行的起始位置靠齐。
- flex-end：伸缩项目向一行的结束位置靠齐
- center：伸缩项目向一行的中间位置靠齐。
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：伸缩项目会平均地分布在行里，两端保留一半的空间
- alignItems

- 定义项目在交叉轴上如何对齐，可以把其想像成侧轴（垂直于主轴）的“对齐方式”。
- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐 。
- center：交叉轴的中点对齐。
- baseline：项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。
- 2 个项目属性

- flex

- 复合属性
- 设置或检索伸缩盒对象的子元素如何分配空间
- 其中第二个和第三个参数（flex-shrink、flex-basis）是可选参数
- 默认值为“0 1 auto”
- alignSelf

- align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性
- 默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch
- UI 渲染

- 模块注入

- RN 模块注入

- index->App
- RN 模块运行入口

- AppRegistry

- AppRegistry 常用方法

- registerConfig

- static 静态方法,用来注册配置信息
- registerComponent

- 注册组件
- registerRunnable

- 注册线程
- runApplication

- 进行运行应用
- 入口组件注册

- registerComponent
- 加载 jsbundle 文件运行应用

- runApplication
- 页面启动 UI 渲染

- APP 启动
- 读取模块 Modules
- 初始化根视图（RCTRootView）
- 创建了一个实现 Objective-C 与 Javascript 交互的全局 bridge（RCTBridge）
- 读取 Javascript 代码（RCTBridgeloadSource）
- 初始化 Native 模块化信息
- 初始化 JavaScript 代码的执行器，即 RCTJSCExecutor 对象
- 执行 JS 调用 OC 组件
- 将 flexbox 布局转换成原生布局完成 UI 渲染
- UI 控件渲染流程

- RCTRootView runApplication:bridge

- 通知 JS 运行 App
- RCTBatchedBridge \_processResponse:json error:error

- 处理执行完 JS 代码(runApplication)返回的相应，包含需要添加多少子控件的信息。
- RCTBatchedBridge batchDidComplete

- RCTUIManager 调用处理完成的方法，就会开始去加载 rootView 的子控件。
- RCTUIManager createView:viewName:rootTag:props

- 通过 JS 执行 OC 代码，让 UI 管理者创建子控件 View
- [RCTUIManager _layoutAndMount]

- 布局 RCTRootView 和增加子控件
- [RCTUIManager setChildren:reactTags:]

- 给 RCTRootView 对应的 RCTRootShadowView 设置子控件
- [RCTRootShadowView insertReactSubview:view atIndex:index++]

- 遍历子控件数组，给 RCTRootShadowView 插入所有子控件
- [RCTShadowView processUpdatedProperties:parentProperties:]

- 处理保存在 RCTShadowView 中属性，就会去布局 RCTShadowView 对应 UIView 的所有子控件
- [RCTView didUpdateReactSubviews]

- 给原生 View 添加子控件
- 完成 UI 渲染

- 通信机制

- OC 生成一张模块配置表，包含所有模块和模块里的方法，根据特定的标识宏（RCT_EXPORT_MODULE()），将可以暴露的方法暴露给 JS

- 通信流程

- ①js 调用 OC 模块暴露出来的方法
- ② 把调用方法分解为 ModuleName、MethodName、arguments，在丢给 MessageQueue 处理
- ③ 把 js 的 callback 函数缓存在 MessageQueue 的一个成员变量里面，同时生成一个 CallbackID 来代表 callback；在通过保存在 MessageQueue 的模块配置表把 ModuleName、MethodName 转成 ModuleID、MethodID
- ④ 把 ModuleID、MethodID、CallbackID 和其他参数传给 OC（JavaScriptCore）
- ⑤OC 接到消息，通过模块配置表拿到对于的模块和方法
- ⑥RCTModuleMethod 对 js 传过来的参数进行处理
- ⑦OC 模块方法执行完，执行 block 回调
- ⑧ 调用第 6 步中 RCTModuleMethod 生成的 block
- ⑨block 带着 CallbackID 和 block 传过来的参数去掉用 js 里的 MessageQueue 方法 invokeCallbackAndReturnFlushedQueue
- ⑩MessageQueue 通过 CallbackID 找到相应的 js 的 callback 方法
- ⑪ 调用 callback 方法，并把 OC 带过来的参数一起传过去完成回调
- 导航路由

- StackNavigator

- 用来跳转页面和传递参数

- 参数

- RouteConfigs
- StackNavigatorConfig
- navigation

- navigate

- 跳转到其他页面

- routeName

- 导航器中配置的路由名称
- params

- 传递参数到下一个页面
- action

- 示例

- this.props.navigation.navigate(‘Find’, {param: ‘i am the param’});
- state

- 当前页面导航器的状态

- params

- 路由页面参数
- key

- 路由页面 id
- routeName

- 路由页面名称
- setParams

- 更改路由的参数
- 在组件挂载完成之后注册
- componentDidMount() {
- this.props.navigation.setParams({param:'i am the new param'})
- 1
- goBack

- 返回

- goBack()

- 回退到上一个页面
- goBack(null)

- 回退到任意一个页面
- goBack(‘pathName’)

- 回退到指定页面
- dispatch

- 发送一个 action
- TabNavigator

- 类似底部导航栏，用来在同一屏切换不同页面
- DrawerNavigator

- 侧滑菜单导航栏，用于轻松设置带抽屉的屏幕
- 拆包

- 目的

- 解决 jsbundle 体积过大
- 按需分步加载，提高加载效率
- 提高热更新包 diff/load 效率
- jsbundle 组成

- 头部（Polyfills）

- 定义基本的 JS 环境
- 主要是 define，require 等全局模块的定义
- **d()函数、**r()函数、DEV 变量等
- 中部（Module 定义）

- 模块定义，RN 框架和业务的各个模块定义
- 使用\_\_d()函数定义所有用到的模块
- 该函数为每个模块赋予了一个模块 ID，模块之间的依赖关系都是通过这个 ID 进行关联的
- 尾部（Require 调用）

- 引擎初始化和入口函数执行
- 使用\_\_r()函数引用根模块
- 拆包方案

- diff and patch

- 将 jsbundle 通过 diff，生成 common 和每个业务的 patch 包
- 然后在 APP 运行时对 common 和 patch 合并成执行的 jsbundle
- 修改 RN 的 bundle 命令打包流程，使得直接生成 common+business 包

- 修改 RN 的 unbundle 命令，生成 common+business 包

- 使用 metro 拆包

- 基础包和业务包打包

- 抽离公共组件到 base.js

- base.js 入口打包

- 输出 common.jsbundle
- index.js 入口打包

- 输出 business.jsbundle
- 差异包打包

- business.jsbundle 基于 common.jsbundle 打差异包

- 实现思路

- business.jsbundle 逐行扫描
- 扫描内容如在 common.jsbundle 中没找到，用数组存放
- 将数组转换为数据保存到差异包 patch.jsbundle
- 热更新

- 前端业务代码提交入库
- 基于热更新平台拆分当前项目
- 资源打包上线 CDN 服务器
- 前端资源添加版本号管理
- 客户端拉取前端 RN 资源动态更新


#### Flutter
- Flutter 发展历程

- 2014.10 - Flutter 的前身 Sky 在 GitHub 上开源
- 2015.10 - 经过一年的开源，Sky 正式改名为 Flutter
- 2017.5 - Google I/O 正式向外界公布了 Flutter，这个时候 Flutter 才正式进去大家的视野
- 2018.6 - 距 5 月 Google I/O 1 个月的时间，Flutter1.0 预览版
- 2018.12 - Flutter1.0 发布，它的发布将大家对 Flutter 的学习和研究推到了一个新的起点
- 2019.2 - Flutter1.2 发布主要增加对 web 的支持
- 简介

- Flutter 是 Google 推出并开源的移动应用开发框架
- 主打跨平台、高保真、高性能
- 开发者可以通过 Dart 语言开发 App，一套代码同时运行在 iOS 和 Android 平台
- Flutter 提供了丰富的组件、接口，开发者可以很快地为 Flutter 添加 native 扩展
- 同时 Flutter 还使用 Native 引擎渲染视图，这无疑能为用户提供良好的体验
- 框架

- Framework

- 纯 Dart 实现的 SDK，类似于 React 在 JavaScript 中的作用
- 它实现了一套基础库， 用于处理动画、绘图和手势
- 基于绘图封装了一套 UI 组件库
- 根据 Material 和 Cupertino 两种视觉风格区分开来
- Engine

- 纯 C++实现的 SDK

- 包括

- Skia 引擎
- Dart 运行时
- 文字排版引擎等
- 它是 Dart 的一个运行时，它可以以 JIT 或者 AOT 的模式运行 Dart 代码

- 这个运行时还控制着 VSync 信号的传递、GPU 数据的填充等，并且还负责把客户端的事件传递到运行时中的代码

- Embedder

- Embedder 是操作系统适配层

- 实现了

- 渲染 Surface 设置
- 线程设置
- 平台插件等平台相关特性的适配
- 组件渲染

- 图像显示的基本原理

- 显示器的 CRT 电子枪从上到下一行行扫描，扫描一行完成之后，显示器上就显示一帧画面，随后电子枪回到初始位置继续下一次扫描

- 水平扫描时，显示器会发出一个水平同步信号（HSync）

- 而当一帧画面绘制完成之后，电子枪恢复原位，准备下一次扫描之前，显示器会发出一个垂直同步信号（Vsync）

- 显示器以固定的频率刷新，这个刷新率就是 Vsync 信号产生的频率

- 图像的显示需要 CPU、GPU 和显示器一起配合完成

- CPU 负责图像数据计算
- GPU 负责图像数据渲染
- 显示器则负责最终图像显示
- CPU 把计算好的需要显示的内容交给 GPU

- 由 GPU 完成渲染后放入帧缓冲区

- 随后视频控制器根据垂直同步信号（Vsync）以每秒 60 次的速度

- 从帧缓冲区读取帧数据交由显示器完成图像显示

- Flutter 绘制原理

- 渲染流程

- Dart
- |
- GPU
- |
- |
- Compositor
- Skia
- GPU
- 渲染流程 1

- GPU 的 VSync 信号同步给到 UI 线程
- UI 线程使用 Dart 来构建抽象的视图结构（这里是 Framework 层的工作）
- 绘制好的抽象视图数据结构在 GPU 线程中进行图层合成（在 Flutter Engine 层的工作）
- 然后提供给 Skia 引擎渲染为 GPU 数据，最后通过 OpenGL 或者 Vulkan 提供给 GPU
- UI 界面绘图流程

- user Input

- 用户输入是驱动视图更新的信号 如：滑动屏幕
- Animation

- 触发动画进度更新
- Build

- 框架开始 build 抽象视图数据
- Layout

- 视图布局
- Paint

- 视图绘制
- Composite

- 视图合成
- Restorize

- 最后进行光栅化处理把数据生成一个个真正的像素填充数据
- Dart 语言（基础）

- 简介

- Dart 语言在 2011 年 10 月由 Google 发布
- 是一种 易于学习、 易于扩展、并且可以部署到 任何地方 的 应用 编程 语言
- 设计的初衷是用来替换 javascript 的，所以刚开始 Dart 也就是用来作
- 为浏览器脚本运行在浏览器中的，但是一直没有被广大开发者重视。
- Google 并没有放弃 Dart，又 Dart 编写孵化了一个移动开发框架 Sky，
- 之后又被命名为 Flutter，进入了移动跨平台开发的领域
- 应用方向

- 移动端开发

- 核心是 Flutter 框架，它使用
- Dart + C++ + Skia 开发，同
- 一份代码编写运行在 iOS 和
- Android 上的应用
- 浏览器端

- 我们用 Dart 来写 Web 后，编译器会自动
- 将 Dart 文件编译为 JavaScript 文件进行
- 运行，只不过我们写的语法规范是 Dart 语法
- 服务器端

- DartVM ：就是写服务端的应用。比如写个
- http 的服务，对应用提供 api ，都是及其简单的事情。
- 环境配置

- 手动安装

- 下载地址：http://www.gekorm.com/dart-windows/
- 配置环境变量

- 将 dart-sdk 的 bin 路径添加到 path 环境变量中
- 在 vscode 中安装 Code Runner 插件，来调试我们的 dart 代码

- 安装 stagehand

- pub global activate stagehand
- 创建 dart 项目

- stagehand dart-demo
- 获取依赖包

- pub get
- 常用内置类型

- String

- Dart 字符串是 UTF-16 编码的字符序列，可以使用单引号或者双引号来创建字符串
- 可以使用三个单引号或者双引号创建多行字符串对象
- 可以使用 r 前缀创建”原始 raw”字符串
- 可以在字符串中使用表达式： ${expression},如果表达式是一个标识符，可以省略 {}，如果表达式的结果为一个对象，则 Dart 会调用对象的 toString() 函数来获取一个字符串
- Numbers

- int : 整数值
- double : 64-bit 双精度浮点数
- int 和 double 是 num 的子类
- Booleans

- bool 对象未初始化的默认值是 null
- Lists

- Dart 中的数组称为 List
- Maps

- map 是一个关联键和值的对象
- 键和值都可以是任何类型的对象
- 每个键只出现一次
- 变量声明

- var

- 类似于 JavaScript 中的 var
- 它可以接收任何类型的变量
- 但最大的不同是 Dart 中 var 变量一旦赋值，类型便会确定，则不能再改变其类型
- Dart 本身是一个强类型语言
- 任何变量都是有确定类型的
- dynamic

- dynamic 与 var 一样都是关键词
- 声明的变量可以赋值任意对象
- dynamic 与 Object 相同之处在于,他们声明的变量可以在后期改变赋值类型
- dynamic 声明的对象编译器会提供所有可能的组合
- Object

- Object 是 Dart 所有对象的根基类
- 也就是说所有类型都是 Object 的子类
- 包括 Function 和 Null
- 所以任何类型的数据都可以赋值给 Object 声明的对象
- Object 声明的对象只能使用 Object 的属性与方法, 否则编译器会报错
- final

- 一个 final 变量只能被设置一次
- final 变量在第一次使用时被初始化
- 被 final 或者 const 修饰的变量，变量类型可以省略
- const

- const 变量是一个编译时常量
- 不能更改
- 函数

- 函数声明
- 对于只包含一个表达式的函数，可以使用简写语法
- 函数作为变量
- 函数作为参数传递
- 可选的位置参数
- 可选的命名参数
- 参考链接：https://book.flutterchina.club/chapter1/dart.html
- 类 class

- 使用类成员

- 对象的成员包括函数和数据(分别是方法和实例变量)
- 你调用一个方法时，你在一个对象上调用它:这个方法可以访问那个对象的函数和数据
- 使用点(.)引用实例变量或方法
- 使用?.而不是.为了避免最左边的操作对象为空时出现异常
- 使用构造函数

- 可以使用一个创建函数来创建对象
- 构造函数的名字可以是 ClassName 或者 ClassName.indentifier
- 构造函数

- 通过创建一个与其类同名的函数来声明一个构造函数
- 最常见的构造函数形式——生成构造函数——创建了一个类的新实例
- this 关键词引用到当前的对象
- 抽象类

- Dart 抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口
- 抽象类通过 abstract 关键字来定义
- Dart 中的抽象方法不能用 abstract 声明，Dart 中没有方法体的方法我们称为抽象方法
- 如果子类继承抽象类必须得实现里面的抽象方法
- 如果把抽象类当做接口实现的话必须得实现抽象类里面定义的所有属性和方法
- 抽象类不能被实例化，只有继承它的子类可以
- 接口：使用 implements 关键字，一般使用抽象类定义接口。
- 包管理

- Dart 的软件包管理器是 pub。

- 托管软件包的存储库可以在https://pub.dartlang.org/ 找到

- 每个 Dart 应用程序都有一个 pubspec.yaml 文件，包含了项目依赖包配置 类似 package.json

- 操作命令

- pub get：获取应用程序依赖的所有包
- pub upgrade：将所有依赖项升级到较新版本
- pub build：构建应用
- 库

- 自定义库

- import ‘lib/mylib1.dart’ as lib1;
- 系统内置库

- import ‘dart:math’;
- import ‘dart:io’;
- import ‘dart:convert’;
- pub 包管理系统中的库

- import ‘package:dio/dio.dart’;
- Widget 与 Element

- 什么是 Widget

- Flutter Widget 采用现代响应式框架构建，中心思想是用 widget 构建你的 UI
- Widget 描述了他们的视图在给定其当前配置和状态时应该看起来像什么
- 当 Widget 的状态发生变化时， Widget 会重新构建 UI，Flutter 会对比前后变化的不同， 以确定底层渲染树从一个状态转换到下一个状态所需的最小更改
- Widget 的功能是“描述一个 UI 元素的配置数据”, Widget 其实并不是表示最终绘制在设备屏幕上的显示元素，而它只是描述显示元素的一个配置数据
- Element

- Flutter 中真正代表屏幕上显示元素的类是 Element，也就是说 Widget 只是描述 Element 的配置数据
- 基础 Widget

- StatelessWidget

- StatelessElement 间接继承自 Element 类，与 StatelessWidget 相对应
- StatelessWidget 用于不需要维护状态的场景
- 它通常在 build 方法中通过嵌套其它 Widget 来构建 UI
- 在构建过程中会递归的构建其嵌套的 Widget
- StatefulWidget

- 和 StatelessWidget 一样，StatefulWidget 也是继承自 Widget 类，并重写了 createElement()方法
- 不同的是返回的 Element 对象并不相同
- StatefulWidget 类中添加了一个新的接口 createState()
- createState() 用于创建和 Stateful widget 相关的状态，它在 Stateful widget 的生命周期中可能会被多次调用
- State

- 一个 StatefulWidget 类会对应一个 State 类，State 表示与其对应的 StatefulWidget 要维护的状态

- State 中的保存的状态信息可以

- 在 widget 构建时可以被同步读取
- 在 widget 生命周期中可以被改变，当 State 被改变时，可以手动调用其 setState()方法通知 Flutter framework 状态发生改变，Flutter framework 在收到消息后，会重新调用其 build 方法重新构建 widget 树，从而达到更新 UI 的目的
- 常用属性

- widget

- 它表示与该 State 实例关联的 widget 实例
- 由 Flutter framework 动态设置
- context

- StatefulWidget 对应的 BuildContext
- 作用同 StatelessWidget 的 BuildContext
- 生命周期

- StatefulWidget launched

- initState

- 当 Widget 第一次插入到 Widget 树时会被调用
- 对于每一个 State 对象，Flutter framework 只会调用一次该回调
- 通常在该回调中做一些一次性的操作，如状态初始化、订阅子树的事件通知等
- didChangeDependencies

- 当 State 对象的依赖发生变化时会被调用
- build

- 它主要是用于构建 Widget 子树的

- 会在如下场景被调用

- 在调用 initState()之后
- 在调用 didUpdateWidget()之后
- 在调用 setState()之后
- 在调用 didChangeDependencies()之后
- 在 State 对象从树中一个位置移除后（会调用 deactivate）又重新插入到树的其它位置之后
- reassemble

- 此回调是专门为了开发调试而提供的
- 在热重载(hot reload)时会被调用
- 此回调在 Release 模式下永远不会被调用
- didUpdateWidget

- 在 widget 重新构建时
- Flutter framework 会调用 Widget.canUpdate 来检测 Widget 树中同一位置的新旧节点，然后决定是否需要更新
- 如果 Widget.canUpdate 返回 true 则会调用此回调
- deactivate

- 当 State 对象从树中被移除时，会调用此回调
- dispose

- 当 State 对象从树中被永久移除时调用
- 通常在此回调中释放资源
- StatefulWidget destoryed

- 基础组件

- Text

- Text 用于显示简单样式文本，它包含一些控制文本显示样式的一些属性
- Image

- Flutter 中，我们可以通过 Image 组件来加载并显示图片，Image 的数据源可以是 asset、文件、内存以及网络
- Container

- Container 是 Flutter 里很常用的容器组件， Container 可以创建矩形视觉元素
- 布局类组件

- 线性布局

- Row
- Column
- 弹性布局

- Flex
- 流式布局

- Wrap
- Flow
- 层叠布局

- Stack
- Positioned
- 对齐与相对定位

- Align
- Weex
- 小程序
- 快应用
- ionic
- 简介

- ionic 是一个用来开发混合手机应用的，开源的，免费的代码库
- 可以优化 html、css 和 js 的性能，构建高效的应用程序
- 可以用于构建 Sass 和 AngularJS 的优化
- 特点

- 具有原生 APP 的卓越运行性能
- 可维护性高
- 漂亮的 Ui 设计
- 轻量级框架
- 具有强大的命令行工具
- 与 AngularJS 完美结合
- 框架结构

- CSS 框架

- 提供原生 App 质感的 CSS 样式模拟
- ionic 这部分的实现使用了 ionicons 图标样式库
- JavaScript 框架

- 提供移动 Web 应用开发框架
- ionic 基于 AngularJS 基础框架开发
- 遵循 AngularJS 的框架约束
- ionic 使用 AngularJS UI Router 实现前端路由
- 命令行/CLI

- 命令行工具集用来简化应用的开发、构造和仿真运行
- ionic 命令行工具使用了 Cordova，依赖于平台 SDK（Android & iOS）实现将移动 web 项目打包成原生 app
- 基本布局

- https://blog.csdn.net/xyphf/article/details/53580121
- 交互通信

- https://user-gold-cdn.xitu.io/2018/4/23/162f220686e4dba3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1


#### Cordova
- 简介

- Cordova 提供了一组设备相关的 API
- 通过这组 API，移动应用能够以 JavaScript 访问原生的设备功能，如摄像头、麦克风等
- Cordova 还提供了一组统一的 JavaScript 类库，以及为这些类库所用的设备相关的原生后台代码
- Cordova 支持如下移动操作系统：iOS, Android,ubuntu phone os, Blackberry, Windows Phone, Palm WebOS, Bada 和 Symbian
- 架构

- Web APP 端

- config.xml

- CLI 初始化项目在主目录下生成

- 包含了整个 app 的一些基本信息

- appName
- app 入口文件
- 白名单
- webview 初始化的一些配置
- plugin 信息
- 图标资源信息
- Resources

- HTML、JS、CSS

- cordova.js 核心代码

- exec

- 这是 cordova 中 js 端的核心执行代码，所有的 plugin 的执行入口
- successCallback – 成功的回调
- failCallback – 失败的回调
- service – 所调用 native plugin 的类
- action – 所调用 native plugin 的类下的具体 method
- actionArgs – 具体参数
- pokeNative

- JS 通知 Native 调用 native 方法
- 通过 Webview 相关协议拦截前端 URL
- JS 端通过 iframe 发送 request 的相关请求
- nativeCallback

- native 处理完前端请求后触发回调的统一入口
- 以同步的方式来触发 native -> js 的 callBack
- callbackFromNative

- JS 执行回调的地方
- 根据 cordova.callBacks 的 map 以及回调的 callBackId 还有状态（success 或者 fail）来执行相应的回调函数
- 之后根据 keepCallback 来决定是否将该回调从 callBacks 的 map 中移除
- Native 端

- cordova webview 引擎具体实现

- CDVViewController

- init — 初始化程序
- loadSettings — 解析 config.xml 将 pluginsMap startplugin settings startPage 等变量初始化到容器 controller 中，初始化 plugin 字典
- viewDidLoad — 先 loadSettings，之后创建特殊存储空，根据 CDVUIWebViewEngine 初始化 Webview，然后获取 appURL 加载 index.html
- CDVUIWebViewEngine

- initWithFrame — 创建 webview
- pluginInitialize — 初始化 webView 中的一系列设置,创建 delegate（CDVUIWebViewDelegate）
- getConmmandInstance — 获取 command 的实例
- 容器初始化以及 plugin 初始化

- Acceleromter
- Geolocation
- Carmera
- Media
- Device
- Network
- Contacts
- Storage
- JS&Native 通信

- 通信原理

- 保存 Cordova_plugin.js 的 插件文件名字和地址
- 插件的 API 呼出时，通过调用 Cordova 的 exec 模块将 API 的参数保存在 CommandQueue 的队列中。 CALLBACK 则保存在 JS 侧的 callbacks map 里面
- 添加一个空的 iframe,iframe 的 src 则指向 gap://ready
- 3 的 iframe 的 src 设置以后，NATIVE 侧 UIWebviewDelegate#shouldStartLoadWithRequest 则被呼出来
- Webview 的 Delegatet 判断 gap://ready 的情况下，则执行 commandDelegate 的处理
- commandDelegate 则从 JS 侧取出 API 的参数，内部实现则是通过 UIWebview＃stringByEvaluatingJavaScriptFromString 的返回值 取得 CommandQueue 里面的参数转换成 JSON 数据
- 根据 6 的插件，执行 NATIVE 定义的插件实例
- 插件中，有 CALLBACK 的情况下，成功失败的结果通过 UIWebview＃stringByEvaluatingJavaScriptFromString 执行 JS，JS 端则根据传过来的 CALLBACKID，从 callbacks map 取出回调函数并执行
- 通信方式

- iframe 的方法（默认）
- xmlHttpRequest 的方法（iOS5.x 版本因为 -webkit-scroll 的 IFRAME 有 BUG，则推荐使用）
- 插件导入流程

- Native

- APP 启动，MainViewController 初始化之时，queue 和 command 的 DELEGATE 初期化
- config.xml 文件解析，插件名设置到数组，插件文件和插件名设置到 pluginMap,属性设置到 setting
- 在 Webview 类里面，加载 index.html,index.html 里面加载 cordova.js、开始初期化
- JS

- 加载 cordova.js 时、内部的事件设置模块，NATIVE 交互模块，初期化模块，插件加载
- 插件模块是 cordova_plugins.js 文件定义的插件文件地址，文件名保存的 MAP
- deviceready 事件发布后，插件的 API 可以使用了
- 插件 API 执行后，模块 MAP 将插件文件加载，执行 exec 函数
- 在 index.html 里面添加一个空的 iframe、指定 src=gap://ready，通知到 Nativie
#### PWA
#### WebAssembly
- https://www.wasm.com.cn/
#### Electron
#### VasSonic
#### QT




### 性能优化和监控
#### 性能优化（基础）
- 内容层面

- DNS 解析优化

- DNS 缓存
- 减少 DNS 查找
- keep-alive
- 适当的主机域名
- 避免重定向

- 切分到多个域名

- 杜绝 404

- 网络传输阶段

- 减少传输过程中的实体大小

- 缓存
- cookie 优化
- 文件压缩
- 减少请求的次数

- 文件适当的合并
- 雪碧图
- 异步加载

- 预加载、延后加载、按需加载

- 渲染阶段

- js 放底部，css 放顶部
- 减少重绘和回流
- 合理使用 Viewport 等 meta 头部
- 减少 dom 节点
- BigPipe
- 脚本执行阶段

- 缓存节点，尽量减少节点的查找
- 减少节点的操作（innerHTML）
- 避免无谓的循环，break、continue、return 的适当使用
- 事件委托


#### 大前端时代监控
- 大前端时代前端监控的新变化

- 大前端时代有哪些变化

- 首先是 Gmail 的横空出世，开启了 SPA 的时代
- Backbone/Angular 等框架带来了 MVVM 模式的同时，也把 JS 从脚本语言提升到了工程语言
- React Native/Weex 把移动端开发从 Hybrid 模式进化到了跨端开发模式
- Node.js 问世为前端带来了更多的可能性
- 前端变化给监控带来了什么样的改变

- 传统监控模式能否适用于新的技术？比如 PV 统计
- SPA 模式下首屏如何计算？
- 跨端开发给监控带来什么什么挑战？
- 前端监控的上报模式在 Node.js 端是否合理？
- SPA 模式下的 PV 统计问题

- 技术升级、体验升级、PV 下降？

- 原因

- 页内路由代替了新的页面
- 解决办法

- hash 路由：监听 hash change 变化上报 PV
- 非哈希路由：轻量 hack pushState 和 replaceState
- 首屏统计

- 第一阶段：自定义打点时期

- 页头和首屏 dom 分别通过 new Date()打点
- 计算差值作为首屏时间
- 再加上 setTimeout(new Date(), 0)标记首屏可交互时间
- 第二阶段：W3C 标准时期

- W3C 性能小组引入了 Navigation Timing API 帮我们自动,精准的实现了性能测试的打点问题

- Navigation Timing API

- 卸载上一个页面
- 重定向
- 应用缓存
- DNS 域名解析
- TCP 链接
- 请求页面
- 响应
- 页面处理
- 触发 load 事件
- 第三阶段：SPA 盛行导致 W3C 标准失去原来的意义

- 现阶段：用户感官指标 FMP

- first meaning paint
- 主要内容可见时间
- 前端监控的最佳实践

- 主动监控

- 配置告警规则
- 通过错误聚类模块，精准定位问题
- 增加性能样本分布统计
- 再手起刀落，修复 bug
- 慢会话追踪

- 搜索报错明细

- 出错行为还原

- 58 北斗监控实现
