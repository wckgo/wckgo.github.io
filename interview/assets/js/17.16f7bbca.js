(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{200:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue响应式原理","aria-hidden":"true"}},[t._v("#")]),t._v(" VUE响应式原理")]),t._v(" "),a("h2",{attrs:{id:"mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm","aria-hidden":"true"}},[t._v("#")]),t._v(" MVVM")]),t._v(" "),a("h2",{attrs:{id:"object-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.defineProperty")]),t._v(" "),a("p",[a("code",[t._v("Object.defineProperty(obj, prop, descriptor)")])]),t._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("obj")]),t._v(" "),a("p",[t._v("要在其上定义属性的对象。")])]),t._v(" "),a("li",[a("p",[t._v("prop")]),t._v(" "),a("p",[t._v("要定义或修改的属性的名称。")])]),t._v(" "),a("li",[a("p",[t._v("descriptor")]),t._v(" "),a("p",[t._v("将被定义或修改的属性描述符。")])])]),t._v(" "),a("h3",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),a("p",[t._v("被传递给函数的对象。")]),t._v(" "),a("h3",{attrs:{id:"属性描述符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性描述符","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性描述符")]),t._v(" "),a("p",[a("code",[t._v("Object.defineProperty()")]),t._v("为对象定义属性，分 数据描述符 和 存取描述符 ，两种形式不能混用。")]),t._v(" "),a("p",[t._v("数据描述符和存取描述符均具有以下可选键值：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("configurable")]),t._v(" "),a("p",[t._v("当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。")])]),t._v(" "),a("li",[a("p",[t._v("enumerable")]),t._v(" "),a("p",[t._v("当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。")])])]),t._v(" "),a("p",[t._v("数据描述符具有以下可选键值：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("value")]),t._v(" "),a("p",[t._v("该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。")])]),t._v(" "),a("li",[a("p",[t._v("writable")]),t._v(" "),a("p",[t._v("当且仅当该属性的 writable 为 true 时，value才能被赋值运算符改变。默认为 false。\n存取描述符具有以下可选键值：")])]),t._v(" "),a("li",[a("p",[t._v("get")]),t._v(" "),a("p",[t._v("一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象（由于继承关系，这里的this并不一定是定义该属性的对象）。默认为 undefined。")])]),t._v(" "),a("li",[a("p",[t._v("set")]),t._v(" "),a("p",[t._v("一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。默认为 undefined。")])])]),t._v(" "),a("h2",{attrs:{id:"proxy-vs-object-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-vs-object-defineproperty","aria-hidden":"true"}},[t._v("#")]),t._v(" Proxy vs. Object.defineProperty")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Proxy 的优势如下:")]),t._v(" "),a("ul",[a("li",[t._v("Proxy 可以直接监听对象而非属性；")]),t._v(" "),a("li",[t._v("Proxy 可以直接监听数组的变化；")]),t._v(" "),a("li",[t._v("Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；")]),t._v(" "),a("li",[t._v("Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；")]),t._v(" "),a("li",[t._v("Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；")])])]),t._v(" "),a("li",[a("p",[t._v("Object.defineProperty 的优势如下:")]),t._v(" "),a("p",[t._v("兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。")])])]),t._v(" "),a("h2",{attrs:{id:"如何追踪变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何追踪变化","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何追踪变化")]),t._v(" "),a("p",[t._v("当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 "),a("code",[t._v("Object.defineProperty")]),t._v(" 把这些属性全部转为 getter/setter。"),a("code",[t._v("Object.defineProperty")]),t._v(" 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。")]),t._v(" "),a("p",[t._v("这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在属性被访问和修改时通知变更。这里需要注意的是不同浏览器在控制台打印数据对象时对 getter/setter 的格式化并不同，所以建议安装 vue-devtools 来获取对检查数据更加友好的用户界面。")]),t._v(" "),a("p",[t._v("每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wckgo-top-1256084177.cos.ap-beijing.myqcloud.com/vue/reactivity-depth.png",alt:"reactivity-depth"}})]),t._v(" "),a("h2",{attrs:{id:"主要组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 主要组件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("监听器(Observer)")]),t._v(" "),a("p",[t._v("对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。")])]),t._v(" "),a("li",[a("p",[t._v("解析器(Compile)")]),t._v(" "),a("p",[t._v("解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。")])]),t._v(" "),a("li",[a("p",[t._v("订阅者(Watcher)")]),t._v(" "),a("p",[t._v("Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。")])]),t._v(" "),a("li",[a("p",[t._v("订阅器(Dep)")]),t._v(" "),a("p",[t._v("订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。")])])]),t._v(" "),a("mermaid",[t._v("\ngraph TD;\n    A[Observeer]-- 通知变化 --\x3eB[Dep];\n    B-- 通知变化 --\x3e C[Watcher];\n    C-- 添加订阅者 --\x3e B;\n    D[Compile]-- 绑定更新函数 --\x3e C;\n    D-- 初始化 --\x3e E[View];\n    C-- 更新 --\x3e E;\n")]),t._v(" "),a("h2",{attrs:{id:"vue-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-set","aria-hidden":"true"}},[t._v("#")]),t._v(" VUE.$set")]),t._v(" "),a("p",[t._v("受现代 JavaScript 的限制 ，Vue 无法检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。但是 Vue 提供了 Vue.set (object, propertyName, value) / vm.$set (object, propertyName, value)  来实现为对象添加响应式属性，那框架本身是如何实现的呢？")]),t._v(" "),a("p",[t._v("我们查看对应的 Vue 源码：vue/src/core/instance/index.js")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target 为数组  ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValidArrayIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改数组的长度, 避免索引>数组长度导致splcie()执行有误")]),t._v("\n    target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 利用数组的splice变异方法触发响应式  ")]),t._v("\n    target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// key 已经存在，直接修改属性值  ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__ob__\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target 本身就不是响应式数据, 直接赋值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对属性进行响应式处理")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineReactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们阅读以上源码可知，vm.$set 的实现原理是：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果目标是数组，直接使用数组的 splice 方法触发相应式；")])]),t._v(" "),a("li",[a("p",[t._v("如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用defineReactive方法进行响应式处理"),a("code",[t._v("defineReactive")]),t._v("方法就是Vue在初始化对象时，给对象属性采用"),a("code",[t._v("Object.defineProperty")]),t._v("动态添加 getter 和 setter 的功能所调用的方法）")])])])],1)},[],!1,null,null,null);e.default=n.exports}}]);