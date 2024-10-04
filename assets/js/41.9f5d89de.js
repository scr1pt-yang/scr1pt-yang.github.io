(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{457:function(a,r,t){"use strict";t.r(r);var e=t(2),s=Object(e.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("hr"),a._v(" "),r("p",[a._v("回顾一下上一章节，在运行私有库时，我们使用了-v参数，将Registry仓库的目录从容器内部挂载到外部宿主机，方便联调。这里其实就是使用了容器卷挂载的机制。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-80.png",alt:""}})]),a._v(" "),r("h1",{attrs:{id:"一、容器卷概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、容器卷概念"}},[a._v("#")]),a._v(" 一、容器卷概念")]),a._v(" "),r("p",[a._v("卷就是目录或文件，存在于一个或多个容器中，由docker挂载到容器，但不属于联合文件系统，因此能够绕过Union File System提供一些用于持续存储或共享数据的特性。卷的设计目的就是数据的持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷。"),r("br"),r("strong",[a._v("一句话：有点类似我们Redis里面的rdb和aof文件。")]),r("br"),a._v("将docker容器内的数据保存进宿主机的磁盘中，运行一个带有容器卷存储功能的容器实例。")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /宿主机绝对路径目录:/容器内目录   镜像名\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("h1",{attrs:{id:"二、容器卷作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、容器卷作用"}},[a._v("#")]),a._v(" 二、容器卷作用")]),a._v(" "),r("p",[a._v("将运行的环境打包成镜像，run后形成容器实例运行 ，但是我们对数据的要求希望是持久化的。"),r("br"),a._v("Docker容器产生的数据，如果不备份，那么当容器实例删除后，容器内的数据自然也就没有了。为了能保存数据在docker中我们使用卷。"),r("br"),a._v(" 特点："),r("br"),a._v("（1）数据卷可在容器之间共享或重用数据"),r("br"),a._v("（2）卷中的更改可以直接实时生效"),r("br"),a._v("（3）数据卷中的更改不会包含在镜像的更新中"),r("br"),a._v("（4）数据卷的生命周期一直持续到没有容器使用它为止")]),a._v(" "),r("h1",{attrs:{id:"三、卷挂载问题解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、卷挂载问题解决"}},[a._v("#")]),a._v(" 三、卷挂载问题解决")]),a._v(" "),r("p",[a._v("Docker挂载主机目录访问如果出现cannot open directory : Permission denied问题，需要我们在执行挂载时，后面加一个"),r("code",[a._v("--privileged=true")]),r("br"),a._v("CentOS7安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，在SELinux里面挂载目录被禁止掉了，如果要开启，我们一般使用"),r("code",[a._v("--privileged=true")]),a._v("命令，扩大容器的权限解决挂载目录没有权限的问题，使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。"),r("br"),a._v("那么权限的扩大使用是否会带来安全问题，答案是会的，因为这意味着进程拥有了比普通进程更多的权限。这样做可能会增加系统遭受恶意攻击的风险，因为进程可能会执行危险的操作，或者被黑客用来获取系统权限。关于容器安全的问题，我们后面再进行研究。")]),a._v(" "),r("h1",{attrs:{id:"四、数据卷挂载实操"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、数据卷挂载实操"}},[a._v("#")]),a._v(" 四、数据卷挂载实操")]),a._v(" "),r("h2",{attrs:{id:"_1、映射添加容器卷"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、映射添加容器卷"}},[a._v("#")]),a._v(" 1、映射添加容器卷")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 直接通过一条命令实现")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /宿主机绝对路径目录:/容器内目录 镜像名\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例如下面这条命令")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" myu3 "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /tmp/myHostData:/tmp/myDockerData ubuntu /bin/bash\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("blockquote",[r("p",[a._v('来看一下ChatGPT对上述命令的解析：\n上述命令是在Docker中运行一个名为"myu3"的容器，并为该容器设置了一些参数和选项。让我对每个部分进行解释：')]),a._v(" "),r("ul",[r("li",[r("code",[a._v("docker run")]),a._v(": 这是Docker命令的一部分，用于创建并运行一个新的容器。")]),a._v(" "),r("li",[r("code",[a._v("-it")]),a._v(": 这是两个选项的组合，"),r("code",[a._v("-i")]),a._v("表示交互式运行，"),r("code",[a._v("-t")]),a._v("表示分配一个终端（tty）。这将允许您与容器进行交互，并在终端中执行命令。")]),a._v(" "),r("li",[r("code",[a._v("--name")]),a._v(' myu3: 这是给容器指定一个名称的选项。在这种情况下，容器的名称被设置为"myu3"。')]),a._v(" "),r("li",[r("code",[a._v("--privileged=true")]),a._v(': 这是一个选项，将容器设置为具有特权权限。通过设置为"true"，容器将获得比普通容器更高的权限，可以执行一些特权操作。但请注意，这样的权限可能会带来安全风险。')]),a._v(" "),r("li",[r("code",[a._v("-v /tmp/myHostData:/tmp/myDockerData")]),a._v(": 这是将主机系统上的目录"),r("code",[a._v("/tmp/myHostData")]),a._v("映射到容器内的目录"),r("code",[a._v("/tmp/myDockerData")]),a._v("的选项。这样做可以实现主机和容器之间的文件共享。左侧是主机目录，右侧是容器内的目录。")]),a._v(" "),r("li",[r("code",[a._v("ubuntu")]),a._v(": 这是要在容器中运行的镜像名称。在这种情况下，它是Ubuntu的官方镜像。")]),a._v(" "),r("li",[r("code",[a._v("/bin/bash")]),a._v(": 这是要在容器中运行的命令。在这种情况下，它是启动一个交互式Bash shell。")])])]),a._v(" "),r("p",[a._v('综上所述，该命令将创建并运行一个名为"myu3"的容器，具有特权权限，并且主机的'),r("code",[a._v("/tmp/myHostData")]),a._v("目录将与容器内的"),r("code",[a._v("/tmp/myDockerData")]),a._v("目录进行文件共享。您可以通过交互式Bash shell与容器进行交互并执行命令。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-81.png",alt:""}}),r("br"),a._v("可以使用命令"),r("code",[a._v("docker inspect 容器ID")]),a._v("查看容器数据卷是否挂载成功"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-82.png",alt:""}}),r("br"),a._v("此时容器和宿主机之间实现数据共享，docker中修改，主机同步获得结果，主机中修改，docker同步获得结果，当docker容器stop，主机中修改，再启动docker容器查看数据仍然会同步。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-83.png",alt:""}})]),a._v(" "),r("h2",{attrs:{id:"_2、读写规则映射添加"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、读写规则映射添加"}},[a._v("#")]),a._v(" 2、读写规则映射添加")]),a._v(" "),r("p",[a._v("默认情况下是可读可写的，使用"),r("code",[a._v("docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:rw 镜像名")]),a._v("指定rw（rw = read + write）和不指定时效果是相同的。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-84.png",alt:""}}),r("br"),a._v("当然我们也可以设置为数据卷只读，这样再容器实例内部就会被限制，只能读不能写。")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /宿主机绝对路径目录:/容器内目录:ro 镜像名\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-85.png",alt:""}}),r("br"),r("code",[a._v("/容器目录:ro 镜像名")]),a._v("，就能完成功能，此时容器自己只能读取不能写。ro（ro = read only） 此时如果宿主机写入内容，可以同步给容器内，容器可以读取到。")]),a._v(" "),r("h2",{attrs:{id:"_3、卷的继承和共享"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、卷的继承和共享"}},[a._v("#")]),a._v(" 3、卷的继承和共享")]),a._v(" "),r("p",[a._v("我们使用两个容器来完成这一步操作，首先容器1完成和宿主机的映射。")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /mydocker/u:/tmp "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" u1 ubuntu\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-86.png",alt:""}}),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-87.png",alt:""}}),r("br"),a._v("让容器2继承容器1的卷规则。")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true --volumes-from 父类  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" u2 ubuntu\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("这里的父类是指要继承哪个容器的卷规则，我们上一步将容器1命名为u1，那么这里的父类名就要写u1。"),r("br"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/scr1pt-yang/mypichost@main/img/docker-88.png",alt:""}}),r("br"),a._v("可以看到，u2的/tmp目录下会有刚才u1创建的文件，并且u2也能够在这个卷内写入自己的内容。")])])}),[],!1,null,null,null);r.default=s.exports}}]);