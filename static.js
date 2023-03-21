// class Human {
//   static type = "Homo Sapiens";
//   constructor(gender) {
//     this.gender = gender;
//   }
//   static printName(h) {
//     console.log(`Type is ${Human.type} & gender is ${h.gender}`);
//   }
//   display() {
//     console.log(this.constructor.type);
//   }
// }

// let human = new Human("Female");
// console.log(human.constructor);

// human.display();

// Human.printName(human);

function Human() {
  this.name = "Simran";
}

Human.prototype.printName = function () {
  console.log(`Name is ${this.name}`);
};

Human.show = () => {
  console.log("Hi");
};

// Human.printName();

let human = new Human();
human.printName();
// Human.show();
console.log(Human.prototype);
