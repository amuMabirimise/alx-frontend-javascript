const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    Object.keys(this).forEach((key) => {
      if (key.startsWith('_')) {
        clonedCar[key] = this[key];
      }
    });
    return clonedCar;
  }
}

export default Car;
