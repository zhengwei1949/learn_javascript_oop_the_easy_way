function Tab(obj){
    var defaultObj = {
        eventType:'click'
    }
    function __mixin__(obj,obj1){
        for(var k in obj1){
            obj[k] = obj1[k]
        }
    }
    __mixin__(defaultObj,obj);
    this.eventType = defaultObj.eventType
    this.tab = document.querySelector(defaultObj.ele)
    this.menu = this.tab.querySelectorAll('input[type="button"]')
    this.cont = this.tab.querySelectorAll('.content div')
}

Tab.prototype.init = function(){
    for(var i=0;i<this.menu.length;i++){
        this.menu[i].index = i;
        var that = this;
        this.menu[i]['on'+this.eventType] = function(){
            //排他思想
            for(var j=0;j<that.menu.length;j++){
                that.menu[j].className = ''
                that.cont[j].style.display = 'none'
            }
            that.menu[this.index].className = 'active'
            that.cont[this.index].style.display = 'block'
        }
    }
}