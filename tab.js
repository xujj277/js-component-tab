function Tab(node) {
  this.node = node
  this.init()
  this.bind()
}

Tab.prototype = {
  constructor: Tab,
  init: function () {
    this.headerList = this.node.querySelectorAll('.tab-header>li')
    this.contentList = this.node.querySelectorAll('.tab-container>li')
  },
  bind: function () {
    let _this = this
    _this.headerList.forEach(function (headerli) {
      headerli.onclick = function (e) {      
        let target = e.target     
        let index = [].indexOf.call(_this.headerList, target)//利用数组方法来处理节点
        _this.headerList.forEach(function (headerli) {
          headerli.classList.remove('active')
        })
        target.classList.add('active')

        _this.contentList.forEach(function (contentli) {
          contentli.classList.remove('active')
        })
        _this.contentList[index].classList.add('active')
      }
    })
  },

}

var tab1 = new Tab(document.querySelectorAll('.tab')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab')[1]);