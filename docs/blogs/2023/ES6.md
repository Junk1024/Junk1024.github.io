---
title: ES6笔记总结
date: 2023-1-10 18:00:00
permalink: /ES6-github-pages.html
tags:
  - 博客
categories:
  - 笔记
---

## Let 和 Const

1.let 是用来声明变量的，有四个特性

- let 不能重复声明变量
- 存在块级作用域，块级作用域外不能正常访问（同一级）
- 不存在作用域提升
- 不影响作用域链，子作用域可以正常通过作用域链访问变量

案例实践，页面有三个 DIV，需要实现点击变色效果

```
<script>
  // 先拿到元素
  let items = document.getElementsByClassName('item')
  // 然后遍历，下面这个是以前的写法，let出现以后可用第二种
  // for (var i = 0;i < items.length;i++) {
  //   items[i].onclick = function() {
  //     this.style.background = 'pink'
  //   }
  // }
  for (let i = 0;i < items.length;i++) {
    items[i].onclick = function() {
      items[i].style.background = 'pink'
    }
  }
</script>
```

值得一提的是，在循环中使用 var 声明的变量没有块级作用域，那么循环中的变量 i 一直会是循环结束后的值，此例中为 3

2.const 是用来声明常量的，有五个特性

- 用 const 声明常量一定要赋初始值
- 常量的值不能修改
- 存在块级作用域
- 对数组对象的修改不算对常量的修改
- 常量名要用全大写(潜规则，代码风格)

## 解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值；

```
// 1、数组的解构赋值
const SEASON=["春","夏","秋","冬"];
let [a,b,c,d]=SEASON;
// 这就相当于我们声明4个变量a,b,c,d，其值分别对应"春","夏","秋","冬"
console.log(a + b + c + d); // 春夏秋冬
//2、对象的解构赋值
const BOY = {
  name : "大哥",
  age : 22,
  sex : "男",
  xiaopin : function(){
    console.log("我会唱跳！");
  }
}
let {name,age,sex,xiaopin} = BOY; // 注意解构对象这里用的是{}
console.log(name + age + sex + xiaopin); // 大哥22男function(){console.log("我会唱跳！");}
xiaopin(); //我会唱跳！
```

## 模板字符串--新的字符串声明方式

模板字符串（template string）是增强版的字符串，用反单引号（`）标识，特点：

- 字符串中可以出现换行符；
- 可以使用 ${xxx} 形式引用变量实现字符串拼接；

```
// 声明
let string = `我也是一个字符串奥！`;
console.log(string);//我也是一个字符串奥！
// 特性
// 1、字符串中可以出现换行符
let str =
    `<ul>
    <li>春</li>
    <li>夏</li>
    <li>秋</li>
    <li>冬</li>
  </ul>`;
console.log(str);//支持换行符号打印
// 2、可以使用 ${xxx} 形式引用变量实现字符串的拼接
let s = "秋";
//let out = s + '是我最喜欢的季节！';以前的写法
let out = `${s}是我最喜欢的季节！`;
console.log(out);//秋是我最喜欢的季节！
```

## 简化对象和函数的写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁

```
//完整写法
const GIRL = {
  name：name，
  age：age，
  say：function () {
    console.log("我喜欢你！")
  }
}
//简化写法
const GIRL = {
  name，
  age，
  say() {
    console.log("我喜欢你！")
  }
}
```

## 箭头函数

ES6 允许使用箭头（=>）定义函数，箭头函数提供了一种更加简洁的函数书写方式，箭头函数多用于匿名函数的定义； 1.箭头函数的特性

- 箭头函数的 this 指向是静态的，指向声明时作用域的 this 值
- 不能作为构造函数实例化对象
- 不能使用 arguements
  箭头函数的简写
- 当形参有且只有一个的时候可以省略小括号;
- 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果，不需要加 return；

```
1.箭头函数的this指向是静态的，指向声明时作用域的this值
function getname(){
  console.log(this.name)
}

let getname1 = () => {
  console.log(this.name)
}
window.name = 'code'
const point = {
  name: "bug"
}
//直接调用
getname()//code
getname1()//code 因为声明在全局作用域下，所以指向全局的this的值
//call方法调用
getname.call(point)//bug
getname1.call(point)//code 箭头函数的this指向是静态的

