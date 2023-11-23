(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{463:function(t,n,a){"use strict";a.r(n);var s=a(2),r=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("hr"),t._v(" "),n("h2",{attrs:{id:"一、nginx概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、nginx概述"}},[t._v("#")]),t._v(" 一、Nginx概述")]),t._v(" "),n("p",[t._v('Nginx ("engine x") 是一个高性能的 HTTP 和反向代理服务器，特点是占有内存少，并发能力强，事实上 nginx 的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用 nginx 网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。')]),t._v(" "),n("h2",{attrs:{id:"二、nginx作为web服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、nginx作为web服务器"}},[t._v("#")]),t._v(" 二、Nginx作为WEB服务器")]),t._v(" "),n("p",[t._v("Nginx 可以作为静态页面的 web 服务器，同时还支持 CGI 协议的动态语言，比如 perl、php 等。但是不支持 java。Java 程序只能通过与 tomcat 配合完成。Nginx 专为性能优化而开发，性能是其最重要的考量，实现上非常注重效率，能经受高负载的考验，有报告表明能支持高达 50,000 个并发连接数。")]),t._v(" "),n("h2",{attrs:{id:"三、正向代理机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、正向代理机制"}},[t._v("#")]),t._v(" 三、正向代理机制")]),t._v(" "),n("p",[t._v("正向代理：如果把局域网外的 Internet 想象成一个巨大的资源库，则局域网中的客户端要访 问 Internet，则需要通过代理服务器来访问，这种代理服务就称为正向代理。"),n("br"),t._v(" "),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/nginx-1.png",alt:"image.png"}})]),t._v(" "),n("h2",{attrs:{id:"四、反向代理机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、反向代理机制"}},[t._v("#")]),t._v(" 四、反向代理机制")]),t._v(" "),n("p",[t._v("反向代理，其实客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，我们只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器地址，隐藏了真实服务器 IP 地址。"),n("br"),t._v(" "),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/nginx-2.png",alt:"image.png"}})]),t._v(" "),n("h2",{attrs:{id:"五、负载均衡机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、负载均衡机制"}},[t._v("#")]),t._v(" 五、负载均衡机制")]),t._v(" "),n("p",[t._v("客户端发送多个请求到服务器，服务器处理请求，有一些可能要与数据库进行交互，服务器处理完毕后，再将结果返回给客户端。"),n("br"),t._v("\n这种架构模式对于早期的系统相对单一，并发请求相对较少的情况下是比较适合的，成本也低。但是随着信息数量的不断增长，访问量和数据量的飞速增长，以及系统业务的复杂度增加，这种架构会造成服务器相应客户端的请求日益缓慢，并发量特别大的时候，还容易造成服务器直接崩溃。很明显这是由于服务器性能的瓶颈造成的问题，那么如何解决这种情况呢？"),n("br"),t._v("\n我们首先想到的可能是升级服务器的配置，比如提高 CPU 执行频率，加大内存等提高机器的物理性能来解决此问题，但是我们知道摩尔定律的日益失效，硬件的性能提升已经不能满足日益提升的需求了。最明显的一个例子，天猫双十一当天，某个热销商品的瞬时访问量是极其庞大的，那么类似上面的系统架构，将机器都增加到现有的顶级物理配置，都是不能够满足需求的。那么怎么办呢？"),n("br"),t._v("\n上面的分析我们去掉了增加服务器物理配置来解决问题的办法，也就是说纵向解决问题的办法行不通了，那么横向增加服务器的数量呢？这时候集群的概念产生了，单个服务器解决不了，我们增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到单个服务器上的情况改为将请求分发到多个服务器上，将负载分发到不同的服务器，也就是我们所说的"),n("strong",[t._v("负载均衡")]),t._v(" "),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/nginx-3.png",alt:"image.png"}})]),t._v(" "),n("h2",{attrs:{id:"六、动静分离机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、动静分离机制"}},[t._v("#")]),t._v(" 六、动静分离机制")]),t._v(" "),n("p",[t._v("动静分离是指在web服务器架构中，将静态页面与动态页面或者静态内容接口和动态内容接口分开不同系统访问的架构设计方法，进而提升整个服务访问性能和可维护性。"),n("br"),t._v("\nnginx 的动静分离，指的是由 nginx 将客户端请求进行分类转发，静态资源请求（如html、css、图片等）由静态资源服务器处理，动态资源请求（如 jsp页面、servlet程序等）由 tomcat 服务器处理，tomcat 本身是用来处理动态资源的，同时 tomcat 也能处理静态资源，但是 tomcat 本身处理静态资源的效率并不高，而且还会带来额外的资源开销。利用 nginx 实现动静分离的架构，能够让 tomcat 专注于处理动态资源，静态资源统一由静态资源服务器处理，从而提升整个服务系统的性能。\n"),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/nginx-4.png",alt:"image.png"}})])])}),[],!1,null,null,null);n.default=r.exports}}]);