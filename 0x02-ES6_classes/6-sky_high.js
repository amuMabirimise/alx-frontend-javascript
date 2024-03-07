import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this.validateNumber(floors, 'Floors');
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  validateNumber(value, propertyName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`${propertyName} must be a number`);
    }
    return value;
  }
}

export default SkyHighBuilding;
