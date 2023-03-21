class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea() {
    return this.width * this.height;
  }

  // get area(){
  //     return this.width * this.height;
  // }

  printRectangle() {
    console.log(
      `This is a rectangle of dimensions ${this.width}X${this.height} and color is ${this.color}.`
    );
  }
}

let rect1 = new Rectangle(5, 3, "red");

console.log(rect1.getArea());
rect1.printRectangle();
