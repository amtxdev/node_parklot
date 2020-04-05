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
};
