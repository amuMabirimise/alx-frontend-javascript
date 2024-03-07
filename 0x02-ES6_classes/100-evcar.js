import Car from './10-car.js';

const _range = Symbol('range');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    const clonedCar = new Car();
    Object.keys(this).forEach((key) => {
      if (key.startsWith('_')) {
        clonedCar[key] = this[key];
      }
    });
    return clonedCar;
  }
}

export default EVCar;
