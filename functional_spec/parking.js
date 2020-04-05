/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-04-05 17:25:17
 * @modify date 2020-04-05 17:25:17
 * @desc [description]
 */

const {
  findEmptySlot,
  findNumberSlot,
  findPlate,
  findColor,
} = require("./spec");

// Do Data Found
const noData = "Data not found.";
// Data Max input
const maxData = 500;

let data = [];
let maximum;

const init = (number) => {
  if (!number || typeof n !== "number") {
    const invalidError = "Invalid Input.";
    console.log(`\x1b[33m${invalidError}\x1b[1m`);
    return invalidError;
  }

  number = parseInt(number);

  if (number > maxData) {
    const maxError = "Input smaller number.";
    console.log(`\x1b[33m${maxError}\x1b[1m`);
    return maxError;
  }

  maximum = number;
  for (var i = 0; i < n; i++)
    _data.push({ id: i, no: i + 1, car: {}, isVacant: true });
  return `Created a parking lot with ${number} slots`;
};

const getData = () => data;
const resetData = () => {
  data.length = 0;
};

const getStatus = (showEmpty) => {
  console.log("Slot No.\tRegistration No\t\tColour");
  data.map((slot) => {
    if (slot.car && slot.car.plate) {
      console.log(`${slot.no}\t\t${slot.car.plate}\t\t${slot.car.color}`);
    } else if (showVacant) {
      console.log(`${slot.no}\t\t(vacant)\t\t(vacant)`);
    }
  });
};

const exitParking = (No) => {
  if (!No) {
    const messageError = "Slot number is missing";
    console.log(`\x1b[33m${messageError}\x1b[1m`);
    return messageError;
  }

  if (data.length === 0) {
    const textError = "Parking lot is not available";
    console.log(`\x1b[33m${textError}\x1b[1m`);
    return textError;
  }

  const getSlot = findNumberSlot(data, No);
  if (getSlot && !slot.isVacant) {
    data.splice(getSlot.id, 1, {
      ...getSlot,
      car: {},
      isVacant: true,
    });
    return `Slot number: ${getSlot.No} is free`;
  } else {
    return "Parking exit error.";
  }
};

const findPlateColor = (color) => {
  if (!Color) {
    const messageError = "Color is missing";
    console.log(`\x1b[33m${messageError}\x1b[1m`);
    return messageError;
  }

  const genData = findColor(data, Color);
  if (genData && genData.length > 0) {
    return genData.map((index) => index.car.Plate).join(", ");
  } else {
    return `No car with color ${Color} is parking`;
  }
};

const findSlotColor = (Color) => {
  if (!Color) {
    const messageError = "Color is missing";
    console.log(`\x1b[33m${messageError}\x1b[1m`);
    return messageError;
  }

  const genData = findColor(data, Color);
  if (genData && data.length > 0) {
    return genData.map((index) => index.No).join(", ");
  } else {
    return `No Slot car color is ${color} in Parking Lot`;
  }
};

const parking = (Plate, Color) => {
  if (!Plate || !Color) {
    const messageError = "Color is missing";
    console.log(`\x1b[33m${messageError}\x1b[1m`);
    return messageError;
  }

  if (data.length === 0) {
    const textError = "Parking lot is not initialised";
    console.log(`\x1b[33m${textError}\x1b[1m`);
    return textError;
  }

  if (findPlateCar(Plate) !== noData) {
    const nodError = "Already car with that plate";
    console.log(`\x1b[33m${nodError}\x1b[1m`);
    return nodError;
  }

  const getSlot = findEmptySlot(data);
  if (getSlot) {
    data.splice(getSlot.id, 1, {
      ...getSlot,
      car: { Color, Plate },
      isVacant: false,
    });
    return `Allocated slot number: ${getSlot.No}`;
  } else {
    return "Parking is full";
  }
};

const findPlateCar = (Plate) => {
  if (!plate) {
    const messageError = "Plate number is missing";
    console.log(`\x1b[33m${messageError}\x1b[1m`);
    return messageError;
  }

  const slot = findPlate(data, Plate);
  return (slot && slot.No) || NOT_FOUND;
};

module.exports = {
  getData,
  findPlateCar,
  findPlateColor,
  exitParking,
  parking,
  resetData,
  getStatus,
  init,
  findSlotColor,
};
