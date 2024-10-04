(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{487:function(s,r,t){"use strict";t.r(r);var e=t(2),a=Object(e.a)({},(function(){var s=this,r=s._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("hr"),s._v(" "),r("p",[s._v("Redis 的事务的本质是一组命令的批处理。这组命令在执行过程中会被顺序地、一次性全部执行完毕，只要没有出现语法错误，这组命令在执行期间是不会被中断。")]),s._v(" "),r("h1",{attrs:{id:"一、redis事务特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、redis事务特性"}},[s._v("#")]),s._v(" 一、Redis事务特性")]),s._v(" "),r("p",[s._v("Redis 的事务仅保证了数据的一致性，不具有像 DBMS 一样的 ACID 特性。"),r("br"),s._v("●  这组命令中的某些命令的执行失败不会影响其它命令的执行，不会引发回滚。即不具备原子性。"),r("br"),s._v("●  这组命令通过乐观锁机制实现了简单的隔离性。没有复杂的隔离级别。"),r("br"),s._v("●  这组命令的执行结果是被写入到内存的，是否持久取决于 Redis 的持久化策略，与事务无关。")]),s._v(" "),r("h1",{attrs:{id:"二、redis事务实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、redis事务实现"}},[s._v("#")]),s._v(" 二、Redis事务实现")]),s._v(" "),r("h2",{attrs:{id:"_1、三个命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、三个命令"}},[s._v("#")]),s._v(" 1、三个命令")]),s._v(" "),r("p",[s._v("Redis 事务通过三个命令进行控制。"),r("br"),s._v("●  muti：开启事务"),r("br"),s._v("●  exec：执行事务"),r("br"),s._v("●  discard：取消事务")]),s._v(" "),r("h2",{attrs:{id:"_2、基本使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、基本使用"}},[s._v("#")]),s._v(" 2、基本使用")]),s._v(" "),r("p",[s._v("下面是定义并执行事务的用法："),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-87.png",alt:"image.png"}}),r("br"),s._v("事务执行后，再访问事务中定义的变量，其值是修改过后。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-88.png",alt:"image.png"}}),r("br"),s._v("下面是定义但取消事务的举例："),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-89.png",alt:"image.png"}}),r("br"),s._v("事务取消后，事务中的命令是没有执行的。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-90.png",alt:"image.png"}})]),s._v(" "),r("h1",{attrs:{id:"三、redis事务异常处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、redis事务异常处理"}},[s._v("#")]),s._v(" 三、Redis事务异常处理")]),s._v(" "),r("h2",{attrs:{id:"_1、语法错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、语法错误"}},[s._v("#")]),s._v(" 1、语法错误")]),s._v(" "),r("p",[s._v("当事务中的命令出现语法错误时，整个事务在 exec 执行时会被取消。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-91.png",alt:"image.png"}}),r("br"),s._v("exec 的提示是exec 被忽略，事务被取消，因为之前的错误。"),r("br"),s._v("此时访问 age 的值，发现其仍为 19，并没有变为事务中设置的 20。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-92.png",alt:"image.png"}})]),s._v(" "),r("h2",{attrs:{id:"_2、执行异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、执行异常"}},[s._v("#")]),s._v(" 2、执行异常")]),s._v(" "),r("p",[s._v("如果事务中的命令没有语法错误，但在执行过程中出现异常，该异常不会影响其它命令的执行。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-93.png",alt:"image.png"}}),r("br"),s._v("以上事务中第 2 条命令在执行时出现异常。因为 score 并非是整型，无法被增加 20 的操作。但该异常并不会影响其前后命令的正确执行。查看 score 与 name 的值，发现是执行成功的结果。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-94.png",alt:"image.png"}})]),s._v(" "),r("h1",{attrs:{id:"四、redis事务隔离机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、redis事务隔离机制"}},[s._v("#")]),s._v(" 四、Redis事务隔离机制")]),s._v(" "),r("h2",{attrs:{id:"_1、为什么需要隔离机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、为什么需要隔离机制"}},[s._v("#")]),s._v(" 1、为什么需要隔离机制")]),s._v(" "),r("p",[s._v("在并发场景下可能会出现多个客户端对同一个数据进行修改的情况。"),r("br"),s._v("例如：有两个客户端 C 左与 C 右，C 左需要申请 40 个资源，C 右需要申请 30 个资源。它们首先查看了当前拥有的资源数量，即 resources 的值。它们查看到的都是 50，都感觉资源数量可以满足自己的需求，于是修改资源数量，以占有资源。但结果却是资源出现了“超卖”情况。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-95.png",alt:"image.png"}}),r("br"),s._v("为了解决这种情况，Redis 事务通过乐观锁机制实现了多线程下的执行隔离。")]),s._v(" "),r("h2",{attrs:{id:"_2、隔离的实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、隔离的实现"}},[s._v("#")]),s._v(" 2、隔离的实现")]),s._v(" "),r("p",[s._v("Redis 通过"),r("code",[s._v("watch")]),s._v("命令再配合事务实现了多线程下的执行隔离。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-96.png",alt:"image.png"}}),r("br"),s._v("以上两个客户端执行的时间顺序为："),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-97.png",alt:"image.png"}})]),s._v(" "),r("h2",{attrs:{id:"_3、实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、实现原理"}},[s._v("#")]),s._v(" 3、实现原理")]),s._v(" "),r("p",[s._v("其内部执行过程如下："),r("br"),s._v("1)   当某一客户端对key 执行了 watch 后，系统就会为该 key 添加一个version 乐观锁，并初始化 version。例如初值为 1.0。"),r("br"),s._v("2)   此后客户端 C 左将对该 key 的修改语句写入到了事务命令队列中，虽未执行，但其将该 key 的value 值与 version 进行了读取并保存到了当前客户端缓存。此时读取并保存的是 version 的初值 1.0。"),r("br"),s._v("3)   此后客户端 C 右对该 key 的值进行了修改，这个修改不仅修改了 key 的value 本身，同时也增加了 version 的值，例如使其version 变为了 2.0，并将该 version 记录到了该 key信息中。"),r("br"),s._v("4)   此后客户端 C 左执行 exec，开始执行事务中的命令。不过，其在执行到对该 key 进行修改的命令时，该命令首先对当前客户端缓存中保存的 version 值与当前 key 信息中的 version 值。如果缓存version 小于 key 的version，则说明客户端缓存的key 的value 已经过时，该写操作如果执行可能会破坏数据的一致性。所以该写操作不执行。")])])}),[],!1,null,null,null);r.default=a.exports}}]);