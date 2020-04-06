/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @desc [description]
 */

const {
  findVacantSlot,
  findBySlotNumber,
  findByPlate,
  findByColor,
} = require("./spec");
const MAXIMUM_PARKING_LOT_SIZE = 600;
const NOT_FOUND = "Not found";
let _data = [];
let _max;

const init = (n) => {
  if (!n || typeof n !== "number") {
    const errInvalid = "Input is invalid";
    console.log(`\x1b[31m${errInvalid}\x1b[0m`);
    return errInvalid;
  }

  n = parseInt(n);

  if (n >= MAXIMUM_PARKING_LOT_SIZE) {
    const errMax = "Please input a smaller number.";
    console.log(`\x1b[31m${errMax}\x1b[0m`);
    return errMax;
  }

  _max = n;
  for (var i = 0; i < n; i++)
    _data.push({ id: i, no: i + 1, car: {}, isVacant: true });
  return `Created a parking lot with ${n} slots`;
};

const getData = () => _data;

const reset = () => {
  _data.length = 0;
};

const status = (showVacant) => {
  console.log("Slot No.\tRegistration No\t\tColour");
  _data.map((slot) => {
    if (slot.car && slot.car.plate) {
      console.log(`${slot.no}\t\t${slot.car.plate}\t\t${slot.car.color}`);
    } else if (showVacant) {
      console.log(`${slot.no}\t\t(vacant)\t\t(vacant)`);
    }
  });
};

const park = (plate, color) => {
  if (!plate || !color) {
    const paramErr = "Missing parameter(s).";
    console.log(`\x1b[31m${paramErr}\x1b[0m`);
    return paramErr;
  }

  if (_data.length === 0) {
    const initErr = "Parking lot is not initialised.";
    console.log(`\x1b[31m${initErr}\x1b[0m`);
    return initErr;
  }

  if (findCarByPlate(plate) !== NOT_FOUND) {
    const dupErr = "Fatal error. There is already a car by that plate.";
    console.log(`\x1b[31m${dupErr}\x1b[0m`);
    return dupErr;
  }

  const slot = findVacantSlot(_data);
  if (slot) {
    _data.splice(slot.id, 1, {
      ...slot,
      car: { color, plate },
      isVacant: false,
    });
    return `Allocated slot number: ${slot.no}`;
  } else {
    return "Sorry, parking lot is full";
  }
};

const leave = (no) => {
  if (!no) {
    const paramErr = "Missing slot number.";
    console.log(`\x1b[31m${paramErr}\x1b[0m`);
    return paramErr;
  }

  if (_data.length === 0) {
    const initErr = "Parking lot is not initialised.";
    console.log(`\x1b[31m${initErr}\x1b[0m`);
    return initErr;
  }

  const slot = findBySlotNumber(_data, no);
  if (slot && !slot.isVacant) {
    _data.splice(slot.id, 1, { ...slot, car: {}, isVacant: true });
    return `Slot number ${slot.no} is free`;
  } else {
    return "Error in processing leaving process";
  }
};

const findCarByPlate = (plate) => {
  if (!plate) {
    const paramErr = "Missing plate number.";
    console.log(`\x1b[31m${paramErr}\x1b[0m`);
    return paramErr;
  }

  const slot = findByPlate(_data, plate);
  return (slot && slot.no) || NOT_FOUND;
};

const findPlatesByColor = (color) => {
  if (!color) {
    const paramErr = "Missing color data.";
    console.log(`\x1b[31m${paramErr}\x1b[0m`);
    return paramErr;
  }

  const data = findByColor(_data, color);
  if (data && data.length > 0) {
    return data.map((d) => d.car.plate).join(", ");
  } else {
    return `No car with the colour ${color} is found in the parking lot.`;
  }
};

const findSlotsByColor = (color) => {
  if (!color) {
    const paramErr = "Missing color data.";
    console.log(`\x1b[31m${paramErr}\x1b[0m`);
    return paramErr;
  }

  const data = findByColor(_data, color);
  if (data && data.length > 0) {
    return data.map((d) => d.no).join(", ");
  } else {
    return `No car with the colour ${color} is found in the parking lot.`;
  }
};

module.exports = {
  init,
  findCarByPlate,
  findPlatesByColor,
  findSlotsByColor,
  getData,
  leave,
  park,
  reset,
  status,
};
