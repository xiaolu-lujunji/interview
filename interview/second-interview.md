





- [x] 数组拍平（可控层数）
- [x] 实现有并发限制的 Promise 请求
- [x] 什么情况下会用自定义 Hook
- [x] 自定义 Hook 需要注意的地方
- [x] `useCallback()` vs `useMemo()`
- [ ] React diff 算法
- [ ] Hook 为什么不能在分支语句中使用
- [x] [46. 全排列](https://leetcode.cn/problems/permutations/)
- [ ] `useLayoutEffect()` 和 `useEffect()` 区别
- [x] 实现 `el()`
- [ ] `async` 和 `await` 怎么实现
- [x] [572. 另一棵树的子树](https://leetcode.cn/problems/subtree-of-another-tree/)
- [x] 实现 `Promise.allSettled`'
- [ ] [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)
- [ ] React 事件机制



- [ ] `vue-router` 具体实现

  - [ ] hash 怎么实现
  - [ ] history 怎么实现
  - [ ] 两者实现有什么不一样

- [ ] vite 和 webpack 有什么不一样

- [ ] CommonJS 和 ES modules 有什么区别

- [ ] tree shaking 具体实现

- [ ] ES6 有什么新增的东西

- [ ] 实现 `getElementById(rootNode, id)`

- [ ] OSI 七层模型讲一下

- [ ] 常见的一些协议，协议在哪一层

- [ ] 讲讲 typescript

- [ ] typescript 类型断言的优点与缺点，应用场景

- [ ] flex 布局讲一下

- [ ] js 数组方法

- [ ] 讲一下 reduce

- [ ] flex 实现两栏瀑布流布局

- [ ] 发布订阅模式

- [ ] 找到二叉树每一层的最大值

- [ ] websocket 和 http 的区别

- [ ] 除了websocket，还有其他类似的方法实现这样的双向通讯吗？

- [ ] **那我现在有一个场景，比如这样的资讯列表，我需要反馈一个不感兴趣的列表，要做一个删除，但是我现在网络很不好，等待响应需要很久，我们前端可以做什么让用户体验感更好？**

- [ ] **vue2的路由有hash、history模式，说说他们的实现**

  - [ ] **为什么hash模式没有history那个缺点呢（不配置会404）？**
  - [ ] **那history模式为什么刷新页面会发请求呢** 

- [ ] 将给定数字序列重新排列成字典序中下一个更大的排列。 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。 必须 原地 修改，只允许使用额外常数空间。 例如 1 2 4 3 ->1 3 2 4 就是取一个排列（1234组成的数）中比给出的更大的数

- [ ] **css布局的题目**： div>(input + button) 实现一个搜索框，使得input的宽度自适应、按钮宽度固定 讲了一个flex实现，面试官问我会不会其他的实现方式，比如calc（不会），让我用float，我也不会 我说我会用js去实现：获取div宽度，减去botton的宽度，设置为input输入框的宽度 那如果我要**缩放页面的话怎么办？** 监听resize事件，每一次缩放重新设置 **会有什么问题吗？** 可能会一直缩放，一直触发这个事件，消耗比较大，可以加一个节流 **说说节流** balabala **手写一个节流吧**

- [ ] React中代码复用的场景（能不能从更抽象的角度来概括这些使用场景

- [ ] 图片上传怎么读到图片

- [ ] form-data是什么格式的数据

- [ ] 图片特别大时上传需要做什么处理

- [ ] 浏览器有方法知道怎么从文件系统里面上传任意一个文件吗

- [ ] 黑客通过构建恶意网页，用户打开，恶意网页有办法获取到客户本地的任意文件吗

- [ ] sort排序数字，为什么要两者相减

- [ ] 为什么图片不存数据库，存磁盘（对象存储技术，磁盘与其它的技术相配合

- [ ] Browser 输入 URL 的过程

- [ ] 

- [ ] jwt的流程

- [ ] session id和cookie的鉴权方式

- [ ] cookie为什么不安全，讲下csrf

  既然cookie既然不安全，那为什么很多企业用这种登录方式而不用sessionStorage加token的方式？

- [ ] 既然说了session id的方式对于分布式系统认证的问题有缺陷，那你能说说对于分布式系统的解决方案吗？

- [ ] <body>

    xxx

      <script>

  ​    window.onload = function () {

  ​      document.body.innerHTML = 'yyy';

  ​      alert(document.body.innerHTML);

  ​      console.log(document.body.innerHTML)

  ​    }

    </script>

  </body>

  问现在页面显示什么？alert显示什么？console.log()打印什么

- [ ] 用js实现一个input双向绑定（oninput事件结合defineproproty即可）

- [ ] 实现一个样式，代码越少越好（一个正方形有三个点，第一个在最左上，第二个的居中，第三个在右下）

  考察flex布局的align-self属性和align-items属性

- [ ] 重绘回流

- [ ] cdn原理

- [ ] 跨域的解决，假如说客户端有a.com和b.com，服务端是c.com，那么Access-Control-Allow-Origin怎么配？

- [ ] 场景题 如何找到一个文件的所有依赖

- [ ] 单页面路由是如何实现不刷新更新页面的

- [ ] history路由的原理

- [ ] useReducer useContext与redux

- [ ] 写一个Auth 权限组件

- [ ] 写一个React的render组件

- [ ] 实现一个迭代器拍平，找到列表中的所有Int类型的数字A

- [ ] useCallback后的函数 组件会重新分配地址吗？

- [ ] useImperativeHandle？

- [ ] react跨层级通信的方式？

- [ ] useContext provider原理？

- [ ] Hooks内部结构？

- [ ] hooks是怎么知道他是哪个组件的？

- [ ] HTTP2.0？

- [ ] HTTP3.0？为什么基于UDP？

- [ ] 进程线程区别？

- [ ] 设计模式了解哪些？

- [ ] MVVM理解

- [ ] 前后端用户认证怎么做的

- [ ] localStorage里面的token怎么跨域传递

- [ ] cookie里面的数据怎么跨域传递

- [ ] cookie和token的区别

- [ ] 什么时候用cookie，什么时候用token

- [ ] CSRF攻击的流程，怎么避免

- [ ] 什么是跨域，怎么解决

- [ ] 算法题：从嵌套的数组对象里面得到一个属性所有值的和

- [ ] 访问一个资源的详细过程

- [ ] 浏览器有哪些进程

- [ ] 当解析到 `<script>`标签会发生什么

- [ ] class为什么要调用super

- [ ] React事件机制

- [ ] React合成事件

- [ ] constructor执行过程发生了什么

- [ ] setImediate` vs `setTimeout

- [ ] 模糊搜索框搜索

  - 避免后一个搜索比前一个结果先返回导致模糊搜索匹配错误

- [ ] 防抖节流区别

- [ ] 并发请求

- [ ] 三列布局

  - flex详细说
  - basis计算

- [ ] 箭头函数与普通函数的区别

- [ ] 普通函数各种情况下的this指向问题

- [ ] 手撕1：扁平化数组

- [ ] 手撕2：嵌套数组最大深度

- [ ] useCallback && useMemo （回答得极差

- [ ]   对px的理解？和屏幕分辨率的关系？ 

- [ ]  html如何解析成为dom树？ 

- [ ]   html代码如何传到浏览器端的？建立连接的过程？ 

- [ ]  OSI七层模型？ 

- [ ]   对cdn的了解？怎么获取最近的服务器？ 

- [ ]  对SPA的了解？ 

- [ ] 下面这段代码的运行结果： 

  ```
  Object.prototype.a = 'object'; 
  Function.prototype.a='function'; 
  function Person(){}; 
  var child = new Person();
  console.log(Person.a);
  console.log(child.a);
  ```

- [ ] 设计实现element.js模块（对虚拟DOM的理解和简单实现） 

  ```
  const el = require('./element.js')；
  const ul = el('ul', {id: 'list'}, [
      el('li', {class: 'item'}, ['Item 1']),
      el('li', {class: 'item'}, ['Item 2']),
      el('li', {class: 'item'}, ['Item 3'])
  ])；
  
  const ulRoot = ul.render();
  document.body.appendChild(ulRoot);
  
  dom输出：
  <ul id='list'>
      <li class='item'>Item 1</li>
      <li class='item'>Item 2</li>
      <li class='item'>Item 3</li>
  </ul>
  ```

- [ ] 手撕题：防抖

- 手撕题：数组拍平（用两种方式）

- 手撕题：两个有序数组合并

- webpack原理

- Vue3 和 Vue2 区别；

- https 的连接过程；

- sdp 协议的内容字段知道哪些；

- 对于双向 NAT 穿透失败的解决方案是什么；

- 看输出，一个关于作用域链的，一个关于闭包的；

- 介绍前端常用设计模式，实现一个观察者模式；

- http2.0 和 http1.1 的差别，了解 http3.0吗，了解 webtransport 吗；

- 强缓存和协商缓存的差别；

- 手写题：深拷贝 JSON；

- 介绍下 webRTC 的信令服务器；

- 除了 webRTC，还有处理过音视频的经验吗；

- webRTC 都支持哪些音视频格式；

-  拖拽怎么实现    

  ​        

  ​    html加载，js与css    

  ​    页面加载显示时没有样式要怎么处理    

  ​    get、post区别    

  ​    vue2与vue3区别    

  ​    生命周期的区别    

  ​    hooks    

  ​    vuex怎么实现    

  ​    vuex保存在哪里    

  ​    cookie sessionstorage localstorage    

  ​    cookie关闭会消失吗    

  ​    git分支    

  ​    loder与plugin区别    

  ​    宏任务有哪些    

  ​    代码，输出题：    

  ​    this指向    

  ​    异步输出    

  ​    数组扁平    

  实现一个闭包

  项目难点

  webpack和vite的区别

  vite的优化

  手写：事件总线，实现on,once,off,trigger

  动态规划解决了什么问题

  手写：带有并发限制的promise请求

  > class Scheduler {
  > addTask(promiseFn) {
  > // ...
  > }
  > }
  >
  > let wait = (time) => new Promise((resolve, reject) => {
  > setTimeout(() => resolve(), time);
  > })
  >
  > let scheduler = new Scheduler();
  >
  > let addTask = (time, value) => {
  > scheduler.addTask(() => wait(time)).then(() => console.log(value));
  > }
  > // 面试结束后屏幕被关了，这里应该有几个类似的调用
  > addTask(500, '123456');

  手写：

  ​    给定一系列的api，测量上传速度（实现的时候用的GET请求）并选择一个加载时间最短的api。    

  > let apis = [
  > 'registry.npmjs.com',
  > '....',
  > ]

  http和https的差异
  xss和csrf是什么？怎么防御xss和csrf
  ![img](https://uploadfiles.nowcoder.com/images/20220819/97145458_1660914308601/6A259EF13C0C0AF0195DB34B64CD2B34)

  代码题：原生js实现继承
  对设计模式有什么理解，我就说了我会单例和那个发布订阅模式

  然后就问我单例模式和发布订阅模式

  反问

  1. 说一下你最近看的前端文章；

  2. 如何学习前端的；

  3. 为什么学习前端；

  4. 为什么编写组件库；

  5. websocket 连接时发生了什么；

  6. weakSet weakMap 应用场景和使用注意事项；

  7. 进程和线程有什么区别；

  8. 线程间如何通信，什么是锁；

  9. udp 和 tcp 有什么区别，各自应用场景；

  10. 闭包的使用场景及注意事项；

  11. 什么是堆内存和栈内存；

  12. 什么是段页式内存管理；

  13. 你有什么优点，你有什么缺点；

  14. 说说你压力最大的时候；

  15. 手写题：求和函数 sum(1, 2)(3, 4)(5).sumOf()。

  16. 最后手写：节流，防抖，eventsBus类
      （$on, $once,$off,$trigger)，

      Echarts在vue上怎么用，
      echarts在移动端有什么缺点，
      echarts优缺点，
      webpack vite的区别，
      call bind apply区别，

      为什么学前端，
      前端规划。

  17. \1. 自我介绍
      \2. 实习期间的成长（软实力、技术层面）
      \3. Vue2升级到vue3的优势、响应式原理(Object.defineProperty, Proxy)
      \4. Js升级到ts的优势（类型定义
      Flow也可以做类型检查，和ts有什么区别（不了解flow
      d.ts后缀的文件有什么作用，构建的时候会打包进去吗？（不会，只做类型标识
      \5. 介绍自己参与度最高的一个项目（技术选型，技术难点及解决
      项目相关：使用jszip进行打包，在浏览器进行还是服务端进行？哪个比较好
      延伸：
      怎么部署？云服务器+express
      怎么访问网站？IP地址、域名、MAC地址的区别？
      为什么DNS解析是返回IP地址而不是直接返回MAC地址（没答好
      \6. 代码题：实现一个Task类，实现链式调用，log打印，wait等待n秒后执行
      Const task = new Task();
      Task.log(1)
      .log(2)
      .wait(3)
      .log(4)
      .wait(2)
      .log(6)
      //todo
      Class Task {}

  1、自我介绍

  2、项目经历（挖的挺深的，将近30min，因为我的项目完全是自己做的所以说的也很多）

  3、代码题：编写一个template函数，实现模板字符串的功能（template("string ${abc} string",{abc:123})=>"string 123 string"）

  ```js
  const template = (str, obj) => {
    for (const key of Reflect.ownKeys(obj)) {
      const regStr = `\\$\\{${key}\\}`;
      const reg = new RegExp(regStr, "g");
      str = str.replace(reg, obj[key]);
    }
    return str;
  };
  ```

  4、代码题：编写一个plus函数，实现plus()=>0 plus(1)(2)()=>3 plus(6)(6)(6)()=>18

  ```js
  function plus() {
    let num = arguments;
    if (num.length === 0) return 0;
    if (num.length === 1) {
      return function (sec) {
        if (sec !== undefined) return plus(num[0] + sec);
        else return num[0];
      };
    }
  }
  ```

  5、多选题：typeof题，typeof +"x"===string typeof Symbol("test")===symbol

  6、多选题：""+1+2+3==="123" 1+2+3+""==="123" ""+(!0)+(1<<1)+(1<<1|1)==="123"

  7、反问

  1. 事件委托

  2. React原生和合成事件

  3. websocket

  4. 实现a、b、c函数（里面有计时器）按顺序执行（用es5以前的JS和Promise方式）

  5. 看到我简历有jest，就问怎样写单测，不用jest：不会

  6. 为了继续考单测：实现发红包，参数（塞进红包的金额，多少个红包），返回红包数组

  7. 为什么做这个项目以及是否上线

  8. 为什么选择vue、express框架

  9. 了解过其他的数据库吗？mongodb和MySQL的区别（又问一遍）

  10. 有了解过除csrf外的安全问题吗？

  11. 怎么实现token的？

  12. 怎么实现登录的，是登录之后就不需要再次登录了还是其他的方式？

  13. token存储在哪？有哪些存储方式？区别是什么

  14. 怎么设置会让cookie自动添加到请求头

  15. 跨域

  16. nodejs了解多少？跟其他的后端语言相比有什么优点、缺点

  17. 解释型和编译型语言区别，C语言编译后的结果是什么

  18. 以你的理解，项目上线会经历哪些步骤

  19. 输入端口号之后怎么判断对应的ip地址

  20. 怎么判断线程是否启动

  21. 线程同步机制

  22. 信号量同步

  23. 读写锁（这个没答出来，真的忘了。。。）

  24. 1OSI七层协议

  25. 路由器、网桥、交换机工作在哪一层，具体干什么（答的特别不好）

  26. 基于TCP和UDP的协议和场景

  27. 引用数据类型和基本数据类型存储的不同

  28. 堆和栈的特点

  29. 堆删除元素的过程、时间复杂度

  30. 怎么自学前端的、开始时间

  31. 是否读过JS相关书籍

  32. 继承有哪几种方式、最好的继承方式是什么，为什么

  33. extends继承中方法和属性应该定义在哪

  34. 什么场景使用闭包

  35. 闭包中怎么解决回收

  36. 算法题：数组最短路径的改编（dp）

  37. webpack生产环境和开发环境区别

      2、如何实现用webpack搭建vue的环境

      3、css动画，如何实现一个div从视口左侧到右侧，以及落定状态控制

      4、知道video和audio不，说说看

      5、设置一个元素隐藏的方式，能说多少说多少

      6、如何实现上传图片预览功能

      7、文件上传与下载的过程说说看

      8、说说客户端存储，session，localstorage、cookie区别

      9、indexDB知道多少（自己给自己挖的坑.....只是之前练过一次，后面没用过就忘了）

      10、想要通过localstorage实现存储对象形式数据，你怎么实现

      11、说一说token吧

      12、token只能放在header中吗？

        当时我说应该也可以存body，但是我也是推测，去查了也没查到准确的，希望有知道了解的同学可以留言，谢谢。

      13、如何获取和设置cookie、localstorage。

      14、js函数嵌套，返回函数，存在闭包的问题。也是看代码说输出

      ​    这个题是刚上来问的，自己脑子还没缓过来，只说了需要关注的闭包的问题，大致说了下答案，不知道对错。

      15、自己写一个函数，在其他Vue的组件中调用时，会在该页显示一个消息提示框，3s后消失，消息内容调用时传入。

        自己只给模板结构写出来了，没有封装过组件，自己不知道通过函数怎么暴露....面试官给了提示，自己跟着提示继续做，但是最后还是不知道怎么挂载到当前页面，抓紧下来补吧。

      16、算法：输入一个数组，要求输出一个新数组，奇数数字递增排列，偶数递减排列。比如input [5,7,4,3,8,6,11,14 ] output为[3,5,14,7,8,6,11,4]

  38. 2.学前端多久了

      3.简历里有写移动端300ms的延迟问题，问什么会有这个问题？

      4.fastclick如何解决这个问题的呢？

      5.从你的角度理解webpack干嘛的？

      > 这题感觉自己答得好烂...

      6.浏览器加载html的过程？

      7.刚才说的paint 阶段是CPU还是GPU完成的？

      8.构建 CSSOM 树的时候会阻塞 DOM树的构建吗？

      9.如何避免 js 阻止 DOM 树渲染？

      10.静态资源一般采取什么缓存策略？

      11.之前说的fastclick是防抖还是节流？

      12.一般用在防抖的场景还有哪些？

      13.手写防抖和节流

      14.

      ```html
      <div id="father">
          <div id="child">
              123
          </div>
      </div>
      
      document.getElementById('father').addEventListener('click', function(event) {
          console.log('father');
      })
      
      document.getElementById('child').addEventListener('click', function(event) {
          console.log('child');
      })
      ```

      点击'123'的输出

      ```html
      <div id="father">
          <a id="child" href="https://toutiao.com">
              123
          </a>
      </div>
      
      document.getElementById('father').addEventListener('click', function(event) {
          console.log('father');
      })
      
      document.getElementById('child').addEventListener('click', function(event) {
          console.log('child');
      })
      ```

      15.手写Promise.none

      和Promise.all相反，当所有的promise被拒绝之后，none方法执行完成的决议，如果存在一个promise执行完成的决议，none方法则执行拒绝

      16.算法：二叉树遍历

      对于给定的二叉树，判断是否存在一条完整路径（从根节点开始，到叶节点结束的连线），其路径上结点的值之和为 target， 输出布尔值

      17.智力题：100只老虎和1只羊在一个岛上;
      老虎也可以吃草活着，但是更愿意吃羊;
      每次只能有一只老虎吃一只羊，而且这只老虎吃完羊之后，就会变成羊，会被别的老虎吃;
      假设所有的老虎都是理性的，那100只老虎和1只羊在，这只羊会被吃掉么

      > 哈哈哈这题觉得自己好蠢，面试官提示可以从2只老虎，一只羊情况考虑。【然而我感觉还是没法从2只推到100只】之后每次面试官引导一波都会觉得天哪好牛，之后再自己推好像又脑子不够用
      >
      > 总结：一个找规律的题目

      18.反问环节

 自我介绍 

  一面问了很多网络的问题，你觉得自己答得怎么样？ 

  js基础数据类型 

  手写instanceof 

  实现 arr._flat(n), 数组拍平n次 

  react class组件生命周期、如何用hooks模拟 

  斜45度打印二维数组 (https://leetcode-cn.com/problems/diagonal-traverse/ 的不反转简化版) 

 1.https的加密过程
  2.手写vue2数据劫持（递归将所有数据进行劫持）（寄）
  3.算法 最长递增子序列
  4.算法 迷宫：0表示路径（可以走），1表示墙壁（不能走），2表示起点，3表示终点 求从2走到3的最短的步数（寄）
  5.封装一个通用的组合继承的函数（寄）

1.介绍学习经历

2.计组：机器分为64位和32位，这里的位具体指什么，有什么区别？操作系统这样划分呢？

3.JS的数组有什么特点（类型不一致，可插入等等...），如果用C语言的结构体怎么实现

4.学过哪些数据结构，如果要结合这些数据结构来实现JS数组呢？

5.场景题：表格中点击单元格alert内容(事件委托相关）

6.拓展1：如果你是攻击者不想看到alert你会怎么在浏览器的控制台改写？(获取全局对象，重写回调函数)

拓展2还有没有其他方法？（移除事件监听器，直接消除DOM节点....反问环节面试官建议我再去了解这方面知识）

继续拓展3：如果你使用Vue的话，如何实现事件委托？

7.项目登录流程是怎样的？token和session除了核心区别（解析时间换空间）以外，在不同场景下有哪些能力差异？

8.算法题：股票买卖时机I和股票买卖时机II

大概之前是看了些假面经.......

\2. http和https之间的区别

\3. https加密过程是对称加密还是非对称加密

\4. https加密的具体过程

\5. CA证书的作用

\6. 原生框架和Vue框架有什么不同？Vue给你带来了一些什么？【感觉自己说得不是很完善】，面试官说我讲的大多都是从使用角度来看Vue的观点

\7. 从应用方面，比如性能方面，Vue带来了什么？【这里说得不好，有点不知道什么算是从应用方面...救】

\8. 可以用Vue来做多页应用吗？【之前有了解过...但是没有说清楚】

\9. 什么场景下用单页应用会好，什么时候用多页应用会好？【我提到了跟页面的结构有关】

\10. 多个人同时做一个项目，用git的管理规范应该是什么样的【知识盲区，说了需要避免冲突，然后给自己挖坑】

\11. 什么情况下会产生冲突呢？因为一直做的都是一个项目，怎么知道自己和别人是不是在同时操作一个文件【我一定好好学...........】

\12. 合并代码的时候用什么指令进行合并【git merge】

\13. git merge 和 git rebase的区别

\14. 平时以什么方式学习前端？

\15. 有没有看一些前端相关的书【平时看书还是少了，要沉下心来看一点书，主要看了阮一峰的ES6，然后又挖坑了我...痛并快乐着】

\16. 看阮一峰的ES6有没有看到一些平时没有关注过的内容【这个当时不知道该怎么回答，复盘的时候认为可能要说一些比较特别的知识点，叹气】

\17. 书看完了吗【我的眼泪不值钱，还没有看完.........qeq】

\18. 最近看到哪一部分【我的眼泪..................说了看到promise.....然后说自己后期看得时候都是跳着看当作工具书看，面试官建议我还是一口气读完比较好...好的qeq我这就啃】

\19. promise解决了什么问题【回调地狱】

\20. 说说promise中常见的api，比如说promise.all和promise.race【race我忘记了我的苍天啊，我的大脑一片空白，只说了promise.all】

\21. 手写promise.all

\22. 怎么根据自己写的promise.all将它修改成promise.race【我感觉我写错了，好好学一下】

\23. promise除了resolve，reject还有什么其他状态？

\24. promise的状态转换是什么样的？

\25. promise可以取消吗【不可以哦】

\26. 平时做项目的时候发请求是用什么做得？【axios】

\27. axios可以取消吗【知识盲区】

\28. 为什么JavaScript中有事件循环这个机制？

\29. setTimeout和promise在事件循环中是同一种类型吗【No，宏任务和微任务】

\30. 宏任务和微任务之间有优先级关系吗？

\31. 看事件循环的题目，还涉及到了事件捕获和冒泡，我真的会谢，说得不好，因为我给target和currenttarget狠狠搞混了，明明上午还在看qeq【运行的时候发现自己说错了，想哭，天啊，真的不应该，害，是我太笨】

\32. vue的nexttick的作用

\33. vue的nexttick是微任务队列还是宏任务队列

\34. vue的nexttick底层是用什么实现的微任务队列

\35. 不同组件进行通信有什么方式【props，自定义事件emit，全局事件总线，vuex】

\36. 祖孙之间怎么通信的【这个我给忘了，想哭】

\37. eventBus是什么东西可以描述一下吗？

\38. 有没有听说过一个模式叫做发布订阅

\39. 手写发布订阅模式【我真的会谢，一紧张emit和on写反了】

\40. 做一道算法题吧，有点像是深层次遍历dom树找到其中对应的那个元素，然后要把路径打印出来，因为我路径实在是不知道怎么打印，后来面试官说只要打印找到的这个元素就行了【我感觉还是写错了，害】

【复盘一下怎么问了这么多题qeq】

【感觉自己算法方面还是太薄弱了，还有一些知识点知道的比较模糊，害，真的好可惜】

srds还是许愿一下三面吧

1.  js的数据类型，他们在内存中的存储是怎样的？为什么？          
2.  js垃圾回收          
3.  url由哪些部分组成？          
4.  cookie的空间大小？怎么验证呢？cookie有哪些字段          
5.  es出到几了？es6有哪些新内容？          

 做题：  

1.  数组拍平。我怀疑面试官看了面评说我不会解构，然后他把数组拍平用[...arr1,...arr2]，让我用es5来实现这个功能，我理解错了意思，以为是传进来一个字符串，碰到扩展符就对后面的数组进行拍平，他说你这是在思考babel的功能啦，我的意思的balabalabala……恍然大悟！就是数组拍平我会！          
2.  看代码的题，有关this。          
3.  计算中缀表达式的值。面试没准备这个，然后在跑代码之前写完之后还是上上下下改了会的，面试官看我一直在改，让我再看下，一次性改完。然后我觉得ok了，就跑了下，没问题。但是代码有点冗余，跟面试官讨论了会，某个地方的代码为什么这样写？可不可以不写之类的。          

  (后来上网看发现网上一般没有直接去对中缀求值，是先化成后缀再求的，后缀很简单)  

代码输出顺序题目（常见的setTimeout、Promise.then、asnyc函数想必大家都很熟悉了，我栽在requestAnimationFrame和requestIdleCallback上，直接说没怎么了解过）

compose函数，就是将多个嵌套函数作为参数传入compose函数中，最终得出的结果和嵌套函数一样。（也是常见题目，但是没自己去写过，面试的时候在面试官的引导下写出来了，一般有同步和异步任务两种情况）

node与浏览器的事件循环机制的区别（node的事件循环机制没有去了解过）

1. 为什么想学前端

2. 你觉得做的比较好的项目是哪个

3. 项目有哪些功能

4. 开发过程中有哪些困难

5. 保存登录状态怎么做的

6. 登录失效时间有没有设置

7. 讲一下JWT机制

8. 服务器解析Token失败怎么处理

9. 如果遇到登录成功之后，token失效怎么处理

10. mongoDb与mysql的区别

11. 第一个项目几个人开发的？怎么合作的？分支怎么管理的

12. 提交的时候有冲突吗？怎么解决

13. 有没有做保证代码质量的事情（比如代码样式）

14. 有没有了解代码风格相关的呢？

15. 浏览器原理

16. IP地址怎么转化

17. 常见的协议有哪些

18. TCP和UDP的区别

19. 浏览器渲染的过程是什么

20. 在其中Js引擎做了些什么

21. 编码题（两个字符串大数之和）编码题没写出来，思路对了，但是一些细节没考虑到，耗了好久

22. 网页中想实现更小的字体

23. css中跟动画相关的属性有哪些

24.   上来直接让我讲一下项目碰到的难点   

25. ​    transform:translate(100px,100px) rotate(45deg)和transform:rotate(45deg) translate(100px,100px)的区别   

26. ```
    // 说一下会呈现的效果 .second{  transform:translateY(100px) }  <div>         
    <div>111</div>         <div class="second">222</div>         
    <div>333</div> </div>
    ```

1. ​    文档流有了解吗   

2. ​    css的href属性和script的src属性的区别   

3. ​    函数创建和执行的过程   

4. ​    作用域链的应用(不知道)，接着问可以把闭包和作用域结合起来说一下吗   

5. ​    闭包的应用   

6. ​    一帧的时间内做了什么，一帧在空闲的时候可以做什么，一帧大概多少时间   

7. ​    浏览器进程线程   

8. ​    进程和线程的关系和区别   

9. ​    对前端工程化的理解   

10. ​    前端性能优化   

37. ​    webpack-dev-server是怎么实现的   

协商缓存的理解、协商缓存的字段

for in / for of/object.key的区别

webpack了解吗？