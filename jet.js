// Created By: Patrick Gemmell
// Created On: May 2021
// This class is a subclass of Airplane called jet.

// Importing the airplane class from another file
const Airplane = require('./airplane.js');

// This airplane subclass is a jet
/**
* array.
*/
class Jet extends Airplane {
  // Constructor that defines fields
  /**
  * array.
  */
  constructor() {
    super();
    this.multiplier = 2;
  }

  // This method sets the speed of the jet
  /**
  * array.
  * @param {int} speed
  */
  setSpeed(speed) {
    super.setSpeed(speed * this.multiplier);
  }

  // This method accelerates the jet
  /**
  * array.
  */
  accelerate() {
    super.setSpeed(this.getSpeed() * 2);
  }
}

// Exporting the subclass
module.exports = Jet;
