function createCatFactory(name,age){
    var obj = {
        name:name,
        age:age
    };
    return obj;
}

var cat1 = createCatFactory('猫1',5);
var cat2 = createCatFactory('猫2',20);

//缺点
//我们没有办法感知出来cat1和cat2是同一类型的对象，比如，我下面又创建了一个新的对象叫狗

var dog1 = {
    name:'dog',
    age:2
};


//对象字面量的构造器(类)是Object
console.log(dog1 instanceof Object);
console.log(cat1 instanceof Object);