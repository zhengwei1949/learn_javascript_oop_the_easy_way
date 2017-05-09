function Cat(name,age){
    this.name = name;
    this.age = age;
}

var cat1 = new Cat('猫1',5);
var cat2 = new Cat('猫2',20);

console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);

//缺点
//假如说我们给猫1，猫2添加行为 --> 4.js

