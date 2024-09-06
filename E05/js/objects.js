const car = {
  name: "Fiat",
  model: 500,
  color: "white",
  start: function () {
    console.log(this.name + " started!");
  },
};
console.log(car["name"]);
console.log(car.name);
console.log(car.color);
console.log(car.model);
car.start();
