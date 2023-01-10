(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{416:function(t,s,e){"use strict";e.r(s);var a=e(3),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"为什么需要博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要博客"}},[t._v("#")]),t._v(" 为什么需要博客")]),t._v(" "),s("p",[t._v("在平台上写文章，就好像在别人家的地盘上耕种，总有一种受各种约束的感觉，于是我还是决定自己搞个博客。需求就是简洁、优雅、能评论、能检索、有标签。")]),t._v(" "),s("p",[t._v("如果你心动了，想建一个属于自己的静态博客，那么请跟着我继续向下看吧，非常简单易上手。")]),t._v(" "),s("h2",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),s("p",[t._v("1、你需要会使用 Git 和 GitHub 的基本功能，比如拉取，提交，推送，创建分支，如果不会，请去这个"),s("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站"),s("OutboundLink")],1),t._v("学习。")]),t._v(" "),s("p",[t._v("2、你的电脑已经安装 Node.js，还没有安装的，请去"),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("安装。")]),t._v(" "),s("h2",{attrs:{id:"直接使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接使用"}},[t._v("#")]),t._v(" 直接使用")]),t._v(" "),s("p",[t._v("主题 vuepress-theme-reco 也提供了快速生成博客的模版，但是没有配置评论、阅读量、SEO 等设置，我这里直接全部配置好，你直接从我的仓库 fork，然后 clone 代码到本地，替换一些配置文件的文本内容，还有自己的一些图片，就可以快速生成属于自己的静态博客。")]),t._v(" "),s("p",[t._v("基于这个仓库进行 "),s("a",{attrs:{href:"https://github.com/somenzz/blog-template.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/somenzz/blog-template.git"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("以下是操作步骤，非常简单。")]),t._v(" "),s("ol",[s("li",[t._v("克隆仓库到本地。")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/somenzz/blog-template.git\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("运行看效果，修改成自己满意的配置。")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog-template\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("配置文件位于为 "),s("code",[t._v("docs/.vuepress")]),t._v("，请逐行检查，把博客名称，描述，图片位置，颜色配置等，改成自己满意的的即可。")]),t._v(" "),s("p",[t._v("评论取的 appId、appKey 见 "),s("code",[t._v("docs/.vuepress/config/theme/index.js")]),t._v(" 文件，请先去 "),s("a",{attrs:{href:"https://valine.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("valine"),s("OutboundLink")],1),t._v("，申请自己的 appId 及 appKey。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("写博客。")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog-template\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" docs/blog/2021/blog.md\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#生成静态文件，一般在 public 目录下，该目录可以部署到服务器，使用 nginx 驱动")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("提交到自己的 xxx.github.io 仓库。")])]),t._v(" "),s("p",[t._v("先在 github 上创建一个 xxx.github.io 仓库")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog-template/public\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add article"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--force")]),t._v(" https://github.com/xxx/xxx.github.io.git master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以强制提交，这个仓库仅保留静态文件")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("push 之后去 xxx.github.io 仓库的设置页面，设置 githup pages 指定 master 分支的 root 路径即可。")]),t._v(" "),s("p",[t._v("看到一些人会使用同一个仓库设置两个分支，比如说 master 用于些博客，gh-pages 用于保存静态资源。")]),t._v(" "),s("p",[t._v("我反对这种做法，因为这违背了 github 分支的用途，一般 master 分支不够用的时候，我们创建 develop 分支，用于开发时，修改任何代码不会影响 master 分支，开发、测试完成，形成稳定版本，再将 develop 分支合并到 master 分支，其实 master 和 develop 就是同一个仓库的两个指针，指向不同的时间点，所谓的合并就是将 master 的指针指向 develop 的位置。")]),t._v(" "),s("p",[t._v("而本应用中 master 存放些博客的脚手架，如 md 文件，VuePress 等配置信息，gh-pages 只存放静态文件，两个仓库的文件没有任何共同之处，应该使用两个仓库，而不是两个分支。而且就算用，这两个分支也永远没有合并的可能，何况这样做相当麻烦，每次提交到 gh-pages 你都需要先切换到 gh-pages 分支，然后将 master 分支下的 "),s("code",[t._v(".git")]),t._v(" 文件夹先移走，提交完在移动回来。")]),t._v(" "),s("p",[t._v("博客生成的 public 目录，也可以再部署到 gitee pages，或自己的服务器，也可以同时部署。")]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[t._v("访问自己的博客，比如 https://junk1024.github.io")])]),t._v(" "),s("li",[s("p",[t._v("如果需要提交 GitHub 后自动部署，请参考"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/5lDtNppd3foWGHUJ1_RrDg?scene=156&subScene=10008",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions 入门教程：自动化部署静态博客"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("静态博客部署是 0 成本，高效率，无需担心网络安全等问题，值得每一个写作者尝试，省下的精力可以专心写做，此外，你也可以申请一个个性的域名直接指向 xxx.github.io 这个网站，比如我的 https://junk1024.github.io 。")])])}),[],!1,null,null,null);s.default=n.exports}}]);