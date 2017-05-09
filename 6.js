function Cat(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log('miao miao');
    }
}

var cat1 = new Cat('猫1',5);
var cat2 = new Cat('猫2',20);

//缺点：
//重复声明两次say方法浪费内存