---
title: 面试题JS(一)
date: 2023-2-19 18:00:00
permalink: /interview-github-pages.html
tags:
  - 博客
categories:
  - 笔记
---

# 数据类型

1. 基本数据类型：七种 Boolean Number String undefined null Bigint Symbol。Symbol ： ES6 引入的一种新的原始值，表示独一无二的值，主要为了解决属性名冲突问题。 Bigint ：ES2020 新增加，是比 Number 类型的整数范围更大。
2. 引用数据类型：Object 对象(包括普通 Object、Function、Array、Date、RegExp、Math)

# 判断数据类型的方法

## typeof：能够快速区分基本数据类型，不能正确区分 object、array、null，都返回 object。

1. 作用：区分数据类型，返回值为 number、string、boolean、undefined、object、function、symbol、bigint
2. 不能正确区分数据类型。对于基本数据类型 null 会返回 object；引用类型除 function 都返回 object
3. 注意事项

- typeof 返回值为 string 格式
- 对于未定义的变量不会报错，返回 undefined
- typeof(null)结果为 object
- typeof(NaN)结果为 number

## instanceof：能够区分 array、object 和 function，是用于判断自定义的类实例对象，但是不能判断基本数据类型

1. instanceof 判断对象的原型链上是否存在构造函数的原型。只能判断引用类型
2. instanceof 常用来判断 A 是否为 B 的实例

## Object.prototype.toString.call():精确判断数据类型，但是写法相对繁琐

```
toString.call(()=>{})       // [object Function]
toString.call({})           // [object Object]
toString.call([])           // [object Array]
toString.call('')           // [object String]
toString.call(22)           // [object Number]
toString.call(undefined)    // [object undefined]
toString.call(null)         // [object null]
toString.call(new Date)     // [object Date]
toString.call(Math)         // [object Math]
toString.call(window)       // [object Window]
```

# typeof('abc')和 typeof'abc'都是返回 String，那么 typeof 是操作符还是函数？

学习过程中知道 typeof 是操作符，但是 typeof('abc')这种形式是函数调用，那么他到底是不是函数呢？typeof 的返回值之一有 function，那么就可以使用 typeof(typeof)来检测是否为函数，若为函数则返回 function，但是这串代码会报错，也就说明 typeof 不是函数。括号的作用是分组而非函数调用。

# instanceof 模拟实现

instanceof 用来判断对象的原型链上是否存在构造函数的原型，只能判断引用类型，常用来判断 A 是否为 B 的实例。
模拟实现思想：沿着原型链上向上查找

```
function instance_of(Case, Constructor) {
    // 基本数据类型返回false
    // 兼容一下函数对象
    if ((typeof(Case) != 'object' && typeof(Case) != 'function') || Case == 'null') return false;
    let CaseProto = Object.getPrototypeOf(Case);
    while (true) {
        // 查到原型链顶端，仍未查到，返回false
        if (CaseProto == null) return false;
        // 找到相同的原型
        if (CaseProto === Constructor.prototype) return true;
        CaseProto = Object.getPrototypeOf(CaseProto);
    }
}
```

# typeof 和 instanceof 的区别

两者都是判断数据类型的方法，区别如下：

- typeof 会返回一个变量的基本类型(number、string、boolean、undefined、object、function、symbol、bigint),instanceof 返回的是布尔值
- instanceof 可以准确判断引用类型数据，但不能判断基本数据类型，typeof 判断除 null 外基本数据，但不能判断引用类型，除 function 外都返回 object

# 判断数组的方法

1. Array.isArray()
2. 当 isArray 不存在时使用 Object.prototype.toString.call()

```
if (!Array.isArray) {
    Array.isArray = function(o) {
        return typeof(o) === 'object'
               && Object.prototype.toString.call(o) === '[object Array]';
    }
}
```

3. instanceof 不建议使用，问题在于，如果网页中存在多个 iframe ，那便会存在多个 Array 构造函数，此时判断是否是数组会存在问题。

# 判断对象是否具有某个属性的方法

1. in 关键字。如果指定属性在指定对象或其原型链中，返回 true(和 Reflect.has(obj,'name')方法一样)
2. hasOwnProperty()。指示对象是否具有指定属性作为她自己的属性(而不是继承他)，该方法可以正确区分对象的本身属性和来自其原型的属性。但是该方法对于使用 Object.create(null)创建的对象不适用。
3. Object.prototype.hasOwnProperty()。该方法直接调用内置的有效函数，跳过原型链，可解决上一个问题。
4. Object.hasOwn()。如果指定对象具有指定属性作为自己的属性，则返回 true，如果属性不存在或者被继承，则返回 false。
5. propertyIsEnumerable()。propertyIsEnumerable() 是 hasOwnProperty() 的增强版，这个方法的用法与 hasOwnProperty()相同，但当检测属性是自有属性(非继承)且这个属性是可枚举的，才会返回 true。

