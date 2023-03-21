let Animals = {
  get: function eat() {
    console.log(`It is ${this.type}`);
  },
};

let dog = Object.create(Animals);
dog.type = "Omnivores";
dog.get();

let cat = Object.create(Animals);
cat.type = "Carnivores";
cat.get();

let cow = Object.create(Animals);
cow.type = "Herbivores";
cow.get = function eat() {
  return Animals.get.call(this);
};

let goat = Object.create(cow);
goat.get();
