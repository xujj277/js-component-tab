# js-component-tab

## 组件功能
- 点击header，切换相应的tab内容

## 组件实现方式
- 原生js
- 面向对象的处理方式
- init中写好相应的变量
- bind中写好点击header的index，并去掉active，给所点击的header和content加上active
## 如何使用
- 用new方法构造函数，例如页面中有三个切换tab，则需要构建三个函数
```
var tab1 = new Tab(document.querySelectorAll('.tab')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab')[1]);
```