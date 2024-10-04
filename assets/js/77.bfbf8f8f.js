(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{488:function(s,t,r){"use strict";r.r(t);var i=r(2),a=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("hr"),s._v(" "),t("h1",{attrs:{id:"一、redis的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、redis的安装"}},[s._v("#")]),s._v(" 一、Redis的安装")]),s._v(" "),t("h2",{attrs:{id:"_1、克隆并配置主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、克隆并配置主机"}},[s._v("#")]),s._v(" 1、克隆并配置主机")]),s._v(" "),t("p",[s._v("●     修改主机名：/etc/hostname"),t("br"),s._v("\n●     修改网络配置：/etc/sysconfig/network-scripts/ifcfg-ens33")]),s._v(" "),t("h2",{attrs:{id:"_2、安装前的准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装前的准备工作"}},[s._v("#")]),s._v(" 2、安装前的准备工作")]),s._v(" "),t("h3",{attrs:{id:"_1-安装gcc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装gcc"}},[s._v("#")]),s._v(" 1.安装gcc")]),s._v(" "),t("p",[s._v("由于 Redis 是由 C/C++语言编写的，而从官网下载的 Redis 安装包是需要编译后才可安装的，所以对其进行编译就必须要使用相关编译器。对于 C/C++语言的编译器，使用最多的是 gcc 与gcc-c++，而这两款编译器在 CentOS7 中是没有安装的，所以首先要安装这两款编译器。"),t("br"),s._v("\nGCC，GNU Compiler Collection，GNU 编译器集合。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-4.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_2-下载redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载redis"}},[s._v("#")]),s._v(" 2.下载Redis")]),s._v(" "),t("p",[s._v("redis 的官网为："),t("a",{attrs:{href:"http://redis.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://redis.io"),t("OutboundLink")],1),s._v("。点击下面的链接可以直接进行下载。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-5.png",alt:"image.png"}}),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-6.png",alt:"image.png"}}),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-7.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_3-上传到linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-上传到linux"}},[s._v("#")]),s._v(" 3.上传到Linux")]),s._v(" "),t("p",[s._v("将下载好的压缩包上传到 Linux 的/opt/tools 目录中。")]),s._v(" "),t("h2",{attrs:{id:"_3、安装redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装redis"}},[s._v("#")]),s._v(" 3、安装Redis")]),s._v(" "),t("h3",{attrs:{id:"_1-解压redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-解压redis"}},[s._v("#")]),s._v(" 1.解压Redis")]),s._v(" "),t("p",[s._v("将 Redis 解压到/opt/apps 目录中。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-8.png",alt:"image.png"}}),t("br"),s._v("\n进入到/opt/apps 目录中再将 Redis 解压包目录更名为 redis（不更名也无所谓）。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-9.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_2-编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译"}},[s._v("#")]),s._v(" 2.编译")]),s._v(" "),t("p",[s._v("编译过程是根据Makefile 文件进行的，而 Redis 解压包中已经存在该文件了。所以可以直接进行编译了。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-10.png",alt:"image.png"}}),t("br"),s._v("\n进入到解压目录中，然后执行编译命令 make。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-11.png",alt:"image.png"}}),t("br"),s._v("\n当看到如下提示时，表示编译成功。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-12.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_3-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装"}},[s._v("#")]),s._v(" 3.安装")]),s._v(" "),t("p",[s._v("在 Linux 中对于编译过的安装包执行 make install 进行安装。\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-13.png",alt:"image.png"}}),t("br"),s._v("\n可以看到，共安装了三个组件：redis 服务器、客户端与一个性能测试工具 benchmark。")]),s._v(" "),t("h3",{attrs:{id:"_3-查看bin目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看bin目录"}},[s._v("#")]),s._v(" 3.查看bin目录")]),s._v(" "),t("p",[s._v("安装完成后，打开/usr/local/bin 目录，可以看到出现了很多的文件。\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-14.png",alt:"image.png"}}),t("br"),s._v("\n通过echo $PATH 可以看到，/usr/local/bin 目录是存在于该系统变量中的，这样这些命令就可以在任意目录中执行了。\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-15.png",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"_4、redis启动与停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、redis启动与停止"}},[s._v("#")]),s._v(" 4、Redis启动与停止")]),s._v(" "),t("h3",{attrs:{id:"_1-前台启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-前台启动"}},[s._v("#")]),s._v(" 1.前台启动")]),s._v(" "),t("p",[s._v("在任意目录执行redis-server 命令即可启动Redis。这种启动方式会占用当前命令行窗口。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-16.png",alt:"image.png"}}),t("br"),s._v("\n再开启一个会话窗口，可以查看到当前的 Redis 进程，默认端口号为 6379。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-17.png",alt:"image.png"}}),t("br"),s._v("\n通过 Ctrl + C 命令可以停止Redis。")]),s._v(" "),t("h3",{attrs:{id:"_2-命令式后台启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令式后台启动"}},[s._v("#")]),s._v(" 2.命令式后台启动")]),s._v(" "),t("p",[s._v("使用 nohub 命令，最后再添加一个&符，可以使要启动的程序在后台以守护进程方式运行。这样的好处是，进程启动后不会占用一个会话窗口，且其还会在当前目录，即运行启动命令的当前目录中创建一个nohup.out 文件用于记录 Redis 的操作日志。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-18.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_3-redis的停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis的停止"}},[s._v("#")]),s._v(" 3.Redis的停止")]),s._v(" "),t("p",[s._v("通过redis-cli shutdown 命令可以停止Redis。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-19.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_4-配置式后台启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置式后台启动"}},[s._v("#")]),s._v(" 4.配置式后台启动")]),s._v(" "),t("p",[s._v("使用 nohup 命令可以使 Redis 后台启动，但每次都要键入 nohup 与&符，比较麻烦。可以通过修改 Linux 中 Redis 的核心配置文件redis.conf 达到后台启动的目的。redis.conf 文件在 Redis 的安装目录根下。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-20.png",alt:"image.png"}}),t("br"),s._v("\n将 daemonize 属性值由 no 改为yes，使 Redis 进程以守护进程方式运行。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-21.png",alt:"image.png"}}),t("br"),s._v("\n修改后再启动 Redis，就无需再键入 nohup 与&符了，但必须要指定启动所使用的 Redis配置文件。这是为什么呢？"),t("br"),s._v("\n使用 nohup redis-server &命令启动 Redis 时，启动项中已经设置好了 Redis 各个参数的默认值，Redis 会按照这些设置的参数进行启动。但这些参数是可以在配置文件中进行修改的，修改后，需要在启动命令中指定要加载的配置文件，这样，配置文件中的参数值将覆盖原默认值。"),t("br"),s._v("\nRedis 已经给我们提供好了配置文件模板，是 Redis 安装目录的根目录下的 redis.conf 文件。由于刚刚对redis.conf 配置文件做了修改，所以在开启 Redis 时需要显示指出要加载的配置文件。配置文件应紧跟在redis-server 的后面。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-22.png",alt:"image.png"}})]),s._v(" "),t("h1",{attrs:{id:"二、连接前的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、连接前的配置"}},[s._v("#")]),s._v(" 二、连接前的配置")]),s._v(" "),t("p",[s._v("Redis 是一个内存数据库服务器，就像 MySQL 一样，对其操作也需要通过客户端进行。若要使远程主机上的客户端能够连接并访问到服务端的 Redis，则服务端首先要做如下配置。")]),s._v(" "),t("h2",{attrs:{id:"_1、绑定客户端ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、绑定客户端ip"}},[s._v("#")]),s._v(" 1、绑定客户端IP")]),s._v(" "),t("p",[s._v("Redis 可以通过修改配置文件来限定可以访问自己的客户端 IP。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-23.png",alt:"image.png"}}),t("br"),s._v("\n以上设置后，只允许当前主机访问当前的Redis，其它主机均不可访问。所以，如果不想限定访问的客户端，只需要将该行注释掉即可。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-24.png",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"_2、关闭保护模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、关闭保护模式"}},[s._v("#")]),s._v(" 2、关闭保护模式")]),s._v(" "),t("p",[s._v("默认保护模式是开启的。其只允许本机的客户端访问，即只允许自己访问自己。但生产中应该关闭，以确保其它客户端可以连接 Redis。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-25.png",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"_2、设置访问密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置访问密码"}},[s._v("#")]),s._v(" 2、设置访问密码")]),s._v(" "),t("p",[s._v("为 Redis 设置访问密码，可以对要读/写 Redis 的用户进行身份验证。没有密码的用户可以登录 Redis，但无法访问。")]),s._v(" "),t("h3",{attrs:{id:"_1-密码设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-密码设置"}},[s._v("#")]),s._v(" 1.密码设置")]),s._v(" "),t("p",[s._v("访问密码的设置位置在redis.conf 配置文件中。默认是被注释掉的，没有密码。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-26.png",alt:"image.png"}}),t("br"),s._v("\n没有通过密码登录的用户，无法读/写 Redis。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-27.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_2-使用密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用密码"}},[s._v("#")]),s._v(" 2.使用密码")]),s._v(" "),t("p",[s._v("对于密码的使用，有两种方式：登录时未使用密码，则访问时先输入密码；登录时直接使用密码登录，访问时无需再输入密码。"),t("br"),s._v(" "),t("code",[s._v("A：登录时未使用密码")]),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-28.png",alt:"image.png"}}),t("br"),s._v(" "),t("code",[s._v("B：登陆时使用密码")]),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-29.png",alt:"image.png"}}),t("br"),s._v(" "),t("code",[s._v("C：退出时使用密码")]),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-30.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_3-注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-注意"}},[s._v("#")]),s._v(" 3.注意")]),s._v(" "),t("p",[s._v("为了方便后面的学习，我们这里就不设置访问密码了，直接将其注释掉即可。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-31.png",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"_3、禁止-重命名命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、禁止-重命名命令"}},[s._v("#")]),s._v(" 3、禁止/重命名命令")]),s._v(" "),t("p",[s._v("后面要学习两个非常危险的命令：flushal 与 flushdb。它们都是用于直接删除整个 Redis数据库的。若让用户可以随便使用它们，可能会危及数据安全。Redis 可以通过修改配置文件来禁止使用这些命令，或重命名这些命令。以下配置，禁用了 flushall 与 flushdb 命令。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-32.png",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"_4、启动redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动redis"}},[s._v("#")]),s._v(" 4、启动Redis")]),s._v(" "),t("p",[s._v("当然，若要使客户端能够连接 Redis，则必须开启服务端的 Redis。"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/redis-33.png",alt:"image.png"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);