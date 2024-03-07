class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft, 'Sqft');
  }

  get sqft() {
    return this._sqft;
  }

  validateNumber(value, propertyName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`${propertyName} must be a number`);
    }
    return value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
