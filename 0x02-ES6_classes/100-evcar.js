import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();
    Object.assign(clonedCar, this);
    return clonedCar;
  }
}

export default EVCar;
