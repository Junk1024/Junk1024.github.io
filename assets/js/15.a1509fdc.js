(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{437:function(t,a,n){"use strict";n.r(a);var s=n(3),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("ol",[a("li",[t._v("基本数据类型：七种 Boolean Number String undefined null Bigint Symbol。Symbol ： ES6 引入的一种新的原始值，表示独一无二的值，主要为了解决属性名冲突问题。 Bigint ：ES2020 新增加，是比 Number 类型的整数范围更大。")]),t._v(" "),a("li",[t._v("引用数据类型：Object 对象(包括普通 Object、Function、Array、Date、RegExp、Math)")])]),t._v(" "),a("h2",{attrs:{id:"判断数据类型的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断数据类型的方法"}},[t._v("#")]),t._v(" 判断数据类型的方法")]),t._v(" "),a("h3",{attrs:{id:"typeof-能够快速区分基本数据类型-不能正确区分-object、array、null-都返回-object。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-能够快速区分基本数据类型-不能正确区分-object、array、null-都返回-object。"}},[t._v("#")]),t._v(" typeof：能够快速区分基本数据类型，不能正确区分 object、array、null，都返回 object。")]),t._v(" "),a("ol",[a("li",[t._v("作用：区分数据类型，返回值为 number、string、boolean、undefined、object、function、symbol、bigint")]),t._v(" "),a("li",[t._v("不能正确区分数据类型。对于基本数据类型 null 会返回 object；引用类型除 function 都返回 object")]),t._v(" "),a("li",[t._v("注意事项")])]),t._v(" "),a("ul",[a("li",[t._v("typeof 返回值为 string 格式")]),t._v(" "),a("li",[t._v("对于未定义的变量不会报错，返回 undefined")]),t._v(" "),a("li",[t._v("typeof(null)结果为 object")]),t._v(" "),a("li",[t._v("typeof(NaN)结果为 number")])]),t._v(" "),a("h3",{attrs:{id:"instanceof-能够区分-array、object-和-function-是用于判断自定义的类实例对象-但是不能判断基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-能够区分-array、object-和-function-是用于判断自定义的类实例对象-但是不能判断基本数据类型"}},[t._v("#")]),t._v(" instanceof：能够区分 array、object 和 function，是用于判断自定义的类实例对象，但是不能判断基本数据类型")]),t._v(" "),a("ol",[a("li",[t._v("instanceof 判断对象的原型链上是否存在构造函数的原型。只能判断引用类型")]),t._v(" "),a("li",[t._v("instanceof 常用来判断 A 是否为 B 的实例")])]),t._v(" "),a("h3",{attrs:{id:"object-prototype-tostring-call-精确判断数据类型-但是写法相对繁琐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-prototype-tostring-call-精确判断数据类型-但是写法相对繁琐"}},[t._v("#")]),t._v(" Object.prototype.toString.call():精确判断数据类型，但是写法相对繁琐")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("toString.call(()=>{})       // [object Function]\ntoString.call({})           // [object Object]\ntoString.call([])           // [object Array]\ntoString.call('')           // [object String]\ntoString.call(22)           // [object Number]\ntoString.call(undefined)    // [object undefined]\ntoString.call(null)         // [object null]\ntoString.call(new Date)     // [object Date]\ntoString.call(Math)         // [object Math]\ntoString.call(window)       // [object Window]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"typeof-abc-和-typeof-abc-都是返回-string-那么-typeof-是操作符还是函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-abc-和-typeof-abc-都是返回-string-那么-typeof-是操作符还是函数"}},[t._v("#")]),t._v(" typeof('abc')和 typeof'abc'都是返回 String，那么 typeof 是操作符还是函数？")]),t._v(" "),a("p",[t._v("学习过程中知道 typeof 是操作符，但是 typeof('abc')这种形式是函数调用，那么他到底是不是函数呢？typeof 的返回值之一有 function，那么就可以使用 typeof(typeof)来检测是否为函数，若为函数则返回 function，但是这串代码会报错，也就说明 typeof 不是函数。括号的作用是分组而非函数调用。")]),t._v(" "),a("h2",{attrs:{id:"instanceof-模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-模拟实现"}},[t._v("#")]),t._v(" instanceof 模拟实现")]),t._v(" "),a("p",[t._v("instanceof 用来判断对象的原型链上是否存在构造函数的原型，只能判断引用类型，常用来判断 A 是否为 B 的实例。\n模拟实现思想：沿着原型链上向上查找")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function instance_of(Case, Constructor) {\n    // 基本数据类型返回false\n    // 兼容一下函数对象\n    if ((typeof(Case) != 'object' && typeof(Case) != 'function') || Case == 'null') return false;\n    let CaseProto = Object.getPrototypeOf(Case);\n    while (true) {\n        // 查到原型链顶端，仍未查到，返回false\n        if (CaseProto == null) return false;\n        // 找到相同的原型\n        if (CaseProto === Constructor.prototype) return true;\n        CaseProto = Object.getPrototypeOf(CaseProto);\n    }\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h2",{attrs:{id:"typeof-和-instanceof-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-和-instanceof-的区别"}},[t._v("#")]),t._v(" typeof 和 instanceof 的区别")]),t._v(" "),a("p",[t._v("两者都是判断数据类型的方法，区别如下：")]),t._v(" "),a("ul",[a("li",[t._v("typeof 会返回一个变量的基本类型(number、string、boolean、undefined、object、function、symbol、bigint),instanceof 返回的是布尔值")]),t._v(" "),a("li",[t._v("instanceof 可以准确判断引用类型数据，但不能判断基本数据类型，typeof 判断除 null 外基本数据，但不能判断引用类型，除 function 外都返回 object")])]),t._v(" "),a("h2",{attrs:{id:"判断数组的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断数组的方法"}},[t._v("#")]),t._v(" 判断数组的方法")]),t._v(" "),a("ol",[a("li",[t._v("Array.isArray()")]),t._v(" "),a("li",[t._v("当 isArray 不存在时使用 Object.prototype.toString.call()")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("if (!Array.isArray) {\n    Array.isArray = function(o) {\n        return typeof(o) === 'object'\n               && Object.prototype.toString.call(o) === '[object Array]';\n    }\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("instanceof 不建议使用，问题在于，如果网页中存在多个 iframe ，那便会存在多个 Array 构造函数，此时判断是否是数组会存在问题。")])]),t._v(" "),a("h2",{attrs:{id:"判断对象是否具有某个属性的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断对象是否具有某个属性的方法"}},[t._v("#")]),t._v(" 判断对象是否具有某个属性的方法")]),t._v(" "),a("ol",[a("li",[t._v("in 关键字。如果指定属性在指定对象或其原型链中，返回 true(和 Reflect.has(obj,'name')方法一样)")]),t._v(" "),a("li",[t._v("hasOwnProperty()。指示对象是否具有指定属性作为她自己的属性(而不是继承他)，该方法可以正确区分对象的本身属性和来自其原型的属性。但是该方法对于使用 Object.create(null)创建的对象不适用。")]),t._v(" "),a("li",[t._v("Object.prototype.hasOwnProperty()。该方法直接调用内置的有效函数，跳过原型链，可解决上一个问题。")]),t._v(" "),a("li",[t._v("Object.hasOwn()。如果指定对象具有指定属性作为自己的属性，则返回 true，如果属性不存在或者被继承，则返回 false。")]),t._v(" "),a("li",[t._v("propertyIsEnumerable()。propertyIsEnumerable() 是 hasOwnProperty() 的增强版，这个方法的用法与 hasOwnProperty()相同，但当检测属性是自有属性(非继承)且这个属性是可枚举的，才会返回 true。")])]),t._v(" "),a("h2",{attrs:{id:"数组的-splice-和-slice-有什么用和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组的-splice-和-slice-有什么用和区别"}},[t._v("#")]),t._v(" 数组的 splice 和 slice 有什么用和区别")]),t._v(" "),a("ul",[a("li",[t._v("slice：截取功能,该方法不会改变本身的数组，而是将提取元素封装到新的数组返回。arr.slice(a,b),截取开始的索引，包含开始索引截取结束的索引，不包含结束索引第二个参数可以省略不写，此时会截取从开始索引往后的所有元素注意索引可以为一个赋值 数组可以从-1 开始 从后往前计算 -1 倒数第一个 -2 倒数第二个。")]),t._v(" "),a("li",[t._v("splice()：数组增删查改，使用 splice()会影响到原数组，并将删除的元素作为返回值返回。splice()方法不仅能删除元素 还可以在删除元素的基础上添加新的元素需要注意的是：splice(a,b,c) a 是开始位置的索引 b 是删除的数量 c 及以后可以任意添加元素")])]),t._v(" "),a("h2",{attrs:{id:"和-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和-有什么区别"}},[t._v("#")]),t._v(" ==和===有什么区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("=== 是严格相等，要求数据类型和值都要相等；== 只需要值相等。")])]),t._v(" "),a("li",[a("p",[t._v("== 会发生隐式类型转换，=== 不会发生隐式类型转换。")])]),t._v(" "),a("li",[a("p",[t._v("==和===一些比较规则")]),t._v(" "),a("ol",[a("li",[t._v("NaN == NaN false NaN 和任何数都不相等，包括 NaN 本身 。 [] == [] false {} == {} false 引用数据类型比较的是地址。")]),t._v(" "),a("li",[t._v("undefined == null true 但是 undefined === null false (因为数据类型不一样)。")]),t._v(" "),a("li",[t._v("对象 == 字符串 将对象转换成字符串")]),t._v(" "),a("li",[t._v("==比较时如果两边数据类型不一样，都需要转换成数字类型。=== 比较的二者数据类型不一样时，直接返回 false。")])])])]),t._v(" "),a("h2",{attrs:{id:"普通函数和构造函数的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通函数和构造函数的区别"}},[t._v("#")]),t._v(" 普通函数和构造函数的区别")]),t._v(" "),a("ol",[a("li",[t._v("函数调用方式不一样")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//构造函数也是一个普通函数，创建方式和普通函数一样。\nfunction Foo(){}\nFoo();//普通函数调用方式\nvar f = new Foo();//构造函数调用方式,需要使用new关键字\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("作用不一样，构造函数用来创建实例化对象")]),t._v(" "),a("li",[t._v("首字母大小写习惯")])]),t._v(" "),a("ul",[a("li",[t._v("普通函数一般小写")]),t._v(" "),a("li",[t._v("构造函数一般大写")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("函数中的 this 指向不同")])]),t._v(" "),a("ul",[a("li",[t._v("普通函数中的 this 在严格模式下指向 undefined，非严格模式下指向 windows 对象")]),t._v(" "),a("li",[t._v("构造函数中的 this 指向他创建的对象实例")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("写法不同")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//构造函数\nfunction Person(name){\n\tthis.name = name;\n}\nvar p = new Person('John');//使用new关键字，不使用return\n//普通函数\nfunction person(name){\n\tthis.name = name;\n\treturn this;//使用return\n}\nvar p = person('john'),\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"类数组和数组的区别-为什么要设置类数组-怎么将类数组转为数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类数组和数组的区别-为什么要设置类数组-怎么将类数组转为数组"}},[t._v("#")]),t._v(" 类数组和数组的区别，为什么要设置类数组，怎么将类数组转为数组")]),t._v(" "),a("ol",[a("li",[t._v("区别")])]),t._v(" "),a("ul",[a("li",[t._v("类数组具有 length 属性和索引元素，但是没有 Array 属性和方法")]),t._v(" "),a("li",[t._v("类数组是一个普通对象，数组的类型是 Array")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("类数组对象的设计目的更多是只让你遍历和访问下标,而不是去添加或删除元素")]),t._v(" "),a("li",[t._v("将类数组转为数组的方法")])]),t._v(" "),a("ul",[a("li",[t._v("Array.from():const args = Array.from(arguments);")]),t._v(" "),a("li",[t._v("拓展运算符: const args = [...arguments];")]),t._v(" "),a("li",[t._v("const args = [].slice.call(arguments);")]),t._v(" "),a("li",[t._v("Array.prototype.slice.call:const args = Array.prototype.slice.call(arguments);")]),t._v(" "),a("li",[t._v("Array.prototype.splice.call:const args = Array.prototype.splice.call(arguments, 0);")]),t._v(" "),a("li",[t._v("Array.prototype.concat.apply: const args = Array.prototype.concat.apply([], arguments);")])]),t._v(" "),a("h2",{attrs:{id:"null-和-undefined-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-和-undefined-的区别"}},[t._v("#")]),t._v(" null 和 undefined 的区别")]),t._v(" "),a("ul",[a("li",[t._v("null 表示一个无的对象；而 undefined 表示未定义")]),t._v(" "),a("li",[t._v("再转换为数字结果时，null 转为 0，而 undefined 转换为 NaN\n使用场景：")])]),t._v(" "),a("ol",[a("li",[t._v("null 作为对象原型链的终点；作为函数的参数时，表示该函数的参数不是对象")]),t._v(" "),a("li",[t._v("变量声明未赋值等于 undefined；调用函数未提供参数值该参数等于 undefined；对象没有赋值时，该属性值为 undefined；函数没有返回值时，返回 undefined")])]),t._v(" "),a("h2",{attrs:{id:"this-指向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-指向"}},[t._v("#")]),t._v(" this 指向")]),t._v(" "),a("ul",[a("li",[t._v("默认绑定：非严格模式下，this 指向全局对象 windows，严格模式下指向 undefined")]),t._v(" "),a("li",[t._v("隐式绑定： 满足 XX.fn()格式，fn 的 this 指向 XX。如果存在链式调用，this 永远指向最后调用他的那个对象。隐式绑定丢失：起函数别名，通过别名运行；函数作为参数会造成隐式绑定丢失")]),t._v(" "),a("li",[t._v("显示绑定： 通过 call/apply/bind 修改 this 指向")]),t._v(" "),a("li",[t._v("new 绑定：通过 new 来调用构造函数，会生成一个新对象，并且把这个新对象绑定为调用函数的 this")]),t._v(" "),a("li",[t._v("箭头函数绑定： 箭头函数没有 this，它的 this 是通过作用域链查到外层作用域的 this，且指向函数定义时的 this")])]),t._v(" "),a("h2",{attrs:{id:"隐藏页面布局元素的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏页面布局元素的方法"}},[t._v("#")]),t._v(" 隐藏页面布局元素的方法")]),t._v(" "),a("ol",[a("li",[t._v("opacity：0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定 一些事件，如 click 事件，那么点击该区域，也能触发点击事件的")]),t._v(" "),a("li",[t._v("visibility：hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已 经绑定的事件 ，隐藏对应元素，在文档布局中仍保留原来的空间（重绘）")]),t._v(" "),a("li",[t._v("display：none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素。 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）")])])])}),[],!1,null,null,null);a.default=e.exports}}]);