# 数组的 splice 和 slice 有什么用和区别

- slice：截取功能,该方法不会改变本身的数组，而是将提取元素封装到新的数组返回。arr.slice(a,b),截取开始的索引，包含开始索引截取结束的索引，不包含结束索引第二个参数可以省略不写，此时会截取从开始索引往后的所有元素注意索引可以为一个赋值 数组可以从-1 开始 从后往前计算 -1 倒数第一个 -2 倒数第二个。
- splice()：数组增删查改，使用 splice()会影响到原数组，并将删除的元素作为返回值返回。splice()方法不仅能删除元素 还可以在删除元素的基础上添加新的元素需要注意的是：splice(a,b,c) a 是开始位置的索引 b 是删除的数量 c 及以后可以任意添加元素

# ==和===有什么区别

- === 是严格相等，要求数据类型和值都要相等；== 只需要值相等。
- == 会发生隐式类型转换，=== 不会发生隐式类型转换。
- ==和===一些比较规则

  1. NaN == NaN false NaN 和任何数都不相等，包括 NaN 本身 。 [] == [] false {} == {} false 引用数据类型比较的是地址。
  2. undefined == null true 但是 undefined === null false (因为数据类型不一样)。
  3. 对象 == 字符串 将对象转换成字符串
  4. ==比较时如果两边数据类型不一样，都需要转换成数字类型。=== 比较的二者数据类型不一样时，直接返回 false。

# 普通函数和构造函数的区别

1. 函数调用方式不一样

```
//构造函数也是一个普通函数，创建方式和普通函数一样。
function Foo(){}
Foo();//普通函数调用方式
var f = new Foo();//构造函数调用方式,需要使用new关键字

```

2. 作用不一样，构造函数用来创建实例化对象
3. 首字母大小写习惯

- 普通函数一般小写
- 构造函数一般大写

4. 函数中的 this 指向不同

- 普通函数中的 this 在严格模式下指向 undefined，非严格模式下指向 windows 对象
- 构造函数中的 this 指向他创建的对象实例

5. 写法不同

```
//构造函数
function Person(name){
	this.name = name;
}
var p = new Person('John');//使用new关键字，不使用return
//普通函数
function person(name){
	this.name = name;
	return this;//使用return
}
var p = person('john'),

```

# 类数组和数组的区别，为什么要设置类数组，怎么将类数组转为数组

1. 区别

- 类数组具有 length 属性和索引元素，但是没有 Array 属性和方法
- 类数组是一个普通对象，数组的类型是 Array

2. 类数组对象的设计目的更多是只让你遍历和访问下标,而不是去添加或删除元素
3. 将类数组转为数组的方法

- Array.from():const args = Array.from(arguments);
- 拓展运算符: const args = [...arguments];
- const args = [].slice.call(arguments);
- Array.prototype.slice.call:const args = Array.prototype.slice.call(arguments);
- Array.prototype.splice.call:const args = Array.prototype.splice.call(arguments, 0);
- Array.prototype.concat.apply: const args = Array.prototype.concat.apply([], arguments);

# null 和 undefined 的区别

- null 表示一个无的对象；而 undefined 表示未定义
- 再转换为数字结果时，null 转为 0，而 undefined 转换为 NaN
  使用场景：

1. null 作为对象原型链的终点；作为函数的参数时，表示该函数的参数不是对象
2. 变量声明未赋值等于 undefined；调用函数未提供参数值该参数等于 undefined；对象没有赋值时，该属性值为 undefined；函数没有返回值时，返回 undefined

# this 指向

- 默认绑定：非严格模式下，this 指向全局对象 windows，严格模式下指向 undefined
- 隐式绑定： 满足 XX.fn()格式，fn 的 this 指向 XX。如果存在链式调用，this 永远指向最后调用他的那个对象。隐式绑定丢失：起函数别名，通过别名运行；函数作为参数会造成隐式绑定丢失
- 显示绑定： 通过 call/apply/bind 修改 this 指向
- new 绑定：通过 new 来调用构造函数，会生成一个新对象，并且把这个新对象绑定为调用函数的 this
- 箭头函数绑定： 箭头函数没有 this，它的 this 是通过作用域链查到外层作用域的 this，且指向函数定义时的 this