2.不能作为构造函数实例化对象
let person = (name, age) => {
  this.name = name,
  this.age = age
}
let me = new person('wang',23)
console.log(me)//Uncaught TypeError: person is not a constructor

3.不能使用 arguements变量
let fn = () =>{
  console.log(arguments)
}
fn(1)//Uncaught ReferenceError: arguments is not defined

4.箭头函数的简写
①当形参有且仅有一个的时候，省略小括号
let add = n => {
  return n + n
}
console.log(add(3))//6
②当函数体只有一句的时候
let pow = n => n*n;
console.log(pow(3))//9
```

2.箭头函数的应用案例

```
1.点击页面的DIV两秒后变色
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: blue;
    }
  </style>
</head>
<body>
  <div id="ad"></div>
</body>
<script>
let ad = document.getElementById('ad')
//使用匿名函数时需要将外层this的值保存
// ad.addEventListener('click',function() {
//   let this1 = this;
//   setTimeout(function(){
//     this1.style.backgroundColor = 'pink';
//   },2000)
// })
//使用箭头函数就不用再做保存，因为箭头函数的this指向声明作用域下的this
ad.addEventListener('click',function() {
  setTimeout(()=>{
    this.style.backgroundColor = 'pink';
  },2000)
})
</script>
</html>

2.返回数组中偶数元素

const arr = [1,3,6,9,10]
//传统的匿名函数写法
// const result = arr.filter(function(item) {
//   if (item % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// })
//简化的箭头函数写法
const result = arr.filter(item => item % 2 === 0)
console.log(result)
```

3.箭头函数总结

- 箭头函数适合与 this 无关的回调，定时器，数组方法的回调
- 箭头函数不适合与 this 有关的，事件的回调，对象方法的回调(不适合不代表不可以)

## 函数参数的默认值

ES6 允许给函数的参数赋初始值；

```
//1.形参构造值，具有默认值的参数，一般位置要靠后(潜规则)
function add(a,b,c=10){
    return a+b+c;
}
let result=add(1,2);
console.log(result);//13
//2.与解构赋值结合
//注意这里参数是一个对象
function connect({host = "127.0.1",username,password,port}) {
    console.log(host)
    console.log(username)
    console.log(password)
    console.log(port)
}
connect({
    host: 'atguigu.com',
    username: 'root',
    password: 'root',
    port: 3306
})
```

## rest 参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；其中
*...args 是固定写法要放在形参最后
*返回结果为数组，可以使用数组的方法

```
function data() {
  console.log(arguments)
}
data('春','夏','秋','冬')//返回所有实参，是一个对象
function data1(a,b,...args) {
  console.log(args)
}
data1('春','夏','秋','冬')//["秋","冬"]返回结果为数组，可以使用数组的方法
```

## 扩展运算符

扩展运算符（spread）也是三个点（…）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包；

```
// ... 扩展运算符能将数组转换为逗号分隔的参数序列
const SEASON = ['春', '夏', '秋','冬'];
function year() {
console.log(arguments);
}
year(SEASON);//返回一个参数['春', '夏', '秋','冬']
year(...SEASON); //相当于year('春', '夏', '秋','冬')返回四个参数'春', '夏', '秋','冬'
```

应用案例:数组的合并，数组的复制，伪数组转换为数组

```
//1.数组的合并
const a=['梅','兰'];
const b=['竹','菊'];
// 传统的合并方式
// const c =a.concat(b);
const c = [...a, ...b];

//2. 数组的克隆
const flower = ['梅','兰','竹','菊'];
const gentleman = [...sanzhihua];//需要注意的是，如果是引用类型，则是浅拷贝

//3.将伪数组转换为数组
const divs = document.querySelectorAll('div');
const divArr = [...divs];

