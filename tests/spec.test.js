/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 */

const chai = require("chai");
const { strictEqual, deepEqual } = chai.assert;

const {
  findVacantSlot,
  findBySlotNumber,
  findByPlate,
  findByColor,
} = require("../functional_spec/spec");

describe("tests for the tools", () => {
  let data = [
    { id: 0, no: 1, car: { color: "blue", plate: "123-ABC" }, isVacant: false },
    { id: 1, no: 2, car: {}, isVacant: true },
    {
      id: 2,
      no: 3,
      car: { color: "white", plate: "789-XYZ" },
      isVacant: false,
    },
    { id: 3, no: 4, car: {}, isVacant: true },
    { id: 4, no: 5, car: { color: "blue", plate: "345-KLM" }, isVacant: false },
  ];

  const blueCars = [
    { id: 0, no: 1, car: { color: "blue", plate: "123-ABC" }, isVacant: false },
    { id: 4, no: 5, car: { color: "blue", plate: "345-KLM" }, isVacant: false },
  ];

  it("should find the first (nearest) vacant slot", () => {
    const result = findVacantSlot(data);
    strictEqual(result.no, 2);
  });

  it("should find the slot by slot number", () => {
    const result = findBySlotNumber(data, 3);
    strictEqual(result.car.plate, "789-XYZ");
  });

  it("should find the slot by car plate", () => {
    const result = findByPlate(data, "345-KLM");
    deepEqual(result.car, { color: "blue", plate: "345-KLM" });
  });

  it("should find the slot by car colour", () => {
    const result = findByColor(data, "blue");
    deepEqual(blueCars, result);
    strictEqual(result.length, 2);
  });
});
