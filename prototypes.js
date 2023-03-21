let animal = {
  name: "Animal",
  eat() {
    alert(`${this.name} eats.`);
  },
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {
    console.log(this.__proto__);
    //   this.__proto__.eat.call(this);
  },
};

let longEar = {
  __proto__: rabbit,
  eat() {
    console.log(this.__proto__);
    this.__proto__.eat.call(this);
  },
};

longEar.eat();