```

## Symbol 新的原始数据类型

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型；在后来的谷歌 67 版本中还出现了一种 BigInt。是指安全存储、操作大整数。所以目前 JS 有八种数据类型：Number、String、BOOlean、Null、Undefined、Object、Symbol、BigInt。Symbol 特点：

- Symbol 的值是唯一的，用来解决命名冲突的问题；
- Symbol 值不能与其他数据进行运算；
- Symbol 定义的对象属性不能使用 for…in 循环遍历 ，但是可以使用 Reflect.ownKeys 来获取对象的所有键名；

```
//创建Symbol
let a = Symbol()
console.log(a,typeof a)//Symbol() 'symbol'
let b1 = Symbol('test')//可以在创建时添加描述
let b2 = Symbol('test')
console.log(b1 === b2)//false
//使用Symbol.for创建
let b3 = Symbol.for('test')
let b4 = Symbol.for('test')
console.log(b3,typeof b3)//Symbol(test) 'symbol'
console.log(b3 === b4)//true
```

Symbol 的应用
为对象添加属性方法

```
let boy = {
  name: "蔡徐坤",
  [Symbol('sing')]: function() {
    console.log('我会唱歌')
  },
  [Symbol('dance')]: function() {
    console.log('我会跳舞')
  },
}
console.log(boy)
boy[Reflect.ownKeys(boy)[1]]()//通过获取键名来调用相应的方法
```

## 迭代器

迭代器器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作；ES6 创造了一种新的遍历命令 for…of 循环，Iterator 接口主要供 for…of 消费；原生具备 iterator 接口的数据(可用 for of 遍历)：Array；Arguments；Set；Map；String；TypedArray；NodeList；
工作原理:

1. 创建一个指针对象，指向当前数据结构的起始位置;
2. 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员;
3. 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员;
4. 每调用 next 方法返回一个包含 value 和 done 属性的对象；

```

// 声明一个数组
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧'];

// 使用 for...of 遍历数组,返回数组的每一个元素，for in 返回的是0123，键名
for(let v of xiyou){
  console.log(v);
}
let iterator = xiyou[Symbol.iterator]();

// 调用对象的next方法
console.log(iterator.next()); //{"value": "唐僧","done": false}
console.log(iterator.next()); //{"value": "孙悟空","done": false}
console.log(iterator.next()); //{"value": "猪八戒","done": false}
console.log(iterator.next()); //{"value": "沙僧","done": false}
console.log(iterator.next());//{"value": "undefined","done": true}

// 重新初始化对象，指针也会重新回到最前面
let iterator1 = xiyou[Symbol.iterator]();
console.log(iterator1.next());//{"value": "唐僧","done": false}

