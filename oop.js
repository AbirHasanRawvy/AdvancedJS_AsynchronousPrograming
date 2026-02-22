//Encapculation: pack the data and method
//Abstraction: hide unnessary data 
//Inheritance: relation between one to another class
//Polymorphism: overriding & overloading


//Encapculation: pack the data and method

// 
class MyClass{//MyClass is class name;
   
   constructor() {
    console.log("constructor call");
   }

    x=50;//property;
    myFun(){//myFun is a method;
        console.log("Hello JS OOP");
    }
}

let myObj = new MyClass();

myObj.myFun();

//Constructor with passing perameter;
class Student{
    constructor(name, roll){
        this.name = name;//here create the property;
        this.roll = roll;

        console.log(name, roll);
    }
}
const stu_1 = new Student("Alex", 60);
const stu_2 = new Student("Carlo", 53);


//Another way;
class Student1{
    constructor(name, roll){
        this.name = name;
        this.roll = roll;

        console.log(name, roll);
    }
    myFun(){
        console.log(this.name);
        console.log(this.roll);
    }
}
const stu1 = new Student1("Ferguson", 60);
const stu2 = new Student1("Don", 53);

stu1.myFun();
stu2.myFun();

//constructor default value;
class Coach{
    constructor(name="Ferguson",roll="Coaching", name1 = "Carlo", roll1="Coaching"){
        this.name = name;
        this.roll = roll;
        this.name1 = name1;
        this.roll1 = roll1;
        

        console.log(name, roll);
        console.log(name1, roll1);
    }
}

const coa = new Coach();//this line called instant;

console.log(coa.name, coa.roll);
console.log(coa.name1, coa.roll1);

//static keyword: no need to create a instance;
class myClass1{
    static hello(){
        console.log("Hello OOP Static");
    }
}
let res = myClass1.hello();

//Inheritence:
class Parent{
    hello(){
        console.log("This is Parent");
    }
}

class Child extends Parent{

}

let ChildObj = new Child()

ChildObj.hello();

//Overloading: Not supported into the jS. work with parameter only.
//Overriding: If child want to change a method of parrent then its called overriding;
class Parent1{
    hello(){
        console.log("This is Parent");
    }
}

class Child1 extends Parent1{

    hello(){
        console.log("This is Child");
    }

}

let ChildObj1 = new Child1()

ChildObj1.hello();

//Super Keyword: when child class try to call parent class method;
class Parent2{
    x1=10;
    y1=20;
    hello(){
        console.log("This is Parent");
    }
}

class Child2 extends Parent2{

    test(){
        super.hello();
    }
}

let ChildObj2 = new Child2()

ChildObj2.test();
ChildObj2.x1;
ChildObj2.y1;
console.log(ChildObj2.x1 + ChildObj2.y1);