class Cat{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('miao');
    }
}

class HelloKitty extends Cat{
    constructor(name,age){
        super(name,age);
        this.style = 'very cute';
    }
}

var littleCat = new HelloKitty('小猫',2);
console.log(littleCat);
littleCat.say();