```

迭代器的应用：当需要自定义遍历数据时。

```
// 声明一个对象
const banji = {
  name: "first",
  stu: ['xiaoming','xiaohong','xiaohua'],
  [Symbol.iterator]() {
    let index = 0;
    //下面如果不使用箭头函数需要在这里保存一下this
    // let _this = this;
    return {
      next: ()=>{
        if (index < this.stu.length) {
          const result = {value: this.stu[index],done: false};
          index++;
          return result;
        } else {
          return {value: undefined,done: true};
        }
      }
    }
  }
}
// 遍历这个对象
for(let v of banji){
  console.log(v)
}
//当然也可以直接使用数组的forEach方法
banji.stu.forEach(function(item){
  console.log(item)
})
```

## 生成器

生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同；生成器中可出现 yield 语句，可认为是生成器的分割线，由 next()方法从上至下依次调用。

```
// 生成器的声明注意*号
function * test(){
  console.log(111);
}
function* gen() {
  console.log(111);
  yield '一只没有耳朵';
  console.log(222);
  yield '一只没有尾部';
  console.log(333);
  yield '真奇怪';
  console.log(444);
}
let iterator = gen();
let iterator1 = test()
// iterator.next()
// iterator.next()
// iterator.next()
// iterator.next()
console.log(iterator1)//不会打印test，会打印一个生成器对象，里面有next方法
console.log(iterator1.next());//通过调用next方法执行生成器里面的语句 111
console.log(iterator.next()); //111 {value：'一只没有耳朵',done: false}
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); //444 {value: undefined, done:true}
console.log("遍历：");
//遍历
for(let v of gen()){
console.log(v);
}//111 一只没有耳朵......444
```

生成器的参数传递，生成器可传入实参，将作为上一个 yield 的返回值。

```
function* gen(arg) {
  console.log(arg)
  let one = yield '一只没有耳朵';
  console.log(one)
  let two = yield '一只没有尾部';
  console.log(two)
  let three = yield '真奇怪';
  console.log(three)
}
let iterator = gen('111');
console.log(iterator.next())//111 {value: '一只没有耳朵', done: false}
console.log(iterator.next('222'))//222 {value: '一只没有尾部', done: false}
```

生成器函数的应用(异步编程)，文件操作，网络操作，数据库操作。现有一个需求，一秒后打印 1，再过两秒后打印 2，再过三秒后打印 3，这个可以通过定时器的嵌套来实现，但是随着异步操作的数量的增加，会形成回调地狱，代码也会一直缩进，最终超出可见编辑区，阅读起来很不方便。下面给出两种写法，可以直观地看出区别。

```
// 定时器的嵌套
setTimeout(()=>{
  console.log(1)
  setTimeout(()=>{
    console.log(2)
    setTimeout(()=>{
      console.log(3)
    },3000)
  },2000)
},1000)
//利用生成器来实现
function one(){
  setTimeout(()=>{
    console.log(1)
    iterator.next()
  },1000)
}
function two(){
  setTimeout(()=>{
    console.log(2)
    iterator.next()
  },2000)
}
function three(){
  setTimeout(()=>{
    console.log(3)
  },3000)
}
function* gen() {
  yield one();
  yield two();
  yield three();
}
let iterator = gen()
iterator.next()
```

生成器的另一个应用，模拟用户数据的获取，用户数据，订单数据，商品数据，在获取数据的封装函数下无法操作 data，同时可以利用生成器传参作为上一个 yield 的返回值来拿到数据。代码如下

```
function getUsers(){
  setTimeout(()=>{
    data = '用户数据'
    iterator.next(data)
  },1000)
}
function getOrders(){
  setTimeout(()=>{
    data = '订单数据'
    iterator.next(data)
  },1000)
}
function getGoods(){
  setTimeout(()=>{
    data = '商品数据'
    iterator.next(data)
  },1000)
}
function* gen() {
  let users = yield getUsers();
  console.log(users)
  let orders = yield getOrders();
  console.log(orders)
  let goods = yield getGoods();
  console.log(goods)
}
let iterator = gen()
iterator.next()
```

## Promise

Promise 是 ES6 新提出的异步编程的解决方案，语法上是一个构造函数，用来封装异步操作并可以获得其成功与否的结果。先了解一下他的基本语法。实例化 Promise 对象时需要传入一个函数类型的参数，而且这个函数有两个形参，然后可以在函数里面封装异步操作，调用形参的函数来改变当前的 Promise 对象的状态，然后根据不同状态调用.then()方法中的回调函数，.then()方法里面有两个函数类型的参数，并且两个函数都有一个形参，一般成功的形参为 val，失败的为 res。当异步操作中调用第一个形参的函数时，对应调用.then 中的第一个函数，反则反之。
.then 方法的返回结果也是一个 Promise 对象，其状态有回调函数的执行结果决定，有以下三种情况：

1. 返回结果为非 Promise 类型的属性，状态为成功，返回值为对象的成功的值
2. 返回结果是 Promise，则由返回的 Promise 对象的状态决定，其成功的值就是返回的值
3. 抛出错误，其状态为失败，返回值为抛出的值

```
const p = new Promise(function(reslove,reject){
  setTimeout(function(){
    // let data = '用户数据'
    // reslove(data)
    let err = '读取失败'
    reject(err)
  },1000)
})
//返回的结果也是一个Promise对象
p.then(function(val){
  console.log(val)
},function(res){
  console.log(res)
})
```

Promise 还有一个 catch 方法，用来设置失败状态的回调函数，只有一个参数，其实也就是 then 方法去掉成功的回调函数的写法。

```
const p = new Promise(function(reslove,reject){
  setTimeout(function(){
    // let data = '用户数据'
    // reslove(data)
    let err = '读取失败'
    reject(err)
  },1000)
})
p.catch(function(res){
  console.log(res)
})
```

## 集合 Set

ES6 新提出的一种数据结构，与数组类似，不过没有重复的元素，实现了 iterator 接口。集合的属性和方法：

1. size 返回集合的元素个数；
2. add 增加一个新元素，返回当前集合；
3. delete 删除元素，返回 boolean 值；
4. has 检测集合中是否包含某个元素，返回 boolean 值；
5. clear 清空集合，返回 undefined；

```
// Set集合
let s = new Set();
console.log(s,typeof s);
let s1 = new Set(["small","middle","middle","large"]);
console.log(s1); // 自动去重
//实现了iterator接口可使用for of
for(let v of s1){
  console.log(v)
}
// 1. size 返回集合的元素个数；
console.log(s1.size);
// 2. add 增加一个新元素，返回当前集合；
s1.add("normal");
console.log(s1);
// 3. delete 删除元素，返回 boolean 值；
let result = s1.delete("normal");
console.log(result);
console.log(s1);
// 4. has 检测集合中是否包含某个元素，返回 boolean 值；
let r1 = s1.has("small");
console.log(r1);
// 5. clear 清空集合
s1.clear();
console.log(s1);

