function Cat(name,age){
    this.name = name;
    this.age = age;
}

Cat.prototype.say = function(){
    console.log('miao');
};


function HelloKitty(name,age){
    this.name = name;
    this.age = age;
    this.style = 'very cute';
}

HelloKitty.prototype = new Cat();

var littleCat = new HelloKitty('小kitty',10);
console.log(littleCat);
littleCat.say();
//这种继承方式的缺点：浪费了Cat上的this.name,this.age