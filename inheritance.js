class Shapes{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    calcArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shapes{
    constructor(width, height){
        super(width, height);
    }    
}

class Square extends Shapes{
    constructor(width, height){
        super(width, height);
    }
}

let sq= new Square(5,5);

console.log(sq.calcArea());