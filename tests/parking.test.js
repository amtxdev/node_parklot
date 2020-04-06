/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 */

const chai = require("chai");
const { strictEqual } = chai.assert;

const {
  init,
  findCarByPlate,
  findPlatesByColor,
  findSlotsByColor,
  getData,
  leave,
  park,
  reset,
} = require("../functional_spec/parking");

describe("tests for the initializing process", () => {
  it("should not init the parking lot if input is wrong", () => {
    init("x");
    init(null);
    strictEqual(getData().length, 0);
  });

  it("should not init the parking lot if input is too big", () => {
    init(1000);
    strictEqual(getData().length, 0);
  });

  it("should create the correct number of empty slots", () => {
    const result1 = init(3);
    strictEqual("Created a parking lot with 3 slots", result1);
    strictEqual(getData().length, 3);

    reset();

    const result2 = init(6);
    strictEqual("Created a parking lot with 6 slots", result2);
    strictEqual(getData().length, 6);
  });
});

describe("tests for the parking process", () => {
  it("should not park the car if param is missing", () => {
    const result1 = park();
    strictEqual("Missing parameter(s).", result1);

    const result2 = park(null, "blue");
    strictEqual("Missing parameter(s).", result2);

    const result3 = park("234");
    strictEqual("Missing parameter(s).", result3);
  });

  it("should not park the car if parking lot data is not initialiased", () => {
    reset();
    const result = park("234", "blue");
    strictEqual("Parking lot is not initialised.", result);
  });

  it("should not park the car if parking lot is full", () => {
    reset();
    init(1);
    park("123", "black");

    const result = park("234", "blue");
    strictEqual("Sorry, parking lot is full", result);
  });

  it("should not park the car if plate is duplicate", () => {
    reset();
    init(1);
    park("123", "black");

    const result = park("123", "red");
    strictEqual("Fatal error. There is already a car by that plate.", result);
  });

  it("should park the car in the correct slot", () => {
    reset();
    init(3);

    const result = park("333", "red");
    strictEqual("Allocated slot number: 1", result);
  });
});

describe("tests for finding a car by plate", () => {
  it("should return the correct car slot number", () => {
    reset();
    init(2);
    park("123", "blue");
    park("333", "red");

    const result = findCarByPlate("333");
    strictEqual(result, 2);
  });

  it("should return a not found message", () => {
    reset();
    init(2);
    park("123", "blue");

    const result = findCarByPlate("777");
    strictEqual(result, "Not found");
  });
});

describe("tests for leaving the parking slot", () => {
  it("should not allow leaving if param is missing", () => {
    const result = leave();
    strictEqual("Missing slot number.", result);
  });

  it("should not allow leaving process if parking lot data is not initialiased", () => {
    reset();
    const result = leave(1);
    strictEqual("Parking lot is not initialised.", result);
  });

  it("should let car leave and vacant slot", () => {
    reset();
    init(2);
    park("123", "red");
    park("333", "red");

    const result = leave(2);
    strictEqual("Slot number 2 is free", result);
  });
});

describe("tests for finding slots by car colour", () => {
  it("should return slot numbers for red cars", () => {
    reset();
    init(3);
    park("123-X", "red");
    park("666-C", "blue");
    park("333-A", "red");

    const result1 = findSlotsByColor("red");
    strictEqual(result1, "1, 3");

    const result2 = findSlotsByColor("black");
    strictEqual(
      result2,
      "No slot vacated by car with the colour black is found in the parking lot."
    );
  });
});

describe("tests for finding plates by car colour", () => {
  it("should return car plates for red cars", () => {
    const result1 = findPlatesByColor("red");
    strictEqual(result1, "123-X, 333-A");

    const result2 = findSlotsByColor("black");
    strictEqual(
      result2,
      "No slot vacated by car with the colour black is found in the parking lot."
    );
  });
});
