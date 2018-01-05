function Cat(name,age){
    this.name = name;
    this.age = age;
}

Cat.prototype.say = function(){
    console.log('miao');
};


function HelloKitty(name, age) {
            // Cat.call(this, name, age);这样写可以一行搞定，但不太好理解，可以换成如下的二行代码
            this.Cat = Cat;
            this.Cat(name,age);
            this.style = 'very cute';
        }

HelloKitty.prototype = new Cat();

var littleCat = new HelloKitty('小kitty',10);
console.log(littleCat);
littleCat.say();