```

Set 的应用实践：

1. 数组去重 2. 求交集 3. 求并集 4. 求差集

```
let arr1 = [1,1,2,3,3,4,5]
//数组去重
let only = [...new Set(arr1)]
console.log(only)
//求交集
let arr2 = [3,4,4,5,5]
let common = [...new Set(arr1)].filter(item => new Set(arr2).has(item))
console.log(common)
//求并集
let total = new Set([...arr1,...arr2])
console.log(total)
// 差集：比如集合1和集合2求差集，就是1里面有的，2里面没的
let result1 = [...new Set(arr1)].filter(item=>!(new Set(arr2).has(item)));
console.log(result1);
```

## Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了 iterator 接口。Map 的方法：

1. size 返回 Map 的元素个数；
2. set 增加一个新元素，返回当前 Map;
3. get 返回键名对象的键值；
4. has 检测 Map 中是否包含某个元素，返回 boolean 值；
5. clear 清空，返回 undefined；
   代码示例

```
//声明Map
let m = new Map()
console.log(m,typeof m)
//添加元素
m.set('job','front')
m.set('ability',function() {
  console.log('我可以优化用户体验')
})
let localtion = {
  work: '杭州'
}
m.set(localtion,['南京','深圳'])
console.log(m)
//size 返回 Map 的元素个数；
console.log(m.size)//3
//删除delete
m.delete(localtion)
//获取get
console.log(m.get('ability'))
//for of 遍历
for (let v of m){
  console.log(v)
}
//清空
m.clear()
console.log(m.clear())//undefined
console.log(m)
```

## 类 Class

ES6 引入了类 Class 的概念，作为对象的模板。通过 Class 关键字声明，它的绝大多数功能 ES5 都能实现，新的 Class 写法只是让对象原型的写法更加清晰，更像面向对象的写法。知识点：

1. Class 声明
2. constructor 定义构造函数初始化
3. static 定义静态属性和方法
4. extends 继承父类
5. super 调用父级构造函数
6. 父类方法的重写
7. class 中的 set 和 get

```
//ES6之前的写法
function phone(brand,price){
  this.brand = brand;
  this.price = price;
}
//添加方法
phone.prototype.call = function(){
  console.log('我可以打电话')
}
let xiaomi = new phone('mi13',5999)
xiaomi.call()
console.log(xiaomi)

//ES6类Class的声明写法
class mobilePhone{
  //构造方法关键字constructor
  constructor(brand,price){
    this.brand = brand;
    this.price = price;
  }
  //添加方法必须以这种形式，不能写完整对象键值对的形式
  call(){
    console.log('我可以打电话')
  }
}
let redMi = new mobilePhone('K60',2999)
redMi.call()
console.log(redMi)


//静态属性static
//ES5的静态成员，静态成员属于函数不属于实例对象
function phone(){}
phone.name = 'xiaomi'
phone.ability = function(){
  console.log('我可以通信')
}
phone.prototype.size = 'middle'
let xiaomi = new phone()
console.log(xiaomi.name)//undefined
console.log(xiaomi.size)//middle
//xiaomi.ability()//xiaomi.ability is not a function

//ES6的对应static属性，static属性属于类class，不属于实例对象
class mobilePhone{
  static name = 'xiaomi'
  static ability(){
    console.log('我可以通信')
  }
}
//实例化
let mi = new mobilePhone()
console.log(mi.name)//undefined
console.log(mobilePhone.name)//xiaomi


//对象继承
//对象继承ES5构造函数继承写法
function phone(name,price){
  this.name = name;
  this.price = price;
}
phone.prototype.call = function(){
  console.log('我可以通信')
}
function mobilePhone(name,price,color,size){
  phone.call(this,name,price);//等同于下面两行的效果
  this.color = color;
  this.size = size;
}
//设置子级构造函数原型
mobilePhone.prototype = new phone()
mobilePhone.prototype.constructor = mobilePhone
//声明子类方法
mobilePhone.prototype.ability = function(){
  console.log('我可以通信')
}
const xiaomi = new mobilePhone('mi13','5999','blue','6.1inch')
console.log(xiaomi)
xiaomi.call()
xiaomi.ability()
//ES6类的继承
class phone{
  constructor(brand,price){
    this.brand = brand;
    this.price = price;
  }
  //成员属性
  call(){
    console.log('我可以通信')
  }
}
class mobilePhone extends phone {
  //构造方法
  constructor(brand,price,color,size){
    super(brand,price);//等同于phone.call(this,brand,price)和下面的写法
    this.color = color;
    this.size = size
  }
  //子类方法
  ability(){
    console.log('我可以通信')
  }
  //子类对父类方法的重写，直接在子类声明同名函数即可
  call(){
    console.log('我可以实时通信')
  }
}
const xiaomi = new mobilePhone('mi13','5999','blue','6.1inch')
xiaomi.call()//我可以实时通信
xiaomi.ability()//我可以通信


类的get 和set
//get和set 获取和设置属性时
class phone{
  get price(){
    console.log('获取价格');
    return 123//返回值为属性的值
  }
  //set需要一个参数，参数可设置判断条件
  set price(val){
    console.log('设置了价格')
  }
}
let xiaomi = new phone()
console.log(xiaomi.price)//获取价格 123
xiaomi.price = '1999'//设置了价格
```

## 数值扩展

1. Number.EPSILON 是 js 中的最小精度约等于 2.220446049250313e-16
2. 二进制(0b)和八进制(0o)
3. Number.isFinite 检测一个数是否为有限数，返回值为 true 和 false
4. Number.isNaN 用来检测一个数值是否为 NaN，返回值为 true 和 false
5. Number.parseInt，Number.parseFloat，将字符串转为整数和浮点数
6. Number.Integer 判断一个数是否为整数，返回值为 true 和 false
7. Math.trunc 将小数部分抹掉，也就是向下取整
8. Math.sign 判断一个数到底为整数，负数，还是 0，分别返回 1 -1 0

## 对象方法的扩展

1. Object.is 判断两个值是否完全相等，与全等===相似，不同之处在于判断两个 NaN 时，全等返回 false，而该方法返回 true
2. Object.assign(a,b)对象的合并，用 b 去覆盖 a 中的值，b 中没有的保持 a 中的值
3. Object.setPrototypeOf(a,b)设置 b 作为 a 的原型对象 Object.getPrototypeOf()获取原型

## 模块化

模块化就是将一个大的程序文件拆分成小的文件，然后把小文件组合起来。模块化的好处：

- 防止命名冲突
- 代码复用
- 高维护性
  ES6 之前的模块化规范产品
- commonJS => NodeJS Browserify
- AMD => requireJS
- CMD => seaJS
  ES6 模块化语法
  模块功能主要由两个命令组成：export(用于规定模块对外的接口)和 import(用于输入其他模块的功能)。基本语法：先在需要暴露的模块中使用 export，然后在需要引入的模块用 import 导入。

```
//a.js文件
//分别暴露，在声明之前加上export
export let a = '模块化'
export function improve() {
  console.log('代码复用')
}

//统一暴露
let a = '模块化'
function improve() {
  console.log('代码复用')
}
export {school,improve}

//默认暴露，需要注意的是，前面两种方法的暴露可以直接使用里面的变量或者方法，使用默认暴露是要加一层default，即a.default.improve()
export default {
  let a = '模块化'
  function improve() {
  console.log('代码复用')
}
}

//index.html文件要引入的模块
<script type="moudle">
//1.通用的导入方式
import * as a from 'a.js'//a为引入模块到当前模块内的名字，a.js是路径
//2.解构赋值形式
import {school,improve} from 'a.js'//若有重名可在名字后加as重新命名
import {default as m1} from 'a,js'//当暴露方式是默认暴露时，必须重新命名
//3.简便形式，只针对默认暴露生效
import m2 from 'a.js'
</script>
//上面是第一种在js中使用模块化的写法，下面是第二种
//app.js作为入口文件来写引入模块的语句，然后在需要引入的文件的script标签里引入app.js文件就可以了
<script src="app.js" type="moudle"></script>
```
