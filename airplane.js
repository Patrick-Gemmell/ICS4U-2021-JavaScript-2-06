// Created By: Patrick Gemmell
// Created On: May 2021
// This class creates an airplane.
/**
* array.
*/
class Airplane {
  // Constructor that defines fields
  /**
  * array.
  */
  constructor() {
    this.speed = 0;
  }

  // This method gets the speed of the airplane
  /**
  * array.
  * @return {int}
  */
  getSpeed() {
    return this.speed;
  }

  // This method sets the speed of the airplane
  /**
  * array.
  * @param {int} speed
  */
  setSpeed(speed) {
    this.speed = speed;
  }
}

// Exporting the class
module.exports = Airplane